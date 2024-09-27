import { h } from 'preact';
import { hydrate, prerender as ssr } from 'preact-iso';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import MateriasForm from './components/Materias/materiasForm';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <MateriasForm />
      </div>
    </ApolloProvider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
