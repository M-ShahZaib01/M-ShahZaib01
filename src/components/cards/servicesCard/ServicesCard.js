import React from 'react'
import './ServicesCard.css'
function ServicesCard(props) {
  return (
    <>
        <div className={props.color}>
            <img src={props.icon} alt="" className="card-logo" />
            <h2 className="s-card-title">{props.serviceName}</h2>
        </div>
    </>
  )
}

export default ServicesCard