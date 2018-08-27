import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/mf-logo-white.svg';


class Navbar extends Component {
    render() {
        return (
            <nav className='header'>
                <li><Link className='header__white' to={'/'}><img alt='' src={logo} /></Link></li>
                <div>
                    <ul className='header__list'>
                        <li><Link className='header__white' to={'/about/'}>About</Link></li>
                        <li><Link className='header__white' to={'/terms/'}>Terms + Conditions</Link></li>
                        <li>|</li>
                        <li><Link className='header__white' to={'/category/all'}>All</Link></li>
                        <li><Link className='header__blue' to={'/category/seating'}>Seatings</Link></li>
                        <li><Link className='header__blue' to={'/category/tables'}>Tables</Link></li>
                        <li><Link className='header__blue' to={'/category/desks'}>Desks</Link></li>
                        <li><Link className='header__blue' to={'/category/storage'}>Storage</Link></li>
                        <li><Link className='header__blue' to={'/category/bedroom'}>Bedroom</Link></li>
                        <li><Link className='header__blue' to={'/category/miscellaneous'}>Misc</Link></li>
                        <li>|</li>
                        <li><div className='shopping-cart' href='/'>
                            <i class="fa fa-shopping-cart"></i>
                        </div></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;