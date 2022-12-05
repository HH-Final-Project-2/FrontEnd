import styled from 'styled-components';

export const CommentEditBox = styled.div`
  width: 373px;
  height: 100vh;
  background-color: white;
  margin: 0 auto;
`;

export const CommentEditInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 24px;

  textarea {
    padding-top: 10px;
    padding-left: 7px;
    width: 335px;
    height: 112px;
    border: 1px solid #e2e6ef;
    outline: none;
    border-radius: 8px;
    resize: none;
  }

  textarea:focus {
    border: 1px solid #bbb5ff;
  }
`;

export const CommentBtns = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 40px;

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;

export const CommentEditBtn = styled.button`
  width: 160px;
  height: 52px;
  background: #5546ff;
  color: #ffffff;
  font-size: 14px;
  border: 1px solid #e2e6ef;
  border-radius: 8px;

  cursor: pointer;
`;

export const EditCancelBtn = styled.button`
  margin-right: 14px;

  width: 160px;
  height: 52px;
  background: #ffffff;
  color: #52596b;

  font-size: 14px;

  border: 1px solid #e2e6ef;
  border-radius: 8px;

  cursor: pointer;
`;
