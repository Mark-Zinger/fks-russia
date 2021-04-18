import React, { useState } from 'react';
import Modal from '../Modal';
import Input from '../Input';
import { Error } from '../AuthBar/AuthModalLayout';
import SubmitButton from '../SubmitButton'
import Snackbar from '@material-ui/core/Snackbar';



const CreateTeamModal = (props) => {
  
  // const {showModal, closeModal} = props;
  const [errorMessege, setErrorMessege] = useState('')
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
    <Modal {...props}>
      <div className="modal__title">
        Создать команду
        <Error messege={errorMessege}/>
      </div>
      <form>
          <Input 
            placeholder={"Имя команды"} 
            name="name" 
          />
          <Input 
            placeholder={"Пароль (Необязательно)"} 
            name="password"
            type="password"
          />
          <SubmitButton
            onClick={() => setOpen(true)}
          >Создать команду</SubmitButton>
          <button
          onClick={() => setOpen(true)}
          >test</button>
        </form>
    </Modal>

    </>
  )
}

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default CreateTeamModal;

