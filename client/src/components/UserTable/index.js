import React, { useEffect, useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Table, User, Nickname} from './style'
import Avatar from '@material-ui/core/Avatar';

export default function UserTable({users=[]}) {
  return (
   <>
   <h3>Состав</h3>
   <Table>
     { users[0] && users
      .map((el, i)=>(
        <User key={i}>
          <Avatar src={el?.avatar}/>
          <Nickname>{el.username}{el.CommandUser.isAdmin && <StarIcon/>}</Nickname>
        </User>
      ))
     }
   </Table>
   </>
  );
}



