import React, { Component } from 'react';


class ProductInfo extends Component {

    render() {
        return (
            <div className='item__cont'>
                <div className='product__info'>
                    <article className='product-listing-left'>
                        <img src={this.props.imageLink} alt='x' className='item-image-single' />
                    </article>
                </div>

                <section className='product_desc-right'>
                    <h4 className='prod-item'>{this.props.item}</h4>
                    <h5 className='prod-price'>$ {this.props.price}.00</h5>
                    <hr />
                    <div className='prod-specs'>
                        <div className='prod-cond'>
                            <h5>Condition</h5>
                            <h5>{this.props.condition}</h5>
                        </div>
                        <div className='prod-meas'>
                            <h5>Measurements</h5>
                            <h5>
                                W:{this.props.width}, L:{this.props.length}, H:{this.props.height}
                            </h5>
                        </div>
                        <button className='prod-cart'>Add to cart</button>
                    </div>
                </section>
            </div>
        );
    }

}

export default ProductInfo;