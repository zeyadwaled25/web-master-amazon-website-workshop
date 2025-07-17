import React from 'react';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import images correctly
import img1 from './../../../assets/9 (1).png';
import img2 from './../../../assets/10.png';
import img3 from './../../../assets/11.png';
import img4 from './../../../assets/12.png';
import img5 from './../../../assets/13.png';

export default function Photos() {
  const images = [img1, img2, img3, img4, img5];

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
        scrollbar={{ hide: true }}
        navigation={true}
        modules={[Scrollbar, Pagination, Navigation]}
        className="mySwiper mt-5"
      >
        {images.concat(images, images).map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
