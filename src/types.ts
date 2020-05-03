export type BookHighlight = {
  id: string,
  text: string;
  page?: number;
  book: Book;
};

export type Book = {
  title: string;
  author: string;
  highlights: BookHighlight[];
};
