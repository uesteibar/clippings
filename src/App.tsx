import React, { useEffect, useState } from 'react';
import Highlight from './Highlight'
import { load } from './data/highlights'
import { Book } from './types'

function App() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetch = async () => {
      const books = await load()

      setBooks(books)
    }

    fetch()
  }, [])

  return (
    <div>
      {books.flatMap(({highlights}, i) => highlights.map((h, j) => <Highlight key={`${i}-${j}`} highlight={h} />))}
    </div>
  );
}

export default App;
