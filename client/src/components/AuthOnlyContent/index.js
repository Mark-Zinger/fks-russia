import React, {useContext,memo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../features/userSlice';
import {setOpen} from '../../features/authSlice';
import {AlertContext} from '../Alert';

const AuthOnlyContent = memo(() => {
  const {token} = useSelector(userSelector)
  const dispatch = useDispatch();
  const {createAlert} = useContext(AlertContext);

  if(token) {
    console.log(token)
    return true
  }
  else {
    console.log('123')
    // createAlert({level:'info',messege: 'Для продолжения вам необходимо авторизироваться'})
    // dispatch(setOpen('auth'));
    return false
  }
})

export default AuthOnlyContent;
