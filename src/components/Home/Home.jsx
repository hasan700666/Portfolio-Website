import React from "react";
import img from "../../assets/Adobe Express.png";
import "./Home.css";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
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
                href="/Resume-Mohammod-Hasan-Al-Muttaki-Full-Stack-Web-Developer.pdf"
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
                <a href="https://github.com/hasan700666">
                  <span className="home-button-text">GitHub</span>
                </a>
              </button>
              <button className="home-button">
                <span className="home-icon-wrapper">
                  <FaWhatsapp />
                </span>
                <a href="https://wa.me/8801729700666">
                  <span className="home-button-text">WhatsApp</span>
                </a>
              </button>
              <button className="home-button">
                <span className="home-icon-wrapper">
                  <FaLinkedin />
                </span>
                <a href="https://www.linkedin.com/in/mohammodhasanalmuttaki/">
                  <span className="home-button-text">LinkedIn</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
