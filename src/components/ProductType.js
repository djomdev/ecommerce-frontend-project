import React, { Component } from 'react';
import request from 'superagent';
import ProductByCat from './ProductByCat';
import MFPhoto from './MFPhoto';


class ProductType extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            filter: 'all'
        }
    }

    componentDidMount() {
        request
            .get('https://mallory-furniture-admin.now.sh/api/v1/products')
            .then(response => {
                this.setState({
                    data: response.body
                })
            })
    }

    filterCategory = () => {
        let name = this.props.match.params.name
        console.log(name)
        if (name !== 'all') {
            return this.state.data.filter(soloProduct => soloProduct.category === name);
        }
        return this.state.data;
    }


    productsFilter = (item) => {
        this.setState({
            filter: item
        });
    }


    products = (item, newArray) => {
        if (item === "all") return newArray
        if (item === true) return newArray.filter(function (newItem) { return newItem.onSale === true });
    }

    render() {
        let newFilterCategory = this.filterCategory()
        const data = this.state.data
        const newData = this.state.filter
        const list = this.products(newData, data)
        const finalList = list.length
        return (
            <div>
                <MFPhoto grid={this.props.match.params.name} />
                <div className=''>
                    <div className=''>
                        <h1 className=''>{data.name}</h1>
                        <p className=''>All Products</p>
                        <p className=''>All available listings</p>
                    </div>
                    <div className='button__container'>
                        <button onClick={() => { this.productsFilter('all') }} className='button__all'>All items</button>
                        <button onClick={() => { this.productsFilter(true) }} className='button__onsale'>On Sale</button>
                    </div>
                    <div className='number__products'>
                        <p ><span >{list.length}</span> Items showing</p>
                    </div>
                </div>
                <p>{data.category}</p>
                {newFilterCategory.map(function (data) {
                    return <ProductByCat data={data} />
                })}
            </div>
        );
    }
}

export default ProductType;