import React, { useState, useEffect } from 'react'
import Button from '../Button'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import { useHttp } from '../../hooks/http.hook';
import Counter from '../Counter'


export default ({children}) => {

    const { scrollY } = useViewportScroll()
    const y = useTransform(scrollY, [0, 10], [0, -2], { clamp: false });
    const physics = { damping: 15, mass: 0.27, stiffness: 55 } // easing of smooth scroll
    const spring = useSpring(y, physics);
    
    const [slides, setSlides] = useState([])
    const { request } = useHttp();

    useEffect(async()=>{
        const data = await request('/tournaments');
        console.log(data);
        setSlides(data);
    },[])

    return (
        <motion.div className="recommendation-list" style={{y: spring}}>
            <div className="recommendation-list__title">Рекомендуемые турниры</div>
            <div className="recommendation-list__body">
                {slides
                .map((el, i) => (
                    <Card 
                        key={i}
                        tourId = {el.id}
                        backgroundURL = {el.backgroundURL} 
                        dateBegin = {el.dateBegin}
                        name = {el.name}
                        game = {el.game.title}
                    />))
                }
            </div>
        </motion.div>
    );
}

const Card = (props)=> {
    const {backgroundURL,dateBegin,game,name,tourId} = props;
    console.log(props);
    return (
        <div className="card-element">
            <img src={backgroundURL} className="card-element__background"/>
            <div className="card-element__title">
                {name}
            </div>
            <div className="card-element__inline-info">
                {game}
            </div>
            <div className="card-element__info-group">
                <div className="card-element__timer">
                    До начала турнира:
                    <div className="card-element__time">
                        <Counter date={dateBegin}/>
                    </div>
                </div>
                <Button href={tourId} className="card-element__button">Перейти</Button>
            </div>
        </div>
    );
}
