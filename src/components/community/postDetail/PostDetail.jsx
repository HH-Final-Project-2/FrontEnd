import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { __deletePost, __getPost } from '../../../redux/modules/PostSlice';
import Comment from '../comment/Comment';
import Heart from '../heart/Heart';

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
  JobPosition,
  NickName,
  PostLine,
  PostTitle,
} from './PostDetailStyle';

const PostDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { detail } = useSelector((state) => state.PostSlice);


  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch]);


  // 게시글 삭제
  const deleteHandler = () => {
    dispatch(__deletePost(detail.id));
    alert('삭제되었습니다.');
    navigate('/community');
  };

  // 게시글 수정
  const editHandler = () => {
    navigate(`/edit/${id}`);
  };

  if (detail === undefined) return;

  return (
    <DetailBox>
      <Section1 /> <Section1Title>게시글 상세</Section1Title>
      {/*  */}
      <DetailPostSection1>
        <NickName>{detail.author}</NickName>
        <Date>{detail.createdAt}</Date>
      </DetailPostSection1>
      <PostLine />
      {/*  */}
      <DetailPostSection2>
        <JobPosition>{detail.jobGroup}</JobPosition>
        <PostTitle>{detail.title}</PostTitle>
      </DetailPostSection2>
      {/*  */}
      <DetailPostSection3>
        <DetailPostBody>{detail.content}</DetailPostBody>
        <DetailPostImg>
          <img src={detail.image} />
        </DetailPostImg>
      </DetailPostSection3>
      {/*  */}
      <CommentBox>
        <Heart
          id={detail.id}
          heart={detail.postHeartCnt === 'true' ? true : false}
          numberHeart={detail.postHeartCnt}
        />

        <button onClick={editHandler}>수정하기</button>
        <button onClick={deleteHandler}>삭제하기</button>
      </CommentBox>
      <PostLine />
      <Comment postid={id} />
    </DetailBox>
  );
};

export default PostDetail;
