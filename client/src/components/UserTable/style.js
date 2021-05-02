import styled  from 'styled-components';
import Paper from '../Paper'

export const Table = styled(Paper)`
  width: 100%;
  padding: 20px;
  min-height: 100px;
  margin-bottom: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const User = styled(Paper)`
  display: flex;
  height: 80px;
  padding: 20px;
  width: 49%;
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
  margin-right: 20px;
  height: 60px;

`
export const Nickname = styled.div`
  font-weight: bold;
  font-size: 26px;
  margin-left: 10px;
  color: grey;
`