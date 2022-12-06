import styled from 'styled-components';

export const WriteBox = styled.div`
  margin: 0 auto;
  background-color: white;
`;

export const WriteSection1 = styled.div`
  width: 375px;
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

export const WriteSection1Title = styled.div`
  margin-left: 14px;
  font-weight: 500;
  font-size: 16px;

  color: #1a1f27;
`;

export const SelectJob = styled.div`
  select {
    padding-left: 6px;
    width: 375px;
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

export const WriteBody = styled.div`
  textarea {
    padding: 10px;
    margin-top: 6px;
    width: 375px;
    height: 45px;
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

export const WriteBtn = styled.button`
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

  transition: 0.2s;
  cursor: pointer;
`;

export const WriteBtnFill = styled.button`
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
