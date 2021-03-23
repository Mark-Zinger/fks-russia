import React, {createRef, useEffect} from 'react';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button'
import { useSelector, useDispatch, connect } from 'react-redux';
import { loginUser, userSelector, clearState } from '../../features/userSlice';

const mapStatetoProps = ({ user }) => ({
  isFetching: user.isFetching, 
  errorMessage: user.errorMessage,
  isError: user.isError,
  isSuccess: user.isSuccess
})

const LoginModal = ({showModal,closeModal,isFetching, errorMessage, isError, isSuccess}) => {

    const dispatch = useDispatch();

    const loginInputRef = createRef();
    const passwordInputRef = createRef();

    const onSubmit = () => dispatch(loginUser({
        email: loginInputRef.current.value,
        password: passwordInputRef.current.value,
    }));

    useEffect(()=> {
      if(isSuccess) closeModal()
    },[isSuccess])

    const Lodader = () => <div className="loader">Loading...</div>;
    const Error = ({messege}) => isError && <div className="modal__error">{messege}</div>
    
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
          <div className="modal__title">
            Авторизация
            <Error messege={errorMessage}/>
          </div>
          <Input 
            ref={loginInputRef} 
            placeholder={"Логин или Email"} 
            name="email" 
            // value="testemail@email.com"
          />
          <Input 
            ref={passwordInputRef} 
            placeholder={"Пароль"} 
            name="password" 
            type="password" 
            // value="пароль12" 
          />
          <Button className="modal__button" onClick={onSubmit}>
            {
              isFetching ? <Lodader/> : 'Войти'
            }
          </Button>
        </Modal>
    )
}

export default connect(mapStatetoProps)(LoginModal);