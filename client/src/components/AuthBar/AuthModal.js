import React, {createContext, useEffect, useLayoutEffect, useState} from 'react';
import Modal from '../Modal';
import SubmitButton from '../SubmitButton';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";  


export const AuthModalContext = createContext();

const AuthModal = (props) => {
  const {
    showModal=false,
    closeModal,
  } = props;
  const [errorMessage, setErrorMessage] = useState(false);
  const [modalType,setModalType] = useState('auth');
  const [subbmit, setSubmit] = useState({
    onSubmit:() => console.log('submit handler not set'),
    isFetching: false,
    children: 'Войти'
  });
  
  useEffect(()=>setErrorMessage(false),[modalType])

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
          setModalType,
          setSubmit,
          modalType,
          subbmit,
          errorMessage
        }}
      >
      <AnimatePresence>
        <AuthModalBody context={modalType}/>
      </AnimatePresence>
      </AuthModalContext.Provider>
    </Modal>
  )
}



const AuthModalBody = ({context}) => {
  switch(context){
    case 'auth': return <LoginForm/>;
    case 'register': return <RegisterForm/>;
    default: return <LoginForm/>;
  }

}

export default AuthModal;