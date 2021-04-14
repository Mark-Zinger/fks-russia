import React,{createContext, useEffect, useState} from 'react';
import PageContainer from '../components/PageContainer';
import TournamentsList from '../components/TournamentsList';
import TournamentSearch from '../components/TournamentSearch';
import axios from 'axios';

export const TournamentsPageContext = createContext();

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

  },[searchQuery])


  return (
    <TournamentsPageContext.Provider value={{searchQuery, setSearchQuery}}>
      <PageContainer 
        title={"Команды"}
        background="/resources/images/background/dota_6.jpg"
      >
        <TournamentSearch/>
        {/* <TournamentsList list={list}/> */}
      </PageContainer>
    </TournamentsPageContext.Provider>
  )
}


