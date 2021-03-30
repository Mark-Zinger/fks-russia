import React from 'react';
import MainSlider from '../components/MainSlider';
import RecommendationList from '../components/RecommendationList';
import PageContainer from '../components/PageContainer'


export default (params) => {
    
  return (
    <PageContainer className="main_page">
      <MainSlider/>
      <RecommendationList/>
    </PageContainer>
  )
}


