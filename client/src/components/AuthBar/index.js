import React, { useState } from 'react';
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

