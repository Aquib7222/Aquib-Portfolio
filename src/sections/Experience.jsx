
import React from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiLayers,
} from "react-icons/fi";

function Experience() {
  return (
    <section className="experience-section" id="experience">

      

      <div className="experience-glow experience-glow-one"></div>
      <div className="experience-glow experience-glow-two"></div>


      <div className="section-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="section-heading experience-heading">

          <span className="section-label">
            04 — EXPERIENCE
          </span>

          <h2>
            Where I've been
            <span> building.</span>
          </h2>

          <p>
            My professional experience and the kind of work I have been
            building independently as a developer.
          </p>

        </div>


        {/* =========================
            EXPERIENCE GRID
        ========================= */}

        <div className="experience-grid">


          {/* =====================================
              PROFESSIONAL EXPERIENCE
          ===================================== */}

          <article className="experience-card professional-card">

            {/* TOP ACCENT */}

            <div className="experience-card-accent"></div>


            {/* CARD TOP */}

            <div className="experience-top">

              <div className="experience-number">
                <span>01</span>
              </div>

              <span className="experience-type">
                PROFESSIONAL EXPERIENCE
              </span>

              <div className="experience-top-icon">
                <FiArrowUpRight size={19} />
              </div>

            </div>


            {/* HEADER */}

            <div className="experience-header">

              <span className="experience-period">
                APRIL 2024 — JANUARY 2025
              </span>

              <h3>
                Java Full Stack Developer
              </h3>

              <div className="experience-company">
                <span className="company-icon">
                  <FiBriefcase size={13} />
                </span>

                <span>
                  Skoodle Learning Pvt. Ltd.
                </span>
              </div>

            </div>


            {/* DIVIDER */}

            <div className="experience-divider"></div>


            {/* DESCRIPTION */}

            <p className="experience-description">
              Worked as a Java Full Stack Developer on a School ERP
              application, contributing to both backend and frontend
              development for school management workflows.
            </p>


            {/* EXPERIENCE DETAILS */}

            <div className="experience-details">

              {/* RESPONSIBILITIES */}

              <div className="experience-detail-block">

                <div className="experience-detail-title">
                  <span className="detail-icon">
                    <FiCheck size={12} />
                  </span>

                  <span>WHAT I WORKED ON</span>
                </div>

                <ul className="experience-list">

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>
                    <span>
                      Developed and maintained backend functionality
                      using Java and Spring Boot.
                    </span>
                  </li>

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>
                    <span>
                      Built and integrated REST APIs for school ERP
                      modules.
                    </span>
                  </li>

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>
                    <span>
                      Worked on React-based frontend interfaces.
                    </span>
                  </li>

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>
                    <span>
                      Worked with MySQL databases and data integration.
                    </span>
                  </li>

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>
                    <span>
                      Fixed bugs and improved existing application
                      functionality.
                    </span>
                  </li>

                </ul>

              </div>


              {/* TECHNOLOGIES */}

              <div className="experience-detail-block">

                <div className="experience-detail-title">
                  <span className="detail-icon">
                    <FiCode size={12} />
                  </span>

                  <span>TECHNOLOGIES</span>
                </div>

                <div className="experience-tech-list">

                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>MySQL</span>
                  <span>REST API</span>
                  <span>Git</span>

                </div>

              </div>

            </div>

          </article>


          {/* =====================================
              PERSONAL DEVELOPMENT
          ===================================== */}

          <article className="experience-card personal-card">

            {/* TOP ACCENT */}

            <div className="experience-card-accent"></div>


            {/* CARD TOP */}

            <div className="experience-top">

              <div className="experience-number">
                <span>02</span>
              </div>

              <span className="experience-type">
                PERSONAL DEVELOPMENT
              </span>

              <div className="experience-top-icon">
                <FiArrowUpRight size={19} />
              </div>

            </div>


            {/* HEADER */}

            <div className="experience-header">

              <span className="experience-period">
                CONTINUOUSLY BUILDING
              </span>

              <h3>
                Independent Developer
              </h3>

              <div className="experience-company">
                <span className="company-icon">
                  <FiLayers size={13} />
                </span>

                <span>
                  Self Projects
                </span>
              </div>

            </div>


            {/* DIVIDER */}

            <div className="experience-divider"></div>


            {/* DESCRIPTION */}

            <p className="experience-description">
              Alongside professional development, I have been building
              independent projects to improve my full stack development
              skills and create practical real-world applications.
            </p>


            {/* EXPERIENCE DETAILS */}

            <div className="experience-details">

              {/* PROJECTS */}

              <div className="experience-detail-block">

                <div className="experience-detail-title">
                  <span className="detail-icon">
                    <FiCheck size={12} />
                  </span>

                  <span>PROJECTS</span>
                </div>

                <ul className="experience-list">

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>

                    <span>
                      Zyntaks Education — School Management ERP
                    </span>
                  </li>

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>

                    <span>
                      Wisdom Public School — School Landing Page
                    </span>
                  </li>

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>

                    <span>
                      Zayan Opticals — Sunglasses E-Commerce Website
                    </span>
                  </li>

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>

                    <span>
                      Zyntaks Digital Solutions — Business Website
                    </span>
                  </li>

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>

                    <span>
                      Hospital Management System
                    </span>
                  </li>

                  <li>
                    <span className="list-check">
                      <FiCheck size={10} />
                    </span>

                    <span>
                      Calculator, Weather App and other mini projects
                    </span>
                  </li>

                </ul>

              </div>


              {/* FOCUS */}

              <div className="experience-detail-block">

                <div className="experience-detail-title">
                  <span className="detail-icon">
                    <FiCode size={12} />
                  </span>

                  <span>FOCUS</span>
                </div>

                <div className="experience-tech-list">

                  <span>Full Stack</span>
                  <span>Web Development</span>
                  <span>REST APIs</span>
                  <span>Database</span>
                  <span>UI Development</span>
                  <span>Deployment</span>

                </div>

              </div>

            </div>

          </article>

        </div>

      </div>


      {/* =========================
          CSS
      ========================= */}

      <style>{`

        /* =========================================
           EXPERIENCE SECTION
        ========================================= */

        .experience-section {
          position: relative;
          padding: 100px 5% 125px;
          background: var(--bg-soft);
          overflow: hidden;
        }


        .experience-section .section-container {
          position: relative;
          z-index: 2;
          // max-width: 1250px;
          margin: 0 auto;
        }


        /* =========================================
           BACKGROUND GLOWS
        ========================================= */

        .experience-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(120px);
        }


        .experience-glow-one {
          width: 520px;
          height: 520px;
          left: -380px;
          top: 12%;
          background: rgba(77, 163, 255, 0.055);
        }


        .experience-glow-two {
          width: 500px;
          height: 500px;
          right: -350px;
          bottom: 3%;
          background: rgba(139, 92, 246, 0.05);
        }


        /* =========================================
           HEADING
        ========================================= */

        .experience-heading {
          max-width: 850px;
          margin-bottom: 55px;
        }


        .experience-heading p {
          max-width: 680px;
          margin: 23px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }


        /* =========================================
           EXPERIENCE GRID
        ========================================= */

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }


        /* =========================================
           EXPERIENCE CARD
        ========================================= */

        .experience-card {
          position: relative;
          min-width: 0;
          display: flex;
          flex-direction: column;

          padding: 27px;

          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.06),
              rgba(255, 255, 255, 0.018)
            );

          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.035),
            0 20px 50px rgba(0, 0, 0, 0.14);

          overflow: hidden;

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            background 0.35s ease;
        }


        .experience-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(77, 163, 255, 0.08),
              transparent 28%
            );
          pointer-events: none;
        }


        .personal-card::before {
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(139, 92, 246, 0.09),
              transparent 28%
            );
        }


        .experience-card:hover {
          transform: translateY(-7px);

          border-color: rgba(77, 163, 255, 0.23);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.075),
              rgba(77, 163, 255, 0.018)
            );

          box-shadow:
            0 28px 65px rgba(0, 0, 0, 0.23),
            0 0 35px rgba(77, 163, 255, 0.045);
        }


        .personal-card:hover {
          border-color: rgba(139, 92, 246, 0.25);

          box-shadow:
            0 28px 65px rgba(0, 0, 0, 0.23),
            0 0 35px rgba(139, 92, 246, 0.045);
        }


        /* =========================================
           CARD ACCENT
        ========================================= */

        .experience-card-accent {
          position: absolute;
          top: 0;
          left: 30px;
          right: 30px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(77, 163, 255, 0.75),
              transparent
            );

          opacity: 0.65;
        }


        .personal-card .experience-card-accent {
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(139, 92, 246, 0.75),
              rgba(77, 163, 255, 0.45),
              transparent
            );
        }


        /* =========================================
           CARD TOP
        ========================================= */

        .experience-top {
          position: relative;
          z-index: 1;

          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 25px;
        }


        .experience-number {
          width: 39px;
          height: 39px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(77, 163, 255, 0.18);
          border-radius: 10px;

          background:
            linear-gradient(
              145deg,
              rgba(77, 163, 255, 0.11),
              rgba(139, 92, 246, 0.06)
            );

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }


        .experience-number span {
          color: var(--blue);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }


        .personal-card .experience-number {
          border-color: rgba(139, 92, 246, 0.2);
          background:
            linear-gradient(
              145deg,
              rgba(139, 92, 246, 0.12),
              rgba(77, 163, 255, 0.055)
            );
        }


        .personal-card .experience-number span {
          color: #9b7bff;
        }


        .experience-type {
          color: #697586;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.35px;
        }


        .experience-top-icon {
          width: 37px;
          height: 37px;
          margin-left: auto;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #5c6878;

          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;

          background: rgba(255, 255, 255, 0.025);

          transition:
            color 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }


        .experience-card:hover .experience-top-icon {
          color: var(--blue);
          border-color: rgba(77, 163, 255, 0.25);
          background: rgba(77, 163, 255, 0.06);
          transform: translate(2px, -2px);
        }


        .personal-card:hover .experience-top-icon {
          color: #9b7bff;
          border-color: rgba(139, 92, 246, 0.25);
          background: rgba(139, 92, 246, 0.06);
        }


        /* =========================================
           HEADER
        ========================================= */

        .experience-header {
          position: relative;
          z-index: 1;
        }


        .experience-period {
          display: inline-block;
          margin-bottom: 10px;

          color: var(--blue);

          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.25px;
        }


        .personal-card .experience-period {
          color: #9b7bff;
        }


        .experience-header h3 {
          margin: 0;

          color: var(--white);

          font-size: clamp(23px, 2.3vw, 29px);
          line-height: 1.2;
          font-weight: 680;
          letter-spacing: -0.9px;
        }


        .experience-company {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-top: 12px;

          color: #a5afbd;

          font-size: 12px;
          font-weight: 600;
        }


        .company-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 27px;
          height: 27px;

          color: var(--blue);

          border: 1px solid rgba(77, 163, 255, 0.13);
          border-radius: 7px;

          background: rgba(77, 163, 255, 0.05);
        }


        .personal-card .company-icon {
          color: #9b7bff;
          border-color: rgba(139, 92, 246, 0.15);
          background: rgba(139, 92, 246, 0.05);
        }


        /* =========================================
           DIVIDER
        ========================================= */

        .experience-divider {
          position: relative;
          z-index: 1;

          width: 100%;
          height: 1px;

          margin: 22px 0 20px;

          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.09),
              rgba(255, 255, 255, 0.025),
              transparent
            );
        }


        /* =========================================
           DESCRIPTION
        ========================================= */

        .experience-description {
          position: relative;
          z-index: 1;

          margin: 0 0 28px;

          color: var(--muted);

          font-size: 12px;
          line-height: 1.8;
        }


        /* =========================================
           DETAILS
        ========================================= */

        .experience-details {
          position: relative;
          z-index: 1;

          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(150px, 0.75fr);
          gap: 25px;

          margin-top: auto;
        }


        .experience-detail-block {
          min-width: 0;
        }


        /* =========================================
           DETAIL TITLE
        ========================================= */

        .experience-detail-title {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 14px;

          color: #677384;

          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.35px;
        }


        .detail-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 20px;
          height: 20px;

          color: var(--blue);

          border: 1px solid rgba(77, 163, 255, 0.13);
          border-radius: 6px;

          background: rgba(77, 163, 255, 0.04);
        }


        .personal-card .detail-icon {
          color: #9b7bff;
          border-color: rgba(139, 92, 246, 0.15);
          background: rgba(139, 92, 246, 0.04);
        }


        /* =========================================
           LIST
        ========================================= */

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 10px;

          margin: 0;
          padding: 0;

          list-style: none;
        }


        .experience-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;

          color: #818c9b;

          font-size: 10px;
          line-height: 1.65;
        }


        .list-check {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 17px;
          height: 17px;
          margin-top: 1px;

          flex-shrink: 0;

          color: var(--blue);

          border: 1px solid rgba(77, 163, 255, 0.15);
          border-radius: 5px;

          background: rgba(77, 163, 255, 0.035);
        }


        .personal-card .list-check {
          color: #9b7bff;
          border-color: rgba(139, 92, 246, 0.15);
          background: rgba(139, 92, 246, 0.035);
        }


        /* =========================================
           TECHNOLOGY TAGS
        ========================================= */

        .experience-tech-list {
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          gap: 7px;
        }


        .experience-tech-list span {
          display: inline-flex;
          align-items: center;

          padding: 7px 9px;

          color: #8d98a8;

          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 7px;

          background: rgba(255, 255, 255, 0.025);

          font-size: 8px;
          font-weight: 650;

          transition:
            color 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }


        .experience-tech-list span:hover {
          color: #e7edf5;

          border-color: rgba(77, 163, 255, 0.22);
          background: rgba(77, 163, 255, 0.055);

          transform: translateY(-2px);
        }


        .personal-card .experience-tech-list span:hover {
          border-color: rgba(139, 92, 246, 0.25);
          background: rgba(139, 92, 246, 0.055);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {

          .experience-section {
            padding-left: 4%;
            padding-right: 4%;
          }


          .experience-grid {
            gap: 16px;
          }


          .experience-card {
            padding: 23px;
          }


          .experience-details {
            grid-template-columns: 1fr;
            gap: 27px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .experience-section {
            padding: 85px 5% 90px;
          }


          .experience-heading {
            margin-bottom: 45px;
          }


          .experience-heading p {
            font-size: 13px;
            line-height: 1.8;
          }


          .experience-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }


          .experience-card {
            padding: 21px;
            border-radius: 19px;
          }


          .experience-top {
            margin-bottom: 21px;
          }


          .experience-header h3 {
            font-size: 23px;
          }


          .experience-description {
            font-size: 12px;
            line-height: 1.8;
          }


          .experience-details {
            gap: 25px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 420px) {

          .experience-section {
            padding-left: 4%;
            padding-right: 4%;
          }


          .experience-card {
            padding: 18px;
            border-radius: 17px;
          }


          .experience-top {
            gap: 8px;
          }


          .experience-number {
            width: 35px;
            height: 35px;
            border-radius: 9px;
          }


          .experience-type {
            font-size: 7px;
            letter-spacing: 1px;
          }


          .experience-top-icon {
            width: 33px;
            height: 33px;
            border-radius: 8px;
          }


          .experience-header h3 {
            font-size: 21px;
          }


          .experience-period {
            font-size: 8px;
          }


          .experience-company {
            font-size: 10px;
          }


          .experience-description {
            font-size: 11px;
          }


          .experience-list li {
            font-size: 9.5px;
          }


          .experience-tech-list span {
            padding: 6px 8px;
            font-size: 7.5px;
          }

        }

      `}</style>

    </section>
  );
}

export default Experience;