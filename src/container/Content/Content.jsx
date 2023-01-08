import React from 'react';

import images from '../../constants/images';
import './content.scss';

const Content = () => {
    return (
        <div className='app__content'>
            <div className='app__content-text'>
                <h1>Bringing You the Elements of Style</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem incidunt similique tempora, est eius culpa
                    inventore. Velit, tempora accusamus magni ad culpa doloribus
                    soluta sint, voluptatibus delectus exercitationem itaque
                    saepe?
                </p>
            </div>
            <div className='app__content-img'>
                <img src={images.fashion} alt='woman__model' />
                <img src={images.fashion2} alt='man__model' />
            </div>
            {/* <div className='app__content-inlineCate'> */}
            
            {/* </div> */}
        </div>
    );
};

export default Content;
