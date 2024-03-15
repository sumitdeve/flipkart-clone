
import React, {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import baner1 from '../../assets/banner1.webp'
import baner2 from '../../assets/baner2.webp'
import baner3 from '../../assets/baner3.webp'
import baner4 from '../../assets/baner4.webp'
import baner5 from '../../assets/baner5.webp'
                                                                                                                                             
import '../banner/Banner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div className='slider11'>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="Swiper"

      >
        <SwiperSlide>
            <img src={baner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={baner2} alt="" />

        </SwiperSlide>
        <SwiperSlide>
            
            <img src={baner3} alt="" />

        </SwiperSlide>
        <SwiperSlide>

            <img src={baner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            
            <img src={baner5} alt="" />

        </SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </>
  )
}

export default Banner
