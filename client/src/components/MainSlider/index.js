import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import SlideContent from './slide';
import {useHttp} from '../../hooks/http.hook'
import './style.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

export default () => {

  const [slides, setSlides] = useState([]);
  const { loading, request, error, clearError } = useHttp();

  useEffect(async()=>{
    const data = await request('/tournaments/main-slider');
    setSlides(data);
  },[])
  
  useEffect(()=>{
    // if(data) console.log(data);
    if(error) console.error(error)
  },[request,error])

  return (
    <Swiper
      className="main-slider"
      spaceBetween={50}
      slidesPerView={1}
      parallax={true}
      navigation
      autoplay={{delay: 5000}}
      speed={700}
      loop={true}
      draggable={true}
      pagination={{ clickable: true }}
    >
      {
        slides.map( (el, i) => {
          const {backgroundURL} = el.tour
        
          return (
            <SwiperSlide className="main-slider__slide">
                <SlideContent img={backgroundURL}/>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

