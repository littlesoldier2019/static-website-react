import React from 'react';

const SectionTwoItem = (props) => {
    return (
        <div className="container_first_content">
            <ul className="container_first_item">
                <li className="container_first--img"><img src={props.src} className="container_first--subimg" /></li>

                <li className="container_first_suberfly--headtext">
                    <h2><span className="bold">{props.titleOne}</span> <span
                        className="normal">{props.titleTwo}</span></h2>
                </li>

                <li className="container_first--text"> <span className="normal">Lorem ipsum dolor sit
                                                        amet consectetur adipisicing elit. Adipisci magni tenetur nobis
                                                        velit quasi sequi quod. Praesentium iure repellendus corrupti ab
                                                        unde, aliquam possimus similique esse. Incidunt inventore
                                                        similique eveniet.</span></li>

                <button className="btn_leanmore"> LEARN MORE</button>
            </ul>
        </div>
    );
};

export default SectionTwoItem;
