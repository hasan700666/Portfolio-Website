import React from "react";
import img from "../../assets/Adobe Express.png";
import "./Home.css";
import { FaArrowDownLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="tag-wrapper">
      <div className="tag-track">
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
      </div>
      <div>
        <div className="m-10 mt-40 text-2xl">
          <div>A Web Developer</div>
          <div>MERN Stack</div>
        </div>
        <div className="tag-image">
          {" "}
          <img src={img} alt="" />
        </div>
        <div className="m-10 mt-70 text-2xl text-end">
          <div>Scroll Down</div>
          <div className="flex justify-end mt-3">
            <FaArrowDownLong  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
