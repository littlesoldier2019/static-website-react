import React from 'react';
import './Testi.css';
import TestiItem from './TestiItem';

const Testi = () => {
    return (
        <div className="container_third--testimonials">
            <div className="first_section">
                <TestiItem></TestiItem>
                <TestiItem></TestiItem>
            </div>

            <div className="second_section">
                <TestiItem></TestiItem>
                <TestiItem></TestiItem>
            </div>
        </div>
        
        
    )
}

export default Testi;