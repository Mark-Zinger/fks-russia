import React, {useEffect, useCallback} from 'react';
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

    const enterHandler = useCallback(({keyCode}) => {
        if(keyCode == 13) onSubmit();
    },[onSubmit])

    useEffect(() => {
        window.addEventListener('keydown',enterHandler);
        return () => window.removeEventListener('keydown',enterHandler);
    }, [enterHandler])

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

