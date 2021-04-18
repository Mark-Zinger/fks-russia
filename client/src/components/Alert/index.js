import React,{createContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { createPortal } from 'react-dom';

export const AlertContext = createContext();

const Alert = ({isOpen,handleClose, level, messege}) => {
  

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
