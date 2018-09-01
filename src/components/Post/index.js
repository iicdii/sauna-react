import React from 'react';
import styled from 'styled-components';
import Heart from '../../svg/Heart';
import Comment from '../../svg/Comment';

class Post extends React.Component {
  render() {
    return (
      <Wrapper>
        <PostHeader>
          haha
        </PostHeader>
        <Gallery>
          <img src="https://via.placeholder.com/360x360" />
          <GalleryDes>
            <div>hasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdfhasdfasdfasdf</div>
          </GalleryDes>
        </Gallery>
        <Contents>
          <Utils>
            <Heart width="24px" height="24px" />
            <Comment width="24px" height="24px" style={{ marginLeft: '0.8rem'}} />
          </Utils>
          <Likes>좋아요 13000개</Likes>
        </Contents>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  box-shadow: 0px 1px 12px #290000;
  margin-bottom: 1.6rem;
`;

const PostHeader = styled.div`
  height: 5.2rem;
`;

const Gallery = styled.div`
  position: relative;
  img {
    display: block;
  }
`;

const GalleryDes = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgba(112, 112, 112, 0.5);
  width: 100%;
  /* height: 16rem; */
  height: 8rem;
  font-size: 1.4rem;


  div {
    /* padding: 1rem 1.6rem; */
    /* height: calc(100% - 2rem); */
    /* word-wrap: break-word; */
    overflow-y: scroll;
  }
`;

const Contents = styled.div`
  height: 13.6rem;
  padding: 0.8rem 1.6rem;
`;

const Utils = styled.div``;

const Likes = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
`;

export default Post;