import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Contents from '../../components/Contents';
import Post from '../../components/Post';
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Contents>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Contents>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

export default App;