import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BookHighlight } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  max-width: 800px;
`;

const Quote = styled.p`
  font-size: 24px;
  font-style: italic;
  text-align: justify;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  flex: 1;
  color: black;
`

const Book = styled.div`
  font-size: 16px;
  text-align: right;
  flex: 2;
`;

const Highlight = ({highlight, className}: {highlight: BookHighlight, className?: string}) => {
  console.log(highlight.text)
  return (
    <Container id={highlight.id} className={className}>
      <Quote>{highlight.text}</Quote>
      <Footer>
        <FooterLink title="open" to={`/${highlight.id}`}><FontAwesomeIcon icon={faEye} /></FooterLink>
        <Book>{highlight.title}</Book>
      </Footer>
    </Container>
  );
}

export default Highlight;
