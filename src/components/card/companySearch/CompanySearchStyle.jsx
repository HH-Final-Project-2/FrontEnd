import styled from "styled-components";

export const ComInfor = styled.div`
  cursor: pointer;
`;

export const Company = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #222222;
  padding-left: 14px;
`;

export const Address = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #8892a0;
  padding-left: 14px;
  width: 300px;
  margin-bottom: 10px;
`;

export const St_Header = styled.div`
  font-weight: 600;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 12px;
  color: #1a1f27;
  margin-bottom: 20px;
`;

export const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 85px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 4px;
`;

export const SearchBox = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #d6d6d6;
  position: relative;
  bottom: 5px;
`;

export const Icon = styled.div`
  height: 15px;
  width: 25px;
  display: flex;
  position: relative;
  bottom: 48px;
  left: 30px;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  max-width: 335px;
  height: 40px;
  border: 0px solid;
  border-radius: 8px;
  outline: none;
  background: #f5f5f5;
  margin: auto;
  padding-left: 40px;

  :focus {
    border: none;
  }
`;

export const Button = styled.a`
  width: 35px;
  height: 0px;
  display: flex;
  position: relative;
  bottom: 61px;
  left: 310px;
  cursor: pointer;
  font-size: 14px;
`;

export const PaginationBox = styled.div`
  margin-bottom: 200px;
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
  ul.pagination li a:hover,
  ul.pagination li a.active {
  }
`;

export const Section3 = styled.div`
  display: flex;
  flex-direction: column;
`;
