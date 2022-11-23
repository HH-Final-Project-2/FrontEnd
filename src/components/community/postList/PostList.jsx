import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import Footer from '../../footer/Footer';
import Post from '../post/Post';
import {
  CommunityLayout,
  Section1,
  Section1Title,
  Section2,
  Section3,
  SectionLine,
  WriteButton,
} from './PostListStyle';

const PostList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.PostSlice);

  //console.log('글전체조회', post) // 글 전체 조회는 이미지 null

  //검색 기능 url 이동까지 구현 완료
  const [postAll, setPostAll] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getPosts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값은?', searchQuery);
    let url = `https://yusung.shop/api/posting?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setPostAll(data);
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
      <Section1>
        <Section2>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg>
          <Section1Title>커뮤니티</Section1Title>
        </Section2>

        <input
          type="text"
          placeholder="검색"
          onKeyPress={(event) => {
            search(event);
          }}
        />
      </Section1>
      <SectionLine />

      <Section3>
        {post.map((post) => {
          return (
            <div key={post.id} onClick={() => navigate(`/detail/${post.id}`)}>
              <Post post={post} />
            </div>
          );
        })}
      </Section3>
      <WriteButton onClick={writeHandler}>
        <img src="images/작성.png" alt="" />
      </WriteButton>
    </CommunityLayout>
  );
};

export default PostList;
