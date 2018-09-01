import React from 'react';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Main from '../Main';
import Home from '../Home';

const client = new ApolloClient({
  uri: 'https://sauna-graphql.herokuapp.com/'
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Route exact path="/" component={Main}/>
          <Route path="/home" component={Home}/>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
