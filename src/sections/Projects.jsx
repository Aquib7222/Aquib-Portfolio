import React from "react";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      number: "01",
      type: "FULL STACK · SCHOOL ERP",
      title: "ZYNTaks Education",
      description:
        "A complete school management ERP designed to manage students, teachers, academics, fees,       users,  modules and administrative operations from a centralized platform.",
      features: [
        "Student & teacher management",
        "School administration",
        "Fee & payment management",
        "Role-based access control",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "Spring Security",
      ],
      github: "#",
      live: "https://www.zyntaks.in/",
      featured: true,
    },
    {
      number: "02",
      type: "WEBSITE · EDUCATION",
      title: "Wisdom Public School",
      description:
        "A modern responsive school website created to provide information about academics, admissions, school activities and contact services.",
      features: [
        "Responsive landing pages",
        "Admission enquiry system",
        "Contact enquiry management",
        "Modern responsive UI",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Bootstrap",
        "Spring Boot",
        "MySQL",
        
      ],
      github: "#",
      live: "https://www.wisdompublicschoolhathaurisiwan.com/",
      featured: false,
    },
    {
      number: "03",
      type: "E-COMMERCE · WEB APPLICATION",
      title: "Zayan Opticals",
      description:
        "A sunglasses e-commerce website focused on product presentation, browsing and a modern shopping experience.",
      features: [
        "Product listing",
        "Product details",
        "Responsive design",
        "E-commerce interface",
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS", "Bootstrap","SPRING BOOT","MYSQL"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      number: "04",
      type: "BUSINESS · PERSONAL PROJECT",
      title: "Zyntaks Digital Solutions",
      description:
        "A professional business website for presenting web development, mobile applications, custom software and digital development services.",
      features: [
        "Service showcase",
        "Portfolio section",
        "Quote request interface",
        "Responsive business website",
      ],
      technologies: ["React", "Vite", "JavaScript", "Bootstrap", "AOS"],
      github: "#",
      live: "https://digitalsolutions.zyntaks.in/",
      featured: false,
    },
    {
      number: "05",
      type: "FULL STACK · MANAGEMENT SYSTEM",
      title: "Hospital Management System",
      description:
        "A management application focused on organizing hospital-related information and providing a structured interface for administrative workflows.",
      features: [
        "Management dashboard",
        "Patient information",
        "Database integration",
        "Backend API integration",
      ],
      technologies: ["Java", "Spring Boot", "React", "MySQL"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      number: "06",
      type: "SMALL APPLICATIONS",
      title: "Mini Projects",
      description:
        "A collection of smaller applications built while practicing JavaScript, React, APIs and frontend development concepts.",
      features: [
        "Calculator",
        "Weather application",
        "API integration",
        "React component practice",
      ],
      technologies: ["JavaScript", "React", "HTML", "CSS", "REST API"],
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-bg-glow projects-glow-one"></div>
      <div className="projects-bg-glow projects-glow-two"></div>

      <div className="section-container">
       
        <div className="section-heading projects-heading">
          <span className="section-label">03 — PROJECTS</span>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            A selection of my professional-style and independent projects,
            ranging from complete ERP systems to websites and smaller
            development applications.
          </p>
        </div>

        {/* =========================
            PROJECT GRID
        ========================= */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.number}
            >
              {/* Card top */}
              <div className="project-top">
                <div className="project-number-wrap">
                  <span className="project-number">{project.number}</span>

                  {project.featured && (
                    <span className="featured-badge">FEATURED</span>
                  )}
                </div>

                <span className="project-type">{project.type}</span>
              </div>

              {/* Card content */}
              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>

                  <div className="project-arrow-wrapper">
                    <FiArrowUpRight size={22} />
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Features */}
                <div className="project-detail-group">
                  <div className="project-detail-heading">
                    <span className="project-detail-line"></span>
                    <span>KEY FEATURES</span>
                  </div>

                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <span className="feature-check"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="project-detail-group">
                  <div className="project-detail-heading">
                    <span className="project-detail-line"></span>
                    <span>TECHNOLOGIES</span>
                  </div>

                  <div className="project-tech-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="project-buttons">
                  <a
                    href={project.github}
                    className="project-btn project-btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.live}
                    className="project-btn project-btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Live Project</span>
                    <FiExternalLink size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`

        

        .projects-section {
          position: relative;
          padding: 95px 5% 125px;
          background: var(--bg);
          overflow: hidden;
        }

        .projects-section .section-container {
          position: relative;
          z-index: 2;
        }


        

        .projects-bg-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
        }

        .projects-glow-one {
          width: 500px;
          height: 500px;
          left: -350px;
          top: 10%;
          background: rgba(77, 163, 255, .045);
        }

        .projects-glow-two {
          width: 450px;
          height: 450px;
          right: -300px;
          bottom: 5%;
          background: rgba(139, 92, 246, .04);
        }



        .projects-heading {
          max-width: 850px;
          margin-bottom: 65px;
        }

        .projects-heading p {
          max-width: 680px;
          margin: 25px 0 0;

          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }


       

        .projects-grid {
          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 18px;
        }



        .project-card {
          position: relative;

          min-width: 0;

          padding: 24px;

          border: 1px solid var(--border);
          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, .06),
              rgba(255, 255, 255, .015)
            );

          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, .035),
            0 18px 45px rgba(0, 0, 0, .13);

          overflow: hidden;

          transition:
            transform .35s ease,
            border-color .35s ease,
            background .35s ease,
            box-shadow .35s ease;
        }


        

        .project-card::before {
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

          opacity: .25;

          transition: opacity .35s ease;
        }


        

        .project-card::after {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          right: -100px;
          top: -100px;

          border-radius: 50%;

          background: rgba(77, 163, 255, .045);

          filter: blur(40px);

          pointer-events: none;
        }


        .project-card:hover {
          transform: translateY(-7px);

          border-color: rgba(77, 163, 255, .24);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, .08),
              rgba(77, 163, 255, .02)
            );

          box-shadow:
            0 25px 55px rgba(0, 0, 0, .23),
            0 0 35px rgba(77, 163, 255, .05);
        }

        .project-card:hover::before {
          opacity: .9;
        }


        

        .project-featured {
          border-color: rgba(77, 163, 255, .2);

          background:
            linear-gradient(
              145deg,
              rgba(77, 163, 255, .055),
              rgba(139, 92, 246, .018),
              rgba(255, 255, 255, .025)
            );
        }

        .project-featured::before {
          opacity: .7;
        }


       

        .project-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;

          padding-bottom: 18px;

          border-bottom: 1px solid rgba(255, 255, 255, .055);
        }

        .project-number-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .project-number {
          color: rgba(255, 255, 255, .3);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .featured-badge {
          padding: 4px 7px;

          color: var(--blue);

          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1px;

          border: 1px solid rgba(77, 163, 255, .18);
          border-radius: 6px;

          background: rgba(77, 163, 255, .055);
        }

        .project-type {
          color: var(--muted);

          font-size: 8px;
          font-weight: 600;
          letter-spacing: 1px;

          text-align: right;
        }


        

        .project-content {
          padding-top: 23px;
        }


        

        .project-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;
        }

        .project-title-row h3 {
          margin: 0;

          color: var(--white);

          font-size: 25px;
          line-height: 1.2;
          font-weight: 650;

          letter-spacing: -.8px;
        }



        .project-arrow-wrapper {
          width: 36px;
          height: 36px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(255, 255, 255, .08);
          border-radius: 10px;

          color: rgba(255, 255, 255, .35);

          background: rgba(255, 255, 255, .025);

          transition:
            color .3s ease,
            border-color .3s ease,
            background .3s ease,
            transform .3s ease;
        }

        .project-card:hover .project-arrow-wrapper {
          color: var(--blue);

          border-color: rgba(77, 163, 255, .25);

          background: rgba(77, 163, 255, .055);

          transform: translateY(-2px);
        }



        .project-description {
          margin: 16px 0 27px;

          color: var(--muted);

          font-size: 13px;
          line-height: 1.8;
        }



        .project-detail-group {
          margin-bottom: 24px;
        }

        .project-detail-heading {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 13px;

          color: rgba(255, 255, 255, .4);

          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.3px;
        }

        .project-detail-line {
          width: 18px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              var(--blue),
              rgba(139, 92, 246, .4)
            );
        }



        .project-detail-group ul {
          display: grid;
          grid-template-columns: 1fr 1fr;

          gap: 9px 15px;

          margin: 0;
          padding: 0;

          list-style: none;
        }

        .project-detail-group li {
          display: flex;
          align-items: flex-start;
          gap: 8px;

          color: var(--muted);

          font-size: 10px;
          line-height: 1.5;
        }

        .feature-check {
          width: 5px;
          height: 5px;

          margin-top: 5px;

          flex-shrink: 0;

          border-radius: 50%;

          background: var(--blue);

          box-shadow:
            0 0 7px rgba(77, 163, 255, .4);
        }



        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .project-tech-list span {
          padding: 6px 8px;

          color: #aeb8c7;

          font-size: 9px;
          font-weight: 600;

          border: 1px solid rgba(255, 255, 255, .08);
          border-radius: 7px;

          background: rgba(255, 255, 255, .025);

          transition:
            color .3s ease,
            border-color .3s ease,
            background .3s ease;
        }

        .project-tech-list span:hover {
          color: var(--white);

          border-color: rgba(77, 163, 255, .25);

          background: rgba(77, 163, 255, .055);
        }



        .project-buttons {
          display: flex;

          gap: 9px;

          margin-top: 7px;

          padding-top: 20px;

          border-top: 1px solid rgba(255, 255, 255, .055);
        }

        .project-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          min-height: 40px;

          padding: 0 14px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 10px;
          font-weight: 700;

          transition:
            transform .3s ease,
            border-color .3s ease,
            background .3s ease,
            box-shadow .3s ease;
        }

        .project-btn-primary {
          color: #fff;

          border: 1px solid rgba(255, 255, 255, .14);

          background:
            linear-gradient(
              135deg,
              #4da3ff,
              #6366f1,
              #8b5cf6
            );

          box-shadow:
            0 7px 20px rgba(77, 163, 255, .13);
        }

        .project-btn-primary:hover {
          color: #fff;

          transform: translateY(-2px);

          box-shadow:
            0 12px 28px rgba(77, 163, 255, .2);
        }

        .project-btn-secondary {
          color: var(--text);

          border: 1px solid rgba(77, 163, 255, .18);

          background:
            linear-gradient(
              135deg,
              rgba(77, 163, 255, .07),
              rgba(99, 102, 241, .05),
              rgba(139, 92, 246, .07)
            );
        }

        .project-btn-secondary:hover {
          color: #fff;

          transform: translateY(-2px);

          border-color: rgba(139, 92, 246, .4);

          background:
            linear-gradient(
              135deg,
              rgba(77, 163, 255, .13),
              rgba(99, 102, 241, .1),
              rgba(139, 92, 246, .13)
            );
        }



        @media (max-width: 900px) {

          .projects-section {
            padding-top: 110px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .project-detail-group ul {
            grid-template-columns: 1fr;
          }

        }



        @media (max-width: 650px) {

          .projects-section {
            padding: 90px 5% 80px;
          }

          .projects-heading {
            margin-bottom: 50px;
          }

          .projects-heading p {
            font-size: 14px;
            line-height: 1.8;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .project-card {
            padding: 19px;
            border-radius: 18px;
          }

          .project-top {
            align-items: flex-start;
          }

          .project-type {
            max-width: 170px;

            font-size: 8px;
            line-height: 1.5;
          }

          .project-title-row h3 {
            font-size: 23px;
          }

          .project-description {
            font-size: 13px;
            line-height: 1.8;
          }

          .project-detail-group ul {
            grid-template-columns: 1fr 1fr;
          }

        }



        @media (max-width: 400px) {

          .projects-grid {
            gap: 12px;
          }

          .project-card {
            padding: 16px;
          }

          .project-type {
            max-width: 135px;
            font-size: 7px;
          }

          .project-title-row h3 {
            font-size: 21px;
          }

          .project-detail-group ul {
            grid-template-columns: 1fr;
          }

          .project-buttons {
            flex-direction: column;
          }

          .project-btn {
            width: 100%;
          }

        }

      `}</style>
    </section>
  );
}

export default Projects;
