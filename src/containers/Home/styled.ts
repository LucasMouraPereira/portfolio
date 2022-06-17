import styled from 'styled-components'

export const SectionHome = styled.section`
  display: flex;
  background: ${props => props.theme.colors.background};
  height: 100vh;
  color: ${props => props.theme.colors.white};
  min-height: 500px;
  background-size: cover;
  background-attachment: fixed;
`

export const WrapperHome = styled.div`
  width: 100%;
  display: flex;
  max-width: 1300px;
  padding: 0 80px;
  margin: auto;
`

export const ContentHome = styled.div`
  h1 {
    color: ${props => props.theme.colors.white};
    font: ${props => props.theme.sizes.bold} ${props => props.theme.fonts.text6}
      ${props => props.theme.families.primary};
  }
`

export const Career = styled.div`
  span {
    color: ${props => props.theme.colors.orange};
    font: ${props => props.theme.sizes.medium}
      ${props => props.theme.fonts.text5}
      ${props => props.theme.families.primary};
  }
`

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  margin-top: 16px;
  span {
    color: ${props => props.theme.colors.white};
    font: ${props => props.theme.sizes.regular}
      ${props => props.theme.fonts.text3}
      ${props => props.theme.families.primary};
  }
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  svg {
    width: 32px;
    margin-bottom: 10px;
    fill: ${props => props.theme.colors.white};

  }
`
