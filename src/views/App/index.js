import React from 'react';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Contents from '../../components/Contents';
import Post from '../../components/Post';

const client = new ApolloClient({
  uri: 'https://sauna-graphql.herokuapp.com/'
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Wrapper>
            <Navbar />
            <Contents>
              Hello
            </Contents>
          </Wrapper>
        </ApolloProvider>
      </Router>
    );
  }
}

const Wrapper = styled.div``;

export default App;
