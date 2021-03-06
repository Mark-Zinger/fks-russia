import React, {useEffect, useContext, useState, createRef} from 'react';
import Input from '../Input';
import PasswordValidationInput from '../PasswordValidationInput'
import { useSelector, useDispatch } from 'react-redux';
import { signupUser, userSelector, clearState } from '../../features/userSlice';
import { AuthModalContext } from './AuthModal'
import AuthModalLayout from './AuthModalLayout'

export default (params) => {
  const {closeModal, setErrorMessage,setSubmit} = useContext(AuthModalContext);
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
      onSubmit:()=>{ dispatch(signupUser(data)) },
      isFetching,
      children: 'Зарегистрироваться'
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

  return (
    <AuthModalLayout>
    <form>
      <Input 
        onChange={onChangeHandler} 
        placeholder={"Фамилия Имя Отчество"} 
        name="fullname" 
      />
      <Input 
        onChange={onChangeHandler} 
        placeholder={"Электронная почта"} 
        name="email" 
      />
      <Input 
        onChange={onChangeHandler} 
        placeholder={"Придумайте логин"} 
        name="username" 
      />
      <Input 
        onChange={onChangeHandler} 
        placeholder={"Придумайте пароль"} 
        name="password"
        type="password" 
      />    
    </form>
    </AuthModalLayout>
  )
}



