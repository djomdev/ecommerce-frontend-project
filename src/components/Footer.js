import React, { Component } from 'react';
import logo from '../images/mf-logo-black.svg';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='footer'>

                    <img className='footer__image' alt='' src={logo} />

                    <div className='footer__list'>
                        <ul>
                            <li className='footer__list-title'>Company</li>
                            <li><Link className='header__white' to={'/about/'}>About</Link></li>
                            <li><Link className='header__white' to={'/'}>Press</Link></li>
                            <li><Link className='header__white' to={'/terms/'}>Terms + Conditions</Link></li>

                        </ul>
                        <ul>
                            <li className='footer__list-title'>Categories</li>
                            <li><Link className='header__blue' to={'/category/seating'}>Seatings</Link></li>
                            <li><Link className='header__blue' to={'/category/tables'}>Tables</Link></li>
                            <li><Link className='header__blue' to={'/category/miscellaneous'}>Misc</Link></li>
                        </ul>
                        <ul>
                            <li className='footer__list-title'>Social</li>
                            <li>
                                <a href="http://www.instagram.com/" ><i className="fa fa-instagram"></i></a>
                                <a href="http://twitter.com/" ><i className="fa fa-twitter"></i></a>
                                <a href="http://www.pinterest.com.mx/" ><i className="fa fa-pinterest"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;