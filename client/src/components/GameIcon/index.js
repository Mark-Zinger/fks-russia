import React from 'react';
import cn from 'classnames';
import UseSVG from '../useSVG'

export default (props) => {

  const {className} = props;

  return (
    <div
      className={cn('game-icon',className)}
    >
      <UseSVG id="hs" className="game-icon__svg"/>
      <div className="game-icon__title">HeartStone</div>
    </div>
  )
}
