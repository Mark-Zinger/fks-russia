import React, {useContext} from 'react';
import Modal from '../Modal';
import Form from '../Form'
import Input from '../Input2'
import Submit from '../SubmitButton2'
import ModalTitle from '../ModalTitle'
import { AlertContext } from '../Alert'
import { useLocation } from 'react-router-dom'

export default (props) => {
  
  const {
    showModal, closeModal
  } = props

  const location = useLocation();

  const {createAlert} = useContext(AlertContext);
  const onSuccess = (data) => { 
    createAlert({messege:data});
    setTimeout(()=>closeModal(), 500);
  }
  const onError = (error) => { console.error(error)}

  return (
    <>
      {
        <Modal {...props}>
        <ModalTitle>Вступить в команду</ModalTitle>
        <Form action="/teams/join" {...{onSuccess,onError}}>
          <Input name="password" type="password" placeholder="Пароль"/>
          <Input name="id_tour" type="hidden" value={location.pathname.split('/')[2]}/>
          <Submit>Вступить в команду</Submit>
        </Form>
      </Modal>
      }
    </>
  )
}
