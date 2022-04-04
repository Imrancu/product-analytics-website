import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs">
            <div className='card'>
                <h3 className='text-4xl font-semibold text-gray-600'>What is context API</h3>
                <p className='mt-4'>Context was release in version 16.3 of Reactjs. Context API is a useful, new innovation in react that we can use as an alternative of props drilling. Props drilling is a boring and perfomance consuming term. On the other hand, Context API is super powerful thing in reactjs. By using context, we can very easily pass data to every where. Finnaly, If we use context API we get the best performance rather using props.</p>
            </div>
            <div className='card'>
                <h3 className='text-4xl font-semibold text-gray-600'>What are Semantic tags</h3>
                <p className='mt-4'>Semantic Tags mean HTML Semantic Elements that used to define the different parts of an application. Semantic tags have many benefits. 
                <ul>
                    <li>Some are below:</li>
                    <li>It helps to rank your website on search engine.</li>
                    <li>Increase user accessibility</li>
                    <li>Helps to coders to understand the meaning of the code.</li>
                </ul>
                </p>
            </div>
        </div>
    );
};

export default Blogs;