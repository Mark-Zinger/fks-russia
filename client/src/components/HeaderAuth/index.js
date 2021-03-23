import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../features/userSlice'
import LoginModal from './LoginModal';

const AuthBar = (params) => {
  const {isSuccess, username, avatar} = useSelector(userSelector)
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      { !isSuccess 
        ? (
          <div className="header__auth">
            <div className="header__auth-link" onClick={()=>setIsOpen(true)}>Вход</div>
            <div className="header__auth-link">Регистрация</div>
          </div>
        )
        : (
          <div className="header__user">
            <div className="header__user-name">{username}</div>
            <img src={avatar} className="header__user-avatar"/>
          </div>
        )
      }
      
    <LoginModal showModal={isOpen} closeModal={()=>setIsOpen(false)}/>
    </>
  )
}

export default AuthBar;

