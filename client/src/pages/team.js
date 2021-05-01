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
  const [team, setTeam] = useState(false);

  useEffect(async() => {
    const {data} = await axios.get(`/teams/${id}`);
    console.log(data)
    setTeam(data)
  },[])

  return (
    <PageContainer 
      // background={team?.backgroundURL}
      className="page-container_tournament"
    >
      <PageContext.Provider value={{...team}}>
        <div className="div">{id}</div>
      </PageContext.Provider>
    </PageContainer>
  )
}


