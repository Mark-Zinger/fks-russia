import React,{createRef, useState} from 'react';
import Input from '../Input';

export default (props) => {
  const {
    onChange=null,
    ...ownProps
  } = props;
  const [validate, setValidete] = useState(false);

  const onChangeHandler = (e) => {

    const passInputValue = passwordInputRef.current.value; 
    const repeatInputVAlue = repeatPasswordRef.current.value;
    const lenght = passInputValue.lenght;
    

    if(onChange && validate) onChange(e);
  }


  const passwordInputRef = createRef();
  const repeatPasswordRef = createRef();

  return (
    <>
    <Input 
      ref={passwordInputRef}
      className="input__password-validation"
      onChange={onChangeHandler}
      placeholder={"Придумайте пароль"} 
      name="password" 
      type="password" 
      {...ownProps}
    >
      <div className="input__password-validation__strong-progress"></div>
    </Input>
    <Input 
      ref={repeatPasswordRef}
      onChange={onChangeHandler} 
      placeholder={"Повторите пароль"} 
      name="password" 
      type="password" 
      onChange={onChangeHandler}
      {...ownProps}
    >
    </Input>
    </>
  )
}
