import * as React from "react";
import {
  Show,
  Datagrid,
  TextField,
  SelectField,
  EmailField,
  SimpleShowLayout,
  EditButton,
} from "react-admin";
import ImageField from '../components/ImageField'
import RoleChoises from './RoleChoices.json'
import ConfirmChoices from './ConfirmChoices'

const UserList = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField label="Имя пользователя" source="username" />
      <EmailField source="email" />
      <TextField label="Полное Имя" source="fullname" />
      <ImageField classname="ra__image-field" label="Аватар" source="avatar" />
      <SelectField label="Роль" source="role" choices={RoleChoises} />
      <SelectField label="Подтверждён" source="confirm" choices={ConfirmChoices}/>
      <EditButton label="Изменить"/>
    </SimpleShowLayout>
  </Show>
);




export default UserList;
