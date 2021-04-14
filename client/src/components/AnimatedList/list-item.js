import React,{useContext} from 'react';
import { motion } from 'framer-motion';
import { AnimatedListContext } from '../AnimatedList'


export default (props) => {

  const { custom, children ,...own} = props;
  const {controls} = useContext(AnimatedListContext)

  return (
    <motion.li
      className="tournament-list__item"
      custom={custom}
      initial={{opacity: 0}} 
      animate={controls} 
      exit={{opacity:0}}
      {...own} 
    >
      {children}
    </motion.li>
  )
}
