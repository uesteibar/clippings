import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Highlight from './Highlight'
import { load } from './data/highlights'
import { BookHighlight } from './types'

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const sample = (highlights: BookHighlight[]) => highlights[Math.floor(Math.random() * highlights.length)]

const Main = () => {
  const [highlight, setHighlight] = useState<BookHighlight | null>(null)

  useEffect(() => {
    const fetch = async () => {
      const books = await load()

      setHighlight(sample(books.flatMap(({highlights}) => highlights)))
    }

    fetch()
  }, [])

  if (!highlight) return null

  return (
    <Container>
      <Highlight highlight={highlight} />
    </Container>
  );
}

export default Main;
