import books from '../data/books.json';
import { Character } from './characters';

interface Book {
  title: string;
  author: string;
  publishInfo: {
    UK: string;
    US: string;
  };
  characters: number[];
}

function resolveBooks(): Book[] {
  return books;
}

const bookResolvers = {
  characters(): Character[] {
    return [];
  },
};

export default {
  Book: bookResolvers,
  books: resolveBooks,
};
