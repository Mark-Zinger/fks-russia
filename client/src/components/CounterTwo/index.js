import { animate, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toLocaleString('ru-RU', { 
          style: 'currency', 
          currency: 'RUB',
          maximumFractionDigits: 0
         })
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <motion.span layout ref={nodeRef} />;
}

export default Counter;