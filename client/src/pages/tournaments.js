import React,{createContext, useEffect, useState} from 'react';
import PageContainer from '../components/PageContainer';
import TournamentsList from '../components/AnimatedList';
import TournamentSearch from '../components/TournamentSearch';
import PageContext from './PageContext';
import ListItem from '../components/AnimatedList/list-item';
import TournamentItem from '../components/TournamentItem'
import axios from 'axios';


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

    
    const {data} = await axios.get('/tournaments',{params})
    console.log(data);
    setList([]);
    requestAnimationFrame(() =>setList(data))
    // setTimeout(() =>requestAnimationFrame(()=>setList(data)),100)
  },[searchQuery])


  return (
    <PageContext.Provider value={{searchQuery, setSearchQuery}}>
      <PageContainer 
        title={"Турниры"}
        background="/resources/images/background/csgo_2.jpg"
      >
        <TournamentSearch/>
        <TournamentsList {...{list}}>
          {
            list.map((el,i) => (
              <ListItem key={i} custom={i}>
                <TournamentItem
                  href = {el.id}
                  name = {el.name}
                  backgroundURL = {el.backgroundURL}
                  dateBegin = {el.dateBegin}
                  fond = {el.fond.toLocaleString('ru')}
                  game = {el.game}
                />
              </ListItem>
            ))
          }
        </TournamentsList>
      </PageContainer>
    </PageContext.Provider>
  )
}


