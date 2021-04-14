import React from 'react';
import TeamItem from './TeamItem'


const TeamList = ({list=[]}) => {
  
  return (
    <ul className="team-list">
      <TeamItem/>
    </ul>
  )
}




export default TeamList;

