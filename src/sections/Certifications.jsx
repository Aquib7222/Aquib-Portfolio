import React from "react";
import {
  FiAward,
  FiExternalLink,
  FiCalendar,
} from "react-icons/fi";

function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "Java Programming",
      issuer: "Add Your Certification Provider",
      year: "2024",
      description:
        "Certification focused on Java programming fundamentals, object-oriented programming and core Java concepts.",
      link: "#",
    },
    {
      number: "02",
      title: "Web Development",
      issuer: "Add Your Certification Provider",
      year: "2024",
      description:
        "Certification covering frontend web development concepts including HTML, CSS and JavaScript.",
      link: "#",
    },
    {
      number: "03",
      title: "Full Stack Development",
      issuer: "Add Your Certification Provider",
      year: "2024",
      description:
        "Certification covering full stack development concepts, application development and database integration.",
      link: "#",
    },
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="section-container">

        <div className="section-heading certifications-heading">
          <span className="section-label">06 — CERTIFICATIONS</span>

          <h2>
            Learning never
            <span> stops.</span>
          </h2>

          <p>
            Certifications and learning milestones that complement my
            practical development experience.
          </p>
        </div>

        <div className="certifications-grid">

          {certifications.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.number}
            >

              <div className="certificate-top">

                <div className="certificate-icon">
                  <FiAward />
                </div>

                <span className="certificate-number">
                  {certificate.number}
                </span>

              </div>

              <div className="certificate-content">

                <span className="certificate-year">
                  <FiCalendar size={13} />
                  {certificate.year}
                </span>

                <h3>{certificate.title}</h3>

                <p className="certificate-issuer">
                  {certificate.issuer}
                </p>

                <p className="certificate-description">
                  {certificate.description}
                </p>

              </div>

              <a
                href={certificate.link}
                className="certificate-link"
                target="_blank"
                rel="noreferrer"
              >
                View Credential
                <FiExternalLink size={15} />
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;