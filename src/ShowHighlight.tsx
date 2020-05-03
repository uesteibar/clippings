import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Highlight from './Highlight'
import { getHighlight } from './data/highlights'
import { BookHighlight } from './types'

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ShowHighlight = () => {
  const [highlight, setHighlight] = useState<BookHighlight | undefined>(undefined)
  const { highlightId } = useParams()

  useEffect(() => { setHighlight(getHighlight(highlightId)) }, [highlightId])

  if (!highlight) return null

  return (
    <Container>
      <Highlight highlight={highlight} />
    </Container>
  );
}

export default ShowHighlight;
