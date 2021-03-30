import React,{createContext} from 'react';
import PageContainer from '../components/PageContainer';
import TournamentsList from '../components/TournamentsList';
import TournamentSearch from '../components/TournamentSearch'

const TournamentsPageContext = createContext();

export default () => {

  

  return (
    <TournamentsPageContext.Provider>
      <PageContainer 
        title={"Турниры"}
        background="/resources/images/background/csgo_2.jpg"
      >
        <TournamentSearch/>
        <TournamentsList/>
      </PageContainer>
    </TournamentsPageContext.Provider>
  )
}


