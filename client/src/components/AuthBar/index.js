import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../features/userSlice';
import { AuthModalSelector } from '../../features/authSlice'
import HeaderUser from '../HeaderUser'
import AuthModal from './AuthModal'
import AppContext from '../../context/AppContext';
import {setOpen,setClose as setCloseInst} from '../../features/authSlice';


const AuthBar = (params) => {
  const {isSuccess} = useSelector(userSelector);
  const {isOpen} = useSelector(AuthModalSelector);
  const dispatch = useDispatch();

  const setIsOpen = (tab) => dispatch(setOpen(tab));
  const setClose = () => dispatch(setCloseInst());

  window.setClose = setClose;

  return (
    <>
      { !isSuccess 
        ? (
          <div className="header__auth">
            <div className="header__auth-link" onClick={()=>setIsOpen('auth')}>Вход</div>
            <div className="header__auth-link" onClick={()=>setIsOpen('register')}>Регистрация</div>
          </div>
        )
        : ( <HeaderUser/> )
      }
      
    <AuthModal showModal={isOpen} closeModal={()=>setClose()}/>
    </>
  )
}

export default AuthBar;

