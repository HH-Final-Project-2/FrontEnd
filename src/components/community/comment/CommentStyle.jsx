import styled from 'styled-components';

export const CommentListLayout = styled.div`
  width: 375px;
  height: 100vh;
`;

export const CommentSection1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CommentTitle = styled.div`
  display: flex;
`;
export const ComentPlus = styled.div`
  font-size: 30px;
  height: 10px;
  cursor: pointer;
`;

export const CommentNickName = styled.div`
  margin-left: 13px;
  margin-top: 13px;
  font-weight: 600;
  font-size: 12px;
`;

export const CommentDate = styled.div`
  margin-left: 5px;
  margin-top: 13px;
  font-size: 12px;
  color: #969696;
`;

export const CommentBody = styled.div`
  width: 355px;
  white-space: pre-line;
  word-break: break-all;
  /* margin-left: auto; */
  margin-left: 13px;
  margin-top: 15px;
  font-size: 14px;
`;

export const CommentWriteBox = styled.div`
  display: flex;
  width: 357px;
  border: 1px solid #E2E6EF;
  border-radius: 8px;
  margin-top: 8px;
  margin-left: 17px;
  margin-bottom: 32px;
  height: 50px;
  align-items: center;
  
`;

export const CommentTextarea = styled.textarea`
  width: 280px;
  height: 30px;
  resize: none;
  border-radius: 8px;
  border: none;
  outline: none;
  padding-top: 15px;
  padding-left: 5px;
`;

export const CommentWirteButton = styled.button`
  margin-left: 10px;
  height: 36px;
  width: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const LikeButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
  margin-top: 15px;
  margin-bottom: 10px;
  /* border:1px solid black; */
`;

export const LikeButtonText = styled.label`
  font-size: 15px;
  margin-left: 5px;
`;
