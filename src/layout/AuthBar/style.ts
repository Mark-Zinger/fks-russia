import styled from "styled-components";
import { cols } from '../../style/mixins'

export const Auth = styled.div`
  color: white;
  height: 100%;
  width: ${cols(4)};
  // margin-left: 1*$col-abs;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const AuthLink = styled.div`
  cursor: pointer;
  color: rgba($color: white, $alpha: .8);
  transition: color .3s ease;
  padding: 10px;
  &:hover {
      color: white;
  }
`

export const User = styled.div`
  color: white;
  height: 100%;
  width: ${cols(4)};
  // margin-left: 1*$col-abs;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Name = styled.div`
  margin-right: 10px;
`
export const Avatar = styled.div`
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`