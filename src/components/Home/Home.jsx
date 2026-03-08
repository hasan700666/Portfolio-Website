import React from "react";
import img from "../../assets/Adobe Express.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="tag-wrapper">
      <div className="tag-track">
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
      </div>
      <div className="tag-image">
        {" "}
        {/* ← changed from image-container */}
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
