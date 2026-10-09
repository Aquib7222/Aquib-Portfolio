import React from "react";
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-glow about-glow-one"></div>
      <div className="about-bg-glow about-glow-two"></div>

      <div className="section-container">

        {/* =========================
            SECTION HEADING
        ========================= */}
        <div className="section-heading">
          <span className="section-label">
            01 — ABOUT
          </span>

          <h2>
            Building things that
            <span> actually matter.</span>
          </h2>

          <p className="about-heading-text">
            A Java-focused Full Stack Developer passionate about building
            practical, scalable and user-friendly digital solutions.
          </p>
        </div>

        {/* =========================
            ABOUT CONTENT
        ========================= */}
        <div className="about-grid">

          <div className="about-content">

            <div className="about-content-line"></div>

            <p className="about-lead">
              I'm a Java-focused Full Stack Developer who enjoys turning
              ideas into clean, scalable and practical web applications.
            </p>

            <p>
              My main stack includes Java, Spring Boot, React and MySQL.
              I enjoy working across both backend and frontend, from
              designing REST APIs and database structures to building
              responsive user interfaces.
            </p>

            <p>
              I'm continuously improving my development skills by building
              real-world projects and exploring better ways to write
              maintainable and scalable software.
            </p>

            <a href="#contact" className="about-link">
              <span>Let's work together</span>

              <span className="about-link-icon">
                <FiArrowUpRight size={17} />
              </span>
            </a>
          </div>

          {/* =========================
              ABOUT CARDS
          ========================= */}
          <div className="about-side">

            <div className="about-card">

              <div className="about-card-number">
                01
              </div>

              <div className="about-card-icon">
                <FiCode />
              </div>

              <div className="about-card-content">
                <strong>Clean Development</strong>
                <span>
                  Readable & maintainable code
                </span>
              </div>

            </div>

            <div className="about-card">

              <div className="about-card-number">
                02
              </div>

              <div className="about-card-icon">
                <FiLayers />
              </div>

              <div className="about-card-content">
                <strong>Full Stack Thinking</strong>
                <span>
                  Frontend + Backend + API
                </span>
              </div>

            </div>

            <div className="about-card">

              <div className="about-card-number">
                03
              </div>

              <div className="about-card-icon">
                <FiDatabase />
              </div>

              <div className="about-card-content">
                <strong>Data Driven</strong>
                <span>
                  MySQL & database design
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* =========================
            STATS
        ========================= */}
        <div className="about-stats">

          <div className="stat-item">
            <strong>3<span>+</span></strong>
            <span>Projects Built</span>
          </div>

          <div className="stat-item">
            <strong>2<span>+</span></strong>
            <span>Years Learning & Building</span>
          </div>

          <div className="stat-item">
            <strong>8<span>+</span></strong>
            <span>Core Technologies</span>
          </div>

          <div className="stat-item">
            <strong>∞</strong>
            <span>Things To Build</span>
          </div>

        </div>

      </div>

      {/* =========================
          ABOUT CSS
      ========================= */}
      <style>{`

        /* =========================
           ABOUT SECTION
        ========================= */

        .about-section {
          position: relative;
          padding: 50px 5% 120px;
          background: var(--bg);
          overflow: hidden;
        }

        .section-container {
          position: relative;
          z-index: 2;
          width: 100%;
          // max-width: 1250px;
          margin: 0 auto;
        }


        /* =========================
           BACKGROUND GLOW
        ========================= */

        .about-bg-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(90px);
          opacity: .35;
        }

        .about-glow-one {
          width: 420px;
          height: 420px;
          top: 8%;
          left: -250px;
          background: rgba(77, 163, 255, .055);
        }

        .about-glow-two {
          width: 350px;
          height: 350px;
          right: -220px;
          bottom: 5%;
          background: rgba(139, 92, 246, .045);
        }


        /* =========================
           SECTION HEADING
        ========================= */

        .section-heading {
          // max-width: 850px;
          margin-bottom: 75px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;

          color: var(--blue);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .section-label::before {
          content: "";
          width: 28px;
          height: 1px;
          background: linear-gradient(
            90deg,
            var(--blue),
            rgba(139, 92, 246, .7)
          );
        }

        .section-heading h2 {
          margin: 0;

          color: var(--white);
          font-size: clamp(44px, 5.3vw, 72px);
          line-height: .98;
          font-weight: 700;
          letter-spacing: -3.8px;
        }

        .section-heading h2 span {
          display: inline;
          background: linear-gradient(
            90deg,
            #7f8a9b 0%,
            #9ba6b7 50%,
            #718096 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-heading-text {
          // max-width: 650px;
          margin: 25px 0 0;

          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }


        /* =========================
           ABOUT GRID
        ========================= */

        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(360px, .85fr);
          gap: 80px;
          align-items: start;
        }


        /* =========================
           ABOUT CONTENT
        ========================= */

        .about-content {
          position: relative;
          // max-width: 700px;
          padding-left: 26px;
        }

        .about-content-line {
          position: absolute;
          left: 0;
          top: 5px;
          width: 1px;
          height: 92px;

          background: linear-gradient(
            to bottom,
            var(--blue),
            rgba(139, 92, 246, .45),
            transparent
          );
        }

        .about-lead {
          margin: 0 0 28px;

          color: var(--white);
          font-size: 24px;
          line-height: 1.55;
          font-weight: 500;
          letter-spacing: -.3px;
        }

        .about-content p:not(.about-lead) {
          margin: 0 0 20px;

          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }


        /* =========================
           ABOUT LINK
        ========================= */

        .about-link {
          position: relative;

          display: inline-flex;
          align-items: center;
          gap: 10px;

          margin-top: 18px;
          padding: 11px 14px;

          color: var(--white);
          text-decoration: none;

          font-size: 13px;
          font-weight: 600;

          border: 1px solid rgba(77, 163, 255, .16);
          border-radius: 10px;

          background: linear-gradient(
            135deg,
            rgba(77, 163, 255, .07),
            rgba(139, 92, 246, .06)
          );

          transition:
            transform .3s ease,
            border-color .3s ease,
            background .3s ease,
            box-shadow .3s ease;
        }

        .about-link:hover {
          color: #fff;
          transform: translateY(-3px);

          border-color: rgba(77, 163, 255, .35);

          background: linear-gradient(
            135deg,
            rgba(77, 163, 255, .13),
            rgba(139, 92, 246, .11)
          );

          box-shadow:
            0 10px 28px rgba(0, 0, 0, .22),
            0 0 25px rgba(77, 163, 255, .06);
        }

        .about-link-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 27px;
          height: 27px;

          border-radius: 7px;

          color: #fff;

          background: linear-gradient(
            135deg,
            #4da3ff,
            #6366f1,
            #8b5cf6
          );

          box-shadow: 0 5px 15px rgba(77, 163, 255, .16);

          transition: transform .3s ease;
        }

        .about-link:hover .about-link-icon {
          transform: translate(2px, -2px);
        }


        /* =========================
           ABOUT SIDE
        ========================= */

        .about-side {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }


        /* =========================
           ABOUT CARD
        ========================= */

        .about-card {
          position: relative;

          display: grid;
          grid-template-columns: 28px 48px 1fr;
          align-items: center;
          gap: 16px;

          min-height: 92px;
          padding: 18px 20px;

          border: 1px solid var(--border);
          border-radius: 18px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, .065),
              rgba(255, 255, 255, .018)
            );

          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, .035),
            0 15px 40px rgba(0, 0, 0, .12);

          overflow: hidden;

          transition:
            transform .35s ease,
            border-color .35s ease,
            background .35s ease,
            box-shadow .35s ease;
        }

        .about-card::before {
          content: "";

          position: absolute;
          left: 0;
          top: 0;

          width: 2px;
          height: 100%;

          background: linear-gradient(
            to bottom,
            transparent,
            var(--blue),
            #8b5cf6,
            transparent
          );

          opacity: .45;

          transition: opacity .3s ease;
        }

        .about-card::after {
          content: "";

          position: absolute;
          width: 120px;
          height: 120px;

          top: -70px;
          right: -60px;

          border-radius: 50%;

          background: rgba(77, 163, 255, .06);
          filter: blur(30px);

          pointer-events: none;
        }

        .about-card:hover {
          transform: translateX(6px) translateY(-2px);

          border-color: rgba(77, 163, 255, .24);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, .085),
              rgba(77, 163, 255, .025)
            );

          box-shadow:
            0 20px 45px rgba(0, 0, 0, .2),
            0 0 28px rgba(77, 163, 255, .045);
        }

        .about-card:hover::before {
          opacity: .9;
        }


        /* =========================
           CARD NUMBER
        ========================= */

        .about-card-number {
          align-self: start;
          padding-top: 3px;

          color: rgba(255, 255, 255, .25);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }


        /* =========================
           CARD ICON
        ========================= */

        .about-card-icon {
          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 14px;

          color: var(--blue);
          font-size: 20px;

          background:
            linear-gradient(
              145deg,
              rgba(77, 163, 255, .14),
              rgba(99, 102, 241, .07)
            );

          border: 1px solid rgba(77, 163, 255, .18);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, .04),
            0 8px 20px rgba(0, 0, 0, .12);

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .about-card:hover .about-card-icon {
          transform: rotate(-3deg) scale(1.04);

          border-color: rgba(77, 163, 255, .35);

          box-shadow:
            0 8px 25px rgba(77, 163, 255, .10),
            inset 0 1px 0 rgba(255, 255, 255, .06);
        }


        /* =========================
           CARD CONTENT
        ========================= */

        .about-card-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .about-card-content strong {
          color: var(--white);

          font-size: 14px;
          font-weight: 600;
          letter-spacing: -.1px;
        }

        .about-card-content span {
          color: var(--muted);

          font-size: 12px;
          line-height: 1.5;
        }


        /* =========================
           STATS
        ========================= */

        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          margin-top: 90px;

          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .stat-item {
          position: relative;

          padding: 34px 20px;

          text-align: center;

          border-right: 1px solid var(--border);

          transition: background .3s ease;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-item:hover {
          background: rgba(255, 255, 255, .018);
        }

        .stat-item strong {
          display: block;

          margin-bottom: 8px;

          color: var(--white);

          font-size: 38px;
          line-height: 1;

          font-weight: 700;
          letter-spacing: -1.5px;
        }

        .stat-item strong span {
          color: var(--blue);
          font-size: 25px;
          margin-left: 1px;
        }

        .stat-item > span {
          color: var(--muted);

          font-size: 12px;
          letter-spacing: .2px;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1100px) {

          .about-grid {
            grid-template-columns: 1fr 380px;
            gap: 50px;
          }

          .section-heading h2 {
            font-size: clamp(44px, 6vw, 64px);
          }

        }


        /* =========================
           MOBILE TABLET
        ========================= */

        @media (max-width: 900px) {

          .about-section {
            padding-top: 110px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .about-content {
            max-width: 100%;
          }

          .about-side {
            max-width: 650px;
          }

          .about-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-item:nth-child(2) {
            border-right: none;
          }

          .stat-item:nth-child(1),
          .stat-item:nth-child(2) {
            border-bottom: 1px solid var(--border);
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .about-section {
            padding: 90px 5% 80px;
          }

          .section-heading {
            margin-bottom: 52px;
          }

          .section-label {
            font-size: 10px;
            letter-spacing: 2px;
          }

          .section-heading h2 {
            font-size: 40px;
            line-height: 1;
            letter-spacing: -2.2px;
          }

          .about-heading-text {
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.75;
          }

          .about-content {
            padding-left: 20px;
          }

          .about-lead {
            font-size: 20px;
            line-height: 1.55;
          }

          .about-content p:not(.about-lead) {
            font-size: 14px;
            line-height: 1.8;
          }

          .about-card {
            grid-template-columns: 22px 44px 1fr;
            gap: 12px;
            min-height: 82px;
            padding: 15px;
            border-radius: 16px;
          }

          .about-card-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            font-size: 18px;
          }

          .about-card-content strong {
            font-size: 13px;
          }

          .about-card-content span {
            font-size: 11px;
          }

          .about-card-number {
            font-size: 9px;
          }

          .about-stats {
            margin-top: 60px;
          }

          .stat-item {
            padding: 26px 8px;
          }

          .stat-item strong {
            font-size: 30px;
          }

          .stat-item strong span {
            font-size: 20px;
          }

          .stat-item > span {
            font-size: 11px;
          }

        }


        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 400px) {

          .section-heading h2 {
            font-size: 36px;
          }

          .about-card {
            grid-template-columns: 18px 42px 1fr;
            gap: 10px;
            padding: 13px;
          }

          .about-card-icon {
            width: 42px;
            height: 42px;
          }

          .about-card-content strong {
            font-size: 12px;
          }

          .about-card-content span {
            font-size: 10px;
          }

          .stat-item strong {
            font-size: 27px;
          }

        }

      `}</style>
    </section>
  );
}

export default About;