import React from 'react';


export default ({children,className,href=null, ...ownProps}) => {
    return (
        <div className={`button ${className}`} href={href} {...ownProps}>
            {children}
        </div>
    )
}

