import React from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "Java",
      category: "Backend",
      icon: <FaJava />,
      level: "Core",
    },
    {
      name: "Spring Boot",
      category: "Backend",
      icon: <SiSpringboot />,
      level: "Core",
    },
    {
      name: "React",
      category: "Frontend",
      icon: <FaReact />,
      level: "Core",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: <FaJs />,
      level: "Core",
    },
    {
      name: "MySQL",
      category: "Database",
      icon: <SiMysql />,
      level: "Core",
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FaHtml5 />,
      level: "Strong",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FaCss3Alt />,
      level: "Strong",
    },
    {
      name: "Bootstrap",
      category: "UI",
      icon: <SiBootstrap />,
      level: "Strong",
    },
    {
      name: "Git",
      category: "Tools",
      icon: <FaGitAlt />,
      level: "Working",
    },
    {
      name: "Postman",
      category: "API",
      icon: <SiPostman />,
      level: "Working",
    },
  ];

  return (
    <section className="skills-section" id="skills">

      {/* Background glow */}
      <div className="skills-bg-glow skills-glow-one"></div>
      <div className="skills-bg-glow skills-glow-two"></div>

      <div className="section-container">

        {/* =========================
            HEADING
        ========================= */}
        <div className="section-heading skills-heading">

          <span className="section-label">
            02 — SKILLS
          </span>

          <h2>
            Tools I use to
            <span> build.</span>
          </h2>

          <p>
            A practical stack focused on building modern frontend
            interfaces, scalable backend services and reliable
            database-driven applications.
          </p>

        </div>


        {/* =========================
            SKILLS GRID
        ========================= */}
        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.name}>

              {/* Top */}
              <div className="skill-card-top">

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="skill-category">
                  {skill.category}
                </span>

              </div>


              {/* Icon */}
              <div className="skill-icon-wrapper">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div className="skill-icon-glow"></div>

              </div>


              {/* Bottom */}
              <div className="skill-card-bottom">

                <div>
                  <h3>{skill.name}</h3>

                  <span className="skill-level">
                    {skill.level}
                  </span>
                </div>

                <div className="skill-status">
                  <span></span>
                </div>

              </div>

            </div>
          ))}

        </div>


        {/* =========================
            DEVELOPMENT STACK
        ========================= */}
        <div className="skills-stack">

          <div className="stack-header">
            <div className="stack-title">
              <span className="stack-title-line"></span>
              <span>MY DEVELOPMENT STACK</span>
            </div>

            <span className="stack-status">
              10+ TECHNOLOGIES
            </span>
          </div>


          <div className="stack-line">

            <div className="stack-line-label">
              <span className="stack-index">01</span>
              <span>Frontend</span>
            </div>

            <p>
              React · JavaScript · HTML · CSS · Bootstrap
            </p>

          </div>


          <div className="stack-line">

            <div className="stack-line-label">
              <span className="stack-index">02</span>
              <span>Backend</span>
            </div>

            <p>
              Java · Spring Boot · REST APIs · Spring Security
            </p>

          </div>


          <div className="stack-line">

            <div className="stack-line-label">
              <span className="stack-index">03</span>
              <span>Database</span>
            </div>

            <p>
              MySQL · JPA · Hibernate · Database Design
            </p>

          </div>


          <div className="stack-line">

            <div className="stack-line-label">
              <span className="stack-index">04</span>
              <span>Tools</span>
            </div>

            <p>
              Git · GitHub · Postman · VS Code · IntelliJ IDEA
            </p>

          </div>

        </div>

      </div>


      {/* =========================
          SKILLS CSS
      ========================= */}
      <style>{`

        /* =========================
           SKILLS SECTION
        ========================= */

        .skills-section {
          position: relative;
          padding: 95px 5% 125px;
background: var(--bg-soft);          overflow: hidden;
        }

        .skills-section .section-container {
          position: relative;
          z-index: 2;
        }


        /* =========================
           BACKGROUND GLOW
        ========================= */

        .skills-bg-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
        }

        .skills-glow-one {
          width: 450px;
          height: 450px;
          top: 5%;
          right: -300px;
          background: rgba(77, 163, 255, .045);
        }

        .skills-glow-two {
          width: 380px;
          height: 380px;
          bottom: 10%;
          left: -280px;
          background: rgba(139, 92, 246, .04);
        }


        /* =========================
           HEADING
        ========================= */

        .skills-heading {
          max-width: 850px;
          margin-bottom: 65px;
        }

        .skills-heading p {
          max-width: 680px;
          margin: 25px 0 0;

          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }


        /* =========================
           SKILLS GRID
        ========================= */

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }


        /* =========================
           SKILL CARD
        ========================= */

        .skill-card {
          position: relative;

          min-height: 205px;
          padding: 18px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

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

        .skill-card::before {
          content: "";

          position: absolute;
          left: 0;
          bottom: 0;

          width: 100%;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(77, 163, 255, .6),
              rgba(139, 92, 246, .55),
              transparent
            );

          opacity: 0;

          transition: opacity .35s ease;
        }

        .skill-card::after {
          content: "";

          position: absolute;

          width: 130px;
          height: 130px;

          right: -70px;
          top: -70px;

          border-radius: 50%;

          background: rgba(77, 163, 255, .055);
          filter: blur(35px);

          pointer-events: none;
        }

        .skill-card:hover {
          transform: translateY(-7px);

          border-color: rgba(77, 163, 255, .25);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, .085),
              rgba(77, 163, 255, .025)
            );

          box-shadow:
            0 22px 45px rgba(0, 0, 0, .22),
            0 0 30px rgba(77, 163, 255, .05);
        }

        .skill-card:hover::before {
          opacity: 1;
        }


        /* =========================
           CARD TOP
        ========================= */

        .skill-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-number {
          color: rgba(255, 255, 255, .25);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .skill-category {
          padding: 5px 8px;

          color: var(--muted);

          font-size: 9px;
          font-weight: 600;
          letter-spacing: .8px;
          text-transform: uppercase;

          border: 1px solid rgba(255, 255, 255, .08);
          border-radius: 7px;

          background: rgba(255, 255, 255, .025);
        }


        /* =========================
           ICON
        ========================= */

        .skill-icon-wrapper {
          position: relative;

          width: 55px;
          height: 55px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-icon {
          position: relative;
          z-index: 2;

          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--blue);
          font-size: 28px;

          border-radius: 15px;

          border: 1px solid rgba(77, 163, 255, .16);

          background:
            linear-gradient(
              145deg,
              rgba(77, 163, 255, .13),
              rgba(99, 102, 241, .055)
            );

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, .045),
            0 8px 22px rgba(0, 0, 0, .13);

          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .skill-icon-glow {
          position: absolute;

          width: 35px;
          height: 35px;

          border-radius: 50%;

          background: rgba(77, 163, 255, .18);
          filter: blur(18px);

          opacity: .25;

          transition: opacity .35s ease;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.07) rotate(-3deg);

          border-color: rgba(77, 163, 255, .32);

          box-shadow:
            0 8px 25px rgba(77, 163, 255, .09),
            inset 0 1px 0 rgba(255, 255, 255, .06);
        }

        .skill-card:hover .skill-icon-glow {
          opacity: .55;
        }


        /* =========================
           CARD BOTTOM
        ========================= */

        .skill-card-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
        }

        .skill-card-bottom h3 {
          margin: 0 0 6px;

          color: var(--white);

          font-size: 14px;
          font-weight: 600;
          letter-spacing: -.2px;
        }

        .skill-level {
          color: var(--muted);

          font-size: 10px;
          font-weight: 600;
          letter-spacing: .6px;
          text-transform: uppercase;
        }


        /* =========================
           STATUS DOT
        ========================= */

        .skill-status {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 20px;
          height: 20px;

          border-radius: 50%;

          background: rgba(77, 163, 255, .055);
          border: 1px solid rgba(77, 163, 255, .12);
        }

        .skill-status span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: var(--blue);

          box-shadow:
            0 0 8px rgba(77, 163, 255, .65);

          transition: transform .3s ease;
        }

        .skill-card:hover .skill-status span {
          transform: scale(1.35);
        }


        /* =========================
           DEVELOPMENT STACK
        ========================= */

        .skills-stack {
          position: relative;

          margin-top: 75px;

          border: 1px solid var(--border);
          border-radius: 20px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, .045),
              rgba(255, 255, 255, .012)
            );

          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);

          overflow: hidden;
        }


        /* =========================
           STACK HEADER
        ========================= */

        .stack-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 20px 24px;

          border-bottom: 1px solid var(--border);

          background: rgba(255, 255, 255, .018);
        }

        .stack-title {
          display: flex;
          align-items: center;
          gap: 11px;

          color: var(--white);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .stack-title-line {
          width: 22px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              var(--blue),
              #8b5cf6
            );
        }

        .stack-status {
          color: rgba(255, 255, 255, .28);

          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
        }


        /* =========================
           STACK LINE
        ========================= */

        .stack-line {
          display: grid;
          grid-template-columns: 190px 1fr;

          align-items: center;

          min-height: 66px;

          padding: 0 24px;

          border-bottom: 1px solid rgba(255, 255, 255, .055);

          transition:
            background .3s ease,
            padding-left .3s ease;
        }

        .stack-line:last-child {
          border-bottom: none;
        }

        .stack-line:hover {
          padding-left: 29px;
          background: rgba(77, 163, 255, .018);
        }


        /* =========================
           STACK LABEL
        ========================= */

        .stack-line-label {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .stack-index {
          color: rgba(255, 255, 255, .22);

          font-size: 9px;
          font-weight: 700;
          letter-spacing: .8px;
        }

        .stack-line-label > span:last-child {
          color: var(--white);

          font-size: 13px;
          font-weight: 600;
        }


        /* =========================
           STACK DESCRIPTION
        ========================= */

        .stack-line p {
          margin: 0;

          color: var(--muted);

          font-size: 12px;
          line-height: 1.6;
        }


        /* =========================
           LARGE TABLET
        ========================= */

        @media (max-width: 1100px) {

          .skills-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .skill-card:last-child {
            grid-column: span 1;
          }

        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {

          .skills-section {
            padding-top: 110px;
          }

          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .stack-line {
            grid-template-columns: 160px 1fr;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .skills-section {
            padding: 90px 5% 80px;
          }

          .skills-heading {
            margin-bottom: 50px;
          }

          .skills-heading p {
            font-size: 14px;
            line-height: 1.8;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 11px;
          }

          .skill-card {
            min-height: 185px;
            padding: 15px;
            border-radius: 16px;
          }

          .skill-icon {
            width: 47px;
            height: 47px;
            font-size: 24px;
            border-radius: 13px;
          }

          .skill-icon-wrapper {
            width: 50px;
            height: 50px;
          }

          .skill-category {
            font-size: 8px;
            padding: 4px 6px;
          }

          .skill-card-bottom h3 {
            font-size: 13px;
          }

          .skill-level {
            font-size: 9px;
          }

          .skills-stack {
            margin-top: 55px;
            border-radius: 17px;
          }

          .stack-header {
            padding: 17px;
          }

          .stack-status {
            display: none;
          }

          .stack-line {
            display: block;
            padding: 16px 17px;
          }

          .stack-line:hover {
            padding-left: 20px;
          }

          .stack-line-label {
            margin-bottom: 8px;
          }

          .stack-line p {
            padding-left: 27px;
            font-size: 11px;
            line-height: 1.7;
          }

        }


        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 400px) {

          .skills-grid {
            gap: 9px;
          }

          .skill-card {
            min-height: 175px;
            padding: 13px;
          }

          .skill-card-bottom h3 {
            font-size: 12px;
          }

          .skill-category {
            display: none;
          }

          .stack-title {
            font-size: 9px;
          }

        }

      `}</style>
    </section>
  );
}

export default Skills;