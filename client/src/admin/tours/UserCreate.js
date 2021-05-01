import * as React from "react";
import {
    Create,
    SimpleForm,
    SelectInput,
    TextInput,
    BooleanInput,
    ImageInput,
    ImageField,
    useNotify, useRefresh, useRedirect
} from 'react-admin';
import RoleChoises from './RoleChoices.json'
import ConfirmChoices from './ConfirmChoices.json'

export default props => {
  
  return <Create
    {...props}
  >
    <SimpleForm>
      <TextInput label="Имя пользователя" source="username" />
      <TextInput source="email" type="email" />
      <TextInput label="Полное Имя" source="fullname" />
      <ImageInput source="avatar" label="Аватар" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <SelectInput label="Роль" source="role" choices={RoleChoises} />
      <SelectInput label="Статус пользователя" source="confirm" choices={ConfirmChoices} />
    </SimpleForm>
  </Create>
};