import React, { useContext, useEffect } from 'react'
import { motion } from "framer-motion";
import { AuthModalContext } from './AuthModal';
import SubmitButton from '../SubmitButton'


export default ({children, ...own}) => {

  const {modalType, subbmit, errorMessage, setModalType} = useContext(AuthModalContext);

  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage])

  return (
    <motion.div
      initial={{opacity:0, scale: 0.99, animationDelay: 0.5}}
      animate={{opacity:1, scale: 1}}
      exit={{opacity:0, scale: 0.99}}
      // transition={{duration: 0.3, ease: 'easeIn'}}
    {...own}
    >
        <div className="modal__title">
            {ModalTitle(modalType)}
            <Error messege={errorMessage}/>
        </div>
        {children}
        <SubmitButton {...subbmit}>
          {SubmitTitle(modalType)}
        </SubmitButton>
        <Question context={modalType} {...{setModalType}}/>
    </motion.div>
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

const Question = ({context, setModalType}) => {

  const Link = (props) => <div className="modal__link" {...props}/>

  switch(context) {
    case 'auth': return <Link onClick={()=>setModalType('register')}>Нет Аккаунта?</Link>;
    case 'register': return <Link onClick={()=>setModalType('auth')}>Уже есть Аккаунт?</Link>;
    default: return null;
  }
}

const Error = ({messege}) => messege && <div className="modal__error">{messege}</div>;

