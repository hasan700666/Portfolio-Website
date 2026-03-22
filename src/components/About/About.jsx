import React from "react";

const About = () => {
  return (
    <section id="about">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500&display=swap');

        .about-section {
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-inner {
          display: flex;
          gap: 60px;
          max-width: 900px;
          width: 100%;
        }

        /* ── LEFT: text ── */
        .about-text {
          flex: 0 0 340px;
          display: flex;
          flex-direction: column;
          gap: 24px;
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
          top: 120px;
          left: 30px;
          overflow: hidden;
        }

        .photo-leaf {
          position: absolute;
          top: 40px;
          left: 30px;
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
            padding: 40px 24px;
          }
          .about-inner {
            flex-direction: column;
          }
          .about-text { flex: unset; width: 100%; }
          .editorial-wrapper { width: 100%; height: 380px; }
          .photo-main { width: 260px; height: 340px; }
          .rule, .caption { width: 260px; }
        }

          .mid-rule {
          position: absolute;
          top: calc(440px * 0.62);
          left: 130px;
          width: 340px;
          height: 1px;
          background: rgba(255, 255, 255, 0.55);
          z-index: 5;
          pointer-events: none;
        }
      `}</style>

      <div>
        <div className="about-section pt-30">
          <div className="about-inner pb-30">
            {/* LEFT — text */}
            <div className="about-text">
              <div className="about-title">about .</div>
              <p className="about-body">
                I am a Full Stack Developer passionate about building scalable,
                user-centric web applications that combine clean, intuitive
                interfaces with robust and reliable APIs. My focus is on
                creating solutions that not only work efficiently but also
                deliver smooth and engaging user experiences.
              </p>
            </div>

            {/* RIGHT — editorial photo */}
            <div className="editorial-wrapper">
              <div className="photo-leaf rounded-t-lg">
                <img
                  src="https://i.ibb.co.com/hbzRYJ9/Whats-App-Image-2026-03-09-at-12-37-36-AM.jpg"
                  alt="logo graphic"
                />
              </div>

              <div className="photo-main rounded-t-lg">
                <img
                  src="https://i.ibb.co.com/SXMTj9ML/Whats-App-Image-2026-03-03-at-12-30-08-AM.jpg"
                  alt="portrait"
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="h-3 ml-10 mr-10 bg-white border-0 rounded" />
      </div>
    </section>
  );
};

export default About;
