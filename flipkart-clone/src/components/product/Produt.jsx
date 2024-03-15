import React from 'react'
import './Produt.css'
import phone1 from '../../assets/phone1.webp'
import phone2 from '../../assets/phone2.webp'

const Produt = (props) => {
  return (
    <>
           <div className="pro1">
             <img src={props.imgURL} alt="" />
             <p>{props.mobileModel}</p>
             <h6>{props.price}</h6>
             <h5>{props.description}</h5>
           </div>
           
    </>
  )
}

export default Produt