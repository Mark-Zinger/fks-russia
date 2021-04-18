import React,{useEffect, createRef} from 'react';
import cn from 'classnames';
import {motion} from 'framer-motion';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const ScrollBar = (props) => {
  
  const {children, className, ...own} = props;
  const containerRef = createRef();

  useEffect(() => {
    if(containerRef.current) {
      console.log(containerRef.current);
      containerRef.current._ps.update()
    }
  }, [children])

  return (
    <PerfectScrollbar 
      ref = {containerRef}
      onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}
      {...own}
    >
      {children}
    </PerfectScrollbar>
  )
}

export default ScrollBar;