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
  