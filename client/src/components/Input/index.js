import React, { useState, forwardRef, useEffect,createRef } from 'react';
import cn from 'classnames'


export default forwardRef(({className,placeholder, onChange,children, ...ownProps}, ref) => {
    
  const [isFull, setIsFull] = useState(false)
  
  const insideRef = ref?ref:createRef();

  const onChangeHandler = (e) => {
    if(e.target.value && !isFull) {
      setIsFull(true);
    } else if (e.target.value == '') {
      setIsFull(false);
    }
    if(onChange) onChange(e);
  }
  useEffect(() =>{
    if(insideRef.current.value.trim()) setIsFull(true);
  },[])

  return (
      <div className={`input__container ${isFull?'input_active':''}`}>
          <input 
            ref={insideRef}
            type="text" 
            className={cn('input', className)}
            onChange={onChangeHandler} 
            {...ownProps}
          />
          {children}
          <div className="input__placeholder">{placeholder}</div>
      </div>
  )
})

