import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const Carrusel = ({ movie }) => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {movie.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              className="w-80 h-96 object-cover mx-auto"
              alt={item.title || 'Poster'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
