import LockIcon from '@material-ui/icons/Lock';
import Tooltip from '@material-ui/core/Tooltip';

const PasswordIcon  = (props) => {
  return (
    <Tooltip title="Delete">
      <LockIcon/>
    </Tooltip>
  )
}

export default PasswordIcon;