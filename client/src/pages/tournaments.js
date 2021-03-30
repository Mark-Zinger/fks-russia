import React,{createContext, useEffect, useState} from 'react';
import PageContainer from '../components/PageContainer';
import TournamentsList from '../components/TournamentsList';
import TournamentSearch from '../components/TournamentSearch';
import { useHttp } from '../hooks/http.hook'

const TournamentsPageContext = createContext();

export default () => {

  const  { loading, request, error, clearError } = useHttp();
  const [list, setList] = useState([]);
  
  useEffect(async()=> {
    const list = await request('/tournaments');
    setList(list);
  },[])


  return (
    <TournamentsPageContext.Provider>
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


