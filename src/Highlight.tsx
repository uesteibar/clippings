import React from 'react';
import styled from 'styled-components'
import { BookHighlight } from './types'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  max-width: 800px;
`;

const Quote = styled.p`
  font-size: 20px;
  font-style: italic;
  text-align: justify;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Share = styled.a`
  text-decoration: none;
  flex: 1;
`;

const Book = styled.div`
  font-size: 14px;
  text-align: right;
  flex: 1;
`;

const Highlight = ({highlight}: {highlight: BookHighlight}) => {
  console.log(highlight.text)
  return (
    <Container id={highlight.id}>
      <Quote>{highlight.text}</Quote>
      <Footer>
        <Share href={`#${highlight.id}`}>Share</Share>
        <Book>{highlight.title}</Book>
      </Footer>
    </Container>
  );
}

export default Highlight;
