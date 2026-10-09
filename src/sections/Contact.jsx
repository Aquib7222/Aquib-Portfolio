
// // import React from "react";
// // import {
// //   FiArrowUpRight,
// //   FiMail,
// //   FiPhone,
// //   FiMapPin,
// //   FiGithub,
// //   FiLinkedin,
// //   FiSend,
// // } from "react-icons/fi";

// // function Contact() {
// //   return (
// //     <section className="contact-section" id="contact">

// //       {/* Background Glows */}
// //       <div className="contact-glow contact-glow-one"></div>
// //       <div className="contact-glow contact-glow-two"></div>

// //       <div className="section-container">

// //         {/* SECTION HEADING */}
// //         <div className="section-heading contact-heading">

// //           <span className="section-label">
// //             07 — CONTACT
// //           </span>

// //           <h2>
// //             Let's build something
// //             <span> together.</span>
// //           </h2>

// //           <p>
// //             Have a project, opportunity or idea you'd like to discuss?
// //             Feel free to get in touch. I'm always open to meaningful
// //             development opportunities and interesting projects.
// //           </p>

// //         </div>


// //         {/* CONTACT GRID */}
// //         <div className="contact-grid">

// //           {/* =====================================
// //               LEFT SIDE
// //           ===================================== */}

// //           <div className="contact-info">

// //             <div className="contact-intro">

// //               <span className="contact-mini-label">
// //                 GET IN TOUCH
// //               </span>

// //               <h3>
// //                 Have an idea?
// //                 <br />
// //                 <span>Let's talk.</span>
// //               </h3>

// //               <p>
// //                 Whether you're looking for a Java developer, a full stack
// //                 developer, or want to discuss a web application, feel free
// //                 to reach out.
// //               </p>

// //             </div>


// //             {/* CONTACT DETAILS */}
// //             <div className="contact-details">

// //               {/* EMAIL */}
// //               <a
// //                 href="mailto:aquibshahzada@gmail.com"
// //                 className="contact-detail"
// //               >

// //                 <div className="contact-detail-icon">
// //                   <FiMail size={18} />
// //                 </div>

// //                 <div className="contact-detail-content">
// //                   <span>Email</span>
// //                   <strong>
// //                     aquibshahzada@gmail.com
// //                   </strong>
// //                 </div>

// //                 <div className="contact-detail-arrow">
// //                   <FiArrowUpRight size={17} />
// //                 </div>

// //               </a>


// //               {/* PHONE */}
// //               <a
// //                 href="tel:+918804593908"
// //                 className="contact-detail"
// //               >

// //                 <div className="contact-detail-icon">
// //                   <FiPhone size={18} />
// //                 </div>

// //                 <div className="contact-detail-content">
// //                   <span>Phone</span>
// //                   <strong>
// //                     +91 8804593908
// //                   </strong>
// //                 </div>

// //                 <div className="contact-detail-arrow">
// //                   <FiArrowUpRight size={17} />
// //                 </div>

// //               </a>


// //               {/* LOCATION */}
// //               <div className="contact-detail">

// //                 <div className="contact-detail-icon">
// //                   <FiMapPin size={18} />
// //                 </div>

// //                 <div className="contact-detail-content">
// //                   <span>Location</span>
// //                   <strong>
// //                     India
// //                   </strong>
// //                 </div>

// //               </div>

// //             </div>


// //             {/* SOCIAL */}
// //             <div className="contact-socials">

// //               <span className="contact-social-label">
// //                 FIND ME ONLINE
// //               </span>

// //               <div className="social-links">

// //                 <a
// //                   href="https://github.com/Aquib7222"
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   aria-label="GitHub"
// //                 >
// //                   <FiGithub size={19} />
// //                   <span>GitHub</span>
// //                   <FiArrowUpRight
// //                     className="social-arrow"
// //                     size={14}
// //                   />
// //                 </a>


// //                 <a
// //                   href="https://www.linkedin.com/in/aquib-shahzada-6723681a6/"
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   aria-label="LinkedIn"
// //                 >
// //                   <FiLinkedin size={19} />
// //                   <span>LinkedIn</span>
// //                   <FiArrowUpRight
// //                     className="social-arrow"
// //                     size={14}
// //                   />
// //                 </a>

// //               </div>

// //             </div>

// //           </div>


// //           {/* =====================================
// //               RIGHT SIDE FORM
// //           ===================================== */}

// //           <div className="contact-form-card">

// //             {/* FORM HEADER */}
// //             <div className="contact-form-header">

// //               <div>

// //                 <span className="form-mini-label">
// //                   START A CONVERSATION
// //                 </span>

// //                 <h3>
// //                   Send me a message
// //                 </h3>

// //               </div>

// //               <div className="contact-status">
// //                 <span></span>
// //                 Available
// //               </div>

// //             </div>


// //             <div className="contact-form-divider"></div>


// //             {/* FORM */}
// //             <form className="contact-form">

// //               {/* NAME + EMAIL */}
// //               <div className="form-row">

// //                 <div className="form-group">

// //                   <label htmlFor="name">
// //                     Your Name
// //                   </label>

// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     placeholder="John Doe"
// //                     autoComplete="name"
// //                   />

// //                 </div>


// //                 <div className="form-group">

// //                   <label htmlFor="email">
// //                     Email Address
// //                   </label>

// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     placeholder="john@example.com"
// //                     autoComplete="email"
// //                   />

// //                 </div>

// //               </div>


// //               {/* SUBJECT */}
// //               <div className="form-group">

// //                 <label htmlFor="subject">
// //                   Subject
// //                 </label>

// //                 <input
// //                   type="text"
// //                   id="subject"
// //                   name="subject"
// //                   placeholder="Let's work together"
// //                 />

// //               </div>


// //               {/* MESSAGE */}
// //               <div className="form-group">

// //                 <label htmlFor="message">
// //                   Message
// //                 </label>

// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   rows="6"
// //                   placeholder="Tell me a little about your project..."
// //                 ></textarea>

// //               </div>


// //               {/* SUBMIT */}
// //               <button
// //                 type="submit"
// //                 className="contact-submit"
// //               >
// //                 <span>Send Message</span>

// //                 <div className="contact-submit-icon">
// //                   <FiSend size={15} />
// //                 </div>

// //               </button>

// //             </form>


// //             {/* FORM FOOTER */}
// //             <div className="contact-form-footer">

// //               <span>
// //                 <span className="footer-dot"></span>
// //                 Usually responds within 24 hours
// //               </span>

// //               <span>
// //                 Let's create something useful.
// //               </span>

// //             </div>

// //           </div>

// //         </div>

// //       </div>


// //       <style>{`

// //         /* =========================================
// //            CONTACT SECTION
// //         ========================================= */

// //         .contact-section {
// //           position: relative;
// //           padding: 95px 5% 125px;
// //           background: var(--bg);
// //           overflow: hidden;
// //         }

// //         .contact-section .section-container {
// //           position: relative;
// //           z-index: 2;
// //         }


// //         /* =========================================
// //            BACKGROUND GLOWS
// //         ========================================= */

// //         .contact-glow {
// //           position: absolute;
// //           border-radius: 50%;
// //           pointer-events: none;
// //           filter: blur(110px);
// //         }

// //         .contact-glow-one {
// //           width: 500px;
// //           height: 500px;
// //           left: -350px;
// //           top: 10%;
// //           background: rgba(77, 163, 255, 0.045);
// //         }

// //         .contact-glow-two {
// //           width: 500px;
// //           height: 500px;
// //           right: -320px;
// //           bottom: 5%;
// //           background: rgba(139, 92, 246, 0.045);
// //         }


// //         /* =========================================
// //            HEADING
// //         ========================================= */

// //         .contact-heading {
// //           max-width: 850px;
// //           margin-bottom: 65px;
// //         }

// //         .contact-heading p {
// //           max-width: 680px;
// //           margin: 25px 0 0;

// //           color: var(--muted);

// //           font-size: 15px;
// //           line-height: 1.8;
// //         }


// //         /* =========================================
// //            CONTACT GRID
// //         ========================================= */

// //         .contact-grid {
// //           display: grid;

// //           grid-template-columns:
// //             minmax(300px, 0.8fr)
// //             minmax(500px, 1.2fr);

// //           gap: 55px;

// //           align-items: stretch;
// //         }


// //         /* =========================================
// //            LEFT CONTENT
// //         ========================================= */

// //         .contact-info {
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: space-between;

// //           min-width: 0;
// //         }

// //         .contact-intro {
// //           max-width: 500px;
// //         }

// //         .contact-mini-label,
// //         .contact-social-label,
// //         .form-mini-label {
// //           color: rgba(255, 255, 255, 0.4);

// //           font-size: 8px;
// //           font-weight: 700;

// //           letter-spacing: 1.5px;
// //         }

// //         .contact-intro h3 {
// //           margin: 14px 0 17px;

// //           color: var(--white);

// //           font-size: 39px;
// //           line-height: 1.1;

// //           font-weight: 650;
// //           letter-spacing: -1.5px;
// //         }

// //         .contact-intro h3 span {
// //           background:
// //             linear-gradient(
// //               90deg,
// //               #4da3ff,
// //               #6366f1,
// //               #8b5cf6
// //             );

// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //         }

// //         .contact-intro p {
// //           max-width: 470px;

// //           margin: 0;

// //           color: var(--muted);

// //           font-size: 13px;
// //           line-height: 1.85;
// //         }


// //         /* =========================================
// //            CONTACT DETAILS
// //         ========================================= */

// //         .contact-details {
// //           display: flex;
// //           flex-direction: column;

// //           gap: 10px;

// //           margin-top: 38px;
// //         }

// //         .contact-detail {
// //           display: flex;
// //           align-items: center;

// //           gap: 13px;

// //           min-width: 0;

// //           padding: 13px;

// //           color: inherit;
// //           text-decoration: none;

// //           border: 1px solid rgba(255, 255, 255, 0.06);
// //           border-radius: 13px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(255, 255, 255, 0.045),
// //               rgba(255, 255, 255, 0.012)
// //             );

// //           transition:
// //             transform 0.3s ease,
// //             border-color 0.3s ease,
// //             background 0.3s ease,
// //             box-shadow 0.3s ease;
// //         }

// //         .contact-detail:hover {
// //           transform: translateX(4px);

// //           border-color: rgba(77, 163, 255, 0.2);

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(77, 163, 255, 0.065),
// //               rgba(139, 92, 246, 0.025)
// //             );

// //           box-shadow:
// //             0 10px 25px rgba(0, 0, 0, 0.12);
// //         }

// //         .contact-detail-icon {
// //           width: 39px;
// //           height: 39px;

// //           flex-shrink: 0;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           color: var(--blue);

// //           border: 1px solid rgba(77, 163, 255, 0.16);
// //           border-radius: 10px;

// //           background: rgba(77, 163, 255, 0.045);
// //         }

// //         .contact-detail-content {
// //           min-width: 0;

// //           display: flex;
// //           flex-direction: column;

// //           gap: 3px;

// //           flex: 1;
// //         }

// //         .contact-detail-content span {
// //           color: rgba(255, 255, 255, 0.38);

// //           font-size: 8px;
// //           font-weight: 700;

// //           letter-spacing: 1px;
// //         }

// //         .contact-detail-content strong {
// //           overflow: hidden;

// //           color: #cbd3df;

// //           font-size: 11px;
// //           font-weight: 600;

// //           text-overflow: ellipsis;
// //           white-space: nowrap;
// //         }

// //         .contact-detail-arrow {
// //           width: 30px;
// //           height: 30px;

// //           flex-shrink: 0;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           color: rgba(255, 255, 255, 0.3);

// //           border: 1px solid rgba(255, 255, 255, 0.06);
// //           border-radius: 8px;

// //           transition:
// //             color 0.3s ease,
// //             transform 0.3s ease,
// //             border-color 0.3s ease;
// //         }

// //         .contact-detail:hover .contact-detail-arrow {
// //           color: var(--blue);

// //           border-color: rgba(77, 163, 255, 0.18);

// //           transform: translateY(-2px);
// //         }


// //         /* =========================================
// //            SOCIALS
// //         ========================================= */

// //         .contact-socials {
// //           margin-top: 38px;
// //         }

// //         .social-links {
// //           display: flex;

// //           gap: 9px;

// //           margin-top: 13px;
// //         }

// //         .social-links a {
// //           display: inline-flex;
// //           align-items: center;

// //           gap: 9px;

// //           min-height: 39px;

// //           padding: 0 12px;

// //           color: #aeb8c7;

// //           text-decoration: none;

// //           border: 1px solid rgba(255, 255, 255, 0.07);
// //           border-radius: 10px;

// //           background: rgba(255, 255, 255, 0.025);

// //           font-size: 10px;
// //           font-weight: 600;

// //           transition:
// //             color 0.3s ease,
// //             border-color 0.3s ease,
// //             background 0.3s ease,
// //             transform 0.3s ease;
// //         }

// //         .social-links a:hover {
// //           color: #fff;

// //           border-color: rgba(77, 163, 255, 0.25);

// //           background: rgba(77, 163, 255, 0.055);

// //           transform: translateY(-3px);
// //         }

// //         .social-links a svg:first-child {
// //           color: var(--blue);
// //         }

// //         .social-arrow {
// //           color: rgba(255, 255, 255, 0.3) !important;

// //           transition: transform 0.3s ease;
// //         }

// //         .social-links a:hover .social-arrow {
// //           transform: translate(2px, -2px);
// //         }


// //         /* =========================================
// //            FORM CARD
// //         ========================================= */

// //         .contact-form-card {
// //           position: relative;

// //           padding: 28px;

// //           border: 1px solid var(--border);
// //           border-radius: 22px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(255, 255, 255, 0.065),
// //               rgba(255, 255, 255, 0.015)
// //             );

// //           backdrop-filter: blur(22px);
// //           -webkit-backdrop-filter: blur(22px);

// //           box-shadow:
// //             inset 0 1px 0 rgba(255, 255, 255, 0.04),
// //             0 20px 50px rgba(0, 0, 0, 0.15);

// //           overflow: hidden;
// //         }

// //         .contact-form-card::before {
// //           content: "";

// //           position: absolute;

// //           left: 0;
// //           top: 0;

// //           width: 2px;
// //           height: 100%;

// //           background:
// //             linear-gradient(
// //               to bottom,
// //               transparent,
// //               var(--blue),
// //               #8b5cf6,
// //               transparent
// //             );

// //           opacity: 0.65;
// //         }

// //         .contact-form-card::after {
// //           content: "";

// //           position: absolute;

// //           width: 230px;
// //           height: 230px;

// //           right: -130px;
// //           top: -130px;

// //           border-radius: 50%;

// //           background: rgba(77, 163, 255, 0.045);

// //           filter: blur(45px);

// //           pointer-events: none;
// //         }


// //         /* =========================================
// //            FORM HEADER
// //         ========================================= */

// //         .contact-form-header {
// //           display: flex;
// //           align-items: flex-start;
// //           justify-content: space-between;

// //           gap: 20px;
// //         }

// //         .contact-form-header h3 {
// //           margin: 9px 0 0;

// //           color: var(--white);

// //           font-size: 24px;
// //           font-weight: 650;

// //           letter-spacing: -0.6px;
// //         }

// //         .contact-status {
// //           display: flex;
// //           align-items: center;

// //           gap: 7px;

// //           padding: 6px 9px;

// //           color: #aeb8c7;

// //           font-size: 8px;
// //           font-weight: 700;

// //           border: 1px solid rgba(77, 163, 255, 0.14);
// //           border-radius: 7px;

// //           background: rgba(77, 163, 255, 0.04);
// //         }

// //         .contact-status span {
// //           width: 6px;
// //           height: 6px;

// //           border-radius: 50%;

// //           background: #4ade80;

// //           box-shadow:
// //             0 0 8px rgba(74, 222, 128, 0.5);
// //         }

// //         .contact-form-divider {
// //           width: 100%;
// //           height: 1px;

// //           margin: 22px 0 25px;

// //           background: rgba(255, 255, 255, 0.055);
// //         }


// //         /* =========================================
// //            FORM
// //         ========================================= */

// //         .contact-form {
// //           display: flex;
// //           flex-direction: column;

// //           gap: 19px;
// //         }

// //         .form-row {
// //           display: grid;

// //           grid-template-columns: 1fr 1fr;

// //           gap: 14px;
// //         }

// //         .form-group {
// //           display: flex;
// //           flex-direction: column;

// //           gap: 8px;
// //         }

// //         .form-group label {
// //           color: rgba(255, 255, 255, 0.48);

// //           font-size: 9px;
// //           font-weight: 700;

// //           letter-spacing: 0.8px;
// //         }

// //         .form-group input,
// //         .form-group textarea {
// //           width: 100%;

// //           box-sizing: border-box;

// //           padding: 12px 13px;

// //           color: var(--white);

// //           font-family: inherit;

// //           font-size: 11px;

// //           border: 1px solid rgba(255, 255, 255, 0.08);
// //           border-radius: 10px;

// //           outline: none;

// //           background:
// //             rgba(0, 0, 0, 0.18);

// //           transition:
// //             border-color 0.3s ease,
// //             background 0.3s ease,
// //             box-shadow 0.3s ease;
// //         }

// //         .form-group input {
// //           min-height: 43px;
// //         }

// //         .form-group textarea {
// //           min-height: 130px;

// //           resize: vertical;

// //           line-height: 1.6;
// //         }

// //         .form-group input::placeholder,
// //         .form-group textarea::placeholder {
// //           color: rgba(255, 255, 255, 0.22);
// //         }

// //         .form-group input:focus,
// //         .form-group textarea:focus {
// //           border-color: rgba(77, 163, 255, 0.4);

// //           background:
// //             rgba(77, 163, 255, 0.025);

// //           box-shadow:
// //             0 0 0 3px rgba(77, 163, 255, 0.055),
// //             0 0 25px rgba(77, 163, 255, 0.04);
// //         }


// //         /* =========================================
// //            SUBMIT BUTTON
// //         ========================================= */

// //         .contact-submit {
// //           position: relative;

// //           width: 100%;
// //           min-height: 48px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           gap: 10px;

// //           margin-top: 3px;

// //           color: #fff;

// //           font-family: inherit;

// //           font-size: 11px;
// //           font-weight: 700;

// //           border: 1px solid rgba(255, 255, 255, 0.14);
// //           border-radius: 11px;

// //           background:
// //             linear-gradient(
// //               135deg,
// //               #4da3ff,
// //               #6366f1,
// //               #8b5cf6
// //             );

// //           box-shadow:
// //             0 9px 25px rgba(77, 163, 255, 0.15);

// //           cursor: pointer;

// //           overflow: hidden;

// //           transition:
// //             transform 0.3s ease,
// //             box-shadow 0.3s ease;
// //         }

// //         .contact-submit::before {
// //           content: "";

// //           position: absolute;

// //           top: 0;
// //           left: -120%;

// //           width: 80%;
// //           height: 100%;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               transparent,
// //               rgba(255, 255, 255, 0.16),
// //               transparent
// //             );

// //           transform: skewX(-20deg);

// //           transition: left 0.6s ease;
// //         }

// //         .contact-submit:hover::before {
// //           left: 140%;
// //         }

// //         .contact-submit:hover {
// //           transform: translateY(-3px);

// //           box-shadow:
// //             0 14px 35px rgba(77, 163, 255, 0.23),
// //             0 0 25px rgba(139, 92, 246, 0.08);
// //         }

// //         .contact-submit-icon {
// //           width: 27px;
// //           height: 27px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           border: 1px solid rgba(255, 255, 255, 0.2);
// //           border-radius: 7px;

// //           background: rgba(255, 255, 255, 0.09);

// //           transition: transform 0.3s ease;
// //         }

// //         .contact-submit:hover .contact-submit-icon {
// //           transform: translate(2px, -2px);
// //         }


// //         /* =========================================
// //            FORM FOOTER
// //         ========================================= */

// //         .contact-form-footer {
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;

// //           gap: 15px;

// //           margin-top: 20px;
// //           padding-top: 17px;

// //           border-top: 1px solid rgba(255, 255, 255, 0.055);

// //           color: rgba(255, 255, 255, 0.28);

// //           font-size: 8px;
// //           line-height: 1.5;
// //         }

// //         .contact-form-footer > span:first-child {
// //           display: flex;
// //           align-items: center;

// //           gap: 6px;
// //         }

// //         .footer-dot {
// //           width: 5px;
// //           height: 5px;

// //           flex-shrink: 0;

// //           border-radius: 50%;

// //           background: #4ade80;

// //           box-shadow:
// //             0 0 7px rgba(74, 222, 128, 0.4);
// //         }


// //         /* =========================================
// //            TABLET
// //         ========================================= */

// //         @media (max-width: 1000px) {

// //           .contact-grid {
// //             grid-template-columns: 1fr;

// //             gap: 45px;
// //           }

// //           .contact-info {
// //             max-width: 700px;
// //           }

// //           .contact-intro {
// //             max-width: 600px;
// //           }

// //           .contact-intro p {
// //             max-width: 600px;
// //           }

// //         }


// //         /* =========================================
// //            MOBILE
// //         ========================================= */

// //         @media (max-width: 650px) {

// //           .contact-section {
// //             padding: 90px 5% 80px;
// //           }

// //           .contact-heading {
// //             margin-bottom: 50px;
// //           }

// //           .contact-heading p {
// //             font-size: 14px;
// //             line-height: 1.8;
// //           }

// //           .contact-intro h3 {
// //             font-size: 34px;
// //           }

// //           .contact-details {
// //             margin-top: 30px;
// //           }

// //           .contact-socials {
// //             margin-top: 30px;
// //           }

// //           .contact-form-card {
// //             padding: 20px;

// //             border-radius: 18px;
// //           }

// //           .form-row {
// //             grid-template-columns: 1fr;
// //             gap: 19px;
// //           }

// //           .contact-form-header h3 {
// //             font-size: 21px;
// //           }

// //           .contact-form-footer {
// //             flex-direction: column;
// //             align-items: flex-start;
// //           }

// //         }


// //         /* =========================================
// //            SMALL MOBILE
// //         ========================================= */

// //         @media (max-width: 400px) {

// //           .contact-section {
// //             padding: 80px 5% 70px;
// //           }

// //           .contact-intro h3 {
// //             font-size: 30px;
// //           }

// //           .contact-form-card {
// //             padding: 17px;
// //           }

// //           .contact-detail {
// //             padding: 11px;
// //           }

// //           .contact-detail-content strong {
// //             font-size: 10px;
// //           }

// //           .contact-status {
// //             display: none;
// //           }

// //           .social-links {
// //             flex-wrap: wrap;
// //           }

// //         }

// //       `}</style>
// //     </section>
// //   );
// // }

// // export default Contact;




// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";
// import {
//   FiArrowUpRight,
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiGithub,
//   FiLinkedin,
//   FiSend,
// } from "react-icons/fi";

// function Contact() {
//   const formRef = useRef(null);
//   const [isSending, setIsSending] = useState(false);

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     if (isSending) return;

//     setIsSending(true);

//     try {
//       await emailjs.sendForm(
//         "service_i4dbyvz",
//         "template_6sxp4tg",
//         formRef.current,
//         {
//           publicKey: "3dViH4RrtnbW74Jf-",
//         }
//       );

//       Swal.fire({
//         icon: "success",
//         title: "Message Sent!",
//         text: "Thank you for reaching out. I'll get back to you soon.",
//         background: "#0b1017",
//         color: "#f5f7fa",
//         confirmButtonColor: "#4da3ff",
//         confirmButtonText: "Great",
//       });

//       formRef.current.reset();
//     } catch (error) {
//       console.error("EmailJS Error:", error);

//       Swal.fire({
//         icon: "error",
//         title: "Something went wrong",
//         text: "Your message could not be sent. Please try again or contact me directly by email.",
//         background: "#0b1017",
//         color: "#f5f7fa",
//         confirmButtonColor: "#4da3ff",
//         confirmButtonText: "Okay",
//       });
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <section className="contact-section" id="contact">

//       {/* Background Glows */}
//       <div className="contact-glow contact-glow-one"></div>
//       <div className="contact-glow contact-glow-two"></div>

//       <div className="section-container">

//         {/* SECTION HEADING */}
//         <div className="section-heading contact-heading">

//           <span className="section-label">
//             07 — CONTACT
//           </span>

//           <h2>
//             Let's build something
//             <span> together.</span>
//           </h2>

//           <p>
//             Have a project, opportunity or idea you'd like to discuss?
//             Feel free to get in touch. I'm always open to meaningful
//             development opportunities and interesting projects.
//           </p>

//         </div>

//         {/* CONTACT GRID */}
//         <div className="contact-grid">

//           {/* LEFT SIDE */}

//           <div className="contact-info">

//             <div className="contact-intro">

//               <span className="contact-mini-label">
//                 GET IN TOUCH
//               </span>

//               <h3>
//                 Have an idea?
//                 <br />
//                 <span>Let's talk.</span>
//               </h3>

//               <p>
//                 Whether you're looking for a Java developer, a full stack
//                 developer, or want to discuss a web application, feel free
//                 to reach out.
//               </p>

//             </div>

//             {/* CONTACT DETAILS */}

//             <div className="contact-details">

//               {/* EMAIL */}

//               <a
//                 href="mailto:aquibshahzada@gmail.com"
//                 className="contact-detail"
//               >

//                 <div className="contact-detail-icon">
//                   <FiMail size={18} />
//                 </div>

//                 <div className="contact-detail-content">
//                   <span>Email</span>
//                   <strong>
//                     aquibshahzada@gmail.com
//                   </strong>
//                 </div>

//                 <div className="contact-detail-arrow">
//                   <FiArrowUpRight size={17} />
//                 </div>

//               </a>

//               {/* PHONE */}

//               <a
//                 href="tel:+918804593908"
//                 className="contact-detail"
//               >

//                 <div className="contact-detail-icon">
//                   <FiPhone size={18} />
//                 </div>

//                 <div className="contact-detail-content">
//                   <span>Phone</span>
//                   <strong>
//                     +91 8804593908
//                   </strong>
//                 </div>

//                 <div className="contact-detail-arrow">
//                   <FiArrowUpRight size={17} />
//                 </div>

//               </a>

//               {/* LOCATION */}

//               <div className="contact-detail">

//                 <div className="contact-detail-icon">
//                   <FiMapPin size={18} />
//                 </div>

//                 <div className="contact-detail-content">
//                   <span>Location</span>
//                   <strong>
//                     India
//                   </strong>
//                 </div>

//               </div>

//             </div>

//             {/* SOCIAL */}

//             <div className="contact-socials">

//               <span className="contact-social-label">
//                 FIND ME ONLINE
//               </span>

//               <div className="social-links">

//                 <a
//                   href="https://github.com/Aquib7222"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="GitHub"
//                 >
//                   <FiGithub size={19} />
//                   <span>GitHub</span>

//                   <FiArrowUpRight
//                     className="social-arrow"
//                     size={14}
//                   />
//                 </a>

//                 <a
//                   href="https://www.linkedin.com/in/aquib-shahzada-6723681a6/"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="LinkedIn"
//                 >
//                   <FiLinkedin size={19} />
//                   <span>LinkedIn</span>

//                   <FiArrowUpRight
//                     className="social-arrow"
//                     size={14}
//                   />
//                 </a>

//               </div>

//             </div>

//           </div>

//           {/* RIGHT SIDE FORM */}

//           <div className="contact-form-card">

//             {/* FORM HEADER */}

//             <div className="contact-form-header">

//               <div>

//                 <span className="form-mini-label">
//                   START A CONVERSATION
//                 </span>

//                 <h3>
//                   Send me a message
//                 </h3>

//               </div>

//               <div className="contact-status">
//                 <span></span>
//                 Available
//               </div>

//             </div>

//             <div className="contact-form-divider"></div>

//             {/* FORM */}

//             <form
//               ref={formRef}
//               className="contact-form"
//               onSubmit={sendEmail}
//             >

//               {/* NAME + EMAIL */}

//               <div className="form-row">

//                 <div className="form-group">

//                   <label htmlFor="name">
//                     Your Name
//                   </label>

//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="John Doe"
//                     autoComplete="name"
//                     required
//                     disabled={isSending}
//                   />

//                 </div>

//                 <div className="form-group">

//                   <label htmlFor="email">
//                     Email Address
//                   </label>

//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="john@example.com"
//                     autoComplete="email"
//                     required
//                     disabled={isSending}
//                   />

//                 </div>

//               </div>

//               {/* SUBJECT */}

//               <div className="form-group">

//                 <label htmlFor="subject">
//                   Subject
//                 </label>

//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   placeholder="Let's work together"
//                   required
//                   disabled={isSending}
//                 />

//               </div>

//               {/* MESSAGE */}

//               <div className="form-group">

//                 <label htmlFor="message">
//                   Message
//                 </label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="6"
//                   placeholder="Tell me a little about your project..."
//                   required
//                   disabled={isSending}
//                 ></textarea>

//               </div>

//               {/* SUBMIT */}

//               <button
//                 type="submit"
//                 className="contact-submit"
//                 disabled={isSending}
//               >

//                 <span>
//                   {isSending ? "Sending..." : "Send Message"}
//                 </span>

//                 <div className="contact-submit-icon">
//                   <FiSend size={15} />
//                 </div>

//               </button>

//             </form>

//             {/* FORM FOOTER */}

//             <div className="contact-form-footer">

//               <span>
//                 <span className="footer-dot"></span>
//                 Usually responds within 24 hours
//               </span>

//               <span>
//                 Let's create something useful.
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>

//       <style>{`

//         /* =========================================
//            CONTACT SECTION
//         ========================================= */

//         .contact-section {
//           position: relative;
//           padding: 95px 5% 125px;
//           background: var(--bg);
//           overflow: hidden;
//         }

//         .contact-section .section-container {
//           position: relative;
//           z-index: 2;
//         }

//         /* =========================================
//            BACKGROUND GLOWS
//         ========================================= */

//         .contact-glow {
//           position: absolute;
//           border-radius: 50%;
//           pointer-events: none;
//           filter: blur(110px);
//         }

//         .contact-glow-one {
//           width: 500px;
//           height: 500px;
//           left: -350px;
//           top: 10%;
//           background: rgba(77, 163, 255, 0.045);
//         }

//         .contact-glow-two {
//           width: 500px;
//           height: 500px;
//           right: -320px;
//           bottom: 5%;
//           background: rgba(139, 92, 246, 0.045);
//         }

//         /* =========================================
//            HEADING
//         ========================================= */

//         .contact-heading {
//           max-width: 850px;
//           margin-bottom: 65px;
//         }

//         .contact-heading p {
//           max-width: 680px;
//           margin: 25px 0 0;
//           color: var(--muted);
//           font-size: 15px;
//           line-height: 1.8;
//         }

//         /* =========================================
//            CONTACT GRID
//         ========================================= */

//         .contact-grid {
//           display: grid;

//           grid-template-columns:
//             minmax(300px, 0.8fr)
//             minmax(500px, 1.2fr);

//           gap: 55px;

//           align-items: stretch;
//         }

//         /* =========================================
//            LEFT CONTENT
//         ========================================= */

//         .contact-info {
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           min-width: 0;
//         }

//         .contact-intro {
//           max-width: 500px;
//         }

//         .contact-mini-label,
//         .contact-social-label,
//         .form-mini-label {
//           color: rgba(255, 255, 255, 0.4);

//           font-size: 8px;
//           font-weight: 700;

//           letter-spacing: 1.5px;
//         }

//         .contact-intro h3 {
//           margin: 14px 0 17px;

//           color: var(--white);

//           font-size: 39px;
//           line-height: 1.1;

//           font-weight: 650;
//           letter-spacing: -1.5px;
//         }

//         .contact-intro h3 span {
//           background:
//             linear-gradient(
//               90deg,
//               #4da3ff,
//               #6366f1,
//               #8b5cf6
//             );

//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .contact-intro p {
//           max-width: 470px;

//           margin: 0;

//           color: var(--muted);

//           font-size: 13px;
//           line-height: 1.85;
//         }

//         /* =========================================
//            CONTACT DETAILS
//         ========================================= */

//         .contact-details {
//           display: flex;
//           flex-direction: column;

//           gap: 10px;

//           margin-top: 38px;
//         }

//         .contact-detail {
//           display: flex;
//           align-items: center;

//           gap: 13px;

//           min-width: 0;

//           padding: 13px;

//           color: inherit;
//           text-decoration: none;

//           border: 1px solid rgba(255, 255, 255, 0.06);
//           border-radius: 13px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(255, 255, 255, 0.045),
//               rgba(255, 255, 255, 0.012)
//             );

//           transition:
//             transform 0.3s ease,
//             border-color 0.3s ease,
//             background 0.3s ease,
//             box-shadow 0.3s ease;
//         }

//         .contact-detail:hover {
//           transform: translateX(4px);

//           border-color: rgba(77, 163, 255, 0.2);

//           background:
//             linear-gradient(
//               145deg,
//               rgba(77, 163, 255, 0.065),
//               rgba(139, 92, 246, 0.025)
//             );

//           box-shadow:
//             0 10px 25px rgba(0, 0, 0, 0.12);
//         }

//         .contact-detail-icon {
//           width: 39px;
//           height: 39px;

//           flex-shrink: 0;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           color: var(--blue);

//           border: 1px solid rgba(77, 163, 255, 0.16);
//           border-radius: 10px;

//           background: rgba(77, 163, 255, 0.045);
//         }

//         .contact-detail-content {
//           min-width: 0;

//           display: flex;
//           flex-direction: column;

//           gap: 3px;

//           flex: 1;
//         }

//         .contact-detail-content span {
//           color: rgba(255, 255, 255, 0.38);

//           font-size: 8px;
//           font-weight: 700;

//           letter-spacing: 1px;
//         }

//         .contact-detail-content strong {
//           overflow: hidden;

//           color: #cbd3df;

//           font-size: 11px;
//           font-weight: 600;

//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }

//         .contact-detail-arrow {
//           width: 30px;
//           height: 30px;

//           flex-shrink: 0;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           color: rgba(255, 255, 255, 0.3);

//           border: 1px solid rgba(255, 255, 255, 0.06);
//           border-radius: 8px;

//           transition:
//             color 0.3s ease,
//             transform 0.3s ease,
//             border-color 0.3s ease;
//         }

//         .contact-detail:hover .contact-detail-arrow {
//           color: var(--blue);

//           border-color: rgba(77, 163, 255, 0.18);

//           transform: translateY(-2px);
//         }

//         /* =========================================
//            SOCIALS
//         ========================================= */

//         .contact-socials {
//           margin-top: 38px;
//         }

//         .social-links {
//           display: flex;

//           gap: 9px;

//           margin-top: 13px;
//         }

//         .social-links a {
//           display: inline-flex;
//           align-items: center;

//           gap: 9px;

//           min-height: 39px;

//           padding: 0 12px;

//           color: #aeb8c7;

//           text-decoration: none;

//           border: 1px solid rgba(255, 255, 255, 0.07);
//           border-radius: 10px;

//           background: rgba(255, 255, 255, 0.025);

//           font-size: 10px;
//           font-weight: 600;

//           transition:
//             color 0.3s ease,
//             border-color 0.3s ease,
//             background 0.3s ease,
//             transform 0.3s ease;
//         }

//         .social-links a:hover {
//           color: #fff;

//           border-color: rgba(77, 163, 255, 0.25);

//           background: rgba(77, 163, 255, 0.055);

//           transform: translateY(-3px);
//         }

//         .social-links a svg:first-child {
//           color: var(--blue);
//         }

//         .social-arrow {
//           color: rgba(255, 255, 255, 0.3) !important;

//           transition: transform 0.3s ease;
//         }

//         .social-links a:hover .social-arrow {
//           transform: translate(2px, -2px);
//         }

//         /* =========================================
//            FORM CARD
//         ========================================= */

//         .contact-form-card {
//           position: relative;

//           padding: 28px;

//           border: 1px solid var(--border);
//           border-radius: 22px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(255, 255, 255, 0.065),
//               rgba(255, 255, 255, 0.015)
//             );

//           backdrop-filter: blur(22px);
//           -webkit-backdrop-filter: blur(22px);

//           box-shadow:
//             inset 0 1px 0 rgba(255, 255, 255, 0.04),
//             0 20px 50px rgba(0, 0, 0, 0.15);

//           overflow: hidden;
//         }

//         .contact-form-card::before {
//           content: "";

//           position: absolute;

//           left: 0;
//           top: 0;

//           width: 2px;
//           height: 100%;

//           background:
//             linear-gradient(
//               to bottom,
//               transparent,
//               var(--blue),
//               #8b5cf6,
//               transparent
//             );

//           opacity: 0.65;
//         }

//         .contact-form-card::after {
//           content: "";

//           position: absolute;

//           width: 230px;
//           height: 230px;

//           right: -130px;
//           top: -130px;

//           border-radius: 50%;

//           background: rgba(77, 163, 255, 0.045);

//           filter: blur(45px);

//           pointer-events: none;
//         }

//         /* =========================================
//            FORM HEADER
//         ========================================= */

//         .contact-form-header {
//           display: flex;
//           align-items: flex-start;
//           justify-content: space-between;

//           gap: 20px;
//         }

//         .contact-form-header h3 {
//           margin: 9px 0 0;

//           color: var(--white);

//           font-size: 24px;
//           font-weight: 650;

//           letter-spacing: -0.6px;
//         }

//         .contact-status {
//           display: flex;
//           align-items: center;

//           gap: 7px;

//           padding: 6px 9px;

//           color: #aeb8c7;

//           font-size: 8px;
//           font-weight: 700;

//           border: 1px solid rgba(77, 163, 255, 0.14);
//           border-radius: 7px;

//           background: rgba(77, 163, 255, 0.04);
//         }

//         .contact-status span {
//           width: 6px;
//           height: 6px;

//           border-radius: 50%;

//           background: #4ade80;

//           box-shadow:
//             0 0 8px rgba(74, 222, 128, 0.5);
//         }

//         .contact-form-divider {
//           width: 100%;
//           height: 1px;

//           margin: 22px 0 25px;

//           background: rgba(255, 255, 255, 0.055);
//         }

//         /* =========================================
//            FORM
//         ========================================= */

//         .contact-form {
//           display: flex;
//           flex-direction: column;

//           gap: 19px;
//         }

//         .form-row {
//           display: grid;

//           grid-template-columns: 1fr 1fr;

//           gap: 14px;
//         }

//         .form-group {
//           display: flex;
//           flex-direction: column;

//           gap: 8px;
//         }

//         .form-group label {
//           color: rgba(255, 255, 255, 0.48);

//           font-size: 9px;
//           font-weight: 700;

//           letter-spacing: 0.8px;
//         }

//         .form-group input,
//         .form-group textarea {
//           width: 100%;

//           box-sizing: border-box;

//           padding: 12px 13px;

//           color: var(--white);

//           font-family: inherit;

//           font-size: 11px;

//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 10px;

//           outline: none;

//           background:
//             rgba(0, 0, 0, 0.18);

//           transition:
//             border-color 0.3s ease,
//             background 0.3s ease,
//             box-shadow 0.3s ease;
//         }

//         .form-group input {
//           min-height: 43px;
//         }

//         .form-group textarea {
//           min-height: 130px;

//           resize: vertical;

//           line-height: 1.6;
//         }

//         .form-group input::placeholder,
//         .form-group textarea::placeholder {
//           color: rgba(255, 255, 255, 0.22);
//         }

//         .form-group input:focus,
//         .form-group textarea:focus {
//           border-color: rgba(77, 163, 255, 0.4);

//           background:
//             rgba(77, 163, 255, 0.025);

//           box-shadow:
//             0 0 0 3px rgba(77, 163, 255, 0.055),
//             0 0 25px rgba(77, 163, 255, 0.04);
//         }

//         .form-group input:disabled,
//         .form-group textarea:disabled {
//           opacity: 0.65;
//           cursor: not-allowed;
//         }

//         /* =========================================
//            SUBMIT BUTTON
//         ========================================= */

//         .contact-submit {
//           position: relative;

//           width: 100%;
//           min-height: 48px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           gap: 10px;

//           margin-top: 3px;

//           color: #fff;

//           font-family: inherit;

//           font-size: 11px;
//           font-weight: 700;

//           border: 1px solid rgba(255, 255, 255, 0.14);
//           border-radius: 11px;

//           background:
//             linear-gradient(
//               135deg,
//               #4da3ff,
//               #6366f1,
//               #8b5cf6
//             );

//           box-shadow:
//             0 9px 25px rgba(77, 163, 255, 0.15);

//           cursor: pointer;

//           overflow: hidden;

//           transition:
//             transform 0.3s ease,
//             box-shadow 0.3s ease,
//             opacity 0.3s ease;
//         }

//         .contact-submit::before {
//           content: "";

//           position: absolute;

//           top: 0;
//           left: -120%;

//           width: 80%;
//           height: 100%;

//           background:
//             linear-gradient(
//               90deg,
//               transparent,
//               rgba(255, 255, 255, 0.16),
//               transparent
//             );

//           transform: skewX(-20deg);

//           transition: left 0.6s ease;
//         }

//         .contact-submit:hover::before {
//           left: 140%;
//         }

//         .contact-submit:hover {
//           transform: translateY(-3px);

//           box-shadow:
//             0 14px 35px rgba(77, 163, 255, 0.23),
//             0 0 25px rgba(139, 92, 246, 0.08);
//         }

//         .contact-submit:disabled {
//           opacity: 0.65;
//           cursor: not-allowed;
//           transform: none;
//         }

//         .contact-submit-icon {
//           width: 27px;
//           height: 27px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-radius: 7px;

//           background: rgba(255, 255, 255, 0.09);

//           transition: transform 0.3s ease;
//         }

//         .contact-submit:hover .contact-submit-icon {
//           transform: translate(2px, -2px);
//         }

//         /* =========================================
//            FORM FOOTER
//         ========================================= */

//         .contact-form-footer {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;

//           gap: 15px;

//           margin-top: 20px;
//           padding-top: 17px;

//           border-top: 1px solid rgba(255, 255, 255, 0.055);

//           color: rgba(255, 255, 255, 0.28);

//           font-size: 8px;
//           line-height: 1.5;
//         }

//         .contact-form-footer > span:first-child {
//           display: flex;
//           align-items: center;

//           gap: 6px;
//         }

//         .footer-dot {
//           width: 5px;
//           height: 5px;

//           flex-shrink: 0;

//           border-radius: 50%;

//           background: #4ade80;

//           box-shadow:
//             0 0 7px rgba(74, 222, 128, 0.4);
//         }

//         /* =========================================
//            TABLET
//         ========================================= */

//         @media (max-width: 1000px) {

//           .contact-grid {
//             grid-template-columns: 1fr;

//             gap: 45px;
//           }

//           .contact-info {
//             max-width: 700px;
//           }

//           .contact-intro {
//             max-width: 600px;
//           }

//           .contact-intro p {
//             max-width: 600px;
//           }

//         }

//         /* =========================================
//            MOBILE
//         ========================================= */

//         @media (max-width: 650px) {

//           .contact-section {
//             padding: 90px 5% 80px;
//           }

//           .contact-heading {
//             margin-bottom: 50px;
//           }

//           .contact-heading p {
//             font-size: 14px;
//             line-height: 1.8;
//           }

//           .contact-intro h3 {
//             font-size: 34px;
//           }

//           .contact-details {
//             margin-top: 30px;
//           }

//           .contact-socials {
//             margin-top: 30px;
//           }

//           .contact-form-card {
//             padding: 20px;

//             border-radius: 18px;
//           }

//           .form-row {
//             grid-template-columns: 1fr;
//             gap: 19px;
//           }

//           .contact-form-header h3 {
//             font-size: 21px;
//           }

//           .contact-form-footer {
//             flex-direction: column;
//             align-items: flex-start;
//           }

//         }

//         /* =========================================
//            SMALL MOBILE
//         ========================================= */

//         @media (max-width: 400px) {

//           .contact-section {
//             padding: 80px 5% 70px;
//           }

//           .contact-intro h3 {
//             font-size: 30px;
//           }

//           .contact-form-card {
//             padding: 17px;
//           }

//           .contact-detail {
//             padding: 11px;
//           }

//           .contact-detail-content strong {
//             font-size: 10px;
//           }

//           .contact-status {
//             display: none;
//           }

//           .social-links {
//             flex-wrap: wrap;
//           }

//         }

//       `}</style>

//     </section>
//   );
// }

// export default Contact;



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

function Contact() {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_i4dbyvz",
        "template_6sxp4tg",
        formRef.current,
        {
          publicKey: "3dViH4RrtnbW74Jf-",
        }
      );

      formRef.current.reset();

      setIsSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        "Your message could not be sent. Please try again or contact me directly."
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleSendAnother = () => {
    setIsSuccess(false);

    setTimeout(() => {
      const nameInput = document.getElementById("name");

      if (nameInput) {
        nameInput.focus();
      }
    }, 100);
  };

  return (
    <section className="contact-section" id="contact">

      {/* =========================================
          BACKGROUND GLOWS
      ========================================= */}

      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="section-container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="section-heading contact-heading">

          <span className="section-label">
            07 — CONTACT
          </span>

          <h2>
            Let's build something
            <span> together.</span>
          </h2>

          <p>
            Have a project, opportunity or idea you'd like to discuss?
            Feel free to get in touch. I'm always open to meaningful
            development opportunities and interesting projects.
          </p>

        </div>

        {/* =========================================
            CONTACT GRID
        ========================================= */}

        <div className="contact-grid">

          {/* =====================================
              LEFT SIDE
          ===================================== */}

          <div className="contact-info">

            <div className="contact-intro">

              <span className="contact-mini-label">
                GET IN TOUCH
              </span>

              <h3>
                Have an idea?
                <br />
                <span>Let's talk.</span>
              </h3>

              <p>
                Whether you're looking for a Java developer, a full stack
                developer, or want to discuss a web application, feel free
                to reach out.
              </p>

            </div>

            {/* =====================================
                CONTACT DETAILS
            ===================================== */}

            <div className="contact-details">

              {/* EMAIL */}

              <a
                href="mailto:aquibshahzada@gmail.com"
                className="contact-detail"
              >

                <div className="contact-detail-icon">
                  <FiMail size={18} />
                </div>

                <div className="contact-detail-content">
                  <span>Email</span>

                  <strong>
                    aquibshahzada@gmail.com
                  </strong>
                </div>

                <div className="contact-detail-arrow">
                  <FiArrowUpRight size={17} />
                </div>

              </a>

              {/* PHONE */}

              <a
                href="tel:+918804593908"
                className="contact-detail"
              >

                <div className="contact-detail-icon">
                  <FiPhone size={18} />
                </div>

                <div className="contact-detail-content">
                  <span>Phone</span>

                  <strong>
                    +91 8804593908
                  </strong>
                </div>

                <div className="contact-detail-arrow">
                  <FiArrowUpRight size={17} />
                </div>

              </a>

              {/* LOCATION */}

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <FiMapPin size={18} />
                </div>

                <div className="contact-detail-content">
                  <span>Location</span>

                  <strong>
                    India
                  </strong>
                </div>

              </div>

            </div>

            {/* =====================================
                SOCIALS
            ===================================== */}

            <div className="contact-socials">

              <span className="contact-social-label">
                FIND ME ONLINE
              </span>

              <div className="social-links">

                {/* GITHUB */}

                <a
                  href="https://github.com/Aquib7222"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >

                  <FiGithub size={19} />

                  <span>
                    GitHub
                  </span>

                  <FiArrowUpRight
                    className="social-arrow"
                    size={14}
                  />

                </a>

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/aquib-shahzada-6723681a6/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >

                  <FiLinkedin size={19} />

                  <span>
                    LinkedIn
                  </span>

                  <FiArrowUpRight
                    className="social-arrow"
                    size={14}
                  />

                </a>

              </div>

            </div>

          </div>

          {/* =====================================
              RIGHT SIDE
          ===================================== */}

          <div className="contact-form-card">

            {/* =====================================
                FORM HEADER
            ===================================== */}

            {!isSuccess && (
              <>
                <div className="contact-form-header">

                  <div>

                    <span className="form-mini-label">
                      START A CONVERSATION
                    </span>

                    <h3>
                      Send me a message
                    </h3>

                  </div>

                  <div className="contact-status">

                    <span></span>

                    Available

                  </div>

                </div>

                <div className="contact-form-divider"></div>
              </>
            )}

            {/* =====================================
                SUCCESS STATE
            ===================================== */}

            {isSuccess ? (

              <div className="contact-success">

                {/* Animated Background Orbits */}

                <div className="success-orbit success-orbit-one"></div>

                <div className="success-orbit success-orbit-two"></div>

                {/* Glow */}

                <div className="success-center-glow"></div>

                {/* Success Icon */}

                <div className="success-icon-wrapper">

                  <div className="success-icon">

                    <svg
                      viewBox="0 0 52 52"
                      className="success-check"
                    >

                      <circle
                        cx="26"
                        cy="26"
                        r="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      <path
                        d="M15 27 L22 34 L38 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                    </svg>

                  </div>

                </div>

                {/* Label */}

                <span className="success-mini-label">
                  MESSAGE DELIVERED
                </span>

                {/* Heading */}

                <h3>
                  Message sent
                  <span> successfully.</span>
                </h3>

                {/* Description */}

                <p>
                  Thanks for reaching out. Your message has been
                  delivered successfully. I'll get back to you as
                  soon as possible.
                </p>

                {/* Status */}

                <div className="success-status">

                  <span className="success-status-dot"></span>

                  <span>
                    Message received
                  </span>

                </div>

                {/* Send Another */}

                <button
                  type="button"
                  className="success-again-btn"
                  onClick={handleSendAnother}
                >

                  <span>
                    Send another message
                  </span>

                  <div className="success-again-icon">

                    <FiArrowUpRight size={15} />

                  </div>

                </button>

              </div>

            ) : (

              /* =====================================
                 CONTACT FORM
              ===================================== */

              <form
                ref={formRef}
                className="contact-form"
                onSubmit={sendEmail}
              >

                {/* NAME + EMAIL */}

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      autoComplete="name"
                      required
                      disabled={isSending}
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      autoComplete="email"
                      required
                      disabled={isSending}
                    />

                  </div>

                </div>

                {/* SUBJECT */}

                <div className="form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Let's work together"
                    required
                    disabled={isSending}
                  />

                </div>

                {/* MESSAGE */}

                <div className="form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me a little about your project..."
                    required
                    disabled={isSending}
                  ></textarea>

                </div>

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={isSending}
                >

                  <span>
                    {isSending
                      ? "Sending..."
                      : "Send Message"}
                  </span>

                  <div className="contact-submit-icon">

                    <FiSend size={15} />

                  </div>

                </button>

              </form>

            )}

            {/* =====================================
                FORM FOOTER
            ===================================== */}

            {!isSuccess && (
              <div className="contact-form-footer">

                <span>

                  <span className="footer-dot"></span>

                  Usually responds within 24 hours

                </span>

                <span>
                  Let's create something useful.
                </span>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* =========================================
          CSS
      ========================================= */}

      <style>{`

        /* =========================================
           CONTACT SECTION
        ========================================= */

        .contact-section {
          position: relative;

          padding: 95px 5% 125px;

          background: var(--bg);

          overflow: hidden;
        }

        .contact-section .section-container {
          position: relative;

          z-index: 2;
        }


        /* =========================================
           BACKGROUND GLOWS
        ========================================= */

        .contact-glow {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(110px);
        }

        .contact-glow-one {
          width: 500px;
          height: 500px;

          left: -350px;
          top: 10%;

          background: rgba(77, 163, 255, 0.045);
        }

        .contact-glow-two {
          width: 500px;
          height: 500px;

          right: -320px;
          bottom: 5%;

          background: rgba(139, 92, 246, 0.045);
        }


        /* =========================================
           HEADING
        ========================================= */

        .contact-heading {
          max-width: 850px;

          margin-bottom: 65px;
        }

        .contact-heading p {
          max-width: 680px;

          margin: 25px 0 0;

          color: var(--muted);

          font-size: 15px;

          line-height: 1.8;
        }


        /* =========================================
           CONTACT GRID
        ========================================= */

        .contact-grid {
          display: grid;

          grid-template-columns:
            minmax(300px, 0.8fr)
            minmax(500px, 1.2fr);

          gap: 55px;

          align-items: stretch;
        }


        /* =========================================
           LEFT CONTENT
        ========================================= */

        .contact-info {
          display: flex;

          flex-direction: column;

          justify-content: space-between;

          min-width: 0;
        }

        .contact-intro {
          max-width: 500px;
        }

        .contact-mini-label,
        .contact-social-label,
        .form-mini-label {
          color: rgba(255, 255, 255, 0.4);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 1.5px;
        }

        .contact-intro h3 {
          margin: 14px 0 17px;

          color: var(--white);

          font-size: 39px;

          line-height: 1.1;

          font-weight: 650;

          letter-spacing: -1.5px;
        }

        .contact-intro h3 span {
          background:
            linear-gradient(
              90deg,
              #4da3ff,
              #6366f1,
              #8b5cf6
            );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

          background-clip: text;
        }

        .contact-intro p {
          max-width: 470px;

          margin: 0;

          color: var(--muted);

          font-size: 13px;

          line-height: 1.85;
        }


        /* =========================================
           CONTACT DETAILS
        ========================================= */

        .contact-details {
          display: flex;

          flex-direction: column;

          gap: 10px;

          margin-top: 38px;
        }

        .contact-detail {
          display: flex;

          align-items: center;

          gap: 13px;

          min-width: 0;

          padding: 13px;

          color: inherit;

          text-decoration: none;

          border: 1px solid rgba(255, 255, 255, 0.06);

          border-radius: 13px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.045),
              rgba(255, 255, 255, 0.012)
            );

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-detail:hover {
          transform: translateX(4px);

          border-color: rgba(77, 163, 255, 0.2);

          background:
            linear-gradient(
              145deg,
              rgba(77, 163, 255, 0.065),
              rgba(139, 92, 246, 0.025)
            );

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .contact-detail-icon {
          width: 39px;
          height: 39px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          color: var(--blue);

          border: 1px solid rgba(77, 163, 255, 0.16);

          border-radius: 10px;

          background: rgba(77, 163, 255, 0.045);
        }

        .contact-detail-content {
          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 3px;

          flex: 1;
        }

        .contact-detail-content span {
          color: rgba(255, 255, 255, 0.38);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 1px;
        }

        .contact-detail-content strong {
          overflow: hidden;

          color: #cbd3df;

          font-size: 11px;

          font-weight: 600;

          text-overflow: ellipsis;

          white-space: nowrap;
        }

        .contact-detail-arrow {
          width: 30px;
          height: 30px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          color: rgba(255, 255, 255, 0.3);

          border: 1px solid rgba(255, 255, 255, 0.06);

          border-radius: 8px;

          transition:
            color 0.3s ease,
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .contact-detail:hover .contact-detail-arrow {
          color: var(--blue);

          border-color: rgba(77, 163, 255, 0.18);

          transform: translateY(-2px);
        }


        /* =========================================
           SOCIALS
        ========================================= */

        .contact-socials {
          margin-top: 38px;
        }

        .social-links {
          display: flex;

          gap: 9px;

          margin-top: 13px;
        }

        .social-links a {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          min-height: 39px;

          padding: 0 12px;

          color: #aeb8c7;

          text-decoration: none;

          border: 1px solid rgba(255, 255, 255, 0.07);

          border-radius: 10px;

          background: rgba(255, 255, 255, 0.025);

          font-size: 10px;

          font-weight: 600;

          transition:
            color 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .social-links a:hover {
          color: #fff;

          border-color: rgba(77, 163, 255, 0.25);

          background: rgba(77, 163, 255, 0.055);

          transform: translateY(-3px);
        }

        .social-links a svg:first-child {
          color: var(--blue);
        }

        .social-arrow {
          color: rgba(255, 255, 255, 0.3) !important;

          transition: transform 0.3s ease;
        }

        .social-links a:hover .social-arrow {
          transform: translate(2px, -2px);
        }


        /* =========================================
           FORM CARD
        ========================================= */

        .contact-form-card {
          position: relative;

          min-height: 520px;

          display: flex;

          flex-direction: column;

          padding: 28px;

          border: 1px solid var(--border);

          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.065),
              rgba(255, 255, 255, 0.015)
            );

          backdrop-filter: blur(22px);

          -webkit-backdrop-filter: blur(22px);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 20px 50px rgba(0, 0, 0, 0.15);

          overflow: hidden;
        }

        .contact-form-card::before {
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

          opacity: 0.65;
        }

        .contact-form-card::after {
          content: "";

          position: absolute;

          width: 230px;
          height: 230px;

          right: -130px;
          top: -130px;

          border-radius: 50%;

          background: rgba(77, 163, 255, 0.045);

          filter: blur(45px);

          pointer-events: none;
        }


        /* =========================================
           FORM HEADER
        ========================================= */

        .contact-form-header {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          gap: 20px;
        }

        .contact-form-header h3 {
          margin: 9px 0 0;

          color: var(--white);

          font-size: 24px;

          font-weight: 650;

          letter-spacing: -0.6px;
        }

        .contact-status {
          display: flex;

          align-items: center;

          gap: 7px;

          padding: 6px 9px;

          color: #aeb8c7;

          font-size: 8px;

          font-weight: 700;

          border: 1px solid rgba(77, 163, 255, 0.14);

          border-radius: 7px;

          background: rgba(77, 163, 255, 0.04);
        }

        .contact-status span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #4ade80;

          box-shadow:
            0 0 8px rgba(74, 222, 128, 0.5);
        }

        .contact-form-divider {
          width: 100%;
          height: 1px;

          margin: 22px 0 25px;

          background: rgba(255, 255, 255, 0.055);
        }


        /* =========================================
           FORM
        ========================================= */

        .contact-form {
          display: flex;

          flex-direction: column;

          gap: 19px;
        }

        .form-row {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 14px;
        }

        .form-group {
          display: flex;

          flex-direction: column;

          gap: 8px;
        }

        .form-group label {
          color: rgba(255, 255, 255, 0.48);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.8px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;

          box-sizing: border-box;

          padding: 12px 13px;

          color: var(--white);

          font-family: inherit;

          font-size: 11px;

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 10px;

          outline: none;

          background:
            rgba(0, 0, 0, 0.18);

          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .form-group input {
          min-height: 43px;
        }

        .form-group textarea {
          min-height: 130px;

          resize: vertical;

          line-height: 1.6;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.22);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: rgba(77, 163, 255, 0.4);

          background:
            rgba(77, 163, 255, 0.025);

          box-shadow:
            0 0 0 3px rgba(77, 163, 255, 0.055),
            0 0 25px rgba(77, 163, 255, 0.04);
        }

        .form-group input:disabled,
        .form-group textarea:disabled {
          opacity: 0.6;

          cursor: not-allowed;
        }


        /* =========================================
           SUBMIT BUTTON
        ========================================= */

        .contact-submit {
          position: relative;

          width: 100%;

          min-height: 48px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          margin-top: 3px;

          color: #fff;

          font-family: inherit;

          font-size: 11px;

          font-weight: 700;

          border: 1px solid rgba(255, 255, 255, 0.14);

          border-radius: 11px;

          background:
            linear-gradient(
              135deg,
              #4da3ff,
              #6366f1,
              #8b5cf6
            );

          box-shadow:
            0 9px 25px rgba(77, 163, 255, 0.15);

          cursor: pointer;

          overflow: hidden;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            opacity 0.3s ease;
        }

        .contact-submit::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 80%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.16),
              transparent
            );

          transform: skewX(-20deg);

          transition: left 0.6s ease;
        }

        .contact-submit:hover::before {
          left: 140%;
        }

        .contact-submit:hover {
          transform: translateY(-3px);

          box-shadow:
            0 14px 35px rgba(77, 163, 255, 0.23),
            0 0 25px rgba(139, 92, 246, 0.08);
        }

        .contact-submit:disabled {
          opacity: 0.65;

          cursor: not-allowed;

          transform: none;
        }

        .contact-submit-icon {
          width: 27px;
          height: 27px;

          display: flex;

          align-items: center;
          justify-content: center;

          border: 1px solid rgba(255, 255, 255, 0.2);

          border-radius: 7px;

          background: rgba(255, 255, 255, 0.09);

          transition: transform 0.3s ease;
        }

        .contact-submit:hover .contact-submit-icon {
          transform: translate(2px, -2px);
        }


        /* =========================================
           FORM FOOTER
        ========================================= */

        .contact-form-footer {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          margin-top: 20px;

          padding-top: 17px;

          border-top: 1px solid rgba(255, 255, 255, 0.055);

          color: rgba(255, 255, 255, 0.28);

          font-size: 8px;

          line-height: 1.5;
        }

        .contact-form-footer > span:first-child {
          display: flex;

          align-items: center;

          gap: 6px;
        }

        .footer-dot {
          width: 5px;
          height: 5px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #4ade80;

          box-shadow:
            0 0 7px rgba(74, 222, 128, 0.4);
        }


        /* =========================================
           SUCCESS CARD
        ========================================= */

        .contact-success {
          position: relative;

          flex: 1;

          min-height: 455px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          padding: 35px 25px;

          overflow: hidden;

          animation:
            successFadeIn 0.65s ease forwards;
        }


        /* =========================================
           SUCCESS CENTER GLOW
        ========================================= */

        .success-center-glow {
          position: absolute;

          width: 280px;
          height: 280px;

          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(77, 163, 255, 0.12),
              rgba(139, 92, 246, 0.05),
              transparent 70%
            );

          filter: blur(15px);

          pointer-events: none;

          animation:
            successGlow 3s ease-in-out infinite;
        }


        /* =========================================
           SUCCESS ORBITS
        ========================================= */

        .success-orbit {
          position: absolute;

          top: 50%;
          left: 50%;

          border: 1px solid rgba(77, 163, 255, 0.12);

          border-radius: 50%;

          pointer-events: none;
        }

        .success-orbit-one {
          width: 175px;
          height: 175px;

          transform:
            translate(-50%, -50%)
            rotate(0deg);

          animation:
            successOrbitOne 8s linear infinite;
        }

        .success-orbit-two {
          width: 225px;
          height: 225px;

          transform:
            translate(-50%, -50%)
            rotate(0deg);

          border-color: rgba(139, 92, 246, 0.09);

          animation:
            successOrbitTwo 12s linear infinite;
        }


        /* =========================================
           SUCCESS ICON
        ========================================= */

        .success-icon-wrapper {
          position: relative;

          z-index: 2;

          margin-bottom: 25px;
        }

        .success-icon {
          width: 82px;
          height: 82px;

          display: flex;

          align-items: center;
          justify-content: center;

          border: 1px solid rgba(77, 163, 255, 0.3);

          border-radius: 50%;

          background:
            linear-gradient(
              145deg,
              rgba(77, 163, 255, 0.13),
              rgba(139, 92, 246, 0.08)
            );

          box-shadow:
            0 0 0 8px rgba(77, 163, 255, 0.025),
            0 0 45px rgba(77, 163, 255, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);

          color: #4da3ff;

          animation:
            successIconIn
              0.7s
              cubic-bezier(.17,.67,.3,1.35)
              forwards,
            successFloat
              3s
              ease-in-out
              0.7s
              infinite;
        }

        .success-check {
          width: 48px;
          height: 48px;

          overflow: visible;
        }

        .success-check circle {
          stroke-dasharray: 151;

          stroke-dashoffset: 151;

          animation:
            successCircle
              0.8s
              ease
              0.2s
              forwards;
        }

        .success-check path {
          stroke-dasharray: 35;

          stroke-dashoffset: 35;

          animation:
            successCheck
              0.55s
              ease
              0.75s
              forwards;
        }


        /* =========================================
           SUCCESS TEXT
        ========================================= */

        .success-mini-label {
          position: relative;

          z-index: 2;

          margin-bottom: 10px;

          color: rgba(255, 255, 255, 0.38);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 1.8px;

          animation:
            successTextIn
              0.6s
              ease
              0.25s
              both;
        }

        .contact-success h3 {
          position: relative;

          z-index: 2;

          margin: 0;

          color: var(--white);

          font-size: 29px;

          font-weight: 650;

          letter-spacing: -0.8px;

          animation:
            successTextIn
              0.6s
              ease
              0.35s
              both;
        }

        .contact-success h3 span {
          background:
            linear-gradient(
              90deg,
              #4da3ff,
              #6366f1,
              #8b5cf6
            );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

          background-clip: text;
        }

        .contact-success > p {
          position: relative;

          z-index: 2;

          max-width: 430px;

          margin: 15px auto 0;

          color: var(--muted);

          font-size: 11px;

          line-height: 1.8;

          animation:
            successTextIn
              0.6s
              ease
              0.45s
              both;
        }


        /* =========================================
           SUCCESS STATUS
        ========================================= */

        .success-status {
          position: relative;

          z-index: 2;

          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-top: 19px;

          padding: 7px 11px;

          color: #9eabbc;

          font-size: 8px;

          font-weight: 600;

          border: 1px solid rgba(74, 222, 128, 0.13);

          border-radius: 8px;

          background: rgba(74, 222, 128, 0.035);

          animation:
            successTextIn
              0.6s
              ease
              0.55s
              both;
        }

        .success-status-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #4ade80;

          box-shadow:
            0 0 8px rgba(74, 222, 128, 0.55);

          animation:
            successDot
              1.8s
              ease-in-out
              infinite;
        }


        /* =========================================
           SEND AGAIN BUTTON
        ========================================= */

        .success-again-btn {
          position: relative;

          z-index: 2;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          min-height: 44px;

          margin-top: 24px;

          padding: 0 15px;

          color: #dce5f0;

          font-family: inherit;

          font-size: 10px;

          font-weight: 700;

          border: 1px solid rgba(77, 163, 255, 0.2);

          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              rgba(77, 163, 255, 0.08),
              rgba(139, 92, 246, 0.07)
            );

          cursor: pointer;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;

          animation:
            successTextIn
              0.6s
              ease
              0.65s
              both;
        }

        .success-again-btn:hover {
          transform: translateY(-3px);

          color: #fff;

          border-color: rgba(77, 163, 255, 0.35);

          background:
            linear-gradient(
              135deg,
              rgba(77, 163, 255, 0.14),
              rgba(139, 92, 246, 0.12)
            );

          box-shadow:
            0 10px 25px rgba(77, 163, 255, 0.1);
        }

        .success-again-icon {
          width: 25px;
          height: 25px;

          display: flex;

          align-items: center;
          justify-content: center;

          border: 1px solid rgba(255, 255, 255, 0.12);

          border-radius: 6px;

          background: rgba(255, 255, 255, 0.05);

          transition:
            transform 0.3s ease;
        }

        .success-again-btn:hover .success-again-icon {
          transform: translate(2px, -2px);
        }


        /* =========================================
           SUCCESS ANIMATIONS
        ========================================= */

        @keyframes successFadeIn {

          from {
            opacity: 0;

            transform:
              scale(0.96)
              translateY(10px);
          }

          to {
            opacity: 1;

            transform:
              scale(1)
              translateY(0);
          }

        }

        @keyframes successIconIn {

          0% {
            opacity: 0;

            transform:
              scale(0.4)
              rotate(-25deg);
          }

          70% {
            transform:
              scale(1.08)
              rotate(3deg);
          }

          100% {
            opacity: 1;

            transform:
              scale(1)
              rotate(0);
          }

        }

        @keyframes successCircle {

          to {
            stroke-dashoffset: 0;
          }

        }

        @keyframes successCheck {

          to {
            stroke-dashoffset: 0;
          }

        }

        @keyframes successFloat {

          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-5px);
          }

        }

        @keyframes successGlow {

          0%,
          100% {
            opacity: 0.55;

            transform:
              translate(-50%, -50%)
              scale(0.9);
          }

          50% {
            opacity: 1;

            transform:
              translate(-50%, -50%)
              scale(1.1);
          }

        }

        @keyframes successOrbitOne {

          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }

        }

        @keyframes successOrbitTwo {

          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(-360deg);
          }

        }

        @keyframes successTextIn {

          from {
            opacity: 0;

            transform:
              translateY(10px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }

        @keyframes successDot {

          0%,
          100% {
            opacity: 0.45;

            box-shadow:
              0 0 5px rgba(74, 222, 128, 0.25);
          }

          50% {
            opacity: 1;

            box-shadow:
              0 0 10px rgba(74, 222, 128, 0.6);
          }

        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1000px) {

          .contact-grid {
            grid-template-columns: 1fr;

            gap: 45px;
          }

          .contact-info {
            max-width: 700px;
          }

          .contact-intro {
            max-width: 600px;
          }

          .contact-intro p {
            max-width: 600px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 650px) {

          .contact-section {
            padding: 90px 5% 80px;
          }

          .contact-heading {
            margin-bottom: 50px;
          }

          .contact-heading p {
            font-size: 14px;

            line-height: 1.8;
          }

          .contact-intro h3 {
            font-size: 34px;
          }

          .contact-details {
            margin-top: 30px;
          }

          .contact-socials {
            margin-top: 30px;
          }

          .contact-form-card {
            min-height: 500px;

            padding: 20px;

            border-radius: 18px;
          }

          .form-row {
            grid-template-columns: 1fr;

            gap: 19px;
          }

          .contact-form-header h3 {
            font-size: 21px;
          }

          .contact-form-footer {
            flex-direction: column;

            align-items: flex-start;
          }

          /* SUCCESS MOBILE */

          .contact-success {
            min-height: 430px;

            padding: 30px 15px;
          }

          .success-icon {
            width: 72px;
            height: 72px;
          }

          .success-check {
            width: 43px;
            height: 43px;
          }

          .contact-success h3 {
            font-size: 25px;
          }

          .contact-success > p {
            max-width: 330px;

            font-size: 10px;
          }

          .success-orbit-one {
            width: 145px;
            height: 145px;
          }

          .success-orbit-two {
            width: 190px;
            height: 190px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {

          .contact-section {
            padding: 80px 5% 70px;
          }

          .contact-intro h3 {
            font-size: 30px;
          }

          .contact-form-card {
            min-height: 480px;

            padding: 17px;
          }

          .contact-detail {
            padding: 11px;
          }

          .contact-detail-content strong {
            font-size: 10px;
          }

          .contact-status {
            display: none;
          }

          .social-links {
            flex-wrap: wrap;
          }

          .contact-success {
            min-height: 410px;

            padding: 25px 10px;
          }

          .contact-success h3 {
            font-size: 22px;
          }

          .contact-success > p {
            font-size: 9.5px;
          }

        }

      `}</style>

    </section>
  );
}

export default Contact;

