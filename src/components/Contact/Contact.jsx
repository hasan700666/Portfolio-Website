import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section bg-black h-[800px] flex flex-col items-center">
      <div className="text-white text-[100px] text-center">Contact</div>

      {/* Center container */}
      <div className="flex justify-center items-center w-full">
        <div className="design-box aspect-[4/2.5] w-[1000px] bg-white relative overflow-hidden rounded-[20px]">
          <div className="rays"></div>
          <div className="ray-source"></div>

          <div className="ellipse ellipse-1"></div>
          <div className="ellipse ellipse-2"></div>
          <div className="ellipse ellipse-3"></div>

          <div className="orbit-dot orbit-dot-1"></div>
          <div className="orbit-dot orbit-dot-2"></div>

          <div className="vignette"></div>

          {/* Center Button */}
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
  px-8 py-4 bg-black text-white rounded-f text-lg font-semibold
  hover:scale-105 transition duration-300 shadow-lg"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
