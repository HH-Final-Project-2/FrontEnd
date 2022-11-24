import styled from 'styled-components';

export const DetailBox = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
`;

export const Section1 = styled.div`
  position: relative;
  top: 37px;
`;

export const Section2 = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 15px;
  margin-right: 15px;

  svg {
    margin-top: 2.7px;
  }
  g:hover {
    fill: #5546ff;
    cursor: pointer;
  }
`;

export const DetailPostSection1 = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    margin-top: 16px;
    margin-right: 18px;
  }

  g:hover {
    fill: #5546ff;
    cursor: pointer;
  }

  g rect:hover {
    stroke: #5546ff;
  }

  .nickdate {
    display: flex;
  }
`;

export const NickName = styled.div`
  margin-left: 13px;
  margin-top: 25px;
  font-weight: 600;
  font-size: 14px;

  color: #52596b;
`;

export const Date = styled.div`
  margin-left: 7px;
  margin-top: 27px;
  font-size: 12px;
  color: #8892a0;
`;

export const SectionLine = styled.div`
  height: 1px;
  margin-top: 61px;
  background: #d9d9d9;
`;

export const PostLine = styled.div`
  width: 345px;
  height: 1px;

  margin-left: 12px;
  margin-top: 13px;

  background: #f5f6fa;
`;

export const DetailPostSection2 = styled.div`
  display: flex;
`;

export const JobPosition = styled.div`
  padding: 5px;
  margin-left: 10px;
  margin-top: 15px;
  font-size: 12px;

  color: #3425de;
  background: #eeecff;
  border-radius: 4px;
`;

export const PostTitle = styled.div`
  margin-left: 13px;
  margin-top: 16px;
  font-weight: 600;
  font-size: 18px;

  word-break: break-all;

  color: #1a1f27;
`;

export const DetailPostSection3 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailPostBody = styled.div`
  margin-left: 13px;
  margin-top: 25px;

  font-size: 16px;

  white-space: pre-line;
  word-break: break-all;

  color: #1a1f27;
`;

export const DetailPostImg = styled.div`
  margin-left: 20px;
  margin-top: 32px;
  margin-bottom: 40px;

  width: 335px;
  img {
    max-width: 100%;
  }
  border-radius: 8px;
`;

export const DetailPostSection4 = styled.div`
  width: 375px;
  height: 68px;

  display: flex;

  margin-top: 14px;
  margin-left: 20px;
`;

export const CommentBox = styled.div`
  display: flex;
  font-size: 12px;
  color: #52596b;

  path:hover {
    fill: #5546ff;
  }
`;

export const CommentNum = styled.div`
  font-size: 12px;
  color: #52596b;

  margin-left: 7px;
`;

export const HitBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 42px;
  color: #8892a0;
  font-size: 12px;
`;

export const HitNum = styled.div`
  margin-left: 3px;
  color: #8892a0;
  font-size: 12px;
`;

export const DetailSectionLine = styled.div`
  margin: auto;
  width: 343px;
  height: 1px;
  background: #e2e6ef;
`;
