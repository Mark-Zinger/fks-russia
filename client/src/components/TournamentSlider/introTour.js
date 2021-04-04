import React, { useContext } from 'react';
import { TournamentConetext } from '../../pages/tournament';


const IntroTour = (params) => {

  const tour = useContext(TournamentConetext);
  console.log(tour);
  const {game, fond} = useContext(TournamentConetext);
  console.log(game);

 return (
    <div 
      className="tournament-intro"
      data-swiper-parallax-opacity="0.3"
    >
      <div className="tournament-intro__date">
        <div className="date date__anonce">Анонсирован <br/>25.03.2021</div>
        <div className="date date__end-registration">Окночание регистрации <br/>02.04.2021</div>
        <div className="date date__start-tour">Начало турнира<br/>02.04.2021</div>
        <div className="date date__end-tour">Окончание турнира <br/>02.04.2021</div>

      </div>
     
      <div className="tournament-intro__fond">
          {/* {fond} */}
      </div>
    </div>

 ) 
}

export default IntroTour;