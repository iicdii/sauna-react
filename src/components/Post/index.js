import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router'
import Heart from '../../svg/Heart';
import Comment from '../../svg/Comment';

const LIKE_POST = gql`
  mutation LikePost(
    $postId: ID!
    $facebookId: ID!
  ) {
    likePost(
      postId: $postId,
      facebookId: $facebookId,
    ) {
      id
      likes
    }
  }
`;

class Post extends React.Component {
  render() {
    const { post } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const liked = this.props.post.likes
      .includes(this.props.location.state.facebookId);

    return (
      <Wrapper>
        <PostHeader>
          <Row>
            <Column span={0.1}>
              <ProfileWrapper>
                <ProfileImg profile={post.user.profileUrl} />
              </ProfileWrapper>
            </Column>
            <Column span={0.9}>
              <Username>{post.user.username}</Username>
            </Column>
          </Row>
        </PostHeader>
        <Gallery>
          <Slider {...settings}>
            {post.content.map((content, i) => {
              return (
                <div key={i}>
                  <Img photo={content.photo} />
                  <GalleryDes>
                    <div>{content.description}</div>
                  </GalleryDes>
                </div>
              );
            })}
          </Slider>
        </Gallery>
        <Contents>
          <Utils>
            <Mutation mutation={LIKE_POST}>
              {(likePost, { data }) => (
                <HeartButton
                  type="button"
                  onClick={async () => {
                    const { facebookId } = this.props.location.state;

                    try {
                      const result = await likePost({
                        variables: {
                          facebookId,
                          postId: post.id,
                        }
                      });
                    } catch (e) {
                      console.log('e', e);
                    }
                  }}
                >
                  <Heart
                    width="24px"
                    height="24px"
                    liked={`${liked}`}
                  />
                </HeartButton>
              )}
            </Mutation>
            <Comment width="24px" height="24px" style={{ marginLeft: '0.8rem'}} />
          </Utils>
          <Likes>좋아요 {post.likes.length}개</Likes>
          <Title>{post.title}</Title>
        </Contents>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  margin-bottom: 1.6rem;
`;

const ProfileWrapper = styled.div`
  padding-top: 0.8rem;
  padding-left: 1.6rem;
`;

const Username = styled.div`
  padding-left: 0.8rem;
  line-height: 50px;
`;

const ProfileImg = styled.div`
  background-image: url(${props => props.profile});
  background-size: 36px 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const PostHeader = styled.div`
  height: 5.2rem;
  background-color: #fff;
`;

const Gallery = styled.div`
  position: relative;
  img {
    display: block;
  }
`;

const Img = styled.div`
  background-image: url(${props => props.photo});
  background-size: 35.8rem 35.8rem;
  width: 35.8rem;
  height: 35.8rem;
`;

const GalleryDes = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgba(112, 112, 112, 0.5);
  width: 100%;
  /* height: 16rem; */
  height: 8rem;
  font-size: 1.4rem;
  max-width: 35.8rem;
  color: #fff;
  overflow-y: scroll;

  div {
    padding: 1rem 1.6rem;
    /* height: calc(100% - 2rem); */
    /* word-wrap: break-word; */
  }
`;

const Contents = styled.div`
  height: 13.6rem;
  padding: 0.8rem 1.6rem;
  background-color: #fff;
`;

const Utils = styled.div``;

const Likes = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
`;

const Title = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: ${props => props.span};
`;

const HeartButton = styled.button`
  cursor: pointer;
  border: none;
`;

export default withRouter(Post);
