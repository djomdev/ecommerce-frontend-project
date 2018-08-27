import React, { Component } from 'react';
import all from '../images/landing-splash-bg.png';
import seating from '../images/category-seating.png';
import tables from '../images/category-tables.png';
import desks from '../images/category-desks.png';
import storage from '../images/category-storage.png';
import bedroom from '../images/category-bedroom.png';
import miscellaneous from '../images/category-miscellaneous.png';

class MFPhoto extends Component {

    slide = e => {
        const imageSlide = {
            all: all,
            seating: seating,
            tables: tables,
            desks: desks,
            storage: storage,
            bedroom: bedroom,
            miscellaneous: miscellaneous
        }
        return imageSlide[e]
    }
    render() {
        console.log(this.props.itemImg)
        return (
            <div className='container__grid'>
                <img className='container__grid__img' src={this.slide(this.props.grid)} />
            </div>
        );
    }
}

export default MFPhoto;