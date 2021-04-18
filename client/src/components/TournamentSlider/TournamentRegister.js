import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextBlock from '../TextBlock';
import CreateTeamModal from '../CreateTeamModal';


const TournamentRister = (params) => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div 
      className='tournament-register'
      data-swiper-parallax-opacity="0.3"
    >
      <div className="tournament-register__container">
        <img src="/img/morfeus.png" className="tournament-register__img" alt=""/>
        <TextBlock style={{textAlign: 'center', width:'100%'}}>
          Для участия в турнире, необходимо<br/>
          подать заявку в составе существующей<br/>
          команды или создать новую команду
        </TextBlock>
        <div className="tournament-register__buttons">
          {/* <Link to="/teams"> */}
            <Button
              variant="contained" color="secondary"
              // onClick={handleClick}
            >Найти команду
            </Button>
          {/* </Link> */}
          <Button
            variant="contained" color="primary"
            onClick={()=> setIsOpenModal(true)}
          >Создать команду</Button>
          <CreateTeamModal
            showModal={isOpenModal}
            closeModal={()=> setIsOpenModal(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default TournamentRister;

