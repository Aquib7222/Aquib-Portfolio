
import React from "react";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

function Education() {
  const education = [
    {
      number: "01",
      period: "2019 — 2023",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institute: "Jai Narain College of Technology",
      location: "India",
      focus: [
        "Java",
        "Data Structures",
        "DBMS",
        "Web Development",
        "Computer Networks",
        "Software Engineering",
      ],
    },
    {
      number: "02",
      period: "INTERMEDIATE",
      degree: "Intermediate",
      field: "Science",
      institute: "H.R.B.D.B College",
      location: "India",
      focus: [
        "Physics",
        "Chemistry",
        "Mathematics",
        
      ],
    },
    {
      number: "03",
      period: "MATRICULATION",
      degree: "Matriculation",
      field: "Secondary Education",
      institute: "Indian Public School",
      location: "India",
      focus: [
        "Mathematics",
        "Science",
        "English",
        "Computer Fundamentals",
      ],
    },
  ];

  return (
    <section className="education-section" id="education">

      {/* Background Glows */}
      <div className="education-glow education-glow-one"></div>
      <div className="education-glow education-glow-two"></div>

      <div className="section-container">

        {/* SECTION HEADING */}
        <div className="section-heading education-heading">

          <span className="section-label">
            05 — EDUCATION
          </span>

          <h2>
            My academic
            <span> journey.</span>
          </h2>

          <p>
            My academic background and the foundation that helped me build
            my career in software development.
          </p>

        </div>


        {/* EDUCATION GRID */}
        <div className="education-grid">

          {education.map((item) => (
            <article
              className={`education-card ${
                item.number === "01" ? "education-featured" : ""
              }`}
              key={item.number}
            >

              {/* TOP */}
              <div className="education-card-top">

                <div className="education-icon">
                  <FiBookOpen size={20} />
                </div>

                <span className="education-number">
                  {item.number}
                </span>

              </div>


              {/* MAIN */}
              <div className="education-main">

                <div className="education-info">

                  <span className="education-period">
                    {item.period}
                  </span>

                  <h3>
                    {item.degree}
                  </h3>

                  <h4>
                    {item.field}
                  </h4>

                  <p className="education-institute">
                    {item.institute}
                  </p>

                  <div className="education-meta">

                    <span>
                      <FiCalendar size={13} />
                      {item.period}
                    </span>

                    <span>
                      <FiMapPin size={13} />
                      {item.location}
                    </span>

                  </div>

                </div>


                {/* ACADEMIC FOCUS */}
                <div className="education-focus">

                  <span className="education-label">
                    ACADEMIC FOCUS
                  </span>

                  <div className="education-tags">

                    {item.focus.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </div>


              {/* FOOTER */}
              <div className="education-footer">

                <span>
                  {item.field}
                </span>

                <div className="education-arrow">
                  <FiArrowUpRight size={17} />
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>


      <style>{`

        /* =========================================
           EDUCATION SECTION
        ========================================= */

        .education-section {
          position: relative;
          padding: 95px 5% 125px;
          background: var(--bg);
          overflow: hidden;
        }

        .education-section .section-container {
          position: relative;
          z-index: 2;
        }


        /* =========================================
           BACKGROUND GLOWS
        ========================================= */

        .education-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(110px);
        }

        .education-glow-one {
          width: 500px;
          height: 500px;
          left: -350px;
          top: 10%;
          background: rgba(77, 163, 255, 0.045);
        }

        .education-glow-two {
          width: 450px;
          height: 450px;
          right: -300px;
          bottom: 5%;
          background: rgba(139, 92, 246, 0.04);
        }


        /* =========================================
           HEADING
        ========================================= */

        .education-heading {
          max-width: 850px;
          margin-bottom: 65px;
        }

        .education-heading p {
          max-width: 680px;
          margin: 25px 0 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }


        /* =========================================
           EDUCATION GRID
        ========================================= */

        .education-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }


        /* =========================================
           CARD
        ========================================= */

        .education-card {
          position: relative;
          min-width: 0;
          padding: 24px;

          border: 1px solid var(--border);
          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.06),
              rgba(255, 255, 255, 0.015)
            );

          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.035),
            0 18px 45px rgba(0, 0, 0, 0.13);

          overflow: hidden;

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .education-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;

          background:
            linear-gradient(
              to bottom,
              transparent,
              var(--blue),
              #8b5cf6,
              transparent
            );

          opacity: 0.3;

          transition: opacity 0.35s ease;
        }

        .education-card::after {
          content: "";
          position: absolute;

          width: 190px;
          height: 190px;

          right: -100px;
          top: -100px;

          border-radius: 50%;

          background: rgba(77, 163, 255, 0.045);

          filter: blur(45px);

          pointer-events: none;
        }

        .education-card:hover {
          transform: translateY(-7px);

          border-color: rgba(77, 163, 255, 0.24);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.08),
              rgba(77, 163, 255, 0.02)
            );

          box-shadow:
            0 25px 55px rgba(0, 0, 0, 0.23),
            0 0 35px rgba(77, 163, 255, 0.05);
        }

        .education-card:hover::before {
          opacity: 0.9;
        }

        .education-featured {
          border-color: rgba(77, 163, 255, 0.2);

          background:
            linear-gradient(
              145deg,
              rgba(77, 163, 255, 0.055),
              rgba(139, 92, 246, 0.018),
              rgba(255, 255, 255, 0.025)
            );
        }

        .education-featured::before {
          opacity: 0.7;
        }


        /* =========================================
           CARD TOP
        ========================================= */

        .education-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-bottom: 18px;

          border-bottom: 1px solid rgba(255, 255, 255, 0.055);
        }

        .education-icon {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--blue);

          border: 1px solid rgba(77, 163, 255, 0.18);
          border-radius: 11px;

          background: rgba(77, 163, 255, 0.055);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .education-card:hover .education-icon {
          transform: translateY(-2px);
          background: rgba(77, 163, 255, 0.1);
          border-color: rgba(77, 163, 255, 0.3);
        }

        .education-number {
          color: rgba(255, 255, 255, 0.28);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }


        /* =========================================
           MAIN
        ========================================= */

        .education-main {
          padding-top: 23px;
        }

        .education-period {
          display: inline-block;
          margin-bottom: 10px;

          color: var(--blue);

          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.3px;
        }

        .education-info h3 {
          margin: 0;

          color: var(--white);

          font-size: 25px;
          line-height: 1.25;
          font-weight: 650;

          letter-spacing: -0.7px;
        }

        .education-info h4 {
          margin: 7px 0 0;

          color: #b7c0ce;

          font-size: 13px;
          font-weight: 500;
          line-height: 1.5;
        }

        .education-institute {
          margin: 16px 0 0;

          color: var(--text);

          font-size: 12px;
          font-weight: 600;
          line-height: 1.5;
        }


        /* =========================================
           META
        ========================================= */

        .education-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;

          margin-top: 13px;
        }

        .education-meta span {
          display: flex;
          align-items: center;
          gap: 6px;

          color: var(--muted);

          font-size: 10px;
        }

        .education-meta svg {
          color: var(--blue);
        }


        /* =========================================
           FOCUS
        ========================================= */

        .education-focus {
          margin-top: 28px;
        }

        .education-label {
          display: block;
          margin-bottom: 13px;

          color: rgba(255, 255, 255, 0.4);

          font-size: 8px;
          font-weight: 700;

          letter-spacing: 1.3px;
        }

        .education-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .education-tags span {
          padding: 6px 8px;

          color: #aeb8c7;

          font-size: 9px;
          font-weight: 600;

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 7px;

          background: rgba(255, 255, 255, 0.025);

          transition:
            color 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .education-tags span:hover {
          color: var(--white);

          border-color: rgba(77, 163, 255, 0.25);

          background: rgba(77, 163, 255, 0.055);

          transform: translateY(-2px);
        }


        /* =========================================
           FOOTER
        ========================================= */

        .education-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;

          margin-top: 27px;
          padding-top: 17px;

          border-top: 1px solid rgba(255, 255, 255, 0.055);

          color: rgba(255, 255, 255, 0.35);

          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .education-arrow {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9px;

          background: rgba(255, 255, 255, 0.025);

          transition:
            color 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .education-card:hover .education-arrow {
          color: var(--blue);

          border-color: rgba(77, 163, 255, 0.25);

          background: rgba(77, 163, 255, 0.055);

          transform: translateY(-2px);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .education-section {
            padding-top: 110px;
          }

          .education-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 650px) {

          .education-section {
            padding: 90px 5% 80px;
          }

          .education-heading {
            margin-bottom: 50px;
          }

          .education-heading p {
            font-size: 14px;
            line-height: 1.8;
          }

          .education-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .education-card {
            padding: 19px;
            border-radius: 18px;
          }

          .education-info h3 {
            font-size: 23px;
          }

          .education-info h4 {
            font-size: 12px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {

          .education-section {
            padding: 80px 5% 70px;
          }

          .education-card {
            padding: 16px;
          }

          .education-info h3 {
            font-size: 21px;
          }

          .education-institute {
            font-size: 11px;
          }

          .education-tags span {
            font-size: 8px;
            padding: 6px 7px;
          }

          .education-footer {
            font-size: 8px;
          }

        }

      `}</style>
    </section>
  );
}

export default Education;
