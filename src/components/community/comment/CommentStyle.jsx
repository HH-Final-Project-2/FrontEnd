import styled from 'styled-components';

export const CommentListLayout = styled.div`
  width: 375px;
  height: 100vh;
`;

export const CommentSection1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentTitle = styled.div`
  display: flex;
`;

export const CommentNickName = styled.div`
  margin-left: 13px;
  margin-top: 13px;
  font-weight: 600;
  font-size: 12px;
`;

export const CommentNickName2 = styled.div`
  padding: 2px 4px 2px 4px;

  margin-left: 13px;
  margin-top: 11px;
  font-weight: 600;
  font-size: 12px;

  color: #3425de;
  background: #eeecff;
  border-radius: 4px;
`;

export const CommentDate = styled.div`
  margin-left: 8px;
  margin-top: 13px;
  font-size: 12px;
  color: #969696;
`;

export const CommentBody = styled.div`
  width: 355px;
  white-space: pre-line;
  word-break: break-all;
  margin-left: 13px;
  margin-top: 15px;
  font-size: 14px;
`;

export const CommentWriteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -22px;
  margin-bottom: 50px;
`;

export const CommentTextarea = styled.textarea`
  width: 290px;
  height: 44px;
  padding-left: 12px;
  padding-top: 14px;
  resize: none;
  outline: none;
  overflow: hidden;
  border: 1px solid #e2e6ef;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: none;

  :focus {
    border: 1px solid #bbb5ff;
    border-right: none;
  }

  ::placeholder {
    color: #bcc2cc;
  }
`;

export const CommentWirteButton = styled.button`
  height: 44px;
  width: 50px;
  border: none;
  outline: none;
  background: #bbb5ff;
  color: #ffffff;
  font-size: 14px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  :hover {
    background: #5546ff;
  }

  cursor: pointer;
`;

export const LikeButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
  margin-top: 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const LikeButtonText = styled.label`
  font-size: 12px;
  color: #52596b;
  margin-left: 7px;
`;
