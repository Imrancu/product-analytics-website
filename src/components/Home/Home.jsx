import React from 'react';
import useReview from '../../hooks/useReview';
import Shoes from '../../images/shoes.png';
<<<<<<< HEAD
import Review from '../Review/Review';
=======
import Reviews from '../Reviews/Reviews';
>>>>>>> c4d21ec7cffc18c945cb9e511761fe60a0b6c012
import './Home.css';

const Home = () => {
    const [reviews] = useReview([])
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
<<<<<<< HEAD
                <h2 className='hover text-5xl font-bold text-gray-600 mb-7'>Customer Reviews</h2>
            <section className='customer-review'>
                {
                    reviews.slice(0, 3).map(review => <Review key={review.id} review={review}/>)
                }
                
=======
            <section>
                <Reviews></Reviews>
>>>>>>> c4d21ec7cffc18c945cb9e511761fe60a0b6c012
            </section>
        </div>
    );
};

export default Home;