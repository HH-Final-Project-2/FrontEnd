import styled from 'styled-components';

export const EditBox = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
`;

export const EditSection1 = styled.div`
  position: relative;
  width: 375px;
  height: 56px;
  top: 37px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;
export const EditSection1Title = styled.div`
  position: relative;
  left: 21px;
  font-weight: 600;
`;
export const SelectJob = styled.div`
  select {
    width: 375px;
    height: 56px;
    margin-top: 17px;
    border: none;
    border-bottom: 1px solid #e2e2e2;
    outline: none;
  }
  select:after {
    color: red;
  }
`;

export const EditTitle = styled.div`
  input {
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 1px solid #e2e2e2;
    outline: none;
  }
  input::placeholder {
    color: #bdbdbd;
  }
`;

export const EditBody = styled.div`
  input {
    width: 100%;
    height: 500px;
    border: none;
    outline: none;
  }
  input::placeholder {
    color: #bdbdbd;
  }
`;

export const ImageUpload = styled.div`
  /* label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  label input {
    width: 100%;
    opacity: 1;
    cursor: pointer;
  } */
`;

export const EditBtn = styled.button`
  width: 343px;
  height: 52px;
  margin-left: 16px;
  border: none;

  background: #e2e2e2;
  border-radius: 8px;

  :hover {
    filter: brightness(0.1);
  }
`;
