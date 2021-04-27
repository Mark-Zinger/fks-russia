import React,{useContext} from 'react';
import { motion } from 'framer-motion';
import { AnimatedListContext } from '../AnimatedList';
import cn from 'classnames'


export default (props) => {

  const { custom, children, className,...own} = props;
  const {controls} = useContext(AnimatedListContext)

  return (
    <motion.li
      custom={custom}
      className={cn(className)}
      initial={{opacity: 0}} 
      animate={controls} 
      exit={{opacity:0}}
      {...own} 
    >
      {children}
    </motion.li>
  )
}
