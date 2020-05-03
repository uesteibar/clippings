import React from 'react';
import styled from 'styled-components'
import Highlight from './Highlight'
import { BookHighlight } from './types'

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HighlightWrapper = styled(Highlight)`
  margin: 10vh 0;
`

const Highlights = ({highlights}: {highlights: BookHighlight[]}) => {
  return (
    <Container>
      {highlights.map((h, j) => <HighlightWrapper key={`${h.book.title}-${j}`} highlight={h} />)}
    </Container>
  );
}

export default Highlights;
