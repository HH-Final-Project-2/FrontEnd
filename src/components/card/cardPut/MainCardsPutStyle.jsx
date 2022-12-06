import styled from 'styled-components';

//헤더 박스 div
export const St_Header = styled.div`
  position: fixed;
  top: 0;
  width: 375px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e2e6ef;

  svg {
    margin-left: 14px;
  }
  opacity: 0.9;
  background: white;
`;
//명함 정보 편집 박스
export const PatchBox = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

//헤더 타이틀의 의미
export const St_Title = styled.div`
  width: 100%;
  max-width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 8px;

  font-weight: 500;
  font-size: 16px;
`;
//저장버튼
export const SaveButton = styled.a`
  margin: auto;
  margin-right: 16px;
  color: #277dff;
  cursor: pointer;

  font-weight: 600;
  font-size: 14px;
`;

//input key 제목
export const St_Key = styled.div`
  color: #52596b;
  font-weight: 500;
  font-size: 14px;

  margin-left: 22px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
`;
//input value 값
export const St_value = styled.input`
  width: 335px;
  height: 52px;

  border-radius: 8px;
  border: 1px solid #e2e6ef;
  outline: none;

  padding-left: 16px;
  margin: 8px auto;
  display: flex;

  font-weight: 400;
  font-size: 15px;

  color: #1a1f27;

  ::placeholder {
    color: #bcc2cc;
  }
  :focus {
    border: 1px solid #bbb5ff;
  }
`;

//회사 주소 div
export const St_Address = styled.div`
  margin-top: 5px;
  padding-left: 13px;
`;

export const AddressBox = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: row;
`;

export const SearchAddress = styled.div`
  color: #5546ff;

  font-weight: 400;
  font-size: 12px;
`;

//각 수정 목록의 div
export const Item = styled.div`
  margin-top: 32px;
  font-size: 12px;
  color: #1a1f27;
`;

export const St_Card = styled.label`
  width: 335px;
  height: 184px;
  max-width: 311px;
  margin: 32px auto;

  border: 1px solid #e2e6ef;
  border-radius: 8px;

  padding: 0px;
  display: flex;
  flex-direction: column;
`;
//플러스 표시
export const St_Plus = styled.label`
  width: 100%;
  max-width: 50px;
  height: 50px;
  color: #d6d6d6;

  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
`;
export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
export const ImgBox = styled.div`
  width: 375px;
  height: 120px;
  background-color: #f5f5f5;
  display: flex;
  img {
    margin: 15px 15px 10px 30px;
    width: 162px;
    height: 89px;
    border-radius: 8px;
    padding: 0px;
    background-color: white;
    box-shadow: 0px 0px 5px 0px #cecece;
  }
  div {
    margin: 40px 24px 10px 0px;
  }
`;

export const RadioBox = styled.div`
  display: flex;
  cursor: pointer;
`;
export const RadioDetail = styled.div`
  display: flex;
  justify-content: left;

  margin: 0 0 20px 20px;
  cursor: pointer;
  label {
    cursor: pointer;
    margin-left: 8px;
    font-size: 14px;
  }
  font-weight: 500;
  font-size: 14px;
`;

export const AddressSearch = styled.div`
  font-size: 13px;
  color: grey;
  margin-left: 30px;
  margin-top: 16px;

  :hover {
    text-decoration: underline;
  }
`;
export const CompanyInput = styled.input`
  width: 335px;
  height: 52px;

  border-radius: 8px;
  border: 1px solid #e2e6ef;
  outline: none;

  padding-left: 16px;
  margin: 8px auto;
  display: flex;

  font-weight: 400;
  font-size: 15px;

  color: #1a1f27;

  ::placeholder {
    color: #bcc2cc;
  }
  :focus {
    border: 1px solid #bbb5ff;
  }
`;

export const CompanyBtn = styled.button`
  width: 100%;
  max-width: 160px;
  height: 52px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  padding-left: 10px;
  display: flex;
  color: #1a1f27;
  letter-spacing: 0.15px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  background-color: #e5e5e5;
  color: grey;
  padding: 15px 35px;
  margin: 20px 0px 10px 30px;
`;

export const Essential = styled.a`
  margin-left: 3px;
  color: #5546ff;
  font-weight: 600;
  font-size: 14px;
`;

export const AssistiveText = styled.div`
  color: #f82323;

  font-weight: 400;
  font-size: 12px;
  margin-left: 26px;
`;
