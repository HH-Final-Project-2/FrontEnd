import styled from 'styled-components';

export const PostBox = styled.div`
  box-sizing: border-box;
  width: 335px;
  height: 188px;
  margin: 36px auto;
  cursor: pointer;
`;

export const PostSection1 = styled.div`
  display: flex;
`;

export const NickName = styled.div`
  margin-left: 6px;
  margin-top: 13px;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.15px;

  color: #52596b;
`;

export const Date = styled.div`
  margin-left: 7px;
  margin-top: 13px;

  font-weight: 400;
  font-size: 12px;
  color: #8892a0;
`;

export const PostSection3 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostBody = styled.div`
  margin-left: 6px;
  margin-top: 16px;
  width: 183px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #52596b;
`;
export const PostImg = styled.div`
  margin-right: 1px;
  margin-top: 19px;
  margin-bottom: 5px;
  height: 72px;

  img {
    width: 72px;
    height: 72px;
    border-radius: 8px;

    object-fit: cover;
  }
`;

export const PostSection2 = styled.div`
  display: flex;
`;

export const JobPosition = styled.div`
  padding: 5px;
  margin-left: 5px;
  margin-top: 15px;
  font-weight: 400;
  font-size: 12px;
  color: #3425de;
  background: #eeecff;
  border-radius: 4px;
`;

export const PostTitle = styled.div`
  max-width: 200px;
  margin-left: 13px;
  margin-top: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #1a1f27;
`;

export const PostSection4 = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Heart = styled.div`
  display: flex;
  margin-left: 5px;
  margin-top: 15px;
  font-weight: 400;
  font-size: 12px;
  color: #52596b;

  .heart {
    margin-top: 1px;
    margin-left: 7px;
  }
`;

export const Comment = styled.div`
  display: flex;
  margin-left: 13px;
  margin-top: 15px;
  font-weight: 400;
  font-size: 12px;
  color: #52596b;

  .comment {
    margin-top: 1px;
    margin-left: 7px;
  }
`;

export const Hits = styled.div`
  text-align: right;
  margin-top: -18px;
  margin-right: 5px;
  font-weight: 500;
  font-size: 12px;
  color: #8892a0;
`;

export const PostLine = styled.div`
  width: 335px;
  height: 1px;
  margin-top: 15px;
  margin-right: 10px;

  background: #d9d9d9;
`;
