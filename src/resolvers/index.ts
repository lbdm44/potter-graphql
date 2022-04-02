import { IResolvers } from '@graphql-tools/utils';

import books from './books';
import characters from './characters';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers: IResolvers = {
  Book: books.Book,
  Query: {
    books: books.books,
    characters,
  },
};
