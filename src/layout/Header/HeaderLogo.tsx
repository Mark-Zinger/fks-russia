import styled from "styled-components"
import {Logo} from './style'
import Link from 'next/link'

const Container = styled.div`
    display: flex;
    align-items: center;
    svg {
        height: 30px;
        margin-right: 10px;
    }
`
const Title = styled.div`
  white-space: nowrap;
  font-size: 20px;
`

const HeaderLogo = () => {
    return (
      <Link href='/'>
        <Logo href='/'>
          <Container>
            <svg
            viewBox="0 0 289 94" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M110.5 71C110.5 71 107.65 81.7235 106.5 81.5C52.5 71 46.5 56 46.5 56C67.5 66.5 106.5 71.6544 110.5 71Z" fill="white"/>
              <path d="M119.5 49L114 63C46.5 56 24.5 30 24.5 30C24.5 30 70.5 49 119.5 49Z" fill="white"/>
              <path d="M129.5 24.5L122.5 41C24.5 35 0.5 0 0.5 0C44 15.5 76 24.5 129.5 24.5Z" fill="white"/>
              <path d="M167.5 41L160 24.5C240 22.5 289 1 289 1C289 1 260.5 37 167.5 41Z" fill="white"/>
              <path d="M176 63L170.5 49C217 49 266.5 30 266.5 30C266.5 30 252 53 176 63Z" fill="white"/>
              <path d="M183 81.5L179.5 71C203 71 244.5 56 244.5 56C244.5 56 231 73.5 183 81.5Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M110.5 94L145 9.5L179.5 94L145 77.5L110.5 94ZM145 31L128 75L145 65L162 75L145 31Z" fill="white"/>
            </svg>
            <Title>ФКС РОССИИ</Title>
          </Container>
        </Logo>
      </Link>
    )
}

export default HeaderLogo;