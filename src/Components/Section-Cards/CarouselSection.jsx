import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
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
        </div>
        </SwiperSlide>

      <SwiperSlide>
        <div className='slide-content2'>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className='slide-content3'>
        </div>
        </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default CarouselSection