import styled from 'styled-components';

export const Section1 = styled.div`
  position: relative;
  top: 37px;
  display: flex;
  justify-content: space-between;
`;

export const Section1Title = styled.div`
  position: relative;
  left: 18px;
  font-weight: 600;
`;

export const Section2 = styled.div`
  display: flex;
  margin-left: 18px;
  svg {
    margin-top: 10px;
  }

  .backBtn {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  padding-left: 10px;
  width: 299px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 16px;

  margin-left: 5px;
  background: #f5f5f5;
  border-radius: 8px;

  ::placeholder {
    color: #bcc2cc;
  }

  :focus {
    border: none;
  }
`;
