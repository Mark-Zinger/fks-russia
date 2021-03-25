import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../features/userSlice'
import LoginModal from './LoginModal';
import AuthModal from './AuthModal'

const AuthBar = (params) => {
  const {isSuccess, username, avatar} = useSelector(userSelector)
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
        : (
          <div className="header__user">
            <div className="header__user-name">{username}</div>
            <img src={avatar} className="header__user-avatar"/>
          </div>
        )
      }
      
    <AuthModal showModal={isOpen} closeModal={()=>setIsOpen(false)}/>
    </>
  )
}

export default AuthBar;

