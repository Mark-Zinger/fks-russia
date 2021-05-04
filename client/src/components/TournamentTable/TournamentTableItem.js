import React from 'react'
import ListItem from '../AnimatedList/list-item';
import {Link} from 'react-router-dom'


const TournamentTableItem = (props) => {
  
  const StatusAlias = [ 'Заявка подана','Участие подтверждено','В участии отказано']

  const {
    name="загрузка...", 
    id,
    custom,
    teamAvatar='',
    CommandTour: {confirm='' , createdAt=''}

  } = props;

  console.log('test',props)

  return (
    <>
      <Link to={`/teams/${id}`} className="tournament-table__item" custom={custom}>
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
      </Link>
    </>
  )

}

export default TournamentTableItem
