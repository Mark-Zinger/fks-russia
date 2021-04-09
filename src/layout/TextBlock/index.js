import React from 'react';
import cn from 'classnames';

export default (params) => {

  const {
    className,
    children
  } = params;


  return (
    <div className={cn('text-block', className)}>
      {children}
    </div>
  );
}
