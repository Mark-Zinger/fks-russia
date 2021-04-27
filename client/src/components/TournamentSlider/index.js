import React, { useEffect, useState, useCallback } from 'react';
import { Swiper,SwiperSlide } from 'swiper/react' ;
import SwiperCore, { Pagination,Parallax, Navigation,Controller, Mousewheel } from 'swiper';
import TournamentBracket from '../TournamentBracket';
import IntroTour from './introTour';
import TournamentRegister from './TournamentRegister';
import TournamentTable from '../TournamentTable'

SwiperCore.use([Pagination,Parallax,Navigation,Controller, Mousewheel]);

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

      // window.addEventListener()
    };
  }, [swiper,swTitles]);

  const slideProps = {
    className: "tournament-slider__slide"
  }

  const changeSlide = useCallback(
    (slideIndex) => {
      if (swiper)swiper.slideTo(slideIndex, speed)
    },
    [swiper,swTitles],
  )

  return (
    <>
    <Swiper
      className="tournament-slider"
      mousewheel={true}
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
        <IntroTour toRegister={() => changeSlide(0)} />
      </SwiperSlide>
      <SwiperSlide {...slideProps}>
        <TournamentBracket/>    
      </SwiperSlide>
      <SwiperSlide {...slideProps}>
        <TournamentTable swiper={swiper}/>
      </SwiperSlide>
    </Swiper>
    <Swiper 
      className="tournament-slider__titles"
      mousewheel={true}
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
        data-swiper-parallax={-100}

      >Турнирная сетка</div> 
      </SwiperSlide>
      <SwiperSlide>
      <div
        onClick={()=>changeSlide(3)}
        data-swiper-parallax-opacity="0.3"
      >Участники</div> 
      </SwiperSlide>
    </Swiper>
    </>
  )
}

