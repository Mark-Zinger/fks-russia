import React from 'react';
import { motion } from 'framer-motion'



export default (props) => {

  const {
    custom, 
    animate,
    backgroundURL,
    dateBegin,
    fond,
    game,
    name
  } = props;

  return (
    <motion.li 
      className="tournament-list__item"
      custom={custom} animate={animate} 
    >
      
      <div className="tournament-list__item-background-container">
        <img src={backgroundURL} className="tournament-list__item-background" alt=""/>
      </div>
      <div className="tournament-list__item-title">
        <div className="tournament-list__item-name">
          {name}
        </div>
        <div className="tournament-list__item-game">{game.title}</div>
      </div>
      <div className="tournament-list__item-format">
        Формат: Single Elimination, 5x5
      </div>
      <div className="tournament-list__item-title">
        <div className="tournament-list__item-date">
            Дата начала: {dateBegin}
        </div>
        <div className="tournament-list__item-fond">{fond} ₽</div>
      </div>
    
      

      <div className="tournament-list__item-title">
        <div className="tournament-list__item-sponsor">
            Организатор: WarFace PVP Bravo
        </div>
        
        <div className="tournament-list__item-members">
            Участники: 18 / 128
        </div>
       
        
      </div>
      
      

      

    </motion.li>
  )
}
