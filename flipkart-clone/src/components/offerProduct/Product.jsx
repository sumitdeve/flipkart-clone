import React from 'react'
import './Productcss.css'
import offerImg from '../../assets/pro1.webp'

const product = (props) => {
  return (
        
        // <div className="product">
        //     <img src={offerImg} alt="" />
        //     <p>vivo y23</p>
        //     <h5>998777</h5>
        <div className="product">
            <img src={props.imgURL} alt="" />
            <p>{props.name}</p>
            <h5>{props.price}</h5>
        </div>


    // </div>
  )
}

export default product