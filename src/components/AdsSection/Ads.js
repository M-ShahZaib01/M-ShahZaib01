import React from 'react'
import './Ads.css'
import adsImg from '../../assets/images/ImgAds.png'
function Ads() {
  return (
    <div className="ads-img">
       <span> <h4 className="ads-title">Free consultation with exceptional quality</h4></span>
        <button className="ads-btn">Get your consultation</button>
        <p className="ads-contact">Just one call away: +84 1102 2703</p>
    </div>
  )
}

export default Ads