import React, { useState, forwardRef, useEffect,createRef, useContext } from 'react';
import cn from 'classnames';
import {FormContext} from '../Form'


export default forwardRef(({className,placeholder, children, ...ownProps}, ref) => {
    
  const [isFull, setIsFull] = useState(false)
  
  const insideRef = ref?ref:createRef();

  const {setValue} = useContext(FormContext);

  const onChangeHandler = (e) => {
    if(setValue) setValue(e);
    if(e.target.value && !isFull) {
      setIsFull(true);
    } else if (e.target.value == '') {
      setIsFull(false);
    }
  }
  useEffect(() =>{
    if(insideRef.current.value.trim()) setIsFull(true);
  },[])

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

