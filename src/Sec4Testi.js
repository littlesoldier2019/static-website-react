import React from 'react';
import './Sec4Testi.css';
import TestiItem from './TestiItem';

const Sec4Testi = () => {
    return (
        <div className="container_third">
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
        </div>
        
    )
}

export default Sec4Testi;