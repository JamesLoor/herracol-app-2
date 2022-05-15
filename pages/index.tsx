import * as React from 'react'
import styled from 'styled-components'

// Components
import { Section } from '@components/common'

const HomeStyled = styled.div`
`

const Home: React.FC = () => {
  return (
    <HomeStyled>
      <Section className="hero">
        <h1>Hello</h1>
      </Section>
    </HomeStyled>
  )
}

export default Home