import React from 'react';
import Button from '../Button';
import Loader from '../Loader'
import cn from 'classnames';


export default (props) => {
    const {
        className=false,
        onSubmit,
        isFetching=false,
        children=null,
        ...ownProps
    } = props;

    return (
        <Button 
            className={cn("modal__button",{className})} 
            onClick={onSubmit}
            {...ownProps}
        >
            {
              isFetching ? <Loader/> : <>{children}</>
            }
        </Button>
    )
}

