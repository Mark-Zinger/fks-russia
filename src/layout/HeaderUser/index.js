import React, { useState,useEffect,useCallback } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { userSelector,logout  } from '../../features/userSlice';
import { motion } from 'framer-motion';

export default (params) => {
  const {username, avatar} = useSelector(userSelector);
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);

  const windowClickHandler = (e) => {
    if(!e.target.closest('.header__user')){
      setIsOpen(false);
      window.removeEventListener('click', windowClickHandler);
    }
  }
  const MenuClickHandler = useCallback(
    (e) => {
      if(!e.target.closest('.user-menu__body')) setIsOpen(!isOpen);
    },
    [isOpen],
  )

  useEffect(() => {
    if(isOpen) window.addEventListener('click',windowClickHandler);    
    return () => window.removeEventListener('click', windowClickHandler);
  }, [isOpen])

  return (
    <div className="header__user" onClick={MenuClickHandler}>
        <div className="header__user-name">{username}</div>
        <img src={avatar} className="header__user-avatar"/>
        <div className="user-menu">
          <div className="user-menu__button"></div>
          <motion.div 
            onClick={(e)=>e.stopPropagation()}
            className="user-menu__body"
            initial={{background: '#2c2f33'}}
            animate={{
              height: isOpen? 'auto' : '0px',
              background: isOpen? '#2c2f33' : '#00000000',
              
            }}
          > 
            <div className="user-menu__content">
              <div className="user-menu__link">Профиль</div>
              <div className="user-menu__link">Друзья</div>
              <div className="user-menu__link" onClick={()=>dispatch(logout())}>Выход</div>
            </div>
          </motion.div>
        </div>
    </div>

  )
}
