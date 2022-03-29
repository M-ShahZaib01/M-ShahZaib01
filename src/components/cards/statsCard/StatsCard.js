import React from "react";
import "./StatsCard.css";
import img1 from "../../../assets/achievementsIcons/logoHappyClients.png";
import img2 from "../../../assets/achievementsIcons/logoProjectCompleted.png";
import img3 from "../../../assets/achievementsIcons/logoAwards.png";
import img4 from "../../../assets/achievementsIcons/logoBusinessYears.png";

function StatsCard() {
  return (
    <>
      <div className="container stat-section">
        <div className="stats-box">
          <div className="stats-card-body c1">
            <div className="stats-card1 stats-card">
              <h1 className="stats-title">84</h1>
              <p className="stats-descpt">Happy Clients</p>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="stats-card-body c2">
            <div className="stats-card2 stats-card">
              <h1 className="stats-title">123</h1>
              <p className="stats-descpt">Projects Completed</p>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="stats-card-body c3">
            <div className="stats-card3 stats-card">
              <h1 className="stats-title">37</h1>
              <p className="stats-descpt">Awards Win</p>
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="stats-card-body c4">
            <div className="stats-card4 stats-card">
              <h1 className="stats-title">30</h1>
              <p className="stats-descpt">Years in Business</p>
              <img src={img4} alt="" />
            </div>
          </div>
        </div>

        <div className="exp-box">
          <h1 className="exp-title">30 Years Experience</h1>
          <p className="exp-descpt">
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <button className="exp-btn">Contact Us</button>
        </div>
      </div>
    </>
  );
}

export default StatsCard;
