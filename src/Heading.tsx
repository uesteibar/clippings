import React from 'react'
import styled from 'styled-components'
import BigLink from './BigLink'
import Shelf from './Shelf'

const color = "#1b1b1b"

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  background: ${color};
  color: #efefef;
  min-height: 60vh;
`

const Container = styled.div`
  max-width: 800px;
  margin: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const SubTitle = styled.h2`
  font-size: 24px;
  text-align: justify;
  font-weight: normal;

  @media all and (max-width: 800px) {
    font-size: 20px;
  }
`

const Random = styled(BigLink).attrs({
  to: "/random",
  type: "light"
})`
  margin: 16px 0;
`

const Heading = () => (
  <Background>
    <Container>
      <Shelf />
      <SubTitle>
        Most of the times, I read on my <strong>Kindle™</strong>, and <strong>I highlight a lot of stuff</strong>,
        so I figured I could share them with you.
      </SubTitle>
      <SubTitle>
        Some of it will be in Spanish, some in English, and you might even encounter some Basque.
      </SubTitle>
      <Random>Click here to see a random highlight</Random>
      <SubTitle>
        Otherwise, keep scrolling down.
      </SubTitle>
    </Container>
  </Background>
)

export default Heading
