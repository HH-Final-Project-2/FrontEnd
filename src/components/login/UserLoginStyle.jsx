import styled from 'styled-components';

export const JoinForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
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
  font-size: 14px;
  border-radius: 8px;
  ::placeholder {
    color: #bcc2cc;
  }
  &:focus {
    border: 1px solid #bcc2cc;
    outline: #bcc2cc;
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
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const SignUpBox = styled.div`
  width: 335px;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;
  color: #52596b;
`;
export const LogoBox = styled.div`
  width: 335px;
  display: flex;
  justify-content: center;
  margin-top: 203px;
  margin-bottom: 65px;
  color: #52596b;
`;
