import React from 'react';
import UseSvg from '../useSVG'

const TeamItem = (props) => {
  
  console.log('test',props);
  const {
    command: {name,command_user},
    tour
  } = props;

  return (
    <div className="team-list__wrapper">
      {/* < src="/" alt="" className="team-list__avatar"/> */}
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
    </div>
  )
}


export default TeamItem;
