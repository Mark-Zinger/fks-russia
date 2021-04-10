import React from 'react';
import Button from '../Button'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import Counter from '../Counter'


export default (props) => {
    
    const { scrollY } = useViewportScroll()
    const y = useTransform(scrollY, [0, 10], [0, 3], { clamp: false });
    const physics = { damping: 15, mass: 0.27, stiffness: 55 } // easing of smooth scroll
    const spring = useSpring(y, physics);

    const {backgroundURL,dateBegin, fond, game, name} = props;
    // console.log(props);

    return (
        <>
            <div 
                className="main-slider__background"
                data-swiper-parallax-opacity="0.1"
            >
                <motion.img 
                    src={backgroundURL}  
                    alt="" 
                    className="main-slider__background"
                    style={{ y: spring}}
                    data-swiper-parallax-opacity="0.5"
                />
            </div>
            
            <div 
                className="main-slider__title"
                data-swiper-parallax="-300"
                data-swiper-parallax-duration="600"
            >Турнир</div>
            <div 
                className="main-slider__counter"
                data-swiper-parallax="-300"
                data-swiper-parallax-duration="650"
            >Начало турнира:
                <div 
                    className="main-slider__time"
                    data-swiper-parallax="-300"
                    data-swiper-parallax-duration="700"
                >
                    <Counter date={dateBegin}/>
                </div>
            </div>
            <div 
                className="main-slider__name"
                data-swiper-parallax="-100"
                data-swiper-parallax-duration="900"
            >{name}</div>
            <div 
                className="main-slider__game"
                data-swiper-parallax="-300"
                data-swiper-parallax-duration="600"
            >{game.title}</div>
            <div 
                className="main-slider__award"
                data-swiper-parallax="-100"
                data-swiper-parallax-duration="700"
            >Призовой фонд</div>
            <div 
                className="main-slider__award-fond"
                data-swiper-parallax="-400"
                data-swiper-parallax-duration="500"
            >{fond.toLocaleString('ru')} ₽</div>
            <Button 
                className="main-slider__button"
                data-swiper-parallax="-250"
                data-swiper-parallax-duration="200"
            >
                Подробнее
            </Button>
                       
        </>
    )
}

