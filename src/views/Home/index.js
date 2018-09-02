import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Navbar from '../../components/Navbar/index';
import Contents from '../../components/Contents/index';
import Post from '../../components/Post/index';

class Home extends React.Component {
  offset = 0;
  limit = 5;
  delay = false;

  componentDidMount() {
    window.onscroll = () => {
      const { data } = this.props;

      if (data.loading || this.delay) return;

      // Checks that the page has scrolled to the bottom
      if (
        (window.innerHeight + window.scrollY) >= document.body.offsetHeight
      ) {
        this.offset += 5;
        this.props.data.refetch({
          offset: this.offset,
          limit: this.limit,
        })
          .then(() => {
            this.delay = true;

            setTimeout(() => {
              this.delay = false;
            }, 2000);
          });
      }
    };
  }

  render() {
    const { loading, data } = this.props;

    if (loading) return <div />;

    return (
      <Wrapper>
        <Navbar />
        <Contents>
          {(data.posts || []).map(post =>
            <Post
              key={post.id}
              post={post}
            />
          )}
        </Contents>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: #FAFAFA;
  height: 100vh;
`;

export default graphql(gql`
  query Posts($offset: Int, $limit: Int) {
    posts(
      offset: $offset,
      limit: $limit
    ){
      id
      user {
        id
        username
        profileUrl
      }
      title
      likes
      content {
        photo
        description
      }
      createdAt
      updatedAt
    }
  }
`,
  {
    options(props) {
      return {
        variables: {
          offset: 0,
          limit: 5,
        },
        fetchPolicy: 'cache-and-network',
      };
    }
  }
)(Home);
