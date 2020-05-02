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

  ::after {
    content: '';
    position: absolute;
    right: 0;
    left: -0%;
    top: 100%;
    z-index: 10;
    display: block;
    height: 65px;
    background-size: 65px 100%;
    background-image: linear-gradient(135deg, ${color} 25%, transparent 25%), linear-gradient(225deg, ${color} 25%, transparent 25%);
    background-position: 0 0;
  }
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
`

const SubTitle = styled.h2`
  font-size: 24px;
  text-align: justify;
`

const Heading = () => (
  <Background>
    <Container>
      <Title>
        <span role="img" aria-label="note">📝</span>
        <span role="img" aria-label="nerd face">&nbsp;🤓</span>
        <span role="img" aria-label="book">&nbsp;📖</span>
      </Title>
      <SubTitle>
        This is where I store the stuff I highlights when reading on my Kindle.
        Some of it will be in Spanish, some in English, and you might even encounter some Basque.
      </SubTitle>
    </Container>
  </Background>
)

export default Heading
