import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Shoes from '../../images/shoes.png';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews] = useReview([])
    const navigate = useNavigate()
    return (
        <div className="home-container">
            <section className='hero-section'>
                <div className="text-left">
                    <h1 className='text-6xl font-bold my-5 text-gray-600'>Man's Best <span className='color-text'>Shoes</span></h1>
                    <p className='font-lighter text-gray-600	'>We provide the best quality Man's shoes with cheap price. <br />You can purchase this product after watching our dearest customer reviews. <br />We are one of the best importer world-wide. So nothing to worry.....</p>
                    <button className='btn'>Explore Now</button>
                </div>
                <div className="image-container">
                    <img src={Shoes} alt="" />
                </div>
            </section>
                <h2 className='hover text-5xl font-bold text-gray-600 mb-7'>Customer Reviews</h2>
            <section className='customer-review'>
                {
                    reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                }
             </section>
                <button onClick={() => navigate('/reviews')} className='btn'>See All Reviews</button>
        </div>
    );
};

export default Home;