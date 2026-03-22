import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-30 h-72 overflow-hidden">
      <div className="flex justify-between items-center mx-90 ">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#education" className="hover:underline">
          Education
        </a>
        <a href="#skills" className="hover:underline">
          Skills
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
      <div className="">
        <div className="text-center text-black teg-line">
          CRAFTING CLEAN CODE
        </div>
      </div>
    </div>
  );
};

export default Footer;
