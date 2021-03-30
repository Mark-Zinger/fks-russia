import React from 'react';
import Input from '../Input';



export default (props) => {
    const {placeholder} = props

    return (
        <Input 
            placeholder={placeholder}
            className="search-input"
        />
        
    )
}
