import React from "react";
import "./Services.css";
import iconArch from "../../assets/servicesIcons/logoArchitecture.png";
import iconConst from "../../assets/servicesIcons/logoConstruction.png";
import iconConsl from "../../assets/servicesIcons/logoConsultation.png";
import iconElec from "../../assets/servicesIcons/logoElectric.png";
import iconReno from "../../assets/servicesIcons/logoRenovation.png";
import iconRep from "../../assets/servicesIcons/logoRepairServices.png";
import ServicesCard from "../cards/servicesCard/ServicesCard";

const icons = [iconConst, iconReno, iconConsl, iconRep, iconArch, iconElec];
const serviceName = [
  "Construction",
  "Renovation",
  "Consultation",
  "Repair Services",
  "Architecture",
  "Electric",
];
const color = [" s-card blue-card", " s-card white-card"];
function Services() {
  return (
    <>
      <div className="s-card-container pt-5 pb-5">
      <h4 className="fw-bold " >Services</h4>
        <div className="row1">
          <div className="s-card-body">
            <ServicesCard
              icon={icons[0]}
              serviceName={serviceName[0]}
              color={color[1]}
            />
          </div>
          <div className="s-card-body">
            <ServicesCard
              icon={icons[1]}
              serviceName={serviceName[1]}
              color={color[0]}
            />
          </div>
          <div className="s-card-body">
            <ServicesCard
              icon={icons[2]}
              serviceName={serviceName[2]}
              color={color[1]}
            />
          </div>
        </div>
          <div className="row2">
            <div className="s-card-body">
              <ServicesCard
                icon={icons[3]}
                serviceName={serviceName[3]}
                color={color[0]}
              />
            </div>
            <div className="s-card-body">
              <ServicesCard
                icon={icons[4]}
                serviceName={serviceName[4]}
                color={color[1]}
              />
            </div>
            <div className="s-card-body">
              <ServicesCard
                icon={icons[5]}
                serviceName={serviceName[5]}
                color={color[0]}
              />
            </div>
          </div>
      </div>
    </>
  );
}

export default Services;
