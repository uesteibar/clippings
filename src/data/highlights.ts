import * as myClippings from "./My Clippings.txt";
import { Book, BookHighlight } from "../types";

export type BooksIndex = {
  [title: string]: BookHighlight[];
};

const parseHighlight = (text: string): BookHighlight | null => {
  var trimmed = text.trim();
  var lines = trimmed.split("\n");
  var title = lines[0].trim();
  var metadata = lines[1];
  var rest = lines.slice(2) && lines.slice(2).join("\n").trim();

  if (title.length === 0) {
    return null;
  }

  return {
    title: title,
    metadata: metadata,
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
