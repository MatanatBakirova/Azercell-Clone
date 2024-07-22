import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import premiumimg from '../../assets/images/premium fisrtslideimg.webp'
import supersen from '../../assets/images/supersenimg.webp'
import 'swiper/css'



const CarouselSection = () => {
  return (
   
    <div>
<Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='slide-content1'>
          <div className='slide-first'>
            <h1 href="">Premium <br />üstünlüyü seç!</h1>
            <div className='premiumimg'>
            <img src={premiumimg} alt="" />
            </div>
           </div>
        </div>
        </SwiperSlide>

      <SwiperSlide>
        <div className='slide-content2'>
        <div className='slide-first'>
            <h1 href="">Müxtəlif <br /> cihazlarda eyni <br /> anda 240+ kanal </h1>
           </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='slide-content3'>
        <div className='slide-first'>
            <h1 href="">SuperSən, tarifini <br /> seç! </h1>
            <div className='premiumimg'>
            <img src={supersen} alt="" />
            </div>
           </div>
        </div>
        </SwiperSlide>

    </Swiper>

    </div>
  )
}

export default CarouselSection