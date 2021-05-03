import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/userSlice';
import HeaderUser from '../HeaderUser'
import AuthModal from './AuthModal'
import AppContext from '../../context/AppContext'

const AuthBar = (params) => {
  const {isSuccess} = useSelector(userSelector)
  const {isOpenAuthModal, setIsOpenAuthModal} = useContext(AppContext);
  const [isOpen, setIsOpen] = [isOpenAuthModal, setIsOpenAuthModal]

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
      
    <AuthModal showModal={isOpen} closeModal={()=>setIsOpen(false)}/>
    </>
  )
}

export default AuthBar;

