import styled from 'styled-components';

// 수정,삭제 바텀시트
export const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  margin: 20px auto;
  ul {
    padding: 5px;
    cursor: pointer;
  }
`;

// 직군 바텀시트
export const JobBoard = styled.div`
  width: 35%;
`;
export const BottomSheetJob = styled.div`
  width: 35%;
`;
