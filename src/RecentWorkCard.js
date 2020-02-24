import React from "react";
import "./RecentWorkCard.css";
import image from "./image/img-placeholder.png";

const RecentWorkCard = () => {
  return (
    <div className="container_second_content">
      <ul className="container_second_item">
        <li className="container_second--img">
          <img src={image} className="container_second--subimg" />
        </li>
        <li className="container_second--blog">
          <h2>
            <span className="normal">Blog Title</span>
          </h2>
        </li>
        <li className="container_second--text">
          <span className="normal">
            Lorem ipsum dolor sitamet consectetur adipisicing elit. Adipisci
            magni tenetur nobis velit quasi sequi quod. Praesentium iure
            repellendus corrupti abunde, aliquam possimus similique esse.
            Incidunt inventore similique eveniet.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RecentWorkCard;
