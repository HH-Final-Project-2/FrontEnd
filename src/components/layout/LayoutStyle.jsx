import styled from 'styled-components';

export const LayoutBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background-color: white;

  .banner {
    position: fixed;
    left: 0px;
    bottom: -60px;
  }
`;

export const DivLayout = styled.div`
  width: 375px;
  min-height: 100vh;
  height: auto;
  margin-left: 470px;

  display: flex;
  flex-direction: column;
  border: 1px solid #e2e6ef;
`;
