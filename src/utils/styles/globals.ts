import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.black};
    font: ${props => props.theme.sizes.regular} ${props =>
  props.theme.fonts.text3} ${props => props.theme.families.primary};
  }

  a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`
