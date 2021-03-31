import React, { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer'
import { useParams } from 'react-router-dom';
import { Bracket } from 'react-tournament-bracket';
import TextAnim from '../components/TextAnimateInp'
import axios from 'axios';


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
      // title={"Турнир"}
      background={tour?.backgroundURL}
      className="page-container_tournament"
    >
      <h2 className="tournament-title">
        <TextAnim>{tour.name}</TextAnim>
      </h2>
    </PageContainer>
  )
}


