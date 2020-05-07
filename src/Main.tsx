import React from 'react';
import Heading from './Heading'
import Books from './Books'
import { load } from './data/highlights'

const Main = () => {
  const books = load()

  return (
    <div>
      <Heading />
      <Books books={books} />
    </div>
  );
}

export default Main;
