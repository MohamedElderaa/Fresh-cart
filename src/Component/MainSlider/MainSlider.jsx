import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import img1 from '../../assets/grocery-banner.png'
import img2 from '../../assets/grocery-banner-2.jpeg'
import slider2 from '../../assets/slider-image-2.jpeg'
import slider3 from '../../assets/slider-image-3.jpeg'

export default function MainSlider() {
  return <>
  <div className="grid lg:grid-cols-[2fr_1fr] md:grid-cols-[2fr_2fr]  my-10">
    <div className='flex slider-container overflow-hidden h-100'>
      <button className="prev1-btn cursor-pointer"> <i className="fa-solid fa-angle-left"></i> </button>
  <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: ".prev1-btn",
          nextEl: ".next1-btn",
        }}
        allowTouchMove={false}   
        simulateTouch={false}
      >
        <SwiperSlide><img  src={slider2} alt="Slider 2" /></SwiperSlide>
        <SwiperSlide><img  src={slider3} alt="Slider 3" /></SwiperSlide>
      </Swiper>
      <button className="next1-btn cursor-pointer"><i className="fa-solid fa-angle-right text-black"></i> </button>

  </div>
  <div>
    <img  src={img1} alt="Grocery Banner" className='h-50 object-center' />
    <img  src={img2} alt="Grocery Banner" className='h-50 object-center' />
  </div>
  </div>
  
  </>
}
