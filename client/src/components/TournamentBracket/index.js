import React from 'react';
// import dataInst from './data.json';



export default (params) => {
  
  // const data = Array.from(dataInst);
  // const roundsCount = 5;

  // console.log(data);

  // window.data = data;

  return ( <iframe  className="tournament-bracket__iframe" src="https://Tlab.pro/tournament/f4a6d325a9154164bd8d08d6efd2c30f" frameborder="0"></iframe>
    // <div className="tournament-bracket"  data-swiper-parallax-opacity="0.3">
    //   <div className="tournament-bracket__container">

    //     <div className={`tournament-bracket__column round${1}`}>
    //       <div className="round-header"> Раунд {1}</div>
    //       <div className="round__body">

    //         <div className="pair">
    //           <div className="pair-game">
    //             <div className="player player1"> Команда 1</div>
    //             <div className="player player2"> Команда 2 </div>  
    //           </div>
    //           <div className="pair-game">
    //             <div className="player player1">Команда 3</div>
    //             <div className="player player2">Команда 4</div>
    //           </div>
    //         </div>

    //         <div className="pair">
    //           <div className="pair-game">
    //             <div className="player player1"> Команда 1</div>
    //             <div className="player player2"> Команда 2 </div>  
    //           </div>
    //           <div className="pair-game">
    //             <div className="player player1">Команда 3</div>
    //             <div className="player player2">Команда 4</div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>

    //     <div className={`tournament-bracket__column round${2}`}>
    //       <div className="round-header"> Раунд {2}</div>
    //       <div className="round__body">

    //       <div className="pair">
    //         <div className="pair-game">
    //           <div className="player player1"> Команда 1</div>
    //           <div className="player player2"> Команда 2 </div>  
    //         </div>
    //         <div className="pair-game">
    //           <div className="player player1">Команда 3</div>
    //           <div className="player player2">Команда 4</div>
    //         </div>
    //       </div>

    //       </div>
    //     </div>

    //     <div className={`tournament-bracket__column round${3} finality`}>
    //       <div className="round-header"> Финал </div>
    //       <div className="round__body">

    //       <div className="pair">
    //         <div className="pair-game">
    //           <div className="player player1"> Команда 1</div>
    //           <div className="player player2"> Команда 2 </div>  
    //         </div>
    //       </div>

    //       </div>
    //     </div>

    //     <div className={`tournament-bracket__column round${4} winner`}>
    //       <div className="round-header"> Победитель </div>
    //       <div className="round__body">

    //       <div className="pair">
    //         <div className="pair-game">
    //           <div className="player player1"> Команда 1</div>
    //         </div>
    //       </div>

    //       </div>
    //     </div>


    //   </div>
    // </div>
  )
}



// function getRoundCount (num) {
//   let count = 0;
//   let matches = num % 2 ? num + 1 : num;

//   while (matches >= 2) {
//     matches = matches/2;
//     count++;
//   }
//   return count;
// }
