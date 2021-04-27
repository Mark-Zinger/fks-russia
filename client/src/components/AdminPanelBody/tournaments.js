import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';


export default () => {



  return (
    <>
    <Tour>
      <Image
        image="/resources/images/background/csgo_5.jpg"
        title="Paella dish"
      />
      123
    </Tour>
    </>
  )
}

const Tour = styled(Card)`
  display: flex;
  min-height: 80px;
`
const Image = styled(CardMedia)`
  height: 100%;
`
