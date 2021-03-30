import React from "react";
import cn from 'classnames'

export default (props) => {
  const {id,className, ...own} = props
  return (
    <svg className={cn("svg-icon", className)} {...own}>
        <use xlinkHref={`#${id}`} />
    </svg>
  );
};
