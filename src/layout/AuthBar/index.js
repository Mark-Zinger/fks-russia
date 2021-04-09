import React, { useState } from 'react';
import { Auth,AuthLink } from './style'
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/userSlice';
import HeaderUser from '../HeaderUser'
import AuthModal from './AuthModal'

const AuthBar = (params) => {
  const {isSuccess} = useSelector(userSelector)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      { !isSuccess 
        ? (
          <Auth className="header__auth">
            <AuthLink className="header__auth-link" onClick={()=>setIsOpen('auth')}>Вход</AuthLink>
            <AuthLink className="header__auth-link" onClick={()=>setIsOpen('register')}>Регистрация</AuthLink>
          </Auth>
        )
        : ( <HeaderUser/> )
      }
      
    <AuthModal showModal={isOpen} closeModal={()=>setIsOpen(false)}/>
    </>
  )
}

export default AuthBar;

