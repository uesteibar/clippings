import React, { useEffect, useState } from 'react';
import Heading from './Heading'
import Highlights from './Highlights'
import { load } from './data/highlights'
import { Book } from './types'

const goToAnchor = () => {
  const id = window.location.hash.substr(1)
  if (id) {
    const anchor = document.getElementById(id);
    if(anchor) anchor.scrollIntoView();
  }
}

const App = () => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetch = async () => {
      const books = await load()

      setBooks(books)
    }

    fetch()
  }, [])

  useEffect(goToAnchor, [books])

  return (
    <div>
      <Heading />
      <Highlights books={books} />
    </div>
  );
}

export default App;
