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

  // `input__container ${isFull?'input_active':''}`

  return (
      <div className={cn('input__container', className, {input_active: isFull})}>
          <input 
            ref={insideRef}
            type="text" 
            className={cn('input')}
            onChange={onChangeHandler} 
            {...ownProps}
          />
          {children}
          <div className="input__placeholder">{placeholder}</div>
      </div>
  )
})

