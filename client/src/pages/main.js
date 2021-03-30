import React from 'react';
import MainSlider from '../components/MainSlider';
import RecommendationList from '../components/RecommendationList';
import PageContainer from '../components/PageContainer'


export default (params) => {
    
  return (
    <PageContainer>
      <MainSlider/>
      <RecommendationList/>
    </PageContainer>
  )
}


