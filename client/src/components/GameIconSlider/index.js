import React from 'react';
import cn from 'classnames';
import GameIcon from '../GameIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';

SwiperCore.use([Mousewheel])


export default (props) => {
  const {className} = props;

  return (
    <div 
        className={cn('game-icon-slider', className)}
    >
      <GameIcon/>
      <Swiper
         slidesPerView='auto'
         freeMode={true}
         grabCursor={true}
         freeModeMomentumVelocityRatio={0.5}
         mousewheel={true}
         className="game-icon-slider__container"
      >
      {
        new Array(32).fill('').map((_,i)=> (
          <SwiperSlide className="game-icon-slider__slide">
            <GameIcon/>
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  )
}
