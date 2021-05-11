import React, { useState,createContext, useCallback } from "react";
import encodeURIHelper from '../../common/helpers/encodeURIHelper';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/userSlice';
import axios from "axios";
import { useEffect } from "react";
import styled from 'styled-components';

export const FormContext = createContext();

export default (props) => {
  const { 
    children, 
    action = "/", 
    method = "post",
    onSuccess,
    onError
  } = props;
  const [formData, setFormData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const {token} = useSelector(userSelector);

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    setIsFetching(true)

    setError(false)
    axios({
      method,
      url: action,
      data:  encodeURIHelper({...formData, token}),
    })
    .then( ({data}) => {
      onSuccess && onSuccess(data)
    })
    .catch( error => {
      window.error = error
      onError && onError(error.response.data);
      if (error.response.data instanceof Array) {
        setError(error.response.data[0].msg)
      } else {
        setError(error.response.data.messege)
      }
      console.error(error)
    })
    .finally(()=> setIsFetching(false));
  }, [formData]);

  useEffect(()=>console.log(formData),[formData]);
  useEffect(()=>console.log({error}),[error]);


  const setValue = useCallback((e) => {
    const {name, value} = e.target;
    const newFormData = {...formData};
    newFormData[name] = value;
    setFormData(newFormData);
  },[formData])

  return (
    <FormContext.Provider value={{setValue, isFetching}}>
      <form onSubmit={onSubmit}>
        {error && <ErrorMessege>{error}</ErrorMessege>}
        {children}
      </form>
    </FormContext.Provider>
  );
};


const ErrorMessege = styled.h3`
  margin: 0;
  margin-bottom: -30px;
  text-align: center;
  color: red;
  position: relative;
  top: -40px;
`