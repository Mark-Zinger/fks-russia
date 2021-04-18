import React, { useContext } from 'react';
import PageContext from '../../pages/PageContext';
import CountDown, {zeroPad} from 'react-countdown'
import { motion } from 'framer-motion';
import Button from '@material-ui/core/Button'
import CounterTwo from '../CounterTwo'


const IntroTour = ({toRegister}) => {

  const tour = useContext(PageContext);
  console.log(tour);
  const {game, fond,dateBegin} = useContext(PageContext);
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
     
     <div className="tournament-intro__data">
      <div className="tournament-intro__time__and__team">
          {dateBegin &&<CountDown date={dateBegin} renderer={CountDownRender}/> }
            <div className="tournament-intro__comands">
              Участники:
              <div className="tournament-intro__comands-count">
                16 / 24
              </div>
            </div>
      </div>
      
      <div className="tournament-intro__fond">
        Призовой фонд: 
        <motion.div
          className="tournament-intro__fond-money"
        >
         {fond && <CounterTwo from={0} to={parseInt(fond)} />}  
        </motion.div>
      </div>
      <Button 
        variant="contained" 
        color="primary" 
        className="tournament-intro__button" 
        onClick={()=>toRegister()}
      >Принять Учатсие</Button>
     </div>
    </div>

 ) 
}

const CountDownRender = ({ days,hours, minutes }) => (
  <div className="tournament-intro__time">
    До начала турнира:
    <div className="tournament-intro__time-container">
      <div className="tournament-intro__time-date">
        <div className="tournament-intro__time-number">{zeroPad(days)}</div>
        <div className="tournament-intro__time-title">Дней</div> 
      </div>
      <div className="tournament-intro__time-date">
        <div className="tournament-intro__time-number">{zeroPad(hours)}</div>
        <div className="tournament-intro__time-title">Часов</div>
      </div>
      <div className="tournament-intro__time-date">
        <div className="tournament-intro__time-number">{zeroPad(minutes)}</div>
        <div className="tournament-intro__time-title">Минут</div>
      </div>
    </div>
  </div>
);


export default IntroTour;