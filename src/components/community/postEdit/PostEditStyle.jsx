import styled from 'styled-components';

export const EditBox = styled.div`
  width: 375px;
  height: 100vh;
  background: white;
  margin: 0 auto;
`;

export const EditSection1 = styled.div`
  position: relative;

  top: 20px;
  display: flex;

  margin-left: 13px;
  svg {
    margin-top: 2.7px;
  }
  .backBtn {
    cursor: pointer;
  }
`;

export const EditSection1Title = styled.div`
  position: relative;
  margin-bottom: 8px;
  left: 18px;
  font-weight: 600;
`;

export const SelectJob = styled.div`
  select {
    width: 375px;
    height: 56px;
    border: none;
    border-bottom: 1px solid #e2e2e2;
    outline: none;
  }
  select:after {
    color: red;
  }
`;

export const EditTitle = styled.div`
  textarea {
    padding: 10px;
    margin-top: 6px;

    width: 375px;
    height: 45px;
    border: none;
    border-bottom: 1px solid #e2e2e2;
    outline: none;
    resize: none;

    font-size: 16px;
  }
  textarea:focus {
    border-bottom: 1px solid blue;
  }
  textarea::placeholder {
    color: #bcc2cc;
  }
`;

export const EditBody = styled.div`
  textarea {
    padding: 10px;
    margin-top: 6px;
    width: 375px;
    height: 190px;
    border: none;
    outline: none;
    resize: none;

    font-size: 16px;
  }
  textarea:focus {
    border-bottom: 1px solid blue;
  }
  textarea::placeholder {
    color: #bcc2cc;
  }
`;

export const ImageUpload = styled.div`
  img {
    width: 152px;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 8px;
  }
`;

export const EditBtn = styled.button`
  position: fixed;
  bottom: 0;

  width: 335px;
  height: 52px;

  margin-left: 20px;
  margin-bottom: 50px;

  background: #bbb5ff;
  border-radius: 8px;
  border: none;

  color: white;
  font-size: 16px;

  :hover {
    background: #5546ff;
    color: #ffffff;
  }

  transition: 0.2s;
  cursor: pointer;
`;
