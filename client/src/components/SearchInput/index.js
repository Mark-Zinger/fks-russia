import React from 'react';
import Input from '../Input';



export default (props) => {
    const {placeholder, onChange} = props

    return (
        <Input 
            className="search-input"
            {...{placeholder, onChange}}
        />
        
    )
}
