import React, {useEffect, useContext, useState, createRef} from 'react';
import Input from '../Input';
import PasswordValidationInput from '../PasswordValidationInput'
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
      onSubmit:()=>{ console.table(data); },
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
  )
}



