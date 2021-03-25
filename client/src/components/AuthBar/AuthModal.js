import React, {createContext, useEffect, useState} from 'react';
import Modal from '../Modal';
import SubmitButton from '../SubmitButton';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'

export const AuthModalContext = createContext();

const AuthModal = (props) => {
  const {
    showModal=false,
    closeModal,
    children 
  } = props;
  const [errorMessage, setErrorMessage] = useState(false);
  const [modalType,setModalType] = useState('auth');
  const [subbmit, setSubmit] = useState({
    title: 'Войти',
    onSubmit: () => {}
  })

  useEffect(()=>setModalType(showModal),[showModal])

  return (
    <Modal 
      showModal={showModal} 
      closeModal={closeModal}
      className={"modal_login"}
    >
      <AuthModalContext.Provider 
        value={{
          showModal,
          closeModal,
          setErrorMessage,
          setModalType
        }}
      >
      <div className="modal__title">
        {ModalTitle(modalType)}
        <Error messege={errorMessage}/>
      </div>
      <AuthModalBody context={modalType}/>
      <SubmitButton {...{}}>
        {SubmitTitle(modalType)}
      </SubmitButton>
      </AuthModalContext.Provider>
    </Modal>
  )
}

const ModalTitle = (context) => {
  switch(context){
    case 'auth': return 'Авторизация';
    case 'register': return 'Регистрация';
    default: return 'Авторизация';
  }
}
const SubmitTitle = (context) => {
  switch(context) {
    case 'auth': return 'Войти';
    case 'register': return 'Зарегистрироваться';
    default: return 'Авторизация';
  }
}

const AuthModalBody = ({context}) => {
  switch(context){
    case 'auth': return <LoginForm/>;
    case 'register': return <RegisterForm/>;
    default: return 'Авторизация';
  }
}

const Error = ({messege, isError=false}) => isError && <div className="modal__error">{messege}</div>;

export default AuthModal;