import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  //const { post } = useSelector((state) => state.PostSlice);
  //console.log('나는 자식 포스트', post);

  useEffect(() => {
    dispatch(__getPostAll());
  }, [dispatch]);

  return (
    <PostBox>
      <PostSection1>
        <NickName>{post.author}</NickName>
        <Date>{post.createdAt}</Date>
      </PostSection1>

      <PostSection2>
        <JobPosition>{post.jobGroup}</JobPosition>
        <PostTitle>{post.title}</PostTitle>
      </PostSection2>

      <PostSection3>
        <PostBody>{post.content}</PostBody>
        <PostImg>
          <img src={post.image} />
        </PostImg>
      </PostSection3>

      <PostSection4>
        <Heart>
          <span>
            <img src="images/heartSmall.png" alt="" />
            {post.postHeartCnt}
          </span>
        </Heart>
        <Comment>
          <img src="images/commentIcon.png" alt="" />
          {post.commentCnt}
        </Comment>
      </PostSection4>
      <Hits>조회수 {post.hit}</Hits>
    </PostBox>
  );
};

export default Post;
