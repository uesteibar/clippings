export type BookHighlight = {
  id: string,
  text: string;
  language: string;
  book: Book;
};

export type Book = {
  id: string;
  title: string;
  author?: string;
  highlights: BookHighlight[];
};
