import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Contents from '../../components/Contents';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Contents>
          Hello
        </Contents>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

export default App;