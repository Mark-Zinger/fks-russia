import React from 'react';
import TextAnim from '../TextAnimateInp';


export default ({name}) => {
  
  return (
    <div className="tournament-title">
      <h2 className="tournament-title__text">
        <TextAnim>{name}</TextAnim>
      </h2>
      <div className="tournament-title__progress">
        <div className="tournament-title__progress-container">
          <div className="tournament-title__progress-first-line"></div>
          <div className="tournament-title__progress-second-line"></div>
        </div>
      </div>
    </div>
  )
}
