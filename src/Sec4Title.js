import React from 'react';
import './Sec4Title.css';
import TitleItem from './TitleItem.js';

const Sec4Title = () => {
    return (
        <div className="testimonials_development">
            <TitleItem name='testimonials' left='testimonials--left' right='testimonials--right' capital='TESTIMONIALS'/>
            <TitleItem name='developmnent' left='development--left' right='developmnent--right'capital='DEVELOPMENT'/>
        </div>
        
    )
}

export default Sec4Title;