import React from "react";
import HeroImg from "../../assets/images/bg_hero.png";
import "./Hero.css";
import rightArrow from "../../assets/arrowRight.svg";
import leftArrow from "../../assets/arrowLeft.svg";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <img src={HeroImg} alt="heroImg" />
        <div className="hero-title">
          <p>
            Building things <br />is
             our mission.
          </p>
        </div>
        <div className="hero-nav">
          <h3 className="hero-nav-title">Feature Projects</h3>
          <h4 className="hero-nav-subtitle">
            The Natural University of <br /> Architecture
          </h4>
          <div className="btn-section">
            <button className="hero-nav-btn1 hero-nav-btn">
              <img src={leftArrow} className="arrowSvg" alt="leftArrow" /> Back
            </button>
            <button className="hero-nav-btn2 hero-nav-btn">
              Next <img src={rightArrow} className="arrowSvg" alt="rightArrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
