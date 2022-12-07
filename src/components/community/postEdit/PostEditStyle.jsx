import styled from 'styled-components';

export const EditBox = styled.div`
  background: white;
  margin: 0 auto;
`;

export const EditSection1 = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;

  .backBtn {
    display: flex;
    align-items: center;
    cursor: pointer;

    margin-left: 10px;
  }

  border-bottom: 1px solid #e2e6ef;
`;

export const EditSection1Title = styled.div`
  margin-left: 14px;
  font-weight: 500;
  font-size: 16px;

  color: #1a1f27;
`;

export const SelectJob = styled.div`
  select {
    padding-left: 6px;
    width: 100%;
    height: 56px;
    border: none;
    border-bottom: 1px solid #e2e2e2;
    outline: none;

    font-weight: 400;
    font-size: 16px;
    color: #52596b;
  }

  select:focus {
    border-bottom: 1px solid #bbb5ff;
  }
`;

export const EditTitle = styled.div`
  textarea {
    padding: 10px;
    margin-top: 6px;

    width: 100%;
    height: 45px;
    border: none;
    border-bottom: 1px solid #e2e2e2;
    outline: none;
    resize: none;
    overflow: hidden;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #1a1f27;
  }
  textarea:focus {
    border-bottom: 1px solid #bbb5ff;
  }
  textarea::placeholder {
    color: #bcc2cc;
  }
`;

export const EditBody = styled.div`
  textarea {
    padding: 10px;
    margin-top: 6px;
    width: 100%;
    height: 200px;
    border: none;
    outline: none;
    resize: none;
    overflow: hidden;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #1a1f27;
  }
  textarea:focus {
    border-bottom: 1px solid #bbb5ff;
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

  background: #5546ff;
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
