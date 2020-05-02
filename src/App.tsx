import React, { useEffect, useState } from 'react';
import Heading from './Heading'
import Highlights from './Highlights'
import { load } from './data/highlights'
import { BookHighlight } from './types'

const goToAnchor = () => {
  const id = window.location.hash.substr(1)
  if (id) {
    const anchor = document.getElementById(id);
    if(anchor) anchor.scrollIntoView();
  }
}

const App = () => {
  const [highlights, setHighlights] = useState<BookHighlight[]>([])

  useEffect(() => {
    const fetch = async () => {
      const books = await load()

      setHighlights(books.flatMap(({highlights}) => highlights))
    }

    fetch()
  }, [])

  useEffect(goToAnchor, [highlights])

  return (
    <div>
      <Heading />
      <Highlights highlights={highlights} />
    </div>
  );
}

export default App;
