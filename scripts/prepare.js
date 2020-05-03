const hash = require('object-hash')
const fs = require('fs')

const titleAndAuthor = (title) => {
  const authorParts = title.match(/\(([^)]+)\)+$/) || [];
  const author = authorParts[1];
  if (author) title = title.replace(authorParts[0], "");

  return [title, author];
};

const parseHighlight = (text) => {
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

const groupHighlights = (highlights) => {
  const grouped = highlights.reduce(
    (index, highlight) => {
      index[highlight.book.title] = (index[highlight.book.title] || []).concat(
        highlight
      );

      return index;
    },
    {}
  );

  return Object.entries(grouped).map(
    ([title, highlights]) => {
      return {
        title: title,
        author: highlights[0].book.author,
        highlights: highlights,
      };
    }
  );
};

const parse = (text) => {
  var chunks = text.split("==========");
  var highlights = chunks
    .map(parseHighlight)
    .filter(h => !!h);

  return groupHighlights(highlights);
};


const raw = fs.readFileSync("./data/My Clippings.txt", "utf8")
const books = parse(raw)
fs.writeFileSync("./src/data/highlights.json", JSON.stringify(books), "utf8")
