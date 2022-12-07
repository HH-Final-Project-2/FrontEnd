import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const CommunityLayout = styled.div`
  width: 375px;
  margin: 0 auto;
`;

export const Section1 = styled.div`
  width: 375px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e2e6ef;
`;

export const Section1Title = styled.div`
  position: relative;
  left: 10px;
  font-weight: 500;
  font-size: 16px;

  color: #1a1f27;
`;

export const Section2 = styled.div`
  display: flex;
  align-items: center;

  margin-left: 13px;
  /* svg {
    margin-top: 2.7px;
  } */
  cursor: pointer;
`;

export const Section3 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionLine = styled.div`
  height: 1px;
  margin-top: 30px;
  background: #d9d9d9;
`;

export const SortPost = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: 20px;
  select {
    padding-left: 9px;
    width: 77px;
    height: 36px;

    outline: none;
    border: 1px solid #e2e6ef;
    border-radius: 8px;

    appearance: none;
    color: #1a1f27;
  }

  svg {
    position: relative;
    right: 18px;
  }
`;

export const WriteButton = styled.div`
  position: fixed;
  bottom: 130px;
  margin-left: 310px;

  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
  &:active {
    margin-bottom: 15px;
  }
  transition-duration: 0.3s;
`;

export const SearchButton = styled.button`
  margin-right: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

//페이지네이션
export const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #bcc2cc;
    font-size: 12px;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background: #5546ff;
    border-radius: 50%;
  }
  ul.pagination li:hover {
    background: #f5f5f5;
    border-radius: 50%;
  }
  ul.pagination li a.active {
  }
`;

export const Container = styled.div`
  padding-left: 21px;
  margin-top: 32px;
  height: 276px;
  font-weight: 400;
  font-size: 16px;
  color: #1a1f27;
`;

export const StyledSlider = styled(Slider)`
  margin-top: 16px;

  .slick-slide .topPost {
    outline: none;
  }

  .slick-dots li {
    margin: 0.5px;
  }

  .slick-dots li button:before {
    width: 4px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 17px;
    content: '•';
    color: gray;

    opacity: 0.15;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #bbb5ff;
  }
`;

export const ListSectionLine = styled.div`
  width: 100%;

  margin-top: 13px;
  height: 12px;
  background: #f5f5f5;
`;
