import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { client } from '../lib/graphcms';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
