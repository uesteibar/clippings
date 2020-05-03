import books from "./highlights.json";
import { Book, BookHighlight } from "../types";

export const load = (): Book[] => books;
export const getHighlights = (): BookHighlight[] =>
  books.flatMap(({ highlights }) => highlights);
export const getHighlight = (id: string): BookHighlight | undefined =>
  getHighlights().find((h) => h.id === id);
