import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from "framer-motion";
import { PageContainer,Body } from './style'
import cn from 'classnames'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.5 };

const thumbnailVariants = {
  initial: { scale: 0.99, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition,  },
  exit: {
    scale: 0.99,
    opacity: 0,
    transition: {  ...transition }
  }
};

export default (props) => {
    
    const {children, title=false, background=false,className, ...own} = props;

    return (
        <PageContainer
          className={cn("page-container", className)}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={thumbnailVariants}
        >
          <Background {...{background, title}}/>
          <Body className="page-container__body" {...own}>
              {children}
          </Body>
        </PageContainer>
    )
}

const Background = ({background, title}) => {

  if(typeof document == 'undefined') return null;

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
  ), document.getElementById('__next'))
}

