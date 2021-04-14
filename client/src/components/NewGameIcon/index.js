import React,{useCallback, useContext} from 'react';
import cn from 'classnames';
import UseSVG from '../useSVG';
import { TournamentsPageContext } from '../../pages/tournaments';
import throttle from'lodash.throttle';



export default (props) => {

  const {className,value,title,icon,} = props;
  const {searchQuery, setSearchQuery} = props;

  const onClickHandler = useCallback((e) => {
    if(searchQuery.game != value) {
      const newSearchQuery = {...searchQuery};
      newSearchQuery.game = value;
      setSearchQuery(newSearchQuery);
    }
  },[searchQuery])

  return (
    <div
      className={cn('game-icon',className,{'game-icon_selected': searchQuery.game == value})}
      onClick={throttle(onClickHandler, 5000)}
    >
      <UseSVG id={icon} className="game-icon__svg"/>
      <div className="game-icon__title">{title}</div>
    </div>
  )
}
