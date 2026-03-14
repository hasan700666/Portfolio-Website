import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="contact-section bg-black py-16 rounded-b-[14px]">
      <div className="text-white text-[100px] text-center">Contact</div>

      {/* Design Container */}
      <div className="design-box m-20 relative">
        <div className="rays"></div>
        <div className="ray-source"></div>

        <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>

        <div className="orbit-dot orbit-dot-1"></div>
        <div className="orbit-dot orbit-dot-2"></div>

        <div className="vignette"></div>

        {/* Left Vertical Text */}
        <div className="absolute left-100 top-1/2 -translate-y-1/2 text-white text-7xl font-semibold [writing-mode:vertical-rl] rotate-180">
          Let’s
        </div>

        {/* Right Vertical Text */}
        <div className="absolute right-100 top-1/2 -translate-y-1/2 text-white text-7xl font-semibold [writing-mode:vertical-rl]">
          Craft
        </div>

        {/* Center Button */}
        <button
          onClick={() => setOpenModal(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          px-8 py-4 bg-black text-white rounded-[10px] text-lg
          hover:scale-105 transition duration-300 shadow-lg"
        >
          Get In Touch
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

          <div className="bg-white w-105 p-8 rounded-xl">

            <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 mb-4 rounded text-center"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 mb-4 rounded text-center"
            />

            <textarea
              placeholder="Message"
              className="w-full border p-3 mb-4 rounded h-30 text-center"
            ></textarea>

            <div className="flex justify-between">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Close
              </button>

              <button className="px-4 py-2 bg-black text-white rounded">
                Send
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Contact;