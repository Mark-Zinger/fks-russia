import React from 'react';
import Countdown, {zeroPad} from 'react-countdown';

export default (props) => {
    const {date, ...own} = props
    const renderer = ({ days,hours, minutes }) => (
        <span>
          {/* {{days} Дней {zeroPad(hours)} Часов {zeroPad(minutes)} Минут */}
        {
            `${days} Дней ${hours} Часов ${minutes} Минут`
        }
        </span>
      );

    return <Countdown date={new Date(date)} renderer={renderer} {...own}/>
}
