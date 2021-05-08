import React, {useEffect, useState} from 'react';
import Header from '../Header'
import ScrollContainer from '../ScrollContainer'
import { fetchUserBytoken } from '../../features/userSlice';
import Alert, {AlertContext} from '../Alert';
import { useDispatch } from 'react-redux';
import Icons from '../../icons'
import '../../Layout.scss';



function Layout({children}) {

  const dispatch = useDispatch();

  const [alertProps, setAlert] = useState({
    level: false, 
    messege: null,
    hash: Math.random()
  })

  const createAlert = ({level='success', messege='Hello World'}) => setAlert({level, messege,  hash: Math.random()});
  const clearAlert = () => setAlert({level:'info', messege: false});
  window.createAlert = createAlert;
  window.setAlert = () => setAlert({level:'info', messege: false});

  useEffect(()=>{
    const token = localStorage["token"];
    dispatch(fetchUserBytoken({token}));
  },[])

  useEffect(()=>console.log(alertProps),[alertProps])

  return (
    <AlertContext.Provider value={{createAlert, clearAlert}}>
      <Icons/>
      <Header/>
      <ScrollContainer>
        <div className="Layout">
          {children}

        </div>
      </ScrollContainer>
      <Alert {...alertProps}/>
    </AlertContext.Provider>
  );
}

export default Layout;
