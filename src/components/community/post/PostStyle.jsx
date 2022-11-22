import styled from 'styled-components';

export const PostBox = styled.div`
  box-sizing: border-box;
  width: 335px;
  height: 188px;
  margin: 20px auto;
  cursor: pointer;
`;

export const PostSection1 = styled.div`
  display: flex;
`;

export const NickName = styled.div`
  margin-left: 6px;
  margin-top: 13px;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.15px;

  color: #52596b;
`;

export const Date = styled.div`
  margin-left: 7px;
  margin-top: 13px;

  font-size: 12px;
  color: #8892a0;
`;

export const PostTitle = styled.div`
  margin-left: 13px;
  margin-top: 16px;
  font-weight: 600;

  color: #1a1f27;
`;

export const PostSection3 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostBody = styled.div`
  margin-left: 6px;
  margin-top: 16px;
  width: 183px;

  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #52596b;
`;
export const PostImg = styled.div`
  margin-right: 3px;
  margin-top: 19px;
  width: 72px;
  height: 72px;

  img {
    max-width: 100%;
  }

  border-radius: 8px;
`;

export const PostSection2 = styled.div`
  display: flex;
`;

export const JobPosition = styled.div`
  padding: 5px;

  margin-left: 5px;
  margin-top: 15px;
  font-size: 12px;

  color: #696969;
  background: #f5f6fa;
  border-radius: 4px;
`;

export const PostSection4 = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Heart = styled.div`
  display: flex;
  margin-left: 5px;
  margin-top: 15px;
  font-size: 12px;

  color: #52596b;

  .heart {
    margin-left: 7px;
  }
`;

export const Comment = styled.div`
  display: flex;
  margin-left: 13px;
  margin-top: 15px;
  font-size: 12px;

  color: #52596b;

  .comment {
    margin-left: 7px;
  }
`;

export const Hits = styled.div`
  text-align: right;
  margin-top: -18px;
  margin-right: 5px;
  font-size: 12px;
  color: #969696;
`;

export const PostLine = styled.div`
  width: 335px;
  height: 1px;
  margin-top: 15px;
  margin-right: 10px;

  background: #d9d9d9;
`;
