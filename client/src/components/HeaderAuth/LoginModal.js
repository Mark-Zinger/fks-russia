import React from 'react';
import Modal from '../Modal';
import Input from '../Input';


const LoginModal = ({showModal,closeModal}) => {

    return (
        <Modal 
          showModal={showModal} 
          closeModal={closeModal}
          className={"modal_login"}
        >
          <div className="modal__title">Вход</div>
          <Input placeholder={"Логин или Email"}/>
          <Input placeholder={"Пароль"}/>
          <button onClick={closeModal}>close</button>
        </Modal>
    )
}

export default LoginModal;