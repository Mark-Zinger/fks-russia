import React,{useContext} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import { AdminContext } from '../../pages/admin'


const AdminPanelNavBar = () => {

  const {links, activeLink, setActiveLink} = useContext(AdminContext)
  
  return (
    <List className="admin-panel-navbar">
      {
        links.map((text)=>(
          <ListItem button selected={text === activeLink} onClick={()=>setActiveLink(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))
      }
    </List>
  )
}

const links = [

]


export default AdminPanelNavBar;
