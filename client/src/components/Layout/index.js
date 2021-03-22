import React from 'react';
import Header from './components/Header'
import MainSlider from './components/MainSlider'
import ScrollContainer from './components/ScrollContainer'
import RecommendationList from './components/RecommendationList';
import './App.scss';

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
