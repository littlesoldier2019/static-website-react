import React from 'react';
import './Develop.css';

const Develop = () => {
    return (
        <div className="container_third--development">
                                <ul className="container_third_development--nav">
                                        <a href="#" className='link-style'>
                                                <li className="design">
                                                        <h3><span className="normal">DESIGN</span></h3>
                                                </li>
                                        </a>

                                        <a href="#" className='link-style'>
                                                <li className="production">
                                                        <h3><span className="normal">PRODUCTION</span></h3>
                                                </li>
                                        </a>
                                </ul>

                                <ul className="container_third_itemd">

                                        <li className="container_second--text"> <span className="normal">Lorem ipsum dolor sit
                                                        amet consectetur adipisicing elit. Adipisci magni tenetur nobis
                                                        velit quasi sequi quod. Praesentium iure repellendus corrupti ab
                                                        unde, aliquam possimus similique esse. Incidunt inventore
                                                        similique eveniet.</span></li>

                                        <li className="container_second--text"> <span className="normal">Lorem ipsum dolor sit
                                                        amet consectetur adipisicing elit. Adipisci magni tenetur nobis
                                                        velit quasi sequi quod. Praesentium iure repellendus corrupti ab
                                                        unde, aliquam possimus similique esse. Incidunt inventore
                                                        similique eveniet.</span></li>
                                </ul>

                                <button className="readmore_btn"> READ MORE </button>

                        </div>
    )
}

export default Develop;