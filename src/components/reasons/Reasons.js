import React from "react";
import ReasonCard from "../cards/reasonsCard/ReasonCard";
import "./Reasons.css";
import iconHP from "../../assets/landingPageIcons/iconheadphone.png";
import iconGeom from "../../assets/landingPageIcons/iconpencilScale.png";
const icons = [iconHP, iconGeom];
const title = ["Best Services", "Best Teams", "Best Designs"];
const descript = [
  "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  "Cursus semper tellus volutpat aliquet lacus. ",
  "Ultricies at ipsum nunc, tristique nam lectus.",
];
function Reasons() {
  return (
    <>
        <div className="container">
      <div className="reasons-container">
      <h1 className="text-center pt-5 pb-5" >Our Reputation</h1>
          <div className="Card-container pb-5">
            <div className="Card-body  ">
              <ReasonCard
                icon={icons[0]}
                title={title[0]}
                descript={descript[0]}
              />
            </div>
            <div className="Card-body">
              <ReasonCard
                icon={icons[0]}
                title={title[1]}
                descript={descript[1]}
              />
            </div>
            <div className="Card-body">
              <ReasonCard
                icon={icons[1]}
                title={title[2]}
                descript={descript[2]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reasons;
