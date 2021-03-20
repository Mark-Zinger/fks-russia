import React from 'react';


export default ({children,className, ...ownProps}) => {
    return (
        <div className={`button ${className}`} {...ownProps}>
            {children}
        </div>
    )
}

