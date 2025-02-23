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
        slidesPerView={5}
        freeMode={true}
          scrollbar={{
            hide: true,
          }}
        
          navigation={true}
          modules={[Scrollbar,Pagination, Navigation]}
          className="mySwiper mt-5"
        >
          <SwiperSlide><img src="src\assets\9.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\10.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\11.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\12.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\13.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\9.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\10.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\11.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\12.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\13.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\9.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\10.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\11.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\12.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src\assets\13.png" alt="" /></SwiperSlide>


        </Swiper>
      </>
    );
  }
  