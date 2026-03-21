import React from "react";
import img from "../../assets/Adobe Express.png";
import "./Home.css";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="tag-wrapper">
      <div className="tag-track">
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
        <span className="tag-line">FULL-STACK MERN DEVELOPER</span>
      </div>
      <div className="">
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
            <FaArrowDownLong />
          </div>
        </div>
      </div>
      <div>
        <div className="box-start flex flex-col justify-center items-center gap-5">
          <button className="home-button">
            <span className="home-icon-wrapper">
              <RiFilePaper2Line />
            </span>
            <a
              href="/public/Resume~Mohammod Hasan Al Muttaki~Full-Stack Web Developer (1).pdf"
              download="Resume~Mohammod Hasan Al Muttaki~Full-Stack Web Developer.pdf"
            >
              <span className="home-button-text">Download Resume</span>
            </a>
          </button>
          <div className="social-buttons ml-3.5">
            <button className="home-button">
              <span className="home-icon-wrapper">
                <FaGithub />
              </span>
              <span className="home-button-text">GitHub</span>
            </button>
            <button className="home-button">
              <span className="home-icon-wrapper">
                <FaWhatsapp />
              </span>
              <span className="home-button-text">WhatsApp</span>
            </button>
            <button className="home-button">
              <span className="home-icon-wrapper">
                <FaLinkedin />
              </span>
              <span className="home-button-text">LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
