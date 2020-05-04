export type BookHighlight = {
  id: string,
  text: string;
  language: string;
  book: Book;
};

export type Book = {
  title: string;
  author?: string;
  highlights: BookHighlight[];
};
