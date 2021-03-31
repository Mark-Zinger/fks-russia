import React, {useEffect, useContext} from 'react';
import ListItem from './list-item';
import { motion, useAnimation,AnimatePresence,AnimateSharedLayout } from "framer-motion";

export default ({list}) => {

  const controls = useAnimation();

  useEffect(() => {

    // setTimeout(()=>{

      controls.start(i => ({
        scale: [1.05, 1],
        opacity: [0,1],
        y: [-5,0],
        transition: { delay: i * 0.2 },
      })) 
    // },1000)

    
  }, [list])

  return (
    <ul className="tournament-list">
      <AnimateSharedLayout>
      {
        list.map((el,i) => (
          <ListItem 
            key={i} 
            custom={i}
            animate={controls}
            href = {el.id}
            name = {el.name}
            backgroundURL = {el.backgroundURL}
            dateBegin = {el.dateBegin}
            fond = {el.fond.toLocaleString('ru')}
            game = {el.game}
          />
        ))
      }
      </AnimateSharedLayout>
    </ul>
  )
}
