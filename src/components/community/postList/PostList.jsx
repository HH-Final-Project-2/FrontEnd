import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import {
  heartSort,
  hitsSort,
  topFivePost,
  __getPostAll,
  __searchPost,
} from '../../../redux/modules/PostSlice';
import Post from '../post/Post';
import { ReactComponent as SearchIcon } from '../../../images/ic-search.svg';
import {
  CommunityLayout,
  Section1,
  Section1Title,
  Section2,
  Section3,
  SectionLine,
  WriteButton,
  SearchButton,
  SortPost,
  PaginationBox,
  Container,
  StyledSlider,
  ListSectionLine,
} from './PostListStyle';
import Pagination from 'react-js-pagination';
import TopFive from '../topFive/TopFive';

const PostList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  let searchQuery = query.get('keyword');
  const { post } = useSelector((state) => state.PostSlice);
  const { postTopFive } = useSelector((state) => state.PostSlice);

  // 인기글 슬라이드
  // const [dragging, setDragging] = useState(false);

  // const handleBeforeChange = useCallback(() => {
  //   setDragging(true);
  // }, []);

  // const handleAfterChange = useCallback((i: number) => {
  //   setDragging(false);
  // }, []);

  const settings = {
    dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
    infinite: true, // loop를 만들지
    speed: 500, // 애미메이션의 속도, 단위는 milliseconds
    slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
    slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
    centerMode: false,
    arrows: false,
    vertical: false,
    autoplay: true,
    //touchThreshold: 100,
    // beforeChange: handleBeforeChange,
    // afterChange: handleAfterChange,
  };

  const [selectBox, setSelectBox] = useState('');
  // 최신순, 조회순, 좋아요순 정렬
  const selectHandler = (value) => {
    if (value === 'news') dispatch(__getPostAll());
    if (value === 'hits') dispatch(hitsSort());
    if (value === 'likes') dispatch(heartSort());
  };

  // 검색
  useEffect(() => {
    if (searchQuery == null) dispatch(__getPostAll());
    else dispatch(__searchPost(searchQuery));
  }, [dispatch]);

  useEffect(() => {
    dispatch(topFivePost());
  }, [dispatch]);

  // 작성 페이지로 이동
  const writeHandler = () => {
    navigate('/write');
  };

  // 페이징 처리
  const [page, setPage] = useState(1); //현재 페이지

  const [currentPosts, setCurrentPosts] = useState([]); // 보여줄 게시글
  const [postPerPage] = useState(20); //페이지당 게시글 개수
  const indexOfLastPost = page * postPerPage; // 1 - 20
  const indexOfFirstPost = indexOfLastPost - postPerPage; // 1 - 0

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setCurrentPosts(post.slice(indexOfFirstPost, indexOfLastPost)); // 1페이지 - 게시글 20개를 자른다
    window.scrollTo(0, 0);
  }, [indexOfFirstPost, indexOfLastPost, page, post]);

  if (post === undefined) return;

  return (
    <CommunityLayout>
      <Section1>
        <Section2>
          {/* <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg> */}
          <Section1Title>커뮤니티</Section1Title>
        </Section2>
        <SearchButton onClick={() => navigate('/search')}>
          <SearchIcon />
        </SearchButton>
      </Section1>
      <SectionLine />
      <Container>
        <div className="topFive">인기글</div>
        <StyledSlider {...settings}>
          {postTopFive.map((topPost) => {
            return (
              <div
                className="topPost"
                key={topPost.id}
                onClick={() => navigate(`/detail/${topPost.id}`)}
              >
                <TopFive topPost={topPost} />
              </div>
            );
          })}
        </StyledSlider>
      </Container>
      <ListSectionLine />

      <SortPost>
        <select
          className="sort"
          value={selectBox}
          onChange={(e) => setSelectBox(e.target.value)}
          onClick={() => selectHandler(selectBox)} //?
        >
          <option hidden>정렬</option>
          <option value="news">최신순</option>
          <option value="hits">조회순</option>
          <option value="likes">좋아요순</option>
        </select>
        <select>
          <option>전체</option>
          <option>전체</option>
          <option>전체</option>
        </select>
      </SortPost>
      <Section3>
        {currentPosts.map((post) => {
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

      {/* 페이징 처리 */}
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={postPerPage}
          totalItemsCount={post.length}
          pageRangeDisplayed={5}
          prevPageText={'‹'}
          nextPageText={'›'}
          onChange={handlePageChange}
        />
      </PaginationBox>
    </CommunityLayout>
  );
};
export default PostList;
