import React from 'react';

import { GoLinkExternal } from 'react-icons/go';
// import banner from '../../assets/banner.jpg';
import Navbar from '../../components/Navbar/Navbar';
import './header.scss';

const Header = () => {
    return (
        <div className='app__header'>
            <Navbar />
            <div className='app__header-content'>
                <div className='app__header-content_left'>
                    {/* <a
                        className='app__header-content_tag'
                        href='https://www.freepik.com/free-photo/close-up-clothes-hanging-rack_7337397.htm#page=2&query=fashion&position=0&from_view=search&track=sph'
                    >
                        Image by drobotdean on Freepik
                     </a> */}
                    <div className='app__header-content_text'>
                        <h1 className='app__header-content_h1'>
                            Wear the Best.
                        </h1>
                        <p className='p__opensans app__header-content_p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum veniam amet cupiditate necessitatibus
                            tempore a molestias, reiciendis similique accusamus
                            itaque.
                        </p>
                    </div>
                </div>
                <div className='app__header-content_right'>
                    <div className='app__header-content_right-wrapper'>
                        <p className='p__opensans '>Shop Now</p>
                        <GoLinkExternal className='header__icon' />
                    </div>
                    <div className='app__header-content_right-wrapper'>
                        <p className='p__opensans'>Get Promo</p>
                        <GoLinkExternal className='header__icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
