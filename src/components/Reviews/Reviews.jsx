import React from 'react';
<<<<<<< HEAD
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
=======
>>>>>>> c4d21ec7cffc18c945cb9e511761fe60a0b6c012
import './Reviews.css';

const Reviews = () => {
    const [reviews] = useReview([])
    return (
<<<<<<< HEAD
        <div className='all-center'>
            <h2 className='hover text-5xl font-bold text-gray-600 my-8'>What They Say!!</h2>
            <div className='card-container'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
=======
        <div>
            <h2 className='hover text-5xl font-bold text-gray-600'>Customar Reviews</h2>
>>>>>>> c4d21ec7cffc18c945cb9e511761fe60a0b6c012
        </div>
    );
};

export default Reviews;