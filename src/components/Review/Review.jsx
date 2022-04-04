import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, picture, comments, rating} = props.review;
    return (
        <div className='card'>
            <div>
                <img src={picture} alt="" />
                <h2 className='text-2xl font-bold text-gray-600 mt-4'>{name}</h2>
                <p className='mt-4'>{comments}</p>
                <p className='mt-4'><small>Ratings: <span className='font-bold text-gray-600'>{rating}</span></small></p>
            </div>
        </div>
    );
};

export default Review;