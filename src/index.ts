import { ApolloServer, gql, IResolvers } from 'apollo-server';
import { books, characters } from './resolvers';
// import { getCharacterFromId } from './resolvers/characters';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String
    author: String
    publishInfo: PublishInfo
    characters: [Character]
  }

  type PublishInfo {
    UK: String
    US: String
  }

  type Character {
    id: ID!
    name: String
    wand: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    characters: [Character]
    character(id: ID!): Character
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers: IResolvers = {
  Query: {
    books,
    characters,
  },
  // Book: {
  //   characters(parent) {
  //     const bookId = parent.id;
  //   }
  // }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
