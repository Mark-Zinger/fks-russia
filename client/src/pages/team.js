import React, { useEffect, useState,createContext } from 'react';
import PageContainer from '../components/PageContainer'
import { useParams } from 'react-router-dom';
import PageContext from './PageContext';
import MainTitle from '../components/MainTitle'
import UserTable from '../components/UserTable'
import styled from 'styled-components';
import axios from 'axios';

// export const TournamentConetext = createContext();

export default (props) => {

  const {id} = useParams();
  const [team, setTeam] = useState(false);

  useEffect(async() => {
    const {data} = await axios.get(`/teams/${id}`);
    if(data[0]) setTeam(data[0]);
    console.log(data[0])
  },[])

  useEffect(()=>console.log(team.comand?.name),[team])

  return (
    <PageContainer 
      background={team?.tour?.backgroundURL}
      className="page-container_tournament"
    >
      <PageContext.Provider value={{...team}}>
        <Team>
          <MainTitle>{team?.command?.name}</MainTitle>
          <UserTable users={team?.command?.command_user}/>
        </Team>
      </PageContext.Provider>
    </PageContainer>
  )
}


const Team = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`