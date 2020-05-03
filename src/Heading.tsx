import React from 'react'
import styled from 'styled-components'

const color = "#1b1b1b"

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  background: ${color};
  color: #efefef;
  height: 60vh;
`

const Container = styled.div`
  max-width: 800px;
  margin: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const Title = styled.h1`
  font-size: 72px;
  font-weight: normal;
`

const SubTitle = styled.h2`
  font-size: 24px;
  text-align: justify;
  font-weight: normal;

  @media all and (max-width: 800px) {
    font-size: 20px;
  }
`

const Heading = () => (
  <Background>
    <Container>
      <Title>
        <span role="img" aria-label="book">&nbsp;📖</span>
      </Title>
      <SubTitle>
        This is where I store the things I highlight when reading on my Kindle.
        Some of it will be in Spanish, some in English, and you might even encounter some Basque.
      </SubTitle>
    </Container>
  </Background>
)

export default Heading
