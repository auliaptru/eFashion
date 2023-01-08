import React from 'react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Rating from '../Rating/Rating';
import womanModel from '../../assets/woman-model.jpg';
import manModel from '../../assets/man-model.jpg';
import data from '../../constants/data';
import './review.scss';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { image, name, date, text } = data[index];

    const checkNumber = (num) => {
        if (num > data.length - 1) {
            return 0;
        }
        if (num < 0) {
            return data.length - 1;
        }
        return num;
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    return (
        <div className='app__review' id='review'>
            <div className='app__review-info'>
                <div className='app__review-info_profile'>
                    <img src={image} alt={name} />
                    <div className='profile__text'>
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='app__review-info_rating'>
                    <Rating />
                </div>
            </div>
            <div className='app__review-reviewText'>
                <p>{text}</p>
            </div>
            <div className='app__review-btn_container'>
                <button className='left' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='right' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Review;
