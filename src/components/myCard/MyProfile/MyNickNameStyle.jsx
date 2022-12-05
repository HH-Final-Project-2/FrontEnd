import styled from 'styled-components';

export const St_Title = styled.div`
  font-weight: 500;
  font-size: 16px;

  margin-left: 8px;
`;

//헤더 박스 div
export const St_Header = styled.div`
  width: 373px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: left;

  padding-left: 16px;

  color: #1a1f27;

  border-bottom: 1px solid #e2e6ef;
`;

export const St_value = styled.input`
  width: 335px;
  height: 52px;
  padding: 14px 40px 14px 14px;

  border: 1px solid #bcc2cc;
  border-radius: 8px;
  outline: none;

  background: #ffffff;

  font-weight: 400;
  font-size: 16px;
`;

export const InputBox = styled.div`
  margin: 32px auto;
`;

export const ButtonX = styled.div`
  display: flex;
  width: 22px;
  height: 22px;
  position: relative;
  left: 320px;
  bottom: 67px;
  cursor: pointer;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 100px;
`;

export const CancelBtn = styled.button`
  width: 160px;
  height: 52px;

  background: #ffffff;

  border: 1px solid #e2e6ef;
  border-radius: 8px;

  font-weight: 500;
  font-size: 16px;

  color: #1a1f27;
  cursor: pointer;
`;

export const SaveBtn = styled.button`
  width: 160px;
  height: 52px;
  margin-left: 16px;

  background: #5546ff;
  border-radius: 8px;
  border: none;

  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;
