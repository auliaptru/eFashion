import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiSpreadshirt } from 'react-icons/si';
import { MdOutlineClose } from 'react-icons/md';

import './navbar.scss';

const Navbar = () => {
    const [bg, setBg] = useState(false);
    const [toggle, setToggle] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setBg(true);
        } else {
            setBg(false);
        }
    };

    useEffect(() => {
        changeBackground();
    }, []);

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={bg ? 'app__navbar  navbar__bg' : 'app__navbar'}>
            <div className='app__navbar-logo'>
                <SiSpreadshirt className='navbar__icon' />
                <p className='navbar__logo'>eFashion</p>
            </div>
            <ul className='app__navbar-list'>
                <li className='p__opensans'>
                    <a href='#home'>Home</a>
                </li>
                <li className='p__opensans'>
                    <a href='#category'>Category</a>
                </li>
                <li className='p__opensans'>
                    <a href='#review'>Review</a>
                </li>
                <li className='p__opensans'>
                    <a href='#about'>About</a>
                </li>
            </ul>
            <div className='app__navbar-login'>
                <a href='#login' className='p__opensans'>
                    Login
                </a>
                <span />
                <a href='#register' className='p__opensans'>
                    Register
                </a>
            </div>

            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu
                    fontSize={27}
                    className='overlay__open'
                    onClick={() => setToggle(true)}
                />
                {toggle && (
                    <div className='app__navbar-smallscreen_overlay'>
                        <MdOutlineClose
                            className='overlay__close'
                            onClick={() => setToggle(false)}
                        />
                        <ul className='app__navbar-smallscreen_list'>
                            <li className='p__opensans'>
                                <a
                                    href='#home'
                                    onClick={() => setToggle(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li className='p__opensans'>
                                <a
                                    href='#category'
                                    onClick={() => setToggle(false)}
                                >
                                    Category
                                </a>
                            </li>
                            <li className='p__opensans'>
                                <a
                                    href='#review'
                                    onClick={() => setToggle(false)}
                                >
                                    Review
                                </a>
                            </li>
                            <li className='p__opensans'>
                                <a
                                    href='#about'
                                    onClick={() => setToggle(false)}
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                        <div className='app__navbar-smallscreen_login'>
                            <a href='#login' className='p__opensans'>
                                Login
                            </a>
                            <span />
                            <a href='#register' className='p__opensans'>
                                Register
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
