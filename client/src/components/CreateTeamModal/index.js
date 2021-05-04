import React, { useState, useContext } from 'react';
import Modal from '../Modal';
import ModalTitle from '../ModalTitle'
import { Error } from '../AuthBar/AuthModalLayout';
import Form from '../Form'
import Input from '../Input2'
import Submit from '../SubmitButton2'
import {AlertContext} from '../Alert'



const CreateTeamModal = (props) => {
  
  const {createAlert} = useContext(AlertContext);
  // const
  const onSuccess = () => {}
  const onError = () => {}

  return (
    <>
    <Modal {...props}>
      <div className="modal__title">
        Создать команду
      </div>
      <Form action="/teams/join" {...{onSuccess,onError}}>
        <Input name="name" placeholder="Имя команды"/>
        <Input name="password" type="password" placeholder="Пароль (Необязательно)"/>
        <Submit>Создать команду</Submit>
      </Form>
    </Modal>

    </>
  )
}

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default CreateTeamModal;

