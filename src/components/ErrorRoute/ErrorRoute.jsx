import React from 'react';
import image from '../../images/404-Page.gif';
import './ErrorRoute.css';



const ErrorRoute = () => {
    return (
        <div className='error'>
            <img src={image} alt="" />
        </div>
    );
};

export default ErrorRoute;