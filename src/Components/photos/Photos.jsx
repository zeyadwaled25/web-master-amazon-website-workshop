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
       
        freeMode={true}
          scrollbar={{
            hide: true,
          }}
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
        
          navigation={true}
          modules={[Scrollbar,Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="src\assets\1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\5.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\6.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\7.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\8.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\5.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\6.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\7.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\8.png" alt="" /></SwiperSlide>


        </Swiper>

      
      </>
    );
  }
  