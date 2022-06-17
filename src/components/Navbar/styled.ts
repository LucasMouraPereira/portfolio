import styled from 'styled-components'

export const Nav = styled.nav`
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  transition: all 0.3s ease;
`

export const Logo = styled.div`
  a {
    color: ${props => props.theme.colors.orange};
    font: ${props => props.theme.sizes.bold} ${props =>
      props.theme.fonts.text5} ${props => props.theme.families.primary};
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 26px;
`

export const ItemMenu = styled.div`
  li {
    a {
      color: ${props => props.theme.colors.white};
    font: ${props => props.theme.sizes.bold} ${props =>
      props.theme.fonts.text3} ${props => props.theme.families.primary};
    }
  }
`
