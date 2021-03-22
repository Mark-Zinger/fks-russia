import React, { useState } from 'react';
import LoginModal from './LoginModal';

export default (params) => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
        <div className="header__auth">
            <div className="header__auth-link" onClick={()=>setIsOpen(true)}>Вход</div>
            <div 
                className="header__auth-link">Регистрация</div>
        </div>
        <LoginModal showModal={isOpen} closeModal={()=>setIsOpen(false)}/>
        </>
    )
}

