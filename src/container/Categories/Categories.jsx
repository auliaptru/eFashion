import React from 'react';
import { useState } from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

import { categoryButton, categoryData } from '../../constants/data';
import './categories.scss';

const Categories = () => {
    const [active, setActive] = useState(false);
    const handleClick = (btn) => {
        setActive(btn.id);
    };
    return (
        <div className='app__categories' id='category'>
            <div className='app__categories-button'>
                {categoryButton.map((cate) => (
                    <button
                        key={cate.id}
                        onClick={() => handleClick(cate)}
                        className={
                            cate.id === active ? 'cate-btn active' : 'cate-btn'
                        }
                    >
                        {cate.name}
                    </button>
                ))}
            </div>
            <div className='app__categories-card'>
                {categoryData.map((cate) => (
                    <CategoryCard key={cate.id} cate={cate} />
                ))}
            </div>
        </div>
    );
};

export default Categories;
