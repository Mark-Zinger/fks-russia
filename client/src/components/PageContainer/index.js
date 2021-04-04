import React from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom'
import { motion } from "framer-motion";
import cn from 'classnames'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.5 };

const thumbnailVariants = {
  initial: { scale: 0.99, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition,  },
  exit: {
    scale: 0.99,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

export default (props) => {
    
    const {children, title=false, background=false,className, ...own} = props;
    const {pathname} = useLocation();
    const pageName = pathname.split('/')[1];

    return (
        <motion.div 
          className={cn("page-container", className, pageName)}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={thumbnailVariants}
        >
          <Background {...{background, title}}/>
          <div className="page-container__body" {...own}>
              {children}
          </div>
        </motion.div>
    )
}

const Background = ({background, title}) => {
  return createPortal((
    <>
      {title && <motion.div
        initial={{ scale: 0.99, opacity: 0, x:'-50%' }}
        animate={{ scale: 1, opacity: 0.2, transition, x:'-50%'  }}
        exit="exit"
        variants={thumbnailVariants}
        className="page-container__title"
      >{title}</motion.div>}
      {background && <motion.img 
        src={background} 
        className="page-container__background"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={thumbnailVariants}
      />}
    </>
  ), document.getElementById('root'))
}

