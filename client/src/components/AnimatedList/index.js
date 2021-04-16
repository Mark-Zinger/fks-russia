import React, {useEffect,createContext} from 'react';
import { useAnimation,AnimateSharedLayout } from "framer-motion";
import cn from 'classnames';

export const AnimatedListContext = createContext();

export default ({children, list, className}) => {

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
    <ul className={cn(className)}>
      <AnimatedListContext.Provider value={{controls}}>
        <AnimateSharedLayout>
          {children}
        </AnimateSharedLayout>
      </AnimatedListContext.Provider>
    </ul>
  )
}
