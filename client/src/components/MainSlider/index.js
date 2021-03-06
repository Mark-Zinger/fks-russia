import React, { useEffect, useState, createRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import axios from 'axios';
import SlideContent from './slide';
import {useHttp} from '../../hooks/http.hook'

import './style.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

export default () => {

  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(false);
  const [swiper,setSwiper] = useState(false);

  useEffect(async()=>{
    axios.get('/tournaments/main-slider')
    .then(({data})=>setSlides(data))
    .catch(e => {
      console.error(e);
      setError(e)
    })
  },[])

  useEffect(()=>{
    if(swiper) {
      swiper.update(); 
      swiper.slideTo(1,0);
    }  
  },[slides,swiper])

  return (
    <Swiper
      className="main-slider"
      spaceBetween={50}
      slidesPerView={1}
      parallax={true}
      navigation
      grabCursor={true}
      autoplay={{delay: 5000}}
      speed={700}
      loop={true}
      draggable={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      {
        slides.map( (el, i) => (
            <SwiperSlide className="main-slider__slide" key={i}>
              <SlideContent {...el.tour}/>
            </SwiperSlide>
        ) )
      }
    </Swiper>
  );
};

