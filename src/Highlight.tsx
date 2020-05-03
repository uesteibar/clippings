import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BookHighlight } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import CopyToClipboard from './CopyToClipboard'

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

const FooterAction = styled.span`
  flex: 1;
`
const FooterIcon = styled(FontAwesomeIcon)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  margin-right: 16px;
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
        <FooterAction title="open" >
          <Link to={`/${highlight.id}`}>
            <FooterIcon icon={faEye} />
          </Link>
          <CopyToClipboard text={`${process.env.PUBLIC_URL}/${highlight.id}`}>
            <FooterIcon title="share" icon={faShareAlt} />
          </CopyToClipboard>
        </FooterAction>
        <Book>{highlight.title}</Book>
      </Footer>
    </Container>
  );
}

export default Highlight;
