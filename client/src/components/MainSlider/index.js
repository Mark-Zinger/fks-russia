import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import SlideContent from './slide';
import './style.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

export default () => {
  return (
    <Swiper
      className="main-slider"
      spaceBetween={50}
      slidesPerView={1}
      parallax={true}
      navigation
      autoplay={{delay: 5000}}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
          new Array(6).fill('')
          .map( (_, i) => (
            <SwiperSlide className="main-slider__slide">
                <SlideContent img={`/img/main-slider/${i+1}.jpg`}/>
            </SwiperSlide>
            )
          )
      }
    </Swiper>
  );
};

