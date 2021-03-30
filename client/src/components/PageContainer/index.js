import React from 'react';
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.99, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition, delay: 2 },
  exit: {
    scale: 0.99,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

export default (props) => {
    
    const {children, title=false, background=false} = props;

    return (
        <motion.div 
            className="page-container"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={thumbnailVariants}
        >
            { background && <img src={background} className="page-container__background"/>}
            { title && <div className="page-container__title">{title}</div>}
            <div className="page-container__body">
                {children}
            </div>
        </motion.div>
    )
}

