import React from 'react';

import { CiDeliveryTruck, CiMoneyBill } from 'react-icons/ci';
import { BiCheckShield } from 'react-icons/bi';
import { RiSecurePaymentLine } from 'react-icons/ri';

import './featuredCard.scss';

const FeaturedCard = () => {
    return (
        <div className='app__featuredCard'>
            <div className='app__featuredCard-wrapper'>
                <div className='featured__icon '>
                    <CiDeliveryTruck className='icon' />
                </div>
                <p className='featured__text p__opensans'>
                    Super Fast and Free Delivery
                </p>
            </div>
            <div className='card__wrapper'>
                <div className='app__featuredCard-wrapper'>
                    <div className='featured__icon-center'>
                        <BiCheckShield className='icon' />
                    </div>
                    <p className='featured__text p__opensans'>
                        Non-contact Shipping
                    </p>
                </div>
                <div className='app__featuredCard-wrapper'>
                    <div className='featured__icon-center'>
                        <CiMoneyBill className='icon' />
                    </div>
                    <p className='featured__text p__opensans'>
                        Money-back Guaranteed
                    </p>
                </div>
            </div>
            <div className='app__featuredCard-wrapper'>
                <div className='featured__icon'>
                    <RiSecurePaymentLine className='icon' />
                </div>
                <p className='featured__text p__opensans'>
                    Super Secure Payment System
                </p>
            </div>
        </div>
    );
};

export default FeaturedCard;
