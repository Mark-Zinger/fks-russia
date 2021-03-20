import React from 'react';
import Header from './components/Header'
import MainSlider from './components/MainSlider'
import ScrollContainer from './components/ScrollContainer'
import './App.scss';

function App() {
  return (
    <>
    <Header/>

    <ScrollContainer>
      <div className="App">
        <MainSlider/>
      </div>
    </ScrollContainer>
    </>
  );
}

export default App;
