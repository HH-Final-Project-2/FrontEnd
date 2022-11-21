import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { __getPostAll } from '../../../redux/modules/PostSlice';
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

  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value;

      navigate(`/community/?q=${keyword}`);
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
