import { createGlobalStyle } from 'styled-components'
import variables from '../../style/variables';
import colors from '../../style/colors';
import breakpoints from '../../style/breakpoints';
import fonts from '../../style/fonts';
import typography from '../../style/typography';


export const theme: object = {
  variables,
  colors,
  breakpoints,
  typography
}

export const GlobalStyle = createGlobalStyle`
  ${fonts()}

  * {
      box-sizing: border-box;
  }

  
  ::-webkit-scrollbar {
      width: 0;
      background: transparent;
  }

  html {
      font-family: ${variables.fonts.mont};
      -ms-overflow-style: none;
      scrollbar-width: none;
  }

  body {
		padding: 0;
		margin: 0;
		color: white;
		background-color: ${colors.primaryViolet};
		font-family: 'Oswald', sans-serif;
  }

  h1, h2, h3, h4, h5, span, a {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      text-transform: inherit;
      text-decoration: inherit;
      margin: 0;
  }

  a {
      text-decoration: none;
      color: inherit;
  }
`

