import React from 'react';
import Link from 'next/link'
import { Menu } from './style'

interface HeaderLink {
    href: string,
    title: string
}

const HeaderMenuLink = () => {

  const links = [
      { title: 'НОВОСТИ', href: '/news'},
      { title: 'ТУРНИРЫ', href: '/tournaments'},
      { title: 'КОМАНДЫ', href: '/news'},
      { title: 'НОВОСТИ', href: '/news'},
      { title: 'ВИДЕО', href: '/news'},

  ];


  const HeaderLink = ({href,title}:HeaderLink) => <Link href={href}>{title}</Link>;

  return (
      <Menu>
          {
              links.map((el, i)=><HeaderLink {...el} key={i}/>)
          }
      </Menu>
  )
}

export default HeaderMenuLink;