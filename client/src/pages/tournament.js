import React, { useEffect, useState,createContext } from 'react';
import PageContainer from '../components/PageContainer'
import { useParams } from 'react-router-dom';
import TournamentSlider from '../components/TournamentSlider'
import TournamentTitle from '../components/TournamentTitle';
import PageContext from './PageContext';
import axios from 'axios';

// export const TournamentConetext = createContext();

export default (props) => {
    
  const {id} = useParams();
  const [tour, setTour] = useState(false);

  useEffect(async() => {
    const {data} = await axios.get(`/tournaments/${id}`);
    setTour(data)
  },[])
  
  useEffect(()=> {
    console.log(tour);
  },[tour])

  return (
    <PageContainer 
      // title={""}
      background={tour?.backgroundURL}
      className="page-container_tournament"
    >
      <PageContext.Provider value={{...tour}}>
        <TournamentTitle {...tour}/>
        <TournamentSlider/>
      </PageContext.Provider>
    </PageContainer>
  )
}


