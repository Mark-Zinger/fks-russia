import React from 'react';
import { Link } from 'react-router-dom'

const HeaderMenuLink = () => {

  const links = [
     
      { title: 'ТУРНИРЫ', href: '/tournaments'},
      { title: 'КОМАНДЫ', href: '/teams'},
 

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