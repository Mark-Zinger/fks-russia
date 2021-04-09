import { animate, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ children }) {
  const nodeRef = useRef();
  
  
  useEffect(() => {
    console.log(typeof children);

    if(children) {
      const wordLength = children.length
      const node = nodeRef.current;
      const controls = animate(0, wordLength, {
        duration: 2,
        onUpdate(value) {
          // console.log(value);
          node.textContent = children.slice(0,value); 
        },
      });

      return () => controls.stop();
    }

    
  }, [children]);

  return <div ref={nodeRef} />;
}


function Counter2({ children }) {
  
  const controls = useAnimation();


  useEffect(() => {

    // setTimeout(()=>{

      controls.start(i => ({
        // y:[-50,0],
        scale: [1.5, 1],
        opacity: [0,1],
        y: [50,0],
        transition: { delay: i * 0.1 },
      })) 
    // },1000)
      // console.log('test');
    
  }, [children])


  return <div style={{display: 'flex', overflow: 'hidden',justifyContent:'center'}}>
    { children && children.split('')
      .map((el, i)=> (
        <motion.div
          custom={i}
          animate={controls}
        >
          {el}
        </motion.div>
      ))
    }
  </div>;
}

export default Counter;