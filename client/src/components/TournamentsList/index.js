import React from 'react';
import ListItem from './list-item'

export default (params) => {
  return (
    <ul className="tournament-list">
      {
        new Array(32).fill('').map((_,i) => <ListItem key={i}/>)
      }
    </ul>
  )
}
