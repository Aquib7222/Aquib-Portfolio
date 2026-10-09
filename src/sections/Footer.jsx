
import React from "react";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiCode,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-section" id="footer">
        <div className="footer-container">

          {/* =========================
              FOOTER CTA
          ========================= */}

          <div className="footer-cta">

            <div className="footer-cta-glow"></div>

            <div className="footer-cta-content">

              <div className="footer-cta-label">
                <span className="footer-label-dot"></span>
                HAVE A PROJECT IN MIND?
              </div>

              <h2>
                Let's build something
                <span> meaningful.</span>
              </h2>

              <p>
                I'm open to Java development opportunities, full stack
                projects and interesting ideas. If you have something
                worth building, let's talk about it.
              </p>

            </div>

            <a
              href="mailto:aquibshahzada@gmail.com"
              className="footer-cta-button"
            >
              <span>Let's Talk</span>

              <span className="footer-cta-arrow">
                <FiArrowUpRight size={17} />
              </span>
            </a>

          </div>


          {/* =========================
              FOOTER MAIN
          ========================= */}

          <div className="footer-main">

            {/* =========================
                BRAND
            ========================= */}

            <div className="footer-brand">

              <a href="#home" className="footer-logo">
                AQ<span>.</span>
              </a>

              <h3>
                Aquib Shahzada
              </h3>

              <p className="footer-brand-description">
                Java Developer & Full Stack Developer building modern,
                scalable and practical web applications with clean
                code and thoughtful user experiences.
              </p>

              <a
                href="mailto:aquibshahzada@gmail.com"
                className="footer-email"
              >
                <span className="footer-contact-icon">
                  <FiMail size={15} />
                </span>

                <span>
                  aquibshahzada@gmail.com
                </span>

                <FiArrowUpRight className="footer-email-arrow" />
              </a>

            </div>


            {/* =========================
                EXPLORE
            ========================= */}

            <div className="footer-column">

              <span className="footer-column-title">
                EXPLORE
              </span>

              <div className="footer-links">

                <a href="#about">
                  <span>01</span>
                  About
                </a>

                <a href="#skills">
                  <span>02</span>
                  Skills
                </a>

                <a href="#projects">
                  <span>03</span>
                  Projects
                </a>

                <a href="#experience">
                  <span>04</span>
                  Experience
                </a>

                <a href="#education">
                  <span>05</span>
                  Education
                </a>

                <a href="#contact">
                  <span>06</span>
                  Contact
                </a>

              </div>

            </div>


            {/* =========================
                CONNECT
            ========================= */}

            <div className="footer-column">

              <span className="footer-column-title">
                CONNECT
              </span>

              <div className="footer-social-list">

                {/* GITHUB */}

                <a
                  href="https://github.com/Aquib7222"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-item"
                >
                  <span className="footer-social-icon">
                    <FiGithub size={18} />
                  </span>

                  <div className="footer-social-info">
                    <strong>GitHub</strong>
                    <small>@Aquib7222</small>
                  </div>

                  <FiArrowUpRight className="footer-social-arrow" />
                </a>


                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/aquib-shahzada-6723681a6"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-item"
                >
                  <span className="footer-social-icon">
                    <FiLinkedin size={18} />
                  </span>

                  <div className="footer-social-info">
                    <strong>LinkedIn</strong>
                    <small>Aquib Shahzada</small>
                  </div>

                  <FiArrowUpRight className="footer-social-arrow" />
                </a>

              </div>


              {/* AVAILABILITY */}

              <div className="footer-availability">

                <span className="availability-indicator"></span>

                <div>
                  <strong>Available for opportunities</strong>
                  <small>Open to new projects & roles</small>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
              FOOTER INFO STRIP
          ========================= */}

          <div className="footer-info-strip">

            <div className="footer-info-item">
              <FiMapPin size={15} />
              <span>India</span>
            </div>

            <div className="footer-info-item">
              <FiCode size={15} />
              <span>Java · React · Spring Boot</span>
            </div>

            <div className="footer-info-item">
              <FiPhone size={15} />
              <span>Open for collaboration</span>
            </div>

          </div>


          {/* =========================
              DIVIDER
          ========================= */}

          <div className="footer-divider"></div>


          {/* =========================
              BOTTOM
          ========================= */}

          <div className="footer-bottom">

            <p>
              © {currentYear} <strong>Aquib Shahzada</strong>.
              All rights reserved.
            </p>

            <span className="footer-built">
              <span>Designed & Built with</span>
              <FiCode size={14} />
              <span>React</span>
            </span>

            <a
              href="#home"
              className="back-to-top"
              aria-label="Back to top"
            >
              <FiArrowUp size={17} />
            </a>

          </div>

        </div>
      </footer>


      {/* =========================
          FOOTER CSS
      ========================= */}

      <style>{`

        /* =========================================
           FOOTER
        ========================================= */

        .footer-section {
          position: relative;
          padding: 95px 5% 25px;
          background:
            radial-gradient(
              circle at 20% 0%,
              rgba(77, 163, 255, 0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 35%,
              rgba(139, 92, 246, 0.07),
              transparent 28%
            ),
            #070a0f;
          overflow: hidden;
        }

        .footer-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 80%;
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(77, 163, 255, 0.5),
            rgba(139, 92, 246, 0.5),
            transparent
          );
        }


        .footer-container {
          position: relative;
          width:  100%;
          margin: 0 auto;
        }


        /* =========================================
           CTA
        ========================================= */

        .footer-cta {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 48px 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          background:
            linear-gradient(
              135deg,
              rgba(77, 163, 255, 0.09),
              rgba(255, 255, 255, 0.035) 45%,
              rgba(139, 92, 246, 0.08)
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 25px 70px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          isolation: isolate;
        }


        .footer-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(77, 163, 255, 0.05),
              transparent
            );
          pointer-events: none;
        }


        .footer-cta::after {
          content: "";
          position: absolute;
          top: -100px;
          right: 15%;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(77, 163, 255, 0.08);
          filter: blur(70px);
          pointer-events: none;
          z-index: -1;
        }


        .footer-cta-glow {
          position: absolute;
          bottom: -120px;
          left: 25%;
          width: 280px;
          height: 180px;
          background: rgba(139, 92, 246, 0.08);
          filter: blur(80px);
          pointer-events: none;
        }


        .footer-cta-content {
          position: relative;
          z-index: 1;
        //   max-width: 700px;
        }


        .footer-cta-label {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 16px;
          color: #8b98a9;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }


        .footer-label-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4da3ff;
          box-shadow: 0 0 12px rgba(77, 163, 255, 0.7);
        }


        .footer-cta h2 {
          margin: 0;
          color: #f5f7fa;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.08;
          font-weight: 750;
          letter-spacing: -1.7px;
        }


        .footer-cta h2 span {
          background: linear-gradient(
            135deg,
            #4da3ff,
            #8b5cf6
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }


        .footer-cta-content p {
          max-width: 610px;
          margin: 18px 0 0;
          color: #7f8a9b;
          font-size: 14px;
          line-height: 1.8;
        }


        /* CTA BUTTON */

        .footer-cta-button {
          position: relative;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 13px;
          min-height: 54px;
          padding: 6px 7px 6px 20px;
          color: #ffffff;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            #4da3ff,
            #6366f1 55%,
            #8b5cf6
          );
          box-shadow:
            0 12px 30px rgba(77, 163, 255, 0.18);
          font-size: 13px;
          font-weight: 750;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }


        .footer-cta-button:hover {
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow:
            0 18px 40px rgba(77, 163, 255, 0.28);
        }


        .footer-cta-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.14);
          transition: transform 0.3s ease;
        }


        .footer-cta-button:hover .footer-cta-arrow {
          transform: translate(2px, -2px);
        }


        /* =========================================
           MAIN
        ========================================= */

        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1fr;
          gap: 70px;
          padding: 75px 5px 55px;
        }


        /* BRAND */

        .footer-brand {
          max-width: 420px;
        }


        .footer-logo {
          display: inline-flex;
          align-items: baseline;
          color: #f5f7fa;
          text-decoration: none;
          font-size: 38px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: -2px;
        }


        .footer-logo span {
          color: #4da3ff;
        }


        .footer-brand h3 {
          margin: 18px 0 10px;
          color: #e9edf3;
          font-size: 18px;
          font-weight: 700;
        }


        .footer-brand-description {
          max-width: 390px;
          margin: 0;
          color: #7f8a9b;
          font-size: 13px;
          line-height: 1.8;
        }


        /* EMAIL */

        .footer-email {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 23px;
          padding: 9px 11px 9px 9px;
          color: #cdd5df;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.035);
          font-size: 12px;
          transition:
            color 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }


        .footer-email:hover {
          color: #ffffff;
          border-color: rgba(77, 163, 255, 0.28);
          background: rgba(77, 163, 255, 0.07);
        }


        .footer-contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          color: #4da3ff;
          border-radius: 8px;
          background: rgba(77, 163, 255, 0.1);
        }


        .footer-email-arrow {
          margin-left: 5px;
          color: #657182;
          transition: transform 0.25s ease;
        }


        .footer-email:hover .footer-email-arrow {
          transform: translate(2px, -2px);
        }


        /* =========================================
           COLUMNS
        ========================================= */

        .footer-column-title {
          display: block;
          margin-bottom: 22px;
          color: #657182;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }


        .footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 13px;
        }


        .footer-links a {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #9ca7b6;
          text-decoration: none;
          font-size: 13px;
          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }


        .footer-links a span {
          color: #485363;
          font-size: 9px;
          font-weight: 700;
          transition: color 0.25s ease;
        }


        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(4px);
        }


        .footer-links a:hover span {
          color: #4da3ff;
        }


        /* =========================================
           SOCIAL
        ========================================= */

        .footer-social-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }


        .footer-social-item {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 250px;
          padding: 10px;
          color: #cdd5df;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.025);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }


        .footer-social-item:hover {
          transform: translateY(-2px);
          border-color: rgba(77, 163, 255, 0.24);
          background: rgba(77, 163, 255, 0.055);
        }


        .footer-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          color: #dce2ea;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.05);
        }


        .footer-social-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
        }


        .footer-social-info strong {
          color: #e8edf3;
          font-size: 12px;
          font-weight: 700;
        }


        .footer-social-info small {
          color: #687486;
          font-size: 10px;
        }


        .footer-social-arrow {
          color: #596576;
          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }


        .footer-social-item:hover .footer-social-arrow {
          color: #4da3ff;
          transform: translate(2px, -2px);
        }


        /* =========================================
           AVAILABILITY
        ========================================= */

        .footer-availability {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-top: 18px;
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.025);
        }


        .availability-indicator {
          position: relative;
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #42d392;
          box-shadow: 0 0 12px rgba(66, 211, 146, 0.7);
        }


        .availability-indicator::after {
          content: "";
          position: absolute;
          inset: -4px;
          border: 1px solid rgba(66, 211, 146, 0.25);
          border-radius: 50%;
          animation: footerPulse 2s infinite;
        }


        @keyframes footerPulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.4;
          }

          50% {
            transform: scale(1.2);
            opacity: 0;
          }
        }


        .footer-availability div {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }


        .footer-availability strong {
          color: #bfc8d4;
          font-size: 10px;
          font-weight: 700;
        }


        .footer-availability small {
          color: #667283;
          font-size: 9px;
        }


        /* =========================================
           INFO STRIP
        ========================================= */

        .footer-info-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 18px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.025);
        }


        .footer-info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #707c8c;
          font-size: 10px;
        }


        .footer-info-item svg {
          color: #4da3ff;
        }


        /* =========================================
           DIVIDER
        ========================================= */

        .footer-divider {
          width: 100%;
          height: 1px;
          margin-top: 25px;
          background: rgba(255, 255, 255, 0.07);
        }


        /* =========================================
           BOTTOM
        ========================================= */

        .footer-bottom {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 20px;
          min-height: 75px;
        }


        .footer-bottom p {
          margin: 0;
          color: #596575;
          font-size: 10px;
        }


        .footer-bottom p strong {
          color: #8b96a5;
          font-weight: 600;
        }


        .footer-built {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #596575;
          font-size: 10px;
        }


        .footer-built svg {
          color: #4da3ff;
        }


        .back-to-top {
          justify-self: end;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: #aab4c2;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.035);
          transition:
            color 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }


        .back-to-top:hover {
          color: #ffffff;
          border-color: rgba(77, 163, 255, 0.3);
          background: rgba(77, 163, 255, 0.09);
          transform: translateY(-3px);
        }


        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 1000px) {

          .footer-main {
            grid-template-columns: 1.2fr 1fr;
            gap: 50px;
          }

          .footer-brand {
            grid-column: 1 / -1;
            max-width: 600px;
          }

          .footer-cta {
            padding: 40px;
          }

        }


        @media (max-width: 700px) {

          .footer-section {
            padding: 75px 18px 20px;
          }


          .footer-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px 26px;
            gap: 28px;
            border-radius: 20px;
          }


          .footer-cta h2 {
            font-size: 31px;
            letter-spacing: -1px;
          }


          .footer-cta-content p {
            font-size: 13px;
          }


          .footer-cta-button {
            width: 100%;
            justify-content: space-between;
          }


          .footer-main {
            grid-template-columns: 1fr;
            gap: 42px;
            padding: 55px 3px 40px;
          }


          .footer-brand {
            grid-column: auto;
          }


          .footer-info-strip {
            flex-direction: column;
            align-items: flex-start;
          }


          .footer-bottom {
            grid-template-columns: 1fr auto;
            gap: 15px;
            padding: 10px 0;
          }


          .footer-built {
            display: none;
          }

        }


        @media (max-width: 420px) {

          .footer-section {
            padding-left: 14px;
            padding-right: 14px;
          }


          .footer-cta {
            padding: 27px 20px;
          }


          .footer-cta h2 {
            font-size: 27px;
          }


          .footer-logo {
            font-size: 34px;
          }


          .footer-social-item {
            min-width: 0;
            width: 100%;
          }


          .footer-email {
            max-width: 100%;
            font-size: 10px;
          }


          .footer-bottom p {
            font-size: 9px;
          }


          .back-to-top {
            width: 36px;
            height: 36px;
          }

        }

      `}</style>
    </>
  );
}

export default Footer;