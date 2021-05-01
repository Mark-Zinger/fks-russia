import styled  from 'styled-components';
import Paper from '../Paper'

export const Table = styled(Paper)`
  width: 100%;
  padding: 20px;
  min-height: 100px;

  display: flex;
  flex-wrap: wrap;
`

export const User = styled(Paper)`
  display: flex;
  min-height: 100px;
  width: 400px;
  cursor: pointer;
  background: rgba(0,0,0,0);
  align-items: center;
  &:hover {
    background: rgba(255,255,255,0.9);
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
  overflow: hidden;
  height: 80%;
`
export const Nickname = styled.div`

`