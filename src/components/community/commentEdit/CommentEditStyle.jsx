import styled from 'styled-components';

export const CommentEditBox = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
`;

export const CommentEditSection = styled.div`
  position: relative;
  width: 375px;
  height: 56px;
  top: 37px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;
export const CommentEditSectionTitle = styled.div`
  position: relative;
  //left: 21px;
  font-weight: 600;
`;

export const CommentEditInputBox = styled.div`
margin-top: 37px;
  textarea {
    width: 100%;
    height: 80px;
    border: none;
    outline: none;
  }
  
`;

export const CommentEditBtn = styled.button`
  width: 100px;
  height: 52px;
  margin-left: 16px;
  border: none;

  background: #e2e2e2;
  border-radius: 8px;

  :hover {
    filter: brightness(0.1);
  }

  cursor: pointer;
`;
