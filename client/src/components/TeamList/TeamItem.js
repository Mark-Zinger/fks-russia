import React from 'react';
import UseSvg from '../useSVG'
import { Link } from 'react-router-dom'

const TeamItem = (props) => {
  const {
    name,
    tour,
    user,
    id
  } = props;

  return (
    <Link  to={`teams/${id}`} className="team-list__wrapper">
      {/* <UseSvg id={tour[0]?.game.icon} className="team-list__svg"/> */}
      <div className="team-list__info">
        <div className="team-list__name">{name}</div>
        <div className="team-list__members">
          Участники:&nbsp;
          <span className="team-list__members-count">{user.length}</span>
          &nbsp;/&nbsp;
          <span className="team-list__members-total">5</span>
        </div>
        {/* Турнир: */}
        {/* <div className="team-list__tour">
          {tour[0].name}
        </div> */}
      </div>
    </Link>
  )
}


export default TeamItem;
