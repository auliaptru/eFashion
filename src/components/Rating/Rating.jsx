import React from 'react';

import { AiFillStar } from 'react-icons/ai';
import './rating.scss';

const Rating = () => {
    // const [rating, setRating] = useState(0);
    // const [hover, setHover] = useState(0);
    return (
        <div className='star__rating'>
            {[...Array(5)].map((star, i) => {
                i += 1;
                return (
                    <button
                        type='button'
                        key={i}
                        // className={
                        //     i <= ((rating && hover) || hover) ? 'on' : 'off'
                        // }
                        // onClick={() => setRating(i)}
                        // onMouseEnter={() => setHover(i)}
                        // onMouseLeave={() => setHover(rating)}
                        // onDoubleClick={() => {
                        //     setRating(0);
                        //     setHover(0);
                        // }}
                        className={i <= 4 ? 'on' : 'off'}
                    >
                        <span className='star'>
                            <AiFillStar />
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default Rating;
