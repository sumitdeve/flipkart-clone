import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import './Mobiles.css'

import { Pagination } from 'swiper/modules';

import Produt from '../product/Produt'
import phone1 from '../../assets/phone1.webp'
import phone2 from '../../assets/phone2.webp'
import phone3 from '../../assets/phone3.webp'
import phone4 from '../../assets/phone4.webp'
import phone5 from '../../assets/phone5.webp'
import phone6 from '../../assets/phone6.webp'
import phone7 from '../../assets/phone7.webp'
import phone8 from '../../assets/phone8.webp'
import phone9 from '../../assets/phone9.webp'
import phone10 from '../../assets/phone10.webp'
import phone11 from '../../assets/phone11.webp'
import phone12 from '../../assets/phone12.webp'



const Mobiles = () => {
  return (
    <div className='mobile-list'>

        <div className="title">
        <h1>Best Deals on Smartphones</h1>
        <i class="fa-solid fa-greater-than"></i>
        </div>
        <div className="products">
<Swiper
      
      slidesPerView={3}
      spaceBetween={30}
      // pagination={{
      //   clickable: true,
      // }}
      // modules={[Pagination]}
      className="mySwiper"
    >
        <SwiperSlide className='product-card'>
          
        <Produt
        imgURL={phone2}
        mobileModel="Vivo T2x 5G"
        price="₹12999"
        description="The smartphone with the most"
         />

        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone1}
          mobileModel="Vivo v23 5G"
          price="₹13999"
          description="The smartphone with the most"
           />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone3}
          mobileModel="Vivo v24 5G"
          price="₹19500"
          description="The smartphone with the most"
           />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone4}
          mobileModel="Oppo F25 5G"
          price="₹25000"
          description="The smartphone with the most"
           />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone5}
          mobileModel="Oppo F25 5G"
          price="₹19500"
          description="The smartphone with the most"
           />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone6}
          mobileModel="Oppo F25 5G"
          price="₹19500"
          description="The smartphone with the most"
           />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone7}
          mobileModel="Oppo F25 5G"
          price="₹19500"
          description="The smartphone with the most"
           />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
          
        <Produt
          imgURL={phone8}
          mobileModel="Oppo F25 5G"
          price="₹19500"
          description="The smartphone with the most"
           />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone9}
          mobileModel="Oppo F25 5G"
          price="₹19500"
          description="The smartphone with the most"
          />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone10}
          mobileModel="Oppo F25 5G"
          price="₹19500"
          description="The smartphone with the most"
           />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone11}
          mobileModel="Oppo F25 5G"
          price="₹19500"
          description="The smartphone with the most"
           />
        </SwiperSlide>
        <SwiperSlide className='product-card'>
        <Produt
          imgURL={phone12}
          mobileModel="Oppo F25 5G"
          price="₹19500"
          description="The smartphone with the most"
           />
        </SwiperSlide>
      
      
          </Swiper>
         
      </div>
    </div>
  )
}

export default Mobiles