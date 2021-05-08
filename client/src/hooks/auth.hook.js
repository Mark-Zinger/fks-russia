import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../features/userSlice';
import { setOpen } from '../features/authSlice'

export const useAuth = () => {
  
  const {token} = useSelector(userSelector);
  const dispatch = useDispatch();

  return useCallback((callback) => {
    if(token) {callback()}
    else {
      dispatch(setOpen('auth'));
      window.createAlert({level: 'info', messege: "Для продолжения вам необходимо авторизироваться"})
    }

  },[token])
}
