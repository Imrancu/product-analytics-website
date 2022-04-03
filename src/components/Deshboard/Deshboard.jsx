import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import RevenueChart from '../RevenueChart/RevenueChart';
import './Deshboard.css';

const Deshboard = () => {
    return (
            <div className="chart">
                <div className='invest-container'>
                    <h2 className='text-3xl font-bold text-sky-700'>Investment Growth</h2>
                    <MyAreaChart></MyAreaChart>
                </div>
                <div className='revenue-container'>
                    <h2 className='text-3xl font-bold text-sky-700'>Revenue Growth</h2>
                    <RevenueChart></RevenueChart>
                </div>
            </div>
    );
};

export default Deshboard;