import React, {useEffect,createContext} from 'react';
import ListItem from './list-item';
import { motion, useAnimation,AnimateSharedLayout } from "framer-motion";

export const AnimatedListContext = createContext();

export default ({children, list}) => {

  const controls = useAnimation();

  useEffect(() => {
      controls.start(i => ({
        scale: [1.05, 1],
        opacity: [0,1],
        y: [-5,0],
        transition: { delay: i * 0.2+0.1 },
      })) 
  }, [list])

  return (
    <ul className="tournament-list">
      <AnimatedListContext.Provider value={{controls}}>
        <AnimateSharedLayout>
          {children}
        </AnimateSharedLayout>
      </AnimatedListContext.Provider>
    </ul>
  )
}
