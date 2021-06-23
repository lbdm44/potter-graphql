import { ApolloServer, IResolvers } from 'apollo-server';
import { typeDefs } from './type-defs';
import { books, characters } from './resolvers';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers: IResolvers = {
  Book: books.Book,
  Query: {
    books: books.books,
    characters,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
