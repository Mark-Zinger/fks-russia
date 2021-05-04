import React, {useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../features/userSlice';
import {setOpen,setClose} from '../../features/authSlice';
import {AlertContext} from '../Alert';

const AuthOnlyContent = ({children}) => {
  const {token} = useSelector(userSelector)
  const dispatch = useDispatch();
  const {createAlert} = useContext(AlertContext);


  if(token) {
    return <>{children}</>;
  }
  else {
    createAlert({level:'info',messege: 'Для продолжения вам необходимо авторизироваться'})
    dispatch(setOpen());
    return null
  }
}

export default AuthOnlyContent;
