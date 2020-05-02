import React, { useEffect, useState } from 'react';
import Heading from './Heading'
import Highlights from './Highlights'
import { load } from './data/highlights'
import { BookHighlight } from './types'

const Main = () => {
  const [highlights, setHighlights] = useState<BookHighlight[]>([])

  useEffect(() => {
    const fetch = async () => {
      const books = await load()

      setHighlights(books.flatMap(({highlights}) => highlights))
    }

    fetch()
  }, [])

  return (
    <div>
      <Heading />
      <Highlights highlights={highlights} />
    </div>
  );
}

export default Main;
