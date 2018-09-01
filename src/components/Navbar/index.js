import React from 'react';
import styled from 'styled-components';

class Navbar extends React.Component {
  render() {
    return (
      <Wrapper>Navbar</Wrapper>
    );
  }
}

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 5.6rem;
  background-color: #317e3d;
`;

export default Navbar;