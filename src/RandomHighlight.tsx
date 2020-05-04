import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Highlight from './Highlight'
import { getHighlights } from './data/highlights'
import { BookHighlight } from './types'

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Refresh = styled.button.attrs({
  onClick: () => window.location.reload()
})`
  margin-bottom: 24px;
  user-select: none;
  cursor: pointer;
  color: #1b1b1b;
  background: none;
  transition: background 0.5s ease;
  text-decoration: none;
  font-size: 16px;
  border: 1px solid rgba(27, 27, 27, 0.5);
  border-radius: 5px;
  padding: 8px;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.5s ease;
  }
`

const sample = (highlights: BookHighlight[]) => highlights[Math.floor(Math.random() * highlights.length)]

const Main = () => {
  const [highlight, setHighlight] = useState<BookHighlight | null>(null)

  useEffect(() => { setHighlight(sample(getHighlights())) }, [])

  if (!highlight) return null

  return (
    <Container>
      <Highlight highlight={highlight} />
      <Refresh>
          Click here to see another random highlight
      </Refresh>
    </Container>
  );
}

export default Main;
