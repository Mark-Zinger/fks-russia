import React, { useState, useContext } from 'react';
import Modal from '../Modal';
import Input from '../Input';
import { Error } from '../AuthBar/AuthModalLayout';
import SubmitButton from '../SubmitButton'
import {AlertContext} from '../Alert'



const CreateTeamModal = (props) => {
  
  // const {showModal, closeModal} = props;
  const [errorMessege, setErrorMessege] = useState('');
  const {createAlert} = useContext(AlertContext);
  // const

  return (
    <>
    <Modal {...props}>
      <div className="modal__title">
        Создать команду
        <Error messege={errorMessege}/>
      </div>
      <form>
          <Input 
            placeholder={"Имя команды"} 
            name="name" 
          />
          <Input 
            placeholder={"Пароль (Необязательно)"} 
            name="password"
            type="password"
          />
          <SubmitButton
            onClick={() => createAlert({messege: "Вы подали заявку на участие"})}
          >Создать команду</SubmitButton>
        </form>
    </Modal>

    </>
  )
}

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default CreateTeamModal;

