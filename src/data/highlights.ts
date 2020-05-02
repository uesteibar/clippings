import hash from "object-hash";
import * as myClippings from "./My Clippings.txt";
import { Book, BookHighlight } from "../types";

export type BooksIndex = {
  [title: string]: BookHighlight[];
};

const parseHighlight = (text: string): BookHighlight | null => {
  const lines = text.trim().split("\n");
  const title = lines[0].trim();
  const rest = lines.slice(2) && lines.slice(2).join("\n").trim();

  if (title.length === 0) {
    return null;
  }

  return {
    id: hash({ title, text }),
    title: title,
    text: rest,
  };
};

const groupHighlights = (items: BookHighlight[]): Book[] => {
  var grouped: BooksIndex = {};

  items.forEach(function (item) {
    var title = item.title;
    var titleHighlights: BookHighlight[];

    if (grouped[title] === undefined) {
      titleHighlights = [];
      grouped[title] = titleHighlights;
    } else {
      titleHighlights = grouped[title];
    }

    titleHighlights.push(item);
  });

  var collection: Book[] = [];
  for (var title in grouped) {
    var highlights = grouped[title];
    collection.push({
      title: title,
      highlights: highlights,
    });
  }

  return collection;
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
