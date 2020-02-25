import React from 'react';
import SectionTwoItem from "./SectionTwoItem";
import './SectionTwoList.css';
import smartphone from '../src/image/smartphone.png';
import monitor from '../src/image/monitor.jpg';
import laptop from '../src/image/laptop.jpg';
import recycle from '../src/image/recycle.png';

const SectionTwoList = () => {
    return (
        <div className="container_first">
            <SectionTwoItem titleOne='SUPERBLY' titleTwo='RESPONSIVE' src={smartphone}/>
            <SectionTwoItem titleOne='QUEEKY' titleTwo='CLEAN' src={monitor}/>
            <SectionTwoItem titleOne='MULTI' titleTwo='PURPOSE' src={laptop}/>
            <SectionTwoItem titleOne='HIGHLY' titleTwo='FLEXIBLE' src={recycle}/>
        </div>
    )
};

export default SectionTwoList
