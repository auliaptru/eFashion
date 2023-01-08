import React from 'react';
import Rating from '../Rating/Rating';

import './categoryCard.scss';

const CategoryCard = ({ cate: { image, title, price, review } }) => {
    return (
        <div className='app__category-card_wrapper'>
            <img className='category-card__image' src={image} alt={title} />
            <div className='category-card_text'>
                <h1 className='p__opensans'>{title}</h1>
                <p>$ {price}</p>
                <div className='review'>
                    <Rating />
                    <p className='review__text'>({review})</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
