import hash from "object-hash";
import * as myClippings from "./My Clippings.txt";
import { Book, BookHighlight } from "../types";

export type BooksIndex = {
  [title: string]: BookHighlight[];
};

const titleAndAuthor = (title: string): [string, string] => {
  const authorParts = title.match(/\(([^)]+)\)+$/) || [];
  const author = authorParts[1];
  if (author) title = title.replace(authorParts[0], "");

  return [title, author];
};

const parseHighlight = (text: string): BookHighlight | null => {
  const lines = text.trim().split("\n");
  const [title, author] = titleAndAuthor(lines[0].trim());
  if (title.length === 0) return null;

  const page = parseInt((lines[1].match(/page \d+/g) || [""])[0].split(" ")[0]);
  const content = lines.slice(2) && lines.slice(2).join("\n").trim();

  return {
    id: hash({ title, text }),
    book: { title, author, highlights: [] },
    text: content,
    page: page,
  };
};

const groupHighlights = (highlights: BookHighlight[]): Book[] => {
  const grouped: BooksIndex = highlights.reduce(
    (index: BooksIndex, highlight: BookHighlight) => {
      index[highlight.book.title] = (index[highlight.book.title] || []).concat(
        highlight
      );

      return index;
    },
    {}
  );

  return Object.entries(grouped).map(
    ([title, highlights]: [string, BookHighlight[]]) => {
      return {
        title: title,
        author: highlights[0].book.author,
        highlights: highlights,
      };
    }
  );
};

const parse = (text: string): Book[] => {
  var chunks = text.split("==========");
  var highlights = chunks
    .map(parseHighlight)
    .filter((h): h is BookHighlight => !!h);

  return groupHighlights(highlights);
};

export const load = async (): Promise<Book[]> => {
  const unknown = myClippings as unknown;
  const clippingsPath = unknown as RequestInfo;
  const raw = await fetch(clippingsPath);
  const text = await raw.text();

  return parse(text);
};
