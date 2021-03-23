import React from 'react';

export default ({children, title, background}) => {
    

    return (
        <div className="page-container">
            { background && <img src={background} className="page-container__background"/>}
            <div className="page-container__title">{title}</div>
            <div className="page-container__body">
                {children}
            </div>
        </div>
    )
}

