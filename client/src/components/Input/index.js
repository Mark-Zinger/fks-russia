import React, { useState } from 'react';


export default ({className,placeholder, onChange, ...ownProps}) => {
    
  const [isFull, setIsFull] = useState(false)

  const onChangeHandler = (e) => {
    if(e.target.value && !isFull) {
      setIsFull(true);
    } else if (e.target.value == '') {
      setIsFull(false);
    }
    if(onChange) onChange(e);
  }

  return (
      <div className={`input__container ${isFull?'input_active':''}`}>
          <input 
            type="text" 
            className={`input ${className}`}
            onChange={onChangeHandler} 
            {...ownProps}
          />
          <div className="input__placeholder">{placeholder}</div>
      </div>
  )
}

