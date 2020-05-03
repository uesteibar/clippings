import React, { useEffect, useState } from 'react';
import Heading from './Heading'
import Highlights from './Highlights'
import { getHighlights } from './data/highlights'
import { BookHighlight } from './types'

const Main = () => {
  const [highlights, setHighlights] = useState<BookHighlight[]>([])

  useEffect(() => { setHighlights(getHighlights()) }, [])

  return (
    <div>
      <Heading />
      <Highlights highlights={highlights} />
    </div>
  );
}

export default Main;
