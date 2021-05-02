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
      .map((el)=>(
        <User>
          <Avatar src={el.user.avatar}/>
          <Nickname>{el.user.username}{el.isAdmin && <StarIcon/>}</Nickname>
        </User>
      ))
     }
   </Table>
   </>
  );
}



