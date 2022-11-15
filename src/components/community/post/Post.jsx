import React from 'react';
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

const Post = ({ item }) => {
  return (
    <PostBox>
      <PostSection1>
        <NickName>닉네임{item.nickname}</NickName>
        <Date>방금 전{item.createAt}</Date>
      </PostSection1>

      <PostSection2>
        <JobPosition>직군{item.직군}</JobPosition>
        <PostTitle>제목{item.title}</PostTitle>
      </PostSection2>

      <PostSection3>
        <PostBody>내용{item.content}</PostBody>
        <PostImg>{item.image}</PostImg>
      </PostSection3>

      <PostSection4>
        <Heart>좋아요{item.heartNum}</Heart>
        <Comment>댓글{item.commentNum}</Comment>
      </PostSection4>
      <Hits>조회수{item.hitNum}</Hits>
    </PostBox>
  );
};

export default Post;
