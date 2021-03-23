import React from 'react';
import Header from '../Header'
import MainSlider from '../MainSlider'
import ScrollContainer from '../ScrollContainer'
import RecommendationList from '../RecommendationList';
import '../../Layout.scss';



function Layout({children}) {
  return (
    <>
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
