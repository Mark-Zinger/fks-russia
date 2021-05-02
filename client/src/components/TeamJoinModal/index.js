import React, {useContext} from 'react';
import Modal from '../Modal';
import Form from '../Form'
import Input from '../Input2'
import Submit from '../SubmitButton2'
import ModalTitle from '../ModalTitle'
import { AlertContext } from '../Alert'

export default (props) => {
  
  const {
    showModal, closeModal
  } = props

  const {createAlert} = useContext(AlertContext);

  const onSuccess = (data) => { 
    createAlert({messege:data});
    setTimeout(()=>closeModal(), 500);
  }
  const onError = (error) => { console.error(error)}

  return (
    <Modal {...props}>
      <ModalTitle>Вступить в команду</ModalTitle>
      <Form action="/teams/join" {...{onSuccess,onError}}>
        <Input name="password" type="password" placeholder="Пароль"/>
        <Submit/>
      </Form>
    </Modal>
  )
}
