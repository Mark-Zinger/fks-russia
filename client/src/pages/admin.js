import React, {createContext, useState} from 'react';
import AdminPanel from '../admin'
import AdminPanelNavBar from '../components/AdminPanelNavBar';
import AdminPanelBody from '../components/AdminPanelBody';
import styled from 'styled-components';

export const AdminContext = createContext();

export default () => {
    
  const links = [
    'Турниры', 'Слайдер на главной',
    'Команды','Пользователи', 'Игры'
  ]

  const [activeLink, setActiveLink] = useState(links[0]);

  return (
    <AdminPanel/>
    // <AdminContext.Provider value={{links, activeLink, setActiveLink}}>
    //   <AdminPage>
    //     <AdminPanelNavBar/>
    //     <AdminPanelBody/>
    //   </AdminPage>
    // </AdminContext.Provider>
  )
}

const AdminPage = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  color: black;
  background: white;
`

