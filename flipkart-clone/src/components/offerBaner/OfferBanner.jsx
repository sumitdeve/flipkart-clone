import React from 'react'
import './OfferBaner.css'

const OfferBanner = (props) => {
  return (
    <div className='offer-banner'>
    <img src={props.banerImg1} alt="" />      
    <img src={props.banerImg2} alt="" />      
    <img src={props.banerImg3} alt="" />      
    </div>
  )
}

export default OfferBanner