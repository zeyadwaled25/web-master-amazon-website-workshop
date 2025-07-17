import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ✅ Import images
import img1 from './../../../assets/1.png';
import img2 from './../../../assets/2.png';
import img3 from './../../../assets/3.png';
import img4 from './../../../assets/4.png';
import img5 from './../../../assets/5.png';
import img6 from './../../../assets/6.png';
import img7 from './../../../assets/7.png';
import img8 from './../../../assets/8.png';

export default function Photos() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img5, img6, img7, img8];

  return (
    <Swiper
      freeMode={true}
      scrollbar={{ hide: true }}
      breakpoints={{
        '@0.00': { slidesPerView: 1, spaceBetween: 10 },
        '@0.75': { slidesPerView: 2, spaceBetween: 20 },
        '@1.00': { slidesPerView: 3, spaceBetween: 40 },
        '@1.50': { slidesPerView: 4, spaceBetween: 50 },
      }}
      navigation={true}
      modules={[Scrollbar, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
