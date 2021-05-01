import React from 'react';
import UseSvg from '../useSVG'
import { Link } from 'react-router-dom'

const TeamItem = (props) => {
  const {
    command: {name,command_user},
    tour
  } = props;

  return (
    <Link  to={`teams/${tour.id}`} className="team-list__wrapper">
      <UseSvg id={tour.game.icon} className="team-list__svg"/>
      <div className="team-list__info">
        <div className="team-list__name">{name}</div>
        <div className="team-list__members">
          Участники:&nbsp;
          <span className="team-list__members-count">{command_user.length}</span>
          &nbsp;/&nbsp;
          <span className="team-list__members-total">5</span>
        </div>
        Турнир:
        <div className="team-list__tour">
          {tour.name}
        </div>
      </div>
    </Link>
  )
}


export default TeamItem;
