import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { __getPostAll, __searchPost } from "../../../redux/modules/PostSlice";
import Post from "../post/Post";
import { ReactComponent as SearchIcon } from "../../../images/ic-search.svg";
import {
  CommunityLayout,
  Section1,
  Section1Title,
  Section2,
  Section3,
  SectionLine,
  WriteButton,
  SearchButton,
} from "./PostListStyle";
const PostList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  let searchQuery = query.get("keyword");
  const { post } = useSelector((state) => state.PostSlice);
  //console.log('글전체조회', post) // 글 전체 조회는 이미지 null
  useEffect(() => {
    console.log("리스트 유즈이팩트/서치쿼리=", searchQuery);
    if (searchQuery == null) dispatch(__getPostAll());
    else dispatch(__searchPost(searchQuery));
  }, [dispatch]);
  const writeHandler = () => {
    navigate("/write");
  };
  if (post === undefined) return;
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
        <SearchButton onClick={() => navigate("/search")}>
          <SearchIcon />
        </SearchButton>
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
