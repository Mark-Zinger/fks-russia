import React from 'react'
import ListItem from '../AnimatedList/list-item';


const TournamentTableItem = (props) => {
  
  const StatusAlias = [ 'Заявка подана','Участие подтверждено','В участии отказано']

  const {
    name="загрузка...", 
    custom,
    teamAvatar='',
    CommandTour: {confirm='' , createdAt=''}

  } = props;

  console.log('test',props)

  return (
    <ListItem className="tournament-table__item" custom={custom}>
      <div className="tournament-table__name">
        <img src={teamAvatar} className="tournament-table__avatar" alt=""/>
        {name}
      </div>
      <div className="tournament-table__date">
        {createdAt}
      </div>
      <div className={`tournament-table__status tournament-table__status_${confirm}` }>
        {
          StatusAlias[parseInt(confirm)]
        }
      </div>
    </ListItem>

  )

}

export default TournamentTableItem
