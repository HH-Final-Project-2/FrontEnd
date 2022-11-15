import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { __getPost } from '../../../redux/modules/PostSlice';
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
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detail } = useSelector((state) => state.PostSlice);

  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch]);

  function heartHandler() {
    
  }

  return (
    <DetailBox>
      <Section1 /> <Section1Title>게시글 상세</Section1Title>
      {/*  */}
      <DetailPostSection1>
        <NickName>{detail.nickname}</NickName>
        <Date>{detail.createdAt}</Date>
      </DetailPostSection1>
      <PostLine />
      {/*  */}
      <DetailPostSection2>
        <JobPosition>{detail.직군}</JobPosition>
        <PostTitle>{detail.title}</PostTitle>
      </DetailPostSection2>
      {/*  */}
      <DetailPostSection3>
        <DetailPostBody>{detail.content}</DetailPostBody>
        <DetailPostImg>{detail.image}</DetailPostImg>
      </DetailPostSection3>
      {/*  */}
      <CommentBox>
        <HeartNum onClick={heartHandler}>
          <img src="../images/heartBig.png" alt="" />
          {detail.heartNum}
        </HeartNum>

        <input type="text" placeholder="댓글달기"></input>
        <button>등록</button>
      </CommentBox>
      <PostLine />
      <Comment />
    </DetailBox>
  );
};

export default PostDetail;
