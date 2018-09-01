import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/Navbar/index';
import Contents from '../../components/Contents/index';
import Post from '../../components/Post/index';

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Contents>
          <Post />
        </Contents>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

export default Home;
