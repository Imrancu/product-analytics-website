import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews] = useReview([])
    return (
        <div className='all-center'>
            <h2 className='hover text-5xl font-bold text-gray-600 my-8'>What They Say!!</h2>
            <div className='card-container'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;