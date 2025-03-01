import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar,FreeMode,Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Photos() {
    return (
      <>
       

        <Swiper
       breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
        freeMode={true}
          scrollbar={{
            hide: true,
          }}
        
          navigation={true}
          modules={[Scrollbar,Pagination, Navigation]}
          className="mySwiper mt-5"
        >
          <SwiperSlide><img src="src\assets\9 (1).png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\10.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\11.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\12.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\13.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\9 (1).png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\10.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\11.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\12.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\13.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\9 (1).png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\10.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\11.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\12.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\13.png" alt="" /></SwiperSlide>


        </Swiper>
      </>
    );
  }
  