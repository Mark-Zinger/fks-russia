import React, {useEffect} from 'react';
import Header from '../Header'
import ScrollContainer from '../ScrollContainer'
import { fetchUserBytoken } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import Icons from '../../icons'
import '../../Layout.scss';



function Layout({children}) {

  const dispatch = useDispatch();

  useEffect(()=>{
    const token = localStorage["token"];
    dispatch(fetchUserBytoken({token}));
  },[])

  return (
    <>
    <Icons/>
    <Header/>
    <ScrollContainer>
      <div className="Layout">
        {children}
      </div>
    </ScrollContainer>
    </>
  );
}

export default Layout;