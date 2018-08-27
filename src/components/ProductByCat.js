import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductByCategory extends Component {
    render() {
        const data = this.props.data

        return (

            <div className='category__container'>

                <div className="category__product" >
                    <Link className='link' to={'/products/' + data._id}>
                        <div className='category__image'>

                            <img alt='' src={data.imageLink} />
                        </div>
                        <h4 className='category__name'>{data.item}</h4>
                        <h5 className='category__price'>$ {data.price}</h5>
                    </Link>

                </div>
            </div>

        );
    }


}

export default ProductByCategory;