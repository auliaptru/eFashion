import React from 'react';
import CategoryBanner from '../../components/CategoryBanner/CategoryBanner';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';

import './featured.scss';

const Featured = () => {
    return (
        <div className='app__featured'>
            <CategoryBanner />
            <FeaturedCard />
        </div>
    );
};

export default Featured;
