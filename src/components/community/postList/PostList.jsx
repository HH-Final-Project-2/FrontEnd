import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { __getPostAll, __searchPost } from '../../../redux/modules/PostSlice';
import Post from '../post/Post';
import {
  CommunityLayout,
  Section1,
  Section1Title,
  Section2,
  Section3,
} from './PostListStyle';

const PostList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.PostSlice);

  const search = (event) => {
    if (event.key === 'Enter') {
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      dispatch(__searchPost(keyword))
    }
  };

  // 게시글 전체 조회
  useEffect(() => {
    dispatch(__getPostAll());
  }, [dispatch]);

  const writeHandler = () => {
    navigate('/write');
  };

  if (post === undefined) return null;

  return (
    <CommunityLayout>
      <Section1 /> <Section1Title>커뮤니티</Section1Title>
      <Section2>익명게시판</Section2>
      <input
        type="text"

        onKeyPress={(event) => {
          search(event);
        }}
      />
      <Section3>
        {post.map((post) => {
          return (
            <div key={post.id} onClick={() => navigate(`/detail/${post.id}`)}>
              <Post post={post} />
            </div>
          );
        })}
      </Section3>
      <button onClick={writeHandler}>작성</button>
    </CommunityLayout>
  );
};

export default PostList;
