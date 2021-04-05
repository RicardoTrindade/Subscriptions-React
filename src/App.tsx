import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import BatchButton from './BatchButton';
import CreatedUsers from './CreatedUsers';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BatchButton />
        <CreatedUsers />
      </div>
    </ApolloProvider>
  );
}

export default App;
