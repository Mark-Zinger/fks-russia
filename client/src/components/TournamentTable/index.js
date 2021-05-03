import React, {useCallback, createRef, useEffect,useContext } from 'react';
import TournamentTableItem from './TournamentTableItem';
import Scrollbar from '../Scrollbar'
import AnimatedList from '../AnimatedList';
import PageContext from '../../pages/PageContext';





const TournamentTable = ({swiper}) => {
  
  const list = [
    {name: 'Команда 1', password: true, status: 0, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 2', password: true, status: 1, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 3', password: true, status: 2, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 4', password: true, status: 2, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 5', password: true, status: 1, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 6', password: true, status: 0, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 7', password: true, status: 1, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 8', password: true, status: 1, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 9', password: true, status: 1, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 10', password: true, status: 1, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 11', password: true, status: 2, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 12', password: true, status: 2, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
    {name: 'Команда 13', password: true, status: 1, teamAvatar: '/resources/images/user_avatar/test_avatar.png',},
  ]

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
        <AnimatedList 
          className="tournament-table__list"
          animate={i => ({
            opacity: [0,1], 
            y: [-5,0],
            transition: { delay: i * 0.2+0.1 }
          })}
        >
          {
            command && command[0] && 
            command.map((el,i) => <TournamentTableItem {...el} key={i} custom={i}/>)
          }
        </AnimatedList>
      </Scrollbar>
    </div>
  )

}

export default TournamentTable;