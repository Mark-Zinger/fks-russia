import React, {useCallback, createRef, useEffect,useContext } from 'react';
import TournamentTableItem from './TournamentTableItem';
import Scrollbar from '../Scrollbar'
import AnimatedList from '../AnimatedList';
import PageContext from '../../pages/PageContext';





const TournamentTable = ({swiper}) => {
  

  const {command} = useContext(PageContext);
  

  const listRef = createRef();

  const preventSwiperScroll = useCallback((bool=false) => { 
    swiper && swiper.mousewheel[bool?'enable':'disable']()
  },[swiper])

  // addEventListener('mouseenter')

  useEffect(() => {
    if(listRef.current) {
      console.log(listRef.current);
      listRef.current.addEventListener('mouseenter',(e)=>preventSwiperScroll(false))
      listRef.current.addEventListener('mouseleave',(e)=>preventSwiperScroll(true))

    }
    return () => {
      
    }
  }, [preventSwiperScroll])

  return (
    <div 
      className="tournament-table"
      data-swiper-parallax-opacity="0.3"
      ref={listRef}
    >
      <div className="tournament-table__header">
        <div className="tournament-table__header-team">Команда</div>
        <div className="tournament-table__header-date">Дата регистрации</div>
        <div className="tournament-table__header-status">Статус участия</div>
      </div>
      <Scrollbar>
        <div className="tournament-table__list"
        >
          {
            command && command[0] && 
            command.map((el,i) => <TournamentTableItem {...el} key={i} custom={i}/>)
          }
        </div>
      </Scrollbar>
    </div>
  )

}

export default TournamentTable;