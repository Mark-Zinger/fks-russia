import React, {useEffect,createRef} from "react";
import {createPortal} from 'react-dom'; 
import { AnimatePresence, motion } from "framer-motion";  


const Modal = ({ showModal, children, closeModal, className, ...ownProps }) => { 

    useEffect(()=>{
        document.body.classList[showModal?'add':'remove']('lock-scroll');
    }, [showModal])

    const containerRef = createRef();

    const containerClickHandler = (e) => {
        if(e.target.classList.contains('ModalContainer')) closeModal();
    }

    return createPortal(
        (<AnimatePresence> 
            {showModal && (
            <motion.div 
                className="ModalContainer"
                initial={{ backgroundColor: '#00000000'}}
                animate={{ backgroundColor: '#252732bb'}}
                exit={{ backgroundColor: '#00000000'}}
                ref={containerRef}
                onClick={containerClickHandler}
            >
                <motion.div 
                className="ModalBox" 
                initial={{ opacity: 0,  
                           y: 60, scale: 0.5 }} 
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  // making use of framer-motion spring animation 
                  // with stiffness = 300 
                  transition: { type: "spring",  
                                stiffness: 300 } 
                }} 
                exit={{ opacity: 0, scale: 0.5,  
                        transition: { duration: 0.3 } }}> 
                <motion.div
                  className={`ModalContent ${className}`} 
                  initial={{ y: -30, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1,  
                             transition: { delay: 0.5 } }}> 
                  {children}  
                </motion.div> 
              </motion.div> 
            </motion.div>
            )} 
        </AnimatePresence>
        ), document.getElementById('root')
    )
  }; 

export default Modal;