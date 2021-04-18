import React from 'react';
import cn from 'classnames';

export default (params) => {

  const {
    className,
    children,
    ...owm
  } = params;


  return (
    <div className={cn('text-block', className)} {...owm}>
      {children}
    </div>
  );
}
