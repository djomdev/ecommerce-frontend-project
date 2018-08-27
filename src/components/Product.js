import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Product extends Component {
    render() {
        const image = this.props.data.imageLink
        const item = this.props.data.item
        const price = this.props.data.price
        const data = this.props.data

        return (
            <div className='category__product'>
                <Link className='link ' to={'/products/' + data._id}>
                    <div className='product__image'>
                        <img className='category__image' src={image} alt="" />
                    </div>
                    <div>
                        <h4 className='category__name'>{item} </h4>
                        <p className='category__price'>$ {price}</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Product;