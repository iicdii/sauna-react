import React from 'react';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Navbar from '../../components/Navbar';
import Contents from '../../components/Contents';

const client = new ApolloClient({
  uri: 'https://sauna-graphql.herokuapp.com/'
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Wrapper>
          <Navbar />
          <Contents>
            Hello
          </Contents>
        </Wrapper>
      </ApolloProvider>
    );
  }
}

const Wrapper = styled.div``;

export default App;
