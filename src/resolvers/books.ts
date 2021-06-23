import books from '../data/books.json';

interface Book {
  title: string;
  author: string;
  publishInfo: {
    UK: string;
    US: string;
  };
}

export default function resolveBooks(): Book[] {
  return books;
}
