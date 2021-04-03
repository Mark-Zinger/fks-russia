import React,{createContext, useEffect, useState} from 'react';
import PageContainer from '../components/PageContainer';
import TournamentsList from '../components/TournamentsList';
import TournamentSearch from '../components/TournamentSearch';
import { useHttp } from '../hooks/http.hook';
import axios from 'axios';

export const TournamentsPageContext = createContext();

export default () => {

  const  { loading, request, error, clearError } = useHttp();
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
    <TournamentsPageContext.Provider value={{searchQuery, setSearchQuery}}>
      <PageContainer 
        title={"Турниры"}
        background="/resources/images/background/csgo_2.jpg"
      >
        <TournamentSearch/>
        <TournamentsList list={list}/>
      </PageContainer>
    </TournamentsPageContext.Provider>
  )
}


