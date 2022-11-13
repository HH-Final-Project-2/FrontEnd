import React from 'react';
import Comment from '../comment/Comment';

import { Section1, Section1Title } from '../postList/PostListStyle';
import {
  CommentBox,
  Date,
  DetailBox,
  DetailPostBody,
  DetailPostImg,
  DetailPostSection1,
  DetailPostSection2,
  DetailPostSection3,
  HeartNum,
  JobPosition,
  NickName,
  PostLine,
  PostTitle,
} from './PostDetailStyle';

const PostDetail = () => {
  return (
    <DetailBox>
      <Section1 /> <Section1Title>게시글 상세</Section1Title>
      {/*  */}
      <DetailPostSection1>
        <NickName>닉네임</NickName>
        <Date>방금 전</Date>
      </DetailPostSection1>
      <PostLine />
      {/*  */}
      <DetailPostSection2>
        <JobPosition>직군</JobPosition>
        <PostTitle>제목</PostTitle>
      </DetailPostSection2>
      {/*  */}
      <DetailPostSection3>
        <DetailPostBody>내용</DetailPostBody>
        <DetailPostImg></DetailPostImg>
      </DetailPostSection3>
      {/*  */}
      <CommentBox>
        <HeartNum>좋아요</HeartNum>

        <input type="text" placeholder="댓글달기"></input>
        <button>등록</button>
      </CommentBox>
      <PostLine />
      <Comment />
    </DetailBox>
  );
};

export default PostDetail;
