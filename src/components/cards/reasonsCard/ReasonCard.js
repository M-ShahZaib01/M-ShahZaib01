import React from 'react'
import './ReasonCard.css'


function ReasonCard(props) {

  return (
    <>
        <div className="r-card">
            <img src={props.icon} alt="" className="Card-icon" />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-description">{props.descript}</p>
        </div>
    </>
  )
}

export default ReasonCard