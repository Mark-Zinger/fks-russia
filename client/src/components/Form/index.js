import React, { useState,createContext, useCallback } from "react";
import encodeURIHelper from '../../common/helpers/encodeURIHelper'
import axios from "axios";
import { useEffect } from "react";
import styled from 'styled-components'

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
  const [error, setError] = useState("Ошибка");
 
  const onSubmit = useCallback((e) => {
    e.preventDefault()
    setIsFetching(true)
    axios({
      method,
      url: action,
      data:  encodeURIHelper(formData),
    })
    .then( ({data}) => onSuccess && onSuccess(data))
    .catch( error => {
      onError && onError(error);
      console.error(error)
    })
    .finally(()=> setIsFetching(false));
  }, [formData]);

  useEffect(()=>console.log(formData),[formData])

  const setValue = useCallback((e) => {
    const newFormData = {...formData};
    newFormData[e.target.name] = e.target.value;
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
  margin-bottom: -20px;
  text-align: center;
  color: red;
  position: relative;
  top: -25px;
`