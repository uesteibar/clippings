import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Highlights from './Highlights'
import { Book } from './types'
import { load } from "./data/highlights"

const Heading = styled.div`
  margin: 72px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const HeadingContent = styled.div`
  max-width: 800px;
`

export default () => {
  const [book, setBook] = useState<Book | undefined>(undefined)
  const { bookId } = useParams()

  useEffect(() => {
    setBook(load().find(({id}) => id === bookId))
  }, [bookId])

  if (!book?.highlights) return null

  return (
    <div>
      <Heading>
        <HeadingContent>
          <h1>{ book.title }</h1>
          <p>by <strong>{ book.author }</strong></p>
        </HeadingContent>
      </Heading>
      <Highlights highlights={book.highlights} />
    </div>
  );
}
