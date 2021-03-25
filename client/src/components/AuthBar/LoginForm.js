import React, {useEffect, useContext, useState, createRef} from 'react';
import Input from '../Input';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from '../../features/userSlice';
import { AuthModalContext } from './AuthModal'

export default (params) => {
  const {showModal, closeModal, setErrorMessage,setModalType} = useContext(AuthModalContext);
  const {isFetching, errorMessage, isError, isSuccess} = useSelector(userSelector);
  const [data, setData] = useState({})

  const onChangeHandler = (e) => {
    const newData = {...data};
    console.log(e.target);
  }
  const loginInputRef = createRef();
  const passwordInputRef = createRef();

  return (
    <form>
      <Input 
        onChange={onChangeHandler} 
        placeholder={"Логин или Email"} 
        name="email" 
        // value="testemail@email.com"
      />
      <Input 
        onChange={onChangeHandler} 
        placeholder={"Пароль"} 
        name="password" 
        type="password" 
        // value="пароль12" 
      />
    </form>
  )
}



