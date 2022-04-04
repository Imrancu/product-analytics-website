import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews] = useReview([])
    const navigate = useNavigate()
    return (
        <div className='all-center'>
            <h2 className='hover text-5xl font-bold text-gray-600 my-8'>What They Say!!</h2>
            <div className='card-container'>
                {
                    reviews.map(review => <Review key={review.id} review={review}/>)
                }
            </div>
            <button onClick={() => navigate(-1)} className='btn'>Back To Home</button>
        </div>
    );
};

export default Reviews;