import React from 'react';
import styled from 'styled-components';

class Contents extends React.Component {
  render() {
    const { children, className, ...props } = this.props;
    return (
      <Wrapper className={className} {...props} >
        {children}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5.6rem;
`;

export default Contents;
