import React, { useEffect, useState, createRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import SlideContent from './slide';
// import {useHttp} from '../../hooks/http.hook'

// import './style.scss';


SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

export default () => {

  const [slides, setSlides] = useState([]);

  const [swiper,setSwiper] = useState(false);

  useEffect(async()=>{
    // const data = await request('/tournaments/main-slider');
    // setSlides(data);
  },[])

  useEffect(()=>{
    if(swiper) {
      swiper.update(); 
      swiper.slideTo(1,0);
    }  
  },[slides,swiper])
  
  
  // useEffect(()=>{
  //   // if(data) console.log(data);
  //   if(error) console.error(error)
  // },[request,error])

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
