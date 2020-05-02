import React from 'react';
import styled from 'styled-components'
import Highlight from './Highlight'
import { Book } from './types'

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Highlights = ({books}: {books: Book[]}) => {
  console.log(process.env.PUBLIC_URL)

  return (
    <Container>
      {books.flatMap(({highlights}, i) => highlights.map((h, j) => <Highlight key={`${i}-${j}`} highlight={h} />))}
    </Container>
  );
}

export default Highlights;
