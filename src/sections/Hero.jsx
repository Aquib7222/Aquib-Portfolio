import React from "react";
import {
  FiArrowUpRight,
  FiDownload,
  FiCode,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";

import aquibPhoto from "../assets/aquibphoto.jpg";
import Sparkles from "../components/Sparkles";

function Hero() {
  return (
    <>
      <section className="hero-section" id="home">

        {/* =========================================
            BACKGROUND
        ========================================== */}

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-grid"></div>

        <Sparkles />


        {/* =========================================
            HERO CONTENT
        ========================================== */}

        <div className="hero-content">

          {/* =========================================
              LEFT SIDE - HERO CONTENT
          ========================================== */}

          <div className="hero-left">

            <div className="available-badge">
              <span></span>
              Available for opportunities
            </div>


            <p className="hero-intro">
              Hi, I'm
            </p>


            <h6>
              Aquib
              <br />
              <span>Shahzada</span>
            </h6>


            <div className="hero-role">

              <span>Java Developer</span>

              <i></i>

              <span>Full Stack Developer</span>

            </div>


            <p className="hero-description">
              I build modern and scalable web applications using Java,
              Spring Boot, React and MySQL.
            </p>


            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-btn"
              >
                View My Work
                <FiArrowUpRight size={18} />
              </a>


              <a
                href="/resume.pdf"
                className="secondary-btn"
                download="Aquib-Shahzada-CV.pdf"
              >
                Download CV
                <FiDownload size={17} />
              </a>

            </div>


            

            <div className="hero-stack-preview">

              <span>
                <FiCode />
                Full Stack
              </span>

              <span>
                <FiDatabase />
                MySQL
              </span>

              <span>
                <FiLayers />
                REST APIs
              </span>

            </div>

          </div>



          <div className="hero-orbit-center">

            

            <div
              className="hero-orbit-system"
              aria-hidden="true"
            >

              

              <div className="hero-orbit orbit-horizontal">

                <span className="orbit-dot orbit-dot-blue"></span>

              </div>


             
              <div className="hero-orbit orbit-diagonal">

                <span className="orbit-dot orbit-dot-purple"></span>

              </div>

              <div className="orbit-core">
  <div className="orbit-octagon-3d">
    <span></span>
    <span></span>
  </div>
</div>


          

              <div className="hero-orbit orbit-inner">

                <span className="orbit-dot orbit-dot-small"></span>

              </div>
              


             

              <div className="hero-orbit orbit-extra">

                <span className="orbit-dot orbit-dot-white"></span>

              </div>

            </div>


           
            <div className="hero-orbit-glow"></div>

          </div>



          <div className="hero-card-wrapper">

          

            <div className="hero-card">

              <div className="card-top">

                <span>
                  DEVELOPER
                </span>

                <span>
                  2026
                </span>

              </div>


              <div className="card-photo">

                <img
                  src={aquibPhoto}
                  alt="Aquib Shahzada"
                />

                <div className="photo-overlay"></div>

                <div className="photo-scan"></div>

                <div className="photo-badge">
                  AQ
                </div>

              </div>


              <div className="card-bottom">

                <div>

                  <small>
                    NAME
                  </small>

                  <strong>
                    Aquib Shahzada
                  </strong>

                </div>


                <div>

                  <small>
                    FOCUS
                  </small>

                  <strong>
                    Web Development
                  </strong>

                </div>

              </div>

            </div>


            

            <div className="floating-tech tech-java">

              <span className="tech-dot"></span>

              Java

            </div>


            <div className="floating-tech tech-react">

              <span className="tech-dot"></span>

              React

            </div>


            <div className="floating-tech tech-spring">

              <span className="tech-dot"></span>

              Spring Boot

            </div>

          </div>

        </div>



        <div className="hero-scroll">

          <span>
            Scroll to explore
          </span>

          <div className="scroll-line"></div>

        </div>

      </section>



      <style>{`



.hero-section {
  position: relative;

  min-height: 100vh;

  display: flex;
  align-items: center;

  padding: 100px 4% 0px;

  background:
    radial-gradient(
      circle at 65% 45%,
      rgba(77, 163, 255, 0.035),
      transparent 30%
    ),
    var(--bg);

  overflow: hidden;
}


/* =========================================================
   BACKGROUND GLOW
========================================================= */

.hero-glow {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(110px);

  z-index: 0;
}


.hero-glow-one {
  width: 520px;
  height: 520px;

  top: -230px;
  left: -180px;

  background: rgba(77, 163, 255, 0.11);
}


.hero-glow-two {
  width: 480px;
  height: 480px;

  right: -180px;
  bottom: -180px;

  background: rgba(139, 92, 246, 0.09);
}


/* =========================================================
   SUBTLE GRID
========================================================= */

.hero-grid {
  position: absolute;

  inset: 0;

  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.018) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.018) 1px,
      transparent 1px
    );

  background-size: 70px 70px;

  mask-image:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      transparent 90%
    );

  pointer-events: none;

  z-index: 0;
}


/* =========================================================
   HERO CONTENT

   IMPORTANT:

   3 COLUMNS

   LEFT   = Content
   CENTER = Orbit
   RIGHT  = Card
========================================================= */

.hero-content {
  position: relative;

  z-index: 5;

  width: 100%;

  max-width: 1500px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(560px, 0.9fr)
    minmax(0, 1fr);

  align-items: center;

  gap: 20px;
}


/* =========================================================
   LEFT
========================================================= */

.hero-left {
  max-width: 650px;

  position: relative;

  z-index: 5;
}


/* =========================================================
   AVAILABLE BADGE
========================================================= */

.available-badge {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  padding: 8px 13px;

  border: 1px solid rgba(77, 163, 255, 0.18);

  border-radius: 50px;

  color: #8b96a6;

  background: rgba(77, 163, 255, 0.035);

  box-shadow:
    inset 0 1px 0
    rgba(255, 255, 255, 0.035);

  font-size: 10px;

  font-weight: 600;

  letter-spacing: 0.5px;
}


.available-badge span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #4da3ff;

  box-shadow:
    0 0 0 4px rgba(77, 163, 255, 0.07),
    0 0 14px rgba(77, 163, 255, 0.7);

  animation:
    availabilityPulse 2s ease-in-out infinite;
}


@keyframes availabilityPulse {

  0%,
  100% {
    box-shadow:
      0 0 0 4px rgba(77, 163, 255, 0.07),
      0 0 10px rgba(77, 163, 255, 0.45);
  }

  50% {
    box-shadow:
      0 0 0 6px rgba(77, 163, 255, 0.035),
      0 0 18px rgba(77, 163, 255, 0.8);
  }

}


/* =========================================================
   INTRO
========================================================= */

.hero-intro {
  margin-top: 35px;

  margin-bottom: 8px;

  color: var(--muted);

  font-size: 17px;

  font-weight: 500;
}


/* =========================================================
   NAME
========================================================= */

.hero-left h6 {
  color: var(--white);

  font-size:
    clamp(
      64px,
      6.7vw,
      110px
    );

  line-height: 0.88;

  font-weight: 700;

  letter-spacing: -5px;

  margin: 0;
}


.hero-left h6 span {
  background:
    linear-gradient(
      90deg,
      #4da3ff 0%,
      #7187ff 42%,
      #a78bfa 100%
    );

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;

  background-clip: text;

  filter:
    drop-shadow(
      0 0 22px
      rgba(77, 163, 255, 0.08)
    );
}


/* =========================================================
   ROLE
========================================================= */

.hero-role {
  display: flex;

  align-items: center;

  gap: 13px;

  margin-top: 28px;

  color: var(--text);

  font-size: 13px;

  font-weight: 500;
}


.hero-role i {
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: var(--blue);

  box-shadow:
    0 0 8px
    rgba(77, 163, 255, 0.7);
}


/* =========================================================
   DESCRIPTION
========================================================= */

.hero-description {
  max-width: 550px;

  margin-top: 20px;

  color: var(--muted);

  font-size: 15px;

  line-height: 1.8;
}




.hero-buttons {
  display: flex;

  align-items: center;

  gap: 13px;

  margin-top: 32px;
}


.primary-btn,
.secondary-btn {
  position: relative;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  min-height: 48px;

  padding: 0 20px;

  border-radius: 12px;

  text-decoration: none;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 0.15px;

  overflow: hidden;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}


/* =========================================================
   VIEW MY WORK
========================================================= */

.primary-btn {

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #4da3ff 0%,
      #6366f1 52%,
      #8b5cf6 100%
    );

  border:
    1px solid
    rgba(255, 255, 255, 0.16);

  box-shadow:
    0 8px 25px
    rgba(77, 163, 255, 0.18),

    0 0 20px
    rgba(99, 102, 241, 0.08);
}


/* subtle shine */

.primary-btn::before {

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

  transition:
    left 0.6s ease;

  pointer-events: none;
}


.primary-btn:hover::before {

  left: 140%;
}


.primary-btn:hover {

  color: #ffffff;

  transform:
    translateY(-3px);

  box-shadow:
    0 14px 35px
    rgba(77, 163, 255, 0.28),

    0 0 30px
    rgba(139, 92, 246, 0.14);
}


.primary-btn svg {

  transition:
    transform 0.3s ease;
}


.primary-btn:hover svg {

  transform:
    translate(2px, -2px);
}


/* =========================================================
   DOWNLOAD CV
========================================================= */

.secondary-btn {

  color: #e7edf5;

  background:
    linear-gradient(
      135deg,
      rgba(77, 163, 255, 0.10),
      rgba(99, 102, 241, 0.08),
      rgba(139, 92, 246, 0.10)
    );

  border:
    1px solid
    rgba(77, 163, 255, 0.30);

  box-shadow:
    inset 0 1px 0
    rgba(255, 255, 255, 0.05),

    0 6px 20px
    rgba(77, 163, 255, 0.05);

  backdrop-filter:
    blur(12px);

  -webkit-backdrop-filter:
    blur(12px);
}


.secondary-btn:hover {

  color: #ffffff;

  transform:
    translateY(-3px);

  border-color:
    rgba(139, 92, 246, 0.55);

  background:
    linear-gradient(
      135deg,
      rgba(77, 163, 255, 0.17),
      rgba(99, 102, 241, 0.14),
      rgba(139, 92, 246, 0.17)
    );

  box-shadow:
    0 12px 30px
    rgba(77, 163, 255, 0.13),

    inset 0 1px 0
    rgba(255, 255, 255, 0.08);
}


.secondary-btn svg {

  transition:
    transform 0.3s ease;
}


.secondary-btn:hover svg {

  transform:
    translateY(2px);
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

  .hero-buttons {

    flex-direction: column;

    align-items: stretch;

    width: 100%;

    gap: 10px;
  }


  .primary-btn,
  .secondary-btn {

    width: 100%;

    min-height: 50px;
  }

}

/* =========================================================
   STACK PREVIEW
========================================================= */

.hero-stack-preview {
  display: flex;

  align-items: center;

  gap: 8px;

  margin-top: 27px;
}


.hero-stack-preview span {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  padding: 6px 9px;

  border:
    1px solid
    rgba(255, 255, 255, 0.07);

  border-radius: 8px;

  color: #697586;

  background:
    rgba(255, 255, 255, 0.018);

  font-size: 9px;

  font-weight: 600;
}


.hero-stack-preview svg {
  color:
    rgba(77, 163, 255, 0.75);

  font-size: 12px;
}


/* =========================================================
   CENTER ORBIT COLUMN

   THIS IS NOW COMPLETELY INDEPENDENT
   FROM THE PROFILE CARD.
========================================================= */

.hero-orbit-center {
  position: relative;

  width: 100%;

  height: 680px;

  display: flex;

  align-items: center;

  justify-content: center;

  z-index: 3;

  overflow: visible;
}


/* =========================================================
   ORBITAL SYSTEM

   CENTER OF THIS COLUMN
========================================================= */

.hero-orbit-system {
  position: absolute;

  width: 680px;

  height: 680px;

  left: 50%;

  top: 50%;

  transform:
    translate(-50%, -50%);

  z-index: 2;

  pointer-events: none;

  perspective: 1600px;

  transform-style: preserve-3d;
}
.orbit-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 130px;
  height: 130px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  perspective: 800px;
  transform-style: preserve-3d;
}

/* 3D Octagon */
.orbit-octagon-3d {
  position: relative;
  width: 70px;
  height: 70px;

  transform-style: preserve-3d;

  animation: octagon3DRotate 7s linear infinite;
}

/* Front + back octagon */
.orbit-octagon-3d::before,
.orbit-octagon-3d::after {
  content: "";
  position: absolute;
  inset: 0;

  border: 2px solid rgba(77, 163, 255, 0.9);

  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );

  background: transparent;
}

.orbit-octagon-3d::before {
  transform: translateZ(18px);
}

.orbit-octagon-3d::after {
  transform: translateZ(-18px);
  opacity: 0.35;
}


/* Connecting depth lines */
.orbit-octagon-3d span {
  position: absolute;
  width: 2px;
  height: 18px;

  background: rgba(77, 163, 255, 0.7);

  left: 50%;
  top: 0;

  transform-origin: center bottom;
}

/* Different 3D edges */
.orbit-octagon-3d span:nth-child(1) {
  transform:
    translateX(-1px)
    rotate(45deg)
    translateY(-1px);
}

.orbit-octagon-3d span:nth-child(2) {
  transform:
    translateX(-1px)
    rotate(-45deg)
    translateY(-1px);
}


/* Continuous 3D rotation */
@keyframes octagon3DRotate {
  0% {
    transform:
      rotateX(0deg)
      rotateY(0deg)
      rotateZ(0deg);
  }

  25% {
    transform:
      rotateX(25deg)
      rotateY(90deg)
      rotateZ(15deg);
  }

  50% {
    transform:
      rotateX(55deg)
      rotateY(180deg)
      rotateZ(25deg);
  }

  75% {
    transform:
      rotateX(25deg)
      rotateY(270deg)
      rotateZ(15deg);
  }

  100% {
    transform:
      rotateX(0deg)
      rotateY(360deg)
      rotateZ(0deg);
  }
}
/* =========================================================
   CENTER GLOW

   ALSO CENTER OF ORBIT COLUMN
========================================================= */

.hero-orbit-glow {
  position: absolute;

  width: 390px;

  height: 390px;

  left: 50%;

  top: 50%;

  transform:
    translate(-50%, -50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,

      rgba(77, 163, 255, 0.15)
      0%,

      rgba(77, 163, 255, 0.08)
      27%,

      rgba(139, 92, 246, 0.06)
      48%,

      transparent 72%
    );

  filter: blur(35px);

  z-index: 1;

  pointer-events: none;

  animation:
    centerGlow 6s ease-in-out infinite;
}


@keyframes centerGlow {

  0%,
  100% {
    transform:
      translate(-50%, -50%)
      scale(0.95);

    opacity: 0.7;
  }

  50% {
    transform:
      translate(-50%, -50%)
      scale(1.08);

    opacity: 1;
  }

}


/* =========================================================
   COMMON ORBIT
========================================================= */

.hero-orbit {
  position: absolute;

  left: 50%;

  top: 50%;

  border-radius: 50%;

  pointer-events: none;

  box-sizing: border-box;

  transform-style: preserve-3d;

  z-index: 2;

  transition:
    filter 0.5s ease;
}


/* =========================================================
   HORIZONTAL ORBIT
========================================================= */

.orbit-horizontal {
  width: 590px;

  height: 590px;

  border:
    2px solid
    rgba(77, 163, 255, 0.48);

  box-shadow:

    0 0 8px
    rgba(77, 163, 255, 0.22),

    0 0 20px
    rgba(77, 163, 255, 0.13),

    0 0 45px
    rgba(77, 163, 255, 0.06);

  transform:
    translate(-50%, -50%)
    rotateX(68deg)
    rotateZ(0deg);

  animation:
    orbitHorizontal 18s
    linear infinite;
}


/* =========================================================
   DIAGONAL ORBIT
========================================================= */

.orbit-diagonal {
  width: 530px;

  height: 530px;

  border:
    2px solid
    rgba(167, 139, 250, 0.5);

  box-shadow:

    0 0 8px
    rgba(167, 139, 250, 0.24),

    0 0 22px
    rgba(139, 92, 246, 0.14),

    0 0 45px
    rgba(139, 92, 246, 0.06);

  transform:
    translate(-50%, -50%)
    rotateY(63deg)
    rotateZ(32deg);

  animation:
    orbitDiagonal 23s
    linear infinite;
}


/* =========================================================
   VERTICAL ORBIT
========================================================= */

.orbit-vertical {
  width: 465px;

  height: 465px;

  border:
    2px solid
    rgba(125, 211, 252, 0.32);

  box-shadow:

    0 0 9px
    rgba(125, 211, 252, 0.14),

    0 0 28px
    rgba(77, 163, 255, 0.07);

  transform:
    translate(-50%, -50%)
    rotateX(25deg)
    rotateY(67deg)
    rotateZ(-28deg);

  animation:
    orbitVertical 16s
    linear infinite;
}


/* =========================================================
   INNER ORBIT
========================================================= */

.orbit-inner {
  width: 350px;

  height: 350px;

  border:
    2px dashed
    rgba(255, 255, 255, 0.15);

  box-shadow:
    0 0 15px
    rgba(77, 163, 255, 0.04);

  transform:
    translate(-50%, -50%)
    rotateX(70deg)
    rotateZ(0deg);

  animation:
    orbitInner 12s
    linear infinite;
}


/* =========================================================
   EXTRA ORBIT
========================================================= */

.orbit-extra {
  width: 625px;

  height: 625px;

  border:
    1px solid
    rgba(255, 255, 255, 0.07);

  box-shadow:
    0 0 25px
    rgba(255, 255, 255, 0.025);

  transform:
    translate(-50%, -50%)
    rotateX(78deg)
    rotateY(12deg)
    rotateZ(20deg);

  animation:
    orbitExtra 30s
    linear infinite;
}


/* =========================================================
   ORBIT DOT
========================================================= */

.orbit-dot {
  position: absolute;

  top: 50%;

  right: -5px;

  width: 8px;

  height: 8px;

  border-radius: 50%;

  transform:
    translateY(-50%);
}


/* BLUE DOT */

.orbit-dot-blue {
  background: #4da3ff;

  box-shadow:

    0 0 7px
    #4da3ff,

    0 0 17px
    rgba(77, 163, 255, 0.95),

    0 0 32px
    rgba(77, 163, 255, 0.5);
}


/* PURPLE DOT */

.orbit-dot-purple {
  background: #a78bfa;

  box-shadow:

    0 0 7px
    #a78bfa,

    0 0 17px
    rgba(167, 139, 250, 0.95),

    0 0 32px
    rgba(139, 92, 246, 0.5);
}


/* CYAN DOT */

.orbit-dot-cyan {
  width: 7px;

  height: 7px;

  background: #7dd3fc;

  box-shadow:

    0 0 7px
    #7dd3fc,

    0 0 18px
    rgba(125, 211, 252, 0.9);
}


/* WHITE DOT */

.orbit-dot-white {
  width: 5px;

  height: 5px;

  background: #ffffff;

  box-shadow:

    0 0 7px
    rgba(255, 255, 255, 0.95),

    0 0 18px
    rgba(77, 163, 255, 0.7);
}


/* SMALL DOT */

.orbit-dot-small {
  width: 5px;

  height: 5px;

  background: #ffffff;

  box-shadow:

    0 0 7px
    rgba(255, 255, 255, 0.9),

    0 0 16px
    rgba(77, 163, 255, 0.7);
}


/* =========================================================
   NORMAL ORBIT ANIMATIONS
========================================================= */

@keyframes orbitHorizontal {

  0% {
    transform:
      translate(-50%, -50%)
      rotateX(68deg)
      rotateZ(0deg);
  }

  100% {
    transform:
      translate(-50%, -50%)
      rotateX(68deg)
      rotateZ(360deg);
  }

}


@keyframes orbitDiagonal {

  0% {
    transform:
      translate(-50%, -50%)
      rotateY(63deg)
      rotateZ(32deg);
  }

  100% {
    transform:
      translate(-50%, -50%)
      rotateY(63deg)
      rotateZ(-328deg);
  }

}


@keyframes orbitVertical {

  0% {
    transform:
      translate(-50%, -50%)
      rotateX(25deg)
      rotateY(67deg)
      rotateZ(-28deg);
  }

  100% {
    transform:
      translate(-50%, -50%)
      rotateX(25deg)
      rotateY(67deg)
      rotateZ(332deg);
  }

}


@keyframes orbitInner {

  0% {
    transform:
      translate(-50%, -50%)
      rotateX(70deg)
      rotateZ(0deg);
  }

  100% {
    transform:
      translate(-50%, -50%)
      rotateX(70deg)
      rotateZ(-360deg);
  }

}


@keyframes orbitExtra {

  0% {
    transform:
      translate(-50%, -50%)
      rotateX(78deg)
      rotateY(12deg)
      rotateZ(20deg);
  }

  100% {
    transform:
      translate(-50%, -50%)
      rotateX(78deg)
      rotateY(12deg)
      rotateZ(380deg);
  }

}


/* =========================================================
   ORBIT HOVER

   Hovering the CENTER ORBIT itself
========================================================= */

.hero-orbit-center:hover .orbit-horizontal {
  animation:
    orbitHorizontalHover 5s
    linear infinite;
}


.hero-orbit-center:hover .orbit-diagonal {
  animation:
    orbitDiagonalHover 7s
    linear infinite;
}


.hero-orbit-center:hover .orbit-vertical {
  animation:
    orbitVerticalHover 4.5s
    linear infinite;
}


.hero-orbit-center:hover .orbit-inner {
  animation:
    orbitInnerHover 3.5s
    linear infinite;
}


.hero-orbit-center:hover .orbit-extra {
  animation:
    orbitExtraHover 9s
    linear infinite;
}


/* =========================================================
   HOVER ANIMATIONS
========================================================= */

@keyframes orbitHorizontalHover {

  from {
    transform:
      translate(-50%, -50%)
      rotateX(68deg)
      rotateZ(0deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotateX(68deg)
      rotateZ(-360deg);
  }

}


@keyframes orbitDiagonalHover {

  from {
    transform:
      translate(-50%, -50%)
      rotateY(63deg)
      rotateZ(32deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotateY(63deg)
      rotateZ(392deg);
  }

}


@keyframes orbitVerticalHover {

  from {
    transform:
      translate(-50%, -50%)
      rotateX(25deg)
      rotateY(67deg)
      rotateZ(-28deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotateX(25deg)
      rotateY(67deg)
      rotateZ(-388deg);
  }

}


@keyframes orbitInnerHover {

  from {
    transform:
      translate(-50%, -50%)
      rotateX(70deg)
      rotateZ(0deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotateX(70deg)
      rotateZ(360deg);
  }

}


@keyframes orbitExtraHover {

  from {
    transform:
      translate(-50%, -50%)
      rotateX(78deg)
      rotateY(12deg)
      rotateZ(20deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotateX(78deg)
      rotateY(12deg)
      rotateZ(-340deg);
  }

}


/* =========================================================
   RIGHT PROFILE CARD WRAPPER

   IMPORTANT:

   No orbit here anymore.
========================================================= */

.hero-card-wrapper {
  position: relative;

  width: 100%;

  max-width: 400px;

  height: 580px;

  margin-left: auto;

  display: flex;

  align-items: center;

  justify-content: center;

  perspective: 1600px;

  z-index: 4;
}


/* =========================================================
   PROFILE CARD
========================================================= */

.hero-card {
  position: relative;

  width: 100%;

  max-width: 370px;

  padding: 20px;

  border:
    1px solid
    rgba(255, 255, 255, 0.1);

  border-radius: 26px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.075),
      rgba(255, 255, 255, 0.025)
    );

  backdrop-filter:
    blur(25px);

  -webkit-backdrop-filter:
    blur(25px);

  box-shadow:

    0 30px 80px
    rgba(0, 0, 0, 0.4),

    0 0 50px
    rgba(77, 163, 255, 0.055),

    inset 0 1px 0
    rgba(255, 255, 255, 0.07);

  z-index: 5;

  transition:
    transform 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
}


.hero-card-wrapper:hover .hero-card {

  transform:
    translateY(-5px);

  border-color:
    rgba(77, 163, 255, 0.2);

  box-shadow:

    0 40px 100px
    rgba(0, 0, 0, 0.45),

    0 0 70px
    rgba(77, 163, 255, 0.09),

    inset 0 1px 0
    rgba(255, 255, 255, 0.08);
}


/* =========================================================
   CARD TOP
========================================================= */

.card-top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  padding:
    3px 2px 16px;
}


.card-top span {
  color: var(--muted);

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 1.5px;
}


/* =========================================================
   CARD PHOTO
========================================================= */

.card-photo {
  position: relative;

  width: 100%;

  height: 390px;

  overflow: hidden;

  border-radius: 19px;

  border:
    1px solid
    rgba(255, 255, 255, 0.09);

  background:
    #0c1118;
}


.card-photo img {
  position: relative;

  z-index: 1;

  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;

  object-position: center top;

  transition:
    transform 0.7s ease;
}


.hero-card-wrapper:hover
.card-photo img {

  transform:
    scale(1.025);
}


/* =========================================================
   PHOTO OVERLAY
========================================================= */

.photo-overlay {
  position: absolute;

  inset: 0;

  z-index: 2;

  background:
    linear-gradient(
      to top,
      rgba(5, 8, 13, 0.62),
      transparent 38%
    );

  pointer-events: none;
}


/* =========================================================
   PHOTO SCAN
========================================================= */

.photo-scan {
  position: absolute;

  left: 0;
  right: 0;

  top: -100%;

  height: 45%;

  z-index: 3;

  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(77, 163, 255, 0.055),
      transparent
    );

  pointer-events: none;

  animation:
    photoScan 7s
    ease-in-out infinite;
}


@keyframes photoScan {

  0%,
  60% {
    top: -50%;
  }

  100% {
    top: 120%;
  }

}


/* =========================================================
   PHOTO BADGE
========================================================= */

.photo-badge {
  position: absolute;

  right: 15px;

  bottom: 15px;

  width: 44px;

  height: 44px;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(255, 255, 255, 0.18);

  border-radius: 13px;

  color: var(--white);

  background:
    rgba(7, 10, 15, 0.68);

  backdrop-filter:
    blur(15px);

  -webkit-backdrop-filter:
    blur(15px);

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 0.5px;

  box-shadow:
    0 10px 25px
    rgba(0, 0, 0, 0.25);

  z-index: 4;
}


/* =========================================================
   CARD BOTTOM
========================================================= */

.card-bottom {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 15px;

  padding:
    19px 2px 2px;
}


.card-bottom div {
  display: flex;

  flex-direction: column;

  gap: 6px;
}


.card-bottom small {
  color: #8d98a7;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 1.4px;
}


.card-bottom strong {
  color: var(--text);

  font-size: 12px;

  font-weight: 600;

  line-height: 1.4;
}


/* =========================================================
   FLOATING TECHNOLOGIES
========================================================= */

.floating-tech {
  position: absolute;

  display: flex;

  align-items: center;

  gap: 7px;

  padding: 10px 14px;

  border:
    1px solid
    rgba(255, 255, 255, 0.09);

  border-radius: 11px;

  color: var(--text);

  background:
    rgba(11, 16, 23, 0.78);

  backdrop-filter:
    blur(18px);

  -webkit-backdrop-filter:
    blur(18px);

  box-shadow:
    0 12px 35px
    rgba(0, 0, 0, 0.3);

  font-size: 10px;

  font-weight: 700;

  white-space: nowrap;

  z-index: 8;
}


.tech-dot {
  width: 5px;

  height: 5px;

  border-radius: 50%;

  background:
    #4da3ff;

  box-shadow:
    0 0 9px
    rgba(77, 163, 255, 0.8);
}


.tech-java {
  top: 90px;

  left: -28px;

  animation:
    floatTechOne 5s ease-in-out infinite;
}


.tech-react {
  right: -30px;

  top: 215px;

  animation:
    floatTechTwo 5s ease-in-out infinite;
}


.tech-spring {
  left: -40px;

  bottom: 80px;

  animation:
    floatTechThree 6s ease-in-out infinite;
}


/* =========================================================
   FLOAT ANIMATIONS
========================================================= */

@keyframes floatTechOne {

  0%,
  100% {
    transform:
      translateY(0)
      rotate(0deg);
  }

  50% {
    transform:
      translateY(-9px)
      rotate(-1deg);
  }

}


@keyframes floatTechTwo {

  0%,
  100% {
    transform:
      translateY(0)
      rotate(0deg);
  }

  50% {
    transform:
      translateY(9px)
      rotate(1deg);
  }

}


@keyframes floatTechThree {

  0%,
  100% {
    transform:
      translateY(0)
      rotate(0deg);
  }

  50% {
    transform:
      translateY(-8px)
      rotate(-1deg);
  }

}


/* =========================================================
   SCROLL
========================================================= */

.hero-scroll {
  position: absolute;

  left: 5%;

  bottom: 30px;

  display: flex;

  align-items: center;

  gap: 12px;

  color: #596575;

  font-size: 9px;

  font-weight: 600;

  letter-spacing: 1px;

  text-transform: uppercase;

  z-index: 6;
}


.scroll-line {
  width: 45px;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      #394452,
      transparent
    );
}


/* =========================================================
   1300px
========================================================= */

@media (max-width: 1300px) {

  .hero-section {
    padding-left: 3%;

    padding-right: 3%;
  }


  .hero-content {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(470px, 0.85fr)
      minmax(330px, 0.85fr);

    gap: 10px;
  }


  .hero-left h6 {
    font-size:
      clamp(
        58px,
        6.3vw,
        90px
      );
  }


  .hero-orbit-center {
    height: 620px;
  }


  .hero-orbit-system {
    width: 600px;

    height: 600px;
  }


  .orbit-horizontal {
    width: 520px;

    height: 520px;
  }


  .orbit-diagonal {
    width: 465px;

    height: 465px;
  }


  .orbit-vertical {
    width: 410px;

    height: 410px;
  }


  .orbit-inner {
    width: 300px;

    height: 300px;
  }


  .orbit-extra {
    width: 555px;

    height: 555px;
  }


  .hero-card-wrapper {
    max-width: 370px;
  }

}


/* =========================================================
   1100px

   Switch to 2 columns temporarily.
   Orbit remains independent.
========================================================= */

@media (max-width: 1100px) {

  .hero-content {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(420px, 0.9fr);

    gap: 30px;
  }


  .hero-left {
    max-width: 620px;
  }


  .hero-orbit-center {
    position: absolute;

    right: 365px;

    top: 50%;

    width: 500px;

    height: 580px;

    transform:
      translateY(-50%);

    opacity: 0.5;

    pointer-events: none;
  }


  .hero-orbit-system {
    width: 540px;

    height: 540px;
  }


  .orbit-horizontal {
    width: 480px;

    height: 480px;
  }


  .orbit-diagonal {
    width: 425px;

    height: 425px;
  }


  .orbit-vertical {
    width: 375px;

    height: 375px;
  }


  .orbit-inner {
    width: 275px;

    height: 275px;
  }


  .orbit-extra {
    width: 510px;

    height: 510px;
  }


  .hero-card-wrapper {
    max-width: 400px;

    height: 540px;

    margin-left: auto;
  }

}


/* =========================================================
   900px

   Mobile/tablet single column.

   Order:

   Content
   Orbit
   Card
========================================================= */

@media (max-width: 900px) {

  .hero-section {

    min-height: auto;

    padding-top: 120px;

    padding-bottom: 100px;
  }


  .hero-content {

    display: flex;

    flex-direction: column;

    gap: 45px;

    align-items: center;
  }


  .hero-left {

    width: 100%;

    max-width: 700px;

    align-self: center;
  }


  /* =====================================
     CENTER ORBIT
  ====================================== */

  .hero-orbit-center {

    position: relative;

    right: auto;

    top: auto;

    width: 100%;

    max-width: 680px;

    height: 560px;

    transform: none;

    opacity: 0.8;

    pointer-events: auto;

    order: 2;
  }


  .hero-orbit-system {

    width: 560px;

    height: 560px;

    left: 50%;

    top: 50%;

    transform:
      translate(-50%, -50%);
  }


  .orbit-horizontal {

    width: 490px;

    height: 490px;
  }


  .orbit-diagonal {

    width: 440px;

    height: 440px;
  }


  .orbit-vertical {

    width: 385px;

    height: 385px;
  }


  .orbit-inner {

    width: 290px;

    height: 290px;
  }


  .orbit-extra {

    width: 525px;

    height: 525px;
  }


  /* =====================================
     RIGHT CARD
  ====================================== */

  .hero-card-wrapper {

    width: 100%;

    max-width: 440px;

    height: 570px;

    margin: 0 auto;

    order: 3;
  }


  .hero-scroll {

    display: none;
  }

}


/* =========================================================
   600px
========================================================= */

@media (max-width: 600px) {

  .hero-section {

    padding:
      105px 5% 70px;
  }


  .hero-content {

    gap: 25px;
  }


  .hero-intro {

    margin-top: 28px;

    font-size: 15px;
  }


  .hero-left h6 {

    font-size:
      clamp(
        55px,
        15vw,
        75px
      );

    letter-spacing: -3px;
  }


  .hero-role {

    flex-wrap: wrap;

    gap: 9px;

    font-size: 12px;
  }


  .hero-description {

    font-size: 14px;
  }


  .hero-buttons {

    flex-direction: column;

    align-items: stretch;

    width: 100%;
  }


  .primary-btn,
  .secondary-btn {

    width: 100%;
  }


  .hero-stack-preview {

    flex-wrap: wrap;
  }


  /* =====================================
     MOBILE ORBIT
  ====================================== */

  .hero-orbit-center {

    height: 430px;

    max-width: 430px;

    margin-top: 5px;

    margin-bottom: 5px;

    opacity: 0.62;
  }


  .hero-orbit-system {

    width: 430px;

    height: 430px;

    left: 50%;

    top: 50%;

    transform:
      translate(-50%, -50%);
  }


  .orbit-horizontal {

    width: 390px;

    height: 390px;
  }


  .orbit-diagonal {

    width: 345px;

    height: 345px;
  }


  .orbit-vertical {

    width: 300px;

    height: 300px;
  }


  .orbit-inner {

    width: 235px;

    height: 235px;
  }


  .orbit-extra {

    width: 415px;

    height: 415px;
  }


  .hero-orbit-glow {

    width: 250px;

    height: 250px;
  }


  .orbit-dot {

    width: 5px;

    height: 5px;
  }


  /* =====================================
     CARD
  ====================================== */

  .hero-card-wrapper {

    max-width: 340px;

    height: 470px;
  }


  .hero-card {

    padding: 16px;

    border-radius: 21px;
  }


  .card-photo {

    height: 360px;

    border-radius: 16px;
  }


  /* =====================================
     FLOATING TECHNOLOGIES
  ====================================== */

  .floating-tech {

    padding:
      8px 11px;

    font-size: 9px;
  }


  .tech-java {

    top: 80px;

    left: -12px;
  }


  .tech-react {

    right: -12px;

    top: 190px;
  }


  .tech-spring {

    left: -15px;

    bottom: 75px;
  }

}


/* =========================================================
   VERY SMALL MOBILE
========================================================= */

@media (max-width: 380px) {

  .hero-left h6 {

    font-size: 52px;

    letter-spacing: -2.5px;
  }


  .hero-stack-preview span {

    font-size: 8px;
  }


  .hero-card-wrapper {

    max-width: 315px;
  }


  .hero-orbit-center {

    height: 390px;
  }


  .hero-orbit-system {

    width: 390px;

    height: 390px;
  }


  .orbit-horizontal {

    width: 350px;

    height: 350px;
  }


  .orbit-diagonal {

    width: 310px;

    height: 310px;
  }


  .orbit-vertical {

    width: 270px;

    height: 270px;
  }


  .orbit-inner {

    width: 215px;

    height: 215px;
  }


  .orbit-extra {

    width: 375px;

    height: 375px;
  }

}

      `}</style>
    </>
  );
}

export default Hero;