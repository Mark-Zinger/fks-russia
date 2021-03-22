import React from 'react'
import Button from '../Button'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';


export default ({children}) => {

    const { scrollY } = useViewportScroll()
    const y = useTransform(scrollY, [0, 10], [0, -2], { clamp: false });
    const physics = { damping: 15, mass: 0.27, stiffness: 55 } // easing of smooth scroll
    const spring = useSpring(y, physics);

    return (
        <motion.div className="recommendation-list" style={{y: spring}}>
            <div className="recommendation-list__title">Рекомендуемые турниры</div>
            <div className="recommendation-list__body">
                {new Array(12)
                .fill('')
                .map((_, i) => <Card key={i} img={(i%6)+1}/>)
                }
            </div>
        </motion.div>
    );
}

const Card = ({img})=> {
    return (
        <div className="card-element">
            <img src={`/img/main-slider/${img}.jpg`} className="card-element__background"/>
            <div className="card-element__title">
                Warface SuperFast
            </div>
            <div className="card-element__inline-info">
                Warface 5x5
            </div>
            <div className="card-element__info-group">
                <div className="card-element__timer">
                    До начала турнира:
                    <div className="card-element__time">
                        05:00:45
                    </div>
                </div>
                <Button className="card-element__button">Перейти</Button>
            </div>
        </div>
    );
}
