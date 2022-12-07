import styled from "styled-components";

export const JoinForm = styled.form`
  max-width: 500px;
  margin: 0 auto;

  svg {
    cursor: pointer;
  }
`;

export const InputJoin = styled.input`
  display: block;
  box-sizing: border-box;
  width: 335px;
  height: 52px;
  border-radius: 4px;
  border: 1px solid #e2e6ef;
  padding: 10px 15px;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;

  ::placeholder {
    color: #bcc2cc;
  }

  :focus {
    border: 1px solid #bbb5ff;
  }
`;

export const ErrorText = styled.p`
  color: #f82323;
  margin: 0 0 15px 0;
  font-size: 14px;
`;

export const ButtonJoin = styled.button`
  display: block;
  appearance: none;
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
  width: 335px;
  height: 52px;
  border: none;
  outline: none;
  background: #5546ff;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const SignUpBox = styled.div`
  max-width: 60%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color: #52596b;
  margin: auto;
  margin-top: 24px;
`;

export const LogoBox = styled.div`
  width: 335px;
  display: flex;
  justify-content: center;
  margin-top: 203px;
  margin-bottom: 65px;
  color: #52596b;
`;
