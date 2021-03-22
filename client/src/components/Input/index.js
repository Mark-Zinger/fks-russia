import React from 'react';


export default ({className, ...ownProps}) => {
    
    return (
        <input type="text" className={`input ${className}`} {...ownProps}/>
    )
}

