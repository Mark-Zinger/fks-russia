import React from 'react';
import Header from '../Header'
import MainSlider from '../MainSlider'
import ScrollContainer from '../ScrollContainer'
import RecommendationList from '../RecommendationList';
import '../../App.scss';



function Layout() {
  return (
    <>
    <Header/>

    <ScrollContainer>
      <div className="App">
        <MainSlider/>
        <RecommendationList/>
      </div>
    </ScrollContainer>
    </>
  );
}

export default Layout;
