export type BookHighlight = {
  id: string,
  title: string;
  text: string;
};

export type Book = {
  title: string;
  highlights: BookHighlight[];
};
