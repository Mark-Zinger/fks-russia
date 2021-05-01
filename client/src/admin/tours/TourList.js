import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  SelectField,
  EmailField,
  BooleanField,
  NumberField,
  DateField,
  EditButton,
} from "react-admin";
import ImageField from '../components/ImageField'
import RoleChoises from './RoleChoices.json'
import ConfirmChoices from './ConfirmChoices'

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ImageField classname="ra__image-field" label="Изображение" source="backgroundURL" />
      <TextField label="id_game" source="id_game" />
      <TextField label="Имя турнира" source="name" />
      <DateField label="Дата начала" source="dateBegin" />
      <NumberField label="Призовой фонд" source="fond"/>
      <EditButton label="Изменить"/>
    </Datagrid>
  </List>
);




export default UserList;
