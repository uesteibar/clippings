import React from 'react'
import styled from 'styled-components'
import { Book } from './types'
import { Link } from 'react-router-dom'

const BookTitle = styled(Link)`
  font-size: 24px;
  color: #3f3f3f;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 4px;

  &:hover {
    text-decoration: underline;
  }
`

const BookItem = styled(({book, className}: {book: Book, className?: string}) => (
  <div className={className}>
    <BookTitle to={`/book/${book.id}`}>
      {book.title}
    </BookTitle>
    {
      book.author
      ? <span>by {book.author}</span>
      : <span>author unknown</span>
    }
  </div>
))`
  padding: 32px 0;
  border-bottom: 1px solid #3f3f3f;
  display: flex;
  flex-direction: column;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  padding: 24px;
  max-width: 800px;

  @media all and (max-width: 800px) {
    max-width: 90%;
    overflow: scroll;
  }
`;

export default ({books, className}: {books: Book[], className?: string}) => {
  console.log(books)
  return (
    <Flex>
      <Container className={className}>
        { books.map(book => <BookItem key={book.id} book={book} />) }
      </Container>
    </Flex>
  )
}
