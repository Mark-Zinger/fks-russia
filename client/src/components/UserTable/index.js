import React, { useEffect, useState } from 'react';
import { Table, User, Avatar} from './style'

export default function UserTable({users=[]}) {

  const [rows, setRows] = useState([]);

  console.log(users)

  return (
   <>
   <h3>Состав</h3>
   <Table>
      <User>
        <Avatar/>
      </User>
   </Table>
   </>
  );
}



