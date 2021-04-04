import React, { useEffect, useState, useCallback } from 'react';
import { Swiper,SwiperSlide } from 'swiper/react' ;
import SwiperCore, { Pagination,Parallax, Navigation,Controller } from 'swiper';
import TournamentBracket from '../TournamentBracket';
import IntroTour from './introTour';
import TournamentRegister from './TournamentRegister';

SwiperCore.use([Pagination,Parallax,Navigation,Controller]);

export default (params) => {
  const [swiper, setSwiper] = useState(false);
  const [swTitles, setSWTitles] = useState(false);
  const speed = 700;

  useEffect(()=> {
    if(swiper && swTitles) {
      swiper.slideTo(1,0)
      swTitles.slideTo(1,0)
      swiper.controller.control = swTitles;
      swTitles.controller.control = swiper;
    };
  }, [swiper,swTitles]);

  const slideProps = {
    className: "tournament-slider__slide"
  }

  const changeSlide = useCallback(
    (slideIndex) => {
      swiper.slideTo(slideIndex, speed)
    },
    [swiper,swTitles],
  )

  return (
    <>
    <Swiper
      className="tournament-slider"
      pagination={true}
      parallax={true}
      navigation={true}
      spaceBetween={100}
      onSwiper={setSwiper}
      speed={speed}
    >
      <SwiperSlide {...slideProps}>
        <TournamentRegister/>
      </SwiperSlide>
      <SwiperSlide {...slideProps}>
        <IntroTour/>
      </SwiperSlide>
      <SwiperSlide {...slideProps}>
        <TournamentBracket/>    
      </SwiperSlide>
    </Swiper>
    <Swiper 
      className="tournament-slider__titles"
      onSwiper={setSWTitles}
      parallax={true}
      speed={speed}
    >
      <SwiperSlide>
        <div
          onClick={()=>changeSlide(0)}
          data-swiper-parallax-opacity="0.3"
          data-swiper-parallax={100}
        >Регистрация</div> 
      </SwiperSlide>
      <SwiperSlide>
        <div
          onClick={()=>changeSlide(1)}
          data-swiper-parallax-opacity="0.3"
        >Обзор</div> 
      </SwiperSlide>
      <SwiperSlide>
      <div
        onClick={()=>changeSlide(2)}
        data-swiper-parallax-opacity="0.3"
      >Турнирная сетка</div> 
      </SwiperSlide>
    </Swiper>
    </>
  )
}

