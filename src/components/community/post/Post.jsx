import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { __getPostAll } from '../../../redux/modules/PostSlice';
import {
  Comment,
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
} from './PostStyle';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostAll());
  }, [dispatch]);

  return (
    <PostBox>
      <PostSection1>
        <NickName>{post.nickname}</NickName>
        <Date>{post.createdAt}</Date>
      </PostSection1>

      <PostSection2>
        <JobPosition>{post.직군}</JobPosition>
        <PostTitle>{post.title}</PostTitle>
      </PostSection2>

      <PostSection3>
        <PostBody>{post.content}</PostBody>
        <PostImg>{post.image}</PostImg>
      </PostSection3>

      <PostSection4>
        <Heart>
          <span>
            <img src="images/heartSmall.png" alt="" />
            {post.heartNum}
          </span>
        </Heart>
        <Comment>
          <img src="images/commentIcon.png" alt="" />
          {post.commentNum}
        </Comment>
      </PostSection4>
      <Hits>조회수 {post.hitNum}</Hits>
    </PostBox>
  );
};

export default Post;
