import styled from "styled-components";

export const defaultTheme = {
  colors: {
    primary: '#000000',
    accent: '#091254',
    secundary: '#FFFFFF',
    gray: '#8A8A8A',
    stroke: '#BDBDBD',
  },
  positions: {
    header: 1000,
    navbar: 900,
    controllers: 600,
    image: 500,
  }
}

export const Wrapper = styled.div`
  padding: 0 25px;
`

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secundaryDark};
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.paragraph};
  line-height: 22px;
`