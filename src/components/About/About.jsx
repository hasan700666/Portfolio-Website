import React from "react";

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500&display=swap');

        .about-section {
          background: #000;
          display: flex;
          align-items: center;
        }


        .about-title {
          font-size: 100px;
          color: #fff;
        }

        .about-body {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.7;
          color: white;
          max-width: 300px;
        }

        /* ── RIGHT: editorial photo box ── */
        .editorial-wrapper {
          flex: 1;
          position: relative;
          height: 460px;
        }

        .photo-leaf {
          position: absolute;
          top: 40px;
          left: 0px;
          width: 200px;
          height: 300px;
          transform: rotate(-6deg);
          overflow: hidden;
          z-index: 1;
          box-shadow: 8px 8px 35px rgba(0,0,0,0.6);
          transition: transform 0.5s ease;
        }

        .photo-leaf:hover {
          transform: rotate(-4deg) scale(1.02);
        }

        .photo-leaf img,
        .photo-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: grayscale(100%) contrast(1.12) brightness(0.97);
          display: block;
        }

        .photo-main {
          position: absolute;
          top: 0;
          left: 130px;
          width: 340px;
          height: 440px;
          overflow: hidden;
          z-index: 2;
          box-shadow: 12px 12px 45px rgba(0,0,0,0.7);
          transition: transform 0.5s ease;
        }

        .photo-main:hover {
          transform: translateY(-5px);
        }

        .photo-main::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .text-headline {
          position: absolute;
          top: 0;
          left: -8px;
          z-index: 3;
          max-width: 160px;
        }

        .text-headline .overline {
          font-size: 7.5px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 6px;
          display: block;
        }

        .text-headline h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.04em;
          color: #ccc;
          text-transform: uppercase;
          font-weight: 400;
          line-height: 1.15;
        }

        .est-badge {
          position: absolute;
          top: 20px;
          right: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .est-badge .est-label {
          font-size: 7.5px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #555;
        }

        .est-badge .est-year {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          color: #aaa;
          letter-spacing: 0.06em;
          line-height: 1;
        }

        .rule {
          position: absolute;
          bottom: 28px;
          left: 130px;
          width: 340px;
          height: 1px;
          background: rgba(255,255,255,0.1);
          z-index: 4;
        }

        .caption {
          position: absolute;
          bottom: 10px;
          left: 130px;
          z-index: 4;
          font-size: 7px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #444;
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
        }

        @media (max-width: 900px) {
          .about-section {
            flex-direction: column;
            padding: 40px 24px;
          }
          .about-text { flex: unset; width: 100%; }
          .editorial-wrapper { width: 100%; height: 380px; }
          .photo-main { width: 260px; height: 340px; }
          .rule, .caption { width: 260px; }
        }
      `}</style>

      <div className="about-section pt-10">
        <div className="about-text">
          <div className="about-title">about</div>
          <p className="about-body">
            I am a Full Stack Developer passionate about building scalable,
            user-centric web applications that combine clean, intuitive
            interfaces with robust and reliable APIs. My focus is on creating
            solutions that not only work efficiently but also deliver smooth and
            engaging user experiences.
          </p>
        </div>

        {/* RIGHT — editorial photo */}
        <div className="editorial-wrapper">
          <div className="photo-leaf">
            <img
              src="https://i.ibb.co.com/BHh0V82F/Black-and-White-Bold-Typographic-Design-Logo-4.png"
              alt="Black and White Bold Typographic Design Logo (4)"
              border="0"
            ></img>
          </div>

          <div className="photo-main">
            <img
              src="https://i.ibb.co.com/SXMTj9ML/Whats-App-Image-2026-03-03-at-12-30-08-AM.jpg"
              alt="portrait"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
