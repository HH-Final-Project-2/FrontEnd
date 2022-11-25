import styled from 'styled-components';

export const Board = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  ul {
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
  }
`;

export const SheetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  margin-top: 17px;
  margin-right: 3px;
  cursor: pointer;
`;
