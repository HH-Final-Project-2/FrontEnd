import React from 'react';
import {
  Comment,
  CommunityLayout,
  Company,
  Date,
  Heart,
  Hits,
  JobPosition,
  NickName,
  PostBody,
  PostBox,
  PostLine,
  PostSection1,
  PostSection2,
  PostSection3,
  PostTitle,
  Section1,
  Section1Title,
  Section2,
  Section3,
} from './PostListStyle';

// 1. 게시글이 나열 될 레이아웃
// 2. 새글피드
// 3. 게시글 박스
// 4. 박스에 들어갈 닉네임, 제목, 내용 미리보기,
//    회사, 직군, 좋아요, 댓글, 조회수
const PostList = () => {
  return (
    <CommunityLayout>
      <Section1 /> <Section1Title>커뮤니티</Section1Title>
      <Section2>익명게시판</Section2>
      <Section3>
        <PostBox>
          <PostSection1>
            <NickName>닉네임</NickName>
            <Date>방금 전</Date>
          </PostSection1>

          <PostTitle>게시글 제목</PostTitle>
          <PostBody>게시글 내용</PostBody>

          <PostSection2>
            <Company>어쩌구컴퍼니</Company>
            <JobPosition>직군</JobPosition>
          </PostSection2>

          <PostLine />
          <PostSection3>
            <Heart>좋아요</Heart>
            <Comment>댓글</Comment>
          </PostSection3>
          <Hits>조회수</Hits>
        </PostBox>
      </Section3>
    </CommunityLayout>
  );
};

export default PostList;
