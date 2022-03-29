import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/ImgAboutMen.png";
function About() {
  return (
    <>
      <div className="container pt-5">
        <div className="about-container">
          <div className="about-img">
            <img src={aboutImg} alt="About Image" />
          </div>
          <div className="about-details">
            <h2>About us</h2>
            <p>
              For more than 30 years we have been delivering world-class
              construction and we've built many lasting relationships along the
              way. <br />
              <br />
              We've matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
            <button>More on Our history</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
