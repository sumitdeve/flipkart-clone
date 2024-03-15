import React from 'react'
import './Baner2.css'
import '../offerProduct/Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import pro11 from '../../assets/pro1.webp'
import pro2 from '../../assets/pro2.webp'
import pro3 from '../../assets/pro3.webp'
import pro4 from '../../assets/pro4.webp'
import pro5 from '../../assets/pro5.webp'
import pro6 from '../../assets/pro6.webp'
import pro7 from '../../assets/pro7.webp'
import pro8 from '../../assets/pro8.webp'
import  Product from "../offerProduct/Product";

const Baner2 = () => {
  return (
    <div className='baner'>
        <div className='title'>
        <h1>Featured Brands</h1>
        <i class="fa-solid fa-greater-than"></i>
        </div>
        <div className='brands'>  

 
        <Swiper
        
        className="mySwiper"
      >
        <SwiperSlide>
          <Product 
          imgURL={pro11}
          name='vivo v20 pro'
          price='$999'
          />
            
        </SwiperSlide>
        <SwiperSlide>
        <Product 
          imgURL={pro2}
          name='vivo v20 pro'
          price='$999'
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
            
        </div>

    </div>
  )
}

export default Baner2