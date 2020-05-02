import hash from "object-hash";
import * as myClippings from "./My Clippings.txt";
import { Book, BookHighlight } from "../types";

export type BooksIndex = {
  [title: string]: BookHighlight[];
};

const parseHighlight = (text: string): BookHighlight | null => {
  const lines = text.trim().split("\n");
  const title = lines[0].trim();
  const content = lines.slice(2) && lines.slice(2).join("\n").trim();

  if (title.length === 0) {
    return null;
  }

  return {
    id: hash({ title, text }),
    title: title,
    text: content,
  };
};

const groupHighlights = (highlights: BookHighlight[]): Book[] => {
  const grouped: BooksIndex = highlights.reduce(
    (index: BooksIndex, highlight: BookHighlight) => {
      index[highlight.title] = (index[highlight.title] || []).concat(highlight);

      return index;
    },
    {}
  );

  return Object.entries(grouped).map(
    ([title, highlights]: [string, BookHighlight[]]) => {
      return {
        title: title,
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
