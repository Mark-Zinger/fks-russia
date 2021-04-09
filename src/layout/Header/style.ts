import styled from "styled-components";
import { cols } from '../../style/mixins';
import colors from '../../style/colors';



export const Header = styled.header`
  height: 72px;
  width: 100vw;
  background: rgba(49,53,71,.8);
  position: fixed;
  left: 0; top: 0;
  box-sizing: 0 2px 12px 0 rgb(0 0 0 / 31%), inset 0 -1px 0 0 hsl(0deg 0% 100% / 1);
  border-bottom: 1px solid rgba(255,255,255,0.3);
  z-index: 20;
`

export const Wrapper = styled.div`
  height: 100%;
  width: ${cols(22)};
  margin: 0 auto;
  display: flex;
  align-items: center;
` 

export const Logo = styled.a`
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${cols(5)};
  text-decoration: none;
  transition: background .3s ease;
  &:hover {
    /* background: rgba(${colors.primaryBlue}, 0.5); */
    background-color: ${colors.primaryBlueOpacity};
  }
`
export const Menu = styled.div`
  height: 100%;
  width: ${cols(13)};
  display: flex;
  align-items: center;
  justify-content: center;

    a {
      display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100%;
    font-weight: 500;
    padding: 0 20px;
    margin-right: 20px;
    text-decoration: none;
    transition: background .3s ease;

    &:hover {
        background: ${colors.darkGrey};
    }
  }
`

export const User = styled.div`
  position: relative;
  cursor: pointer;
  transition: background .3s ease;
  &:hover {
      background: ${colors.darkGrey};
  }
`