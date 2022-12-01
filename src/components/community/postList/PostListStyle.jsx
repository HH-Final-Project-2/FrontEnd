import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const CommunityLayout = styled.div`
  width: 375px;
  margin: 0 auto;
  background-color: white;
`;

export const Section1 = styled.div`
  position: relative;
  top: 20px;

  display: flex;
  justify-content: space-between;
`;

export const Section1Title = styled.div`
  position: relative;
  left: 10px;
  font-weight: 600;
`;

export const Section2 = styled.div`
  display: flex;

  margin-left: 13px;
  svg {
    margin-top: 2.7px;
  }
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
  margin-top: 16px;
  margin-left: 20px;
  select {
    padding-left: 7px;
    width: 73px;
    height: 36px;

    outline: none;
    border: 1px solid #e2e6ef;
    border-radius: 8px;

    color: #1a1f27;
  }

  .sort {
    margin-right: 13px;
  }
`;

export const WriteButton = styled.div`
  position: fixed;
  bottom: 130px;
  margin-left: 300px;

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
  margin-bottom: 70px;
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
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #bcc2cc;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background: #5546ff;
    border-radius: 50%;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
  }
`;

export const Container = styled.div`
  margin-top: 32px;
  margin-left: 21px;
  height: 250px;
  font-size: 16px;
  font-weight: 600;
  color: #1a1f27;

  .topFive {
  }
`;

export const StyledSlider = styled(Slider)`
  margin-top: 16px;

  .slick-slide div {
    outline: none;
  }

  .slick-dots li button:before {
    margin-top: 16px;
    content: '•';

    opacity: 0.25;
    color: #bcc2cc;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #5546ff;
  }
`;

export const ListSectionLine = styled.div`
  margin-top: 30px;
  height: 12px;
  background: #f5f5f5;
`;
