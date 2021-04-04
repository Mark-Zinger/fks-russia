import React from 'react';
import { Link } from 'react-router-dom'

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
              links.map((el, i)=><HeaderLink {...el} key={i}/>)
          }
      </div>
  )
}

export default HeaderMenuLink;