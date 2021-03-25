import React from 'react';
import AuthBar from '../AuthBar';
import { Link } from 'react-router-dom'




export default (props) => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <Link to="/" className="header__logo">Логотип</Link>
                <div className="header__menu">
                    <HeaderMenuLink/>
                </div>
                <AuthBar/>
            </div>
            
        </div>
    )
}

const HeaderMenuLink = () => {

    const links = [
        { title: 'НОВОСТИ', href: '/news'},
        { title: 'ТУРНИРЫ', href: '/tournaments'},
        { title: 'КОМАНДЫ', href: '/news'},
        { title: 'НОВОСТИ', href: '/news'},
        { title: 'ВИДЕО', href: '/news'},

    ];


    const HeaderLink = ({href,title}) => <Link className="header__menu-link" to={href}>{title}</Link>;

    return (
        <div className="header__menu">
            {
                links.map((el)=><HeaderLink {...el}/>)
            }
        </div>
    )
}


