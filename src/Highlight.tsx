import React from 'react';
import { BookHighlight } from './types'

const Highlight = ({highlight}: {highlight: BookHighlight}) => {
  return (
    <div>
      <p>{highlight.text}</p>
      <p>From: {highlight.title}</p>
    </div>
  );
}

export default Highlight;
