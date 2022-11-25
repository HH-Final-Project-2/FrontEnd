import styled from 'styled-components';

export const WriteBox = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export const WriteSection1 = styled.div`
  position: relative;

  top: 37px;
  display: flex;

  margin-left: 13px;
  svg {
    margin-top: 2.7px;
  }
`;

export const WriteSection1Title = styled.div`
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
`;

export const SelectBoard = styled.div``;

export const WriteTitle = styled.div`
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

export const WriteBody = styled.div`
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

export const WriteBtn = styled.button`
  position: fixed;
  bottom: 0;

  width: 335px;
  height: 52px;

  margin-left: 20px;
  margin-bottom: 50px;

  background: #f5f6fa;
  border-radius: 8px;
  border: none;

  color: #bcc2cc;
  font-size: 16px;

  :hover {
    background: #5546ff;
    color: #ffffff;
  }

  transition: 0.2s;
  cursor: pointer;
`;

export const DeleteImage = styled.div`
  position: absolute;
  margin-left: 147px;
  margin-top: 15px;
`;

export const ImgUploadButton = styled.div`
  position: fixed;
  bottom: 0;

  margin-bottom: 135px;

  display: flex;

  font-size: 14px;

  color: #52596b;

  :hover {
    text-decoration: underline;
    font-weight: 600;
    color: #5546ff;
    text-decoration-color: #5546ff;
  }

  svg {
    margin-right: 8px;
    margin-left: 21px;
  }
  label {
    cursor: pointer;
  }
`;
