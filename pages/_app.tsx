import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import apolloClient from '../graphql/apollo-client';

import '../styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
