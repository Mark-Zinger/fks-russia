import React from 'react'
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';

export default (params) => {
  
  return (
    <Item>
      <Image
        image="/resources/images/background/csgo_5.jpg"
        title="Paella dish"
      />
      123
    </Item>
  )
}

const Item = styled(Paper)`
  display: flex;
  height: 80px;
  overflow: hidden;
`
const Image = styled(CardMedia)`
  height: 100%;
  width: 140px;
`
