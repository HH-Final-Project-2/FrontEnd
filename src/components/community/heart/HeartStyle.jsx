import styled from 'styled-components';

export const DivHeart = styled.div`
  font-size: 12px;
  margin-right: 20px;
  img {
    cursor: pointer;

    :hover {
      filter: brightness(0.1);
    }
    &:active {
      margin-bottom: 15px;
    }
    transition-duration: 0.1s;
  }
`;

export const HeartNum = styled.div`
  
`