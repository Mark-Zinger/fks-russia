import React, {useEffect, useContext, useState, createRef} from 'react';
import Input from '../Input';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from '../../features/userSlice';
import { AuthModalContext } from './AuthModal'

export default (params) => {
  const {showModal, closeModal, setErrorMessage, setModalType,setSubmit} = useContext(AuthModalContext);
  const {isFetching, errorMessage, isError, isSuccess} = useSelector(userSelector);
  const [data, setData] = useState({})

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const newData = {...data};
    newData[e.target.name] = e.target.value;
    setData(newData)
  }

  useEffect(()=>{
    setSubmit({
      onSubmit:()=>{ dispatch(loginUser(data)); },
      isFetching,
      children: 'Войти'
    })
  },[data,isFetching])

  useEffect(()=>{
    if(isError){
      setErrorMessage(errorMessage)
    } else {
      setErrorMessage(false)
    }
  },[isError,errorMessage])

  useEffect(()=> { if(isSuccess) closeModal()},[isSuccess])

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



