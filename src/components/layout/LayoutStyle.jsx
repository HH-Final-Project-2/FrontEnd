import styled from 'styled-components';

export const LayoutBox = styled.div`
  display: flex;
  justify-content: center;

  .banner {
    position: relative;
    bottom: 100px;
  }
`;

export const DivLayout = styled.div`
  width: 375px;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e6ef;

  margin-left: 100px;
`;
