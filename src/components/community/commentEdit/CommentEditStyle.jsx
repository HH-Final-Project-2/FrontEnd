import styled from 'styled-components';

export const CommentEditBox = styled.div`
  width: 375px;
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
  width: 100%;

  display: flex;
  flex-direction: row-reverse;
  justify-content: end;

  margin-top: 16px;
  margin-right: 40px;
`;

export const CommentEditBtn = styled.button`
  padding: 4px 20px;
  gap: 8px;

  width: 70px;
  height: 40px;

  background: #5546ff;
  color: #ffffff;
  font-size: 14px;

  border: 1px solid #e2e6ef;
  border-radius: 8px;

  cursor: pointer;
`;

export const EditCancelBtn = styled.button`
  padding: 4px 20px;
  gap: 8px;
  margin-right: 12px;

  width: 70px;
  height: 40px;

  background: #ffffff;
  color: #52596b;

  font-size: 14px;

  border: 1px solid #e2e6ef;
  border-radius: 8px;

  cursor: pointer;
`;
