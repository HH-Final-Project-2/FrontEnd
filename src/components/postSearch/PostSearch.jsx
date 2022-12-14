import React from 'react';
import { useNavigate } from 'react-router';
import {
  Section1,
  Section1Title,
  Section2,
  SearchInput,
} from './PostSearchStyle';

const PostSearch = () => {
  const navigate = useNavigate();

  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value;
      navigate(`/community?keyword=${keyword}`);
    }
  };
  return (
    <Section1>
      <Section2>
        <div className="backBtn" onClick={() => navigate('/community')}>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg>
        </div>

        <Section1Title>
          <SearchInput
            type="text"
            placeholder="검색"
            onKeyPress={(event) => {
              search(event);
            }}
          />
        </Section1Title>
      </Section2>
    </Section1>
  );
};

export default PostSearch;
