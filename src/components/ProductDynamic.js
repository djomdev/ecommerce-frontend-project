import React, { Component } from 'react';
import request from 'superagent';
import ProductInfo from './ProductInfo'

class ProductDinamic extends Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
        }
        this.fetchProduct(props.match.params.id)
    }
    fetchProduct = id => {
        request
            .get(`https://mallory-furniture-admin.now.sh/api/v1/products/${id}`)
            .then(response => {
                this.setState({
                    data: response.body
                })
            })
    }
    render() {
        return (
            <div>

                <ProductInfo
                    item={this.state.data.item}
                    price={this.state.data.price}
                    condition={this.state.data.condition}
                    width={this.state.data.width}
                    height={this.state.data.height}
                    length={this.state.data.length}
                    imageLink={this.state.data.imageLink}
                />
            </div>
        );
    }
}

export default ProductDinamic;