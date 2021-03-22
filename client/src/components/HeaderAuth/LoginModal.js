import React, {createRef, useEffect} from 'react';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button'
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from '../../features/userSlice';



const LoginModal = ({showModal,closeModal}) => {

    const dispatch = useDispatch();

    const loginInputRef = createRef();
    const passwordInputRef = createRef();

    const onSubmit = () => dispatch(loginUser({
        email: loginInputRef.current.value,
        password: passwordInputRef.current.value,
    }));
    
    useEffect(() => {
      return () => {
        dispatch(clearState());
      };
    }, []);

    return (
        <Modal 
          showModal={showModal} 
          closeModal={closeModal}
          className={"modal_login"}
        >
          <div className="modal__title">Авторизация</div>
          <Input ref={loginInputRef} placeholder={"Логин или Email"} name="email"/>
          <Input ref={passwordInputRef} placeholder={"Пароль"} name="password" type="password"/>
          <Button className="modal__button" onClick={onSubmit}>Войти</Button>
        </Modal>
    )
}

export default LoginModal;