import React, { useEffect, useState,createContext } from 'react';
import Button from '@material-ui/core/Button';
import PageContainer from '../components/PageContainer'
import { useParams } from 'react-router-dom';
import PageContext from './PageContext';
import TeamJoinModal from '../components/TeamJoinModal'
import MainTitle from '../components/MainTitle'
import UserTable from '../components/UserTable'
import ListItem from '../components/AnimatedList/list-item';
import TournamentItem from '../components/TournamentItem';
import TournamentsList from '../components/AnimatedList';
import styled from 'styled-components';
import axios from 'axios';

// export const TournamentConetext = createContext();

export default (props) => {

  const {id} = useParams();
  const [team, setTeam] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(async() => {
    axios.get(`/teams/${id}`)
    .then(({data})=> setTeam(data))
    .catch(console.error)
  },[])

  useEffect(()=>console.log(team),[team])

  return (
    <PageContainer 
      background={team && team.tour[0].backgroundURL}
      className="page-container_tournament"
    >
      <PageContext.Provider value={{...team}}>
        <Team>
          <MainTitle>{team?.name}</MainTitle>
          <UserTable users={team?.user}/>
          <Button 
            variant="contained" 
            color="default"
            onClick={()=> setShowModal(true)}
          >
            Вступить в команду
          </Button>
          <TeamJoinModal showModal={showModal} closeModal={()=>setShowModal(false)}/>
          <h3>Участие в турнирах</h3>
          <TournamentsList list={team?.tour}
            className="tournament-list"
          >
            { team && team.tour &&
              team.tour.map((el,i) => (
                <ListItem key={i} custom={i} className="tournament-list__item">
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
        </Team>
      </PageContext.Provider>
    </PageContainer>
  )
}


const Team = styled.div`
  min-height: 80vh;
  /* display: flex;
  flex-direction: column; */
  width: 100%;
`