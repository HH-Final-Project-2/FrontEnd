import styled from 'styled-components';

export const CommunityLayout = styled.div`
  width: 375px;
  margin: 0 auto;
  background-color: white;
`;

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
  margin-top: 60px;
  background: #d9d9d9;
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
