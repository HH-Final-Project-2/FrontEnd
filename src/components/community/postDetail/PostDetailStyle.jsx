import styled from 'styled-components';

export const DetailBox = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
`;

export const DetailPostSection1 = styled.div`
  display: flex;
`;

export const NickName = styled.div`
  margin-left: 13px;
  margin-top: 30px;
  font-weight: 600;
  font-size: 12px;
`;

export const Date = styled.div`
  margin-left: 5px;
  margin-top: 30px;
  font-size: 12px;
  color: #969696;
`;

export const PostLine = styled.div`
  width: 345px;
  height: 1px;

  margin-left: 12px;
  margin-top: 13px;

  background: #f5f5f5;
`;

export const DetailPostSection2 = styled.div`
  display: flex;
`;

export const JobPosition = styled.div`
  margin-left: 13px;
  margin-top: 15px;
  font-size: 12px;
  color: #969696;
`;

export const PostTitle = styled.div`
  margin-left: 13px;
  margin-top: 15px;
  font-weight: 600;
`;

export const DetailPostSection3 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailPostBody = styled.div`
  margin-left: 13px;
  margin-top: 13px;

  font-size: 14px;

  color: #969696;
`;

export const DetailPostImg = styled.div`
  margin-left: 20px;
  margin-top: 13px;

  width: 335px;
  height: 240px;
  border-radius: 8px;
  background: #e2e2e2;
`;

export const CommentBox = styled.div`
  width: 375px;
  height: 68px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 33px;

  background: green;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);

  input {
    width: 283px;
    height: 40px;

    border: none;
    outline: none;

    background: #f5f5f5;
    border-radius: 8px;
  }
  button {
  }
`;

export const HeartNum = styled.div`
  font-size: 12px;
`;
