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

const Highlights = ({highlights}: {highlights: BookHighlight[]}) => {
  console.log(process.env.PUBLIC_URL)

  return (
    <Container>
      {highlights.map((h, j) => <Highlight key={`${h.title}-${j}`} highlight={h} />)}
    </Container>
  );
}

export default Highlights;
