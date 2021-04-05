import React, { useContext } from 'react';
import { TournamentConetext } from '../../pages/tournament';
import CountDown, {zeroPad} from 'react-countdown'
import { motion } from 'framer-motion';
import Button from '../Button'
import CounterTwo from '../CounterTwo'


const IntroTour = (params) => {

  const tour = useContext(TournamentConetext);
  console.log(tour);
  const {game, fond,dateBegin} = useContext(TournamentConetext);
  console.log(game);

  const CountDownRender = ({ days,hours, minutes }) => {
    
  }

  const renderer = ({ days,hours, minutes }) => (
    <div className="tournament-intro__time">
      <div className="tournament-intro__time">
        <div className="tournament-intro__time">{zeroPad(days)}</div><br/> Дней
      </div>
      <div className="tournament-intro__time">
        {zeroPad(hours)}<br/> Часов
      </div>
      <div className="tournament-intro__time">
        {zeroPad(minutes)}<br/> Минут
      </div>
  
  
    </div>
  );

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
      <div className="tournament-intro__time">
        {dateBegin &&<CountDown date={dateBegin} renderer={renderer}/> }
      </div>
      <div className="tournament-intro__fond">
        Призовой фонд: 
        <motion.div
          className="tournament-intro__fond-money"
        
        >
         {fond && <CounterTwo from={0} to={parseInt(fond)} />}  
        </motion.div>
      </div>
      <Button>Принять Учатсие</Button>

    </div>

 ) 
}



export default IntroTour;