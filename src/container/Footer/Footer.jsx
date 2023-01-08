import React from 'react';
import Review from '../../components/Review/Review';
import { SiSpreadshirt } from 'react-icons/si';

import { reviewsData } from '../../constants/data';

import './footer.scss';

const Footer = () => {
    return (
        <div className='app__footer' id='about'>
            <div className='app__footer-review'>
                <Review />
            </div>
            <div className='app__footer-contents'>
                <ul>
                    <li>
                        <h2>Quick Links</h2>
                    </li>
                    <li>
                        <p>Category</p>
                    </li>
                    <li>
                        <p>Men Fashions</p>
                    </li>
                    <li>
                        <p>Women Fashions</p>
                    </li>
                    <li>
                        <p>Accessories</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>Services</h2>
                    </li>
                    <li>
                        <p>Category</p>
                    </li>
                    <li>
                        <p>Men Fashions</p>
                    </li>
                    <li>
                        <p>Women Fashions</p>
                    </li>
                    <li>
                        <p>Accessories</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>Social Media</h2>
                    </li>
                    <li>
                        <p>Facebook</p>
                    </li>
                    <li>
                        <p>Instagram</p>
                    </li>
                    <li>
                        <p>Twitter</p>
                    </li>
                    <li>
                        <p>Youtube</p>
                    </li>
                </ul>
            </div>
            <div className='app__footer-logo'>
                <div className='app__footer-logo_wrapper'>
                    <SiSpreadshirt className='footer__icon' />
                    <h1 className='footer__logo'>eFashion</h1>
                </div>{' '}
                <p>&copy; Copyright 2022 - eFashion</p>
            </div>
        </div>
    );
};

export default Footer;
