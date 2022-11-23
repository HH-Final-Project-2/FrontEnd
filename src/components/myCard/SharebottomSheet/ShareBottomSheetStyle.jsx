import styled from 'styled-components';

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

export const St_share = styled.button`
  width: 100%;
  max-width: 150px;
  height: 50px;
  margin: 24px auto;
  background-color: white;
  border: 1px solid #e2e6ef;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-weight: 550;
  font-size: 14px;
  cursor: pointer;
`;
export const Share = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
  color: #1a1f27;
`;

export const Textshare = styled.div`
  background-color: gold;
`;
