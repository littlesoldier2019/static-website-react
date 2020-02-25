import React from 'react';
import './TitleItem.css';

const TitleItem = (props) => {
    return (
        <div className={props.name}>
            <div className={props.left}> </div> {props.capital} <div className={props.right}>
            </div>
        </div>
    )
}

export default TitleItem;