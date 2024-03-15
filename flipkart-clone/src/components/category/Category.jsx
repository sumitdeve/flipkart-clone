import React from 'react'
import "./Category.css"
import cate1 from "../../assets/cate1.png"
import cate2 from "../../assets/cate2.png"
import cate3 from "../../assets/cate3.png"
import cate4 from "../../assets/cate4.png"
import bike from "../../assets/bike.png"
import tedi from "../../assets/tedi.png"
import plen from "../../assets/flen.png"
import sofa from "../../assets/sofa-chair.png"
import led from "../../assets/led.png"


const Category = () => {
  return (
    <>
     <div className="main-cate">
     <div className="category">
        <div className="cate">
            <img src={cate1} alt="" />
        </div>
        
        <div className="cate">
            <img src={cate2} alt="" />
        </div>

        <div className="cate">
            <img className='faison' src={cate3} alt="" />
        </div>

        <div className="cate">
            <img src={cate4} alt="" />
        </div>

        <div className="cate">
            <img src={sofa} alt="" />
        </div>

        <div className="cate">
            <img src={led} alt="" />
        </div>

        <div className="cate">
            <img src={plen} alt="" />
        </div>

        <div className="cate">
            <img src={tedi} alt="" />
        </div>

        <div className="cate">
            <img src={bike} alt="" />
        </div>


     </div>
   <div className="navlinks">
     <p>Grocery</p>
     <p>Mobiles</p>
     <p>Fashion</p>
     <p>Electronics</p>
     <p> Furniture</p>
     <p>Appliances</p>
     <p>Travels</p>
     <p>Toy & More</p>
     <p>Two Wheelers</p>
     </div>
     </div>
    </>
  )
}

export default Category