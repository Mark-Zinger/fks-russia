import React, {useEffect} from 'react';
import ListItem from './list-item';
import { motion, useAnimation } from "framer-motion";

export default ({list}) => {

  const controls = useAnimation()

  console.log(list);

  useEffect(() => {
    controls.start(i => ({
      opacity: [0,1],
      y: [-5,0],
      transition: { delay: i * 0.2 },
    })) 
  }, [list])

  return (
    <motion.ul className="tournament-list">
      {
        list.map((el,i) => (
          <ListItem 
            key={i} 
            custom={i} 
            animate={controls}
            name = {el.name}
            backgroundURL = {el.backgroundURL}
            dateBegin = {el.dateBegin}
            fond = {el.fond}
            game = {el.game}
          />
        ))
      }
    </motion.ul>
  )
}
