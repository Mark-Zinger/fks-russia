import React, { useState, useContext } from 'react';
import Modal from '../Modal';
import Form from '../Form'
import Input from '../Input2'
import Submit from '../SubmitButton2'
import { useLocation, useHistory } from 'react-router-dom'


const CreateTeamModal = (props) => {
  
  const location = useLocation();
  const history = useHistory();

  const onSuccess = (e) => {
    window.createAlert({messege:"Команда создана, вы подали заявку на участие в турнире"})
    if(e.team.id) history.push(`/teams/${e.team.id}`)
  }
  const onError = (e) => {
    console.log(e)
    window.createAlert({level:'error', messege:"Что то пошло не так :("})
  }

  return (
    <>
    <Modal {...props}>
      <div className="modal__title">
        Создать команду
      </div>
      <Form action="/teams/" {...{onSuccess,onError}}>
        <Input name="name" placeholder="Имя команды"/>
        <Input name="password" type="password" placeholder="Пароль (Необязательно)"/>
        <Input name="id_tour" type="hidden" value={location.pathname.split('/')[2]}/>
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

