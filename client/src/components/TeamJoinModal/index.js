import React, {useContext} from 'react';
import Modal from '../Modal';
import Form from '../Form'
import Input from '../Input2'
import Submit from '../SubmitButton2'
import ModalTitle from '../ModalTitle'
import { AlertContext } from '../Alert'
import { useParams, useHistory } from 'react-router-dom'

export default (props) => {
  
  const {
    showModal, closeModal
  } = props

  const {id} = useParams();
  const history = useHistory();

  const {createAlert} = useContext(AlertContext);
  const onSuccess = (data) => { 
    closeModal()
    createAlert({messege: "Вы стали участником команды"});

    setTimeout(()=>{history.go(0)}, 1500);
  }
  const onError = (error) => {};

  return (
    <>  
      <Modal {...props}>
        <ModalTitle>Вступить в команду</ModalTitle>
        <Form action="/teams/join" {...{onSuccess,onError}}>
          <Input name="password" type="password" placeholder="Пароль"/>
          <Input name="id_command" type="hidden" value={parseInt(id)}/>
          <Submit>Вступить в команду</Submit>
        </Form>
      </Modal>
    </>
  )
}
