import styled from "styled-components";

export const JoinForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

export const EmailBox = styled.div`
  display: flex;
`;
export const Section1 = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 27px;
`;

export const Section2 = styled.div`
  display: flex;
  svg {
    margin-top: 2.7px;
  }
  cursor: pointer;
`;

export const JoinTitle = styled.p`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: #222222;
`;

export const EmailCheckButton = styled.button`
  width: 80px;
  height: 52px;
  margin-top: 48px;
  margin-left: 15px;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${(props) => props.color || "#eeee"};
  color: ${(props) => props.fontColor || "gray"};
  cursor: pointer;
`;

export const LabelText = styled.label`
  text-align: left;
  display: block;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #52596b;
  letter-spacing: 0.15px;
  margin-bottom: 8px;
`;

export const InputJoin = styled.input`
  display: block;
  box-sizing: border-box;
  width: 335px;
  height: 52px;
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

export const InputJoin2 = styled.input`
  display: block;
  box-sizing: border-box;
  width: 239px;
  height: 52px;
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
  background-color: ${(props) => props.color || "#eeee"};
  color: ${(props) => props.fontColor || "gray"};
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const InputButton = styled.div`
  position: absolute;
  bottom: 16px;
  left: 300px;
`;

export const InputButtonEmail = styled.div`
  position: absolute;
  bottom: 28px;
  left: 205px;
`;
