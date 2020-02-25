import React from "react";
import RecentWorkCard from "./RecentWorkCard";
import "./RecentWorkCards.css";

const RecentWorkCards = () => {
  return (
    <div className="container_second">
      <RecentWorkCard />
      <RecentWorkCard />
      <RecentWorkCard />
    </div>
  );
};

export default RecentWorkCards;
