import React, { Component } from 'react';
import request from 'superagent';

import Product from './Product'
import Headline from './Headline';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: []
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
    render() {
        return (
            <div>
                <Headline />
                <div className='ProductListing'>
                    <div className='ProductListing-box'>
                        <h2 className='ProductListing-box-title'>Featured Products</h2>
                        <h3 className='ProductListing-box-subtitle'>Check out some of our favorite listings</h3>
                    </div>
                    <div className='main__container'>
                        {this.state.data.map(function (list) {
                            return (
                                <Product data={list} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;