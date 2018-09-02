import React from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Logo from '../../svg/Logo.svg';

const ADD_USER = gql`
  mutation AddUser(
    $facebookId: ID!
    $username: String!
    $profileUrl: String!
  ) {
    addUser(
      facebookId: $facebookId,
      username: $username,
      profileUrl: $profileUrl
    ) {
      id
      username
    }
  }
`;

class Main extends React.Component {
  responseFacebook = async (response, addUser) => {
    const { id: facebookId, name: username, picture } = response;

    try {
      await addUser({
        variables: {
          facebookId,
          username,
          profileUrl: picture.data.url,
        }
      });
    } catch (e) {
      alert(e);
    }

    this.props.history.push({
      pathname: '/home',
      state: { facebookId }
    });
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <LogoWrapper>
            <LogoImg src={Logo} alt="" />
          </LogoWrapper>
          <Mutation mutation={ADD_USER}>
            {(addUser, { data }) => (
              <Button>
                <FacebookLogin
                  appId="314252309332946"
                  autoLoad={true}
                  fields="name,email,picture"
                  // onClick={this.handleClick}
                  callback={response => this.responseFacebook(response, addUser)}
                />
              </Button>
            )}
          </Mutation>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-image: linear-gradient(#3FB34F, #146920);
  height: 100vh;
`;

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  padding-top: 13.5rem;
  padding-bottom: 3rem;
`;

const Button = styled.div`
  text-align: center;
  margin: 50px auto 0 auto;
`;

const LogoWrapper = styled.div`
  text-align: center;
`;

const LogoImg = styled.img`
  width: 50%;
  height: auto;
`;

export default Main;
