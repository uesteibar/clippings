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

  @media all and (max-width: 800px) {
    max-width: 90%;
    overflow: scroll;
  }
`;

const Quote = styled.p`
  font-size: 24px;
  font-style: italic;
  text-align: justify;
  margin-bottom: 24px;

  @media all and (max-width: 800px) {
    font-size: 20px;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #b2b2b2;
  padding-top: 16px;
`;

const FooterAction = styled.span`
  flex: 1;
`
const FooterIcon = styled(FontAwesomeIcon)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  margin-right: 32px;
  color: #3f3f3f;
`

const BookTitle = styled.span`
  font-size: 18px;
  margin-bottom: 8px;
`;

const BookAuthor = styled.span`
  font-size: 13px;
  font-weight: bold;
`

const Book = styled(({book, className}) => (
  <div className={className}>
    <BookTitle>{book.title}</BookTitle>
    { book.author && <div>by <BookAuthor>{book.author}</BookAuthor></div> }
  </div>
))`
  text-align: right;
  flex: 2;
  display: flex;
  flex-direction: column;
  color: #3f3f3f;
`

const Highlight = ({highlight, className}: {highlight: BookHighlight, className?: string}) => {
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
        <Book book={highlight.book} />
      </Footer>
    </Container>
  );
}

export default Highlight;
