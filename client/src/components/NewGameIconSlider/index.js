import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import GameIcon from '../GameIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';
import { useHttp } from '../../hooks/http.hook'

// SwiperCore.use([Mousewheel])


export default (props) => {
  const {className} = props;
  const { request } = useHttp();
  const [games, setGames] = useState([]);
  const [swiper, setSwiper] = useState(false);

  useEffect(async()=>{
    const games = await request('/game');
    console.log(games);
    setGames(games)
  },[])

  useEffect(()=>{
    if(swiper) swiper.update();
  },[games,swiper])


  return (
    <div 
        className={cn('game-icon-slider', className)}
    >
      <GameIcon className="game-icon game-icon_all-games" title="Все игры" value=''/>
      <Swiper
         slidesPerView={'auto'}
        //  freeMode={true}
         grabCursor={true}
        //  loop={true}
         freeModeMomentumVelocityRatio={0.5}
         mousewheel={true}
         className="game-icon-slider__container"
         onSwiper={setSwiper}
      >
      {
        games.map((el,i)=> (
          <SwiperSlide className="game-icon-slider__slide" key={i}>
            <GameIcon
              value={el.id}
              title={el.title}
              icon={el.icon}
              radioName="game"
            />
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  )
}
