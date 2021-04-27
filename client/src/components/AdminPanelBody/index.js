import React,{useContext} from 'react';
import { AdminContext } from '../../pages/admin';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import Tournaments from './tournaments';


const AdminPanelBody = () => {
  
  const {activeLink} = useContext(AdminContext)

  return (
    <Body>
      <Box textAlign="center" component="h1" fontSize={30} fontWeight={700}>{activeLink}</Box>
      <Container>
        <ActiveBody active={activeLink}/>
      </Container>  
    </Body>
  )
}

const ActiveBody = ({active}) => {
  switch(active) {
    case 'Турниры': return <Tournaments/>;
    default: return null;
  }
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Container = styled.div`
  padding: 0 30px;
  height: 100%; width: 100%;
`

export default AdminPanelBody;