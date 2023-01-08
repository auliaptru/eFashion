import React from 'react';

import image1 from '../../assets/cate-banner1.jpg';
import image2 from '../../assets/cate-banner2.jpg';
import image3 from '../../assets/cate-banner3.jpg';
import './categoryBanner.scss';

const CategoryBanner = () => {
    return (
        <div className='app__cate'>
            <div className='app__cate-wrapper_img'>
                <div className='app__cate-img_left'>
                    <img src={image1} alt='cate__image' />
                    <p className='cate__text p__cormorant'>Woman Fashion</p>
                    <span />
                    {/* <button className='cate__btn custom__button'>
                        View More
                    </button> */}
                </div>
                <div className='app__cate-img_right'>
                    <div className='img__top'>
                        <img src={image3} alt='cate__image' />
                        <p className='cate__text p__cormorant'>Bag and Shoes</p>
                        <span />
                    </div>
                    <div className='img__bottom'>
                        <img src={image2} alt='cate__image' />
                        <p className='cate__text p__cormorant'>Man Fashion</p>
                        <span />
                    </div>
                </div>
            </div>
            <div className='app__cate-text_circle'>
                <p className='p__opensans'>Be your Best</p>
            </div>
        </div>
    );
};

export default CategoryBanner;
