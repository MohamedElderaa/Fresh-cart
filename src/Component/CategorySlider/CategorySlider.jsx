import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import axios from 'axios';

export default function CategorySlider() {
  const [categories, setCategories] = useState(null)
  const swiperRef = useRef(null);

  function getCategory() {
    axios.get("https://ecommerce.routemisr.com/api/v1/categories")
      .then((res) => {
        setCategories(res.data.data)
      })
      .catch((error) => {
        toast.error(error)
      })
  }

  useEffect(() => {
    getCategory()
  }, [])

 

  return <>
    <div>
      <h2>Shop Popular Categories</h2>
      <div className='flex slider-container mb-15 '>
        <button className="prev-btn cursor-pointer"> <i className="fa-solid fa-angle-left"></i> </button>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            1024: { slidesPerView: 6 },
            768: { slidesPerView: 4 },
            480: { slidesPerView: 2 },
            100: { slidesPerView: 1 },
          }}
          allowTouchMove={false}
          simulateTouch={false}
        >
          {categories?.map((category) => (
            <SwiperSlide key={category._id}>
              <img className='w-full flex h-50 object-cover' src={category.image} alt={category.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="next-btn cursor-pointer"><i className="fa-solid fa-angle-right text-black"></i> </button>
      </div>
    </div>
  </>
}
