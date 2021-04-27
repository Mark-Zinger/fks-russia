import React,{createContext, useEffect, useState} from 'react';
import PageContainer from '../components/PageContainer';
import AnimatedList from '../components/AnimatedList';
import ListItem from '../components/AnimatedList/list-item';
import TeamItem from '../components/TeamList/TeamItem'
import TournamentSearch from '../components/TournamentSearch';
import axios from 'axios';
import PageContext from './PageContext';
import TeamList from '../components/TeamList'

export default () => {

  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    search: '',
    game: ''
  })
  

  useEffect(async()=> {
    const {search,game} = searchQuery; 
    const params = {};
    if(search.trim()) params.search = search;
    if(game) params.game = game;
    
    const {data} = await axios.get('/teams',{params})
    console.log({data});
    setList([]);
    requestAnimationFrame(() =>setList(data))

  },[searchQuery])


  return (
    <PageContext.Provider value={{searchQuery, setSearchQuery}}>
      <PageContainer 
        title={"Команды"}
        background="/resources/images/background/dota_6.jpg"
      >
        <TournamentSearch
          placeholder="Найти команду..."
        />
        <AnimatedList list={list} className="team-list">
          { list[0] ?
            list.map((el,i) => (
              <ListItem key={i} custom={i} className="team-list__item" >
                <TeamItem {...el}/>
              </ListItem>
            )) 
            : "По вашему запросу команд не найдено :("
          }
        </AnimatedList>
      </PageContainer>
    </PageContext.Provider>
  )
}


