import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { __getPostAll } from '../../../redux/modules/PostSlice';
import Post from '../post/Post';
import {
  Comment,
  CommunityLayout,
  Date,
  Heart,
  Hits,
  JobPosition,
  NickName,
  PostBody,
  PostBox,
  PostImg,
  PostSection1,
  PostSection2,
  PostSection3,
  PostSection4,
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.PostSlice);

  useEffect(() => {
    dispatch(__getPostAll());
  }, [dispatch]);

  const editHandler = () => {
    navigate('/edit');
  };

  const writeHandler = () => {
    navigate('/write');
  };
  return (
    <CommunityLayout>
      <Section1 /> <Section1Title>커뮤니티</Section1Title>
      <Section2>익명게시판</Section2>
      <Section3>
        {post.map((item) => (
          <Post item={item} />
        ))}
      </Section3>
      <button onClick={writeHandler}>작성</button>
      <button onClick={editHandler}>수정</button>
    </CommunityLayout>
  );
};

export default PostList;
