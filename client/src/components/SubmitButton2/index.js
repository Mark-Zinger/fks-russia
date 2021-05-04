import React,{useContext} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {FormContext} from '../Form'
import CircularProgress from '@material-ui/core/CircularProgress';

export default ({children, ...props}) => {

  const {isFetching=false} = useContext(FormContext);

  return (
      <SubmitButton 
        component="label" 
        variant="contained" 
        color="primary"
        {...props}
      >
        {isFetching ? <CircularProgress size={25} color="white"/> : <>{children}</>}
        <input style={{display:'none'}} type="submit" value="Send Request"/>
      </SubmitButton>
  )
}

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 0 auto;
`
