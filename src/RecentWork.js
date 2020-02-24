import React from "react";
import RecentWorkCards from "./RecentWorkCards";
import "./RecentWork.css";

const RecentWork = () => {
  return (
    <div>
      <div className="recent_banner">
        <div className="recent_banner--left"></div> RECENT WORK
        <div className="recent_banner--right"></div>
      </div>
      <RecentWorkCards />
    </div>
  );
};

export default RecentWork;
