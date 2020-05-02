export type BookHighlight = {
  title: string;
  metadata: string;
  text: string;
};

export type Book = {
  title: string;
  highlights: BookHighlight[];
};
