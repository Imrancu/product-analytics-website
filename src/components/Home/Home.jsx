import React from 'react';
import Shoes from '../../images/shoes.png';
import './Home.css';

const Home = () => {
    return (
            <div className='home-container'>
                <div className="text-container text-left">
                    <h1 className='text-6xl font-bold my-8 text-gray-600'>Man's Best <span className='color-text'>Shoes</span></h1>
                    <p className='font-lighter text-gray-600	'>We provide the best quality Man's shoes with cheap price. <br/>You can purchase this product after watching our dearest customer reviews. <br/>We are one of the best importer world-wide. So nothing to worry.....</p>
                    <button className='btn'>Explore Now</button>
                </div>
                <div className="image-container">
                    <img src={Shoes} alt="" />
                </div>
            </div>
    );
};

export default Home;