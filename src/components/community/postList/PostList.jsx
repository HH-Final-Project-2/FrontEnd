import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { __getPostAll, __searchPost } from '../../../redux/modules/PostSlice';
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
  // const { keyword } = useParams();
  const [query, setQuery] = useSearchParams();
  let searchQuery = query.get('keyword');
  const { post } = useSelector((state) => state.PostSlice);

  // console.log('PostList keyword', searchQuery)



  useEffect(() => {
    if (searchQuery == null) dispatch(__getPostAll());
    else dispatch(__searchPost(searchQuery));
  }, [dispatch])


  // const search = (event) => {
  //   if (event.key === 'Enter') {
  //     //입력한 검색어를 읽어와서
  //     let keyword = event.target.value;
  //     dispatch(__searchPost(keyword))
  //   }
  // };

  //게시글 전체 조회
  // useEffect(() => {
  //   dispatch(__getPostAll());
  // }, [dispatch]);

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

        <button onClick={() => navigate('/search')}>검색</button>
        {/* <input
          type="text"
          placeholder="검색"
          onKeyPress={(event) => {
            search(event);
          }}
        /> */}
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
