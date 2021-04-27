import React,{createContext, useContext, useEffect, useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { createPortal } from 'react-dom';

export const AlertContext = createContext();

const Alert = ({ level, messege, hash}) => {

  const [isOpen, setIsOpen] = useState(false);
  const {clearAlert} = useContext(AlertContext)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    
    setIsOpen(false);
  };

  useEffect(()=> {

    handleClose();
    setTimeout(()=> {
      if(messege) setIsOpen(true)
    },300)

  },[hash])

  return createPortal(
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlertInst onClose={handleClose} severity={level}>
        {messege}
      </MuiAlertInst>
    </Snackbar>
  , document.getElementById('root'))
}

function MuiAlertInst(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default Alert
