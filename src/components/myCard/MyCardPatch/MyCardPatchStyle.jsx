import styled from 'styled-components';
// Item으로 묶여져 있고, 안에 St_Key,St_Value

//헤더 박스 div
export const St_Header = styled.div`
  position: fixed;
  top: 0;
  width: 373px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e2e6ef;

  svg {
    margin-left: 14px;
  }

  background: white;
`;

export const SectionHeader = styled.div`
  height: 56px;
  background: white;
`;
//명함 정보 편집 박스
export const PatchBox = styled.div`
  margin-top: 40px;
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
  line-height: 20px;

  margin-left: 20px;
  margin-bottom: 8px;
`;
//input value 값
export const St_value = styled.input`
  width: 335px;
  height: 52px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  padding: 14px;
  border: 1px solid #e2e6ef;
  border-radius: 8px;
  outline: none;

  margin: auto;
  display: flex;
  color: #1a1f27;

  :focus {
    border: 1px solid #bbb5ff;
  }
`;
//회사 주소 div
export const St_Address = styled.div`
  margin-top: 6px;
`;
export const AddressBox = styled.div`
  margin-left: 11px;
  display: flex;
  flex-direction: row;
`;
export const SearchAddress = styled.div`
  display: flex;
  width: 250px;
  padding-left: 11px;
`;
//각 수정 목록의 div
export const Item = styled.div`
  font-size: 12px;
  color: #6b6b6b;

  margin-bottom: 32px;
`;
export const CompanyIcon = styled.div`
  height: 0px;
  position: relative;
  display: flex;
  top: 15px;
  left: 36px;
`;
export const AddressIcon = styled.div`
  height: 0px;
  position: relative;
  display: flex;
  left: 12px;
`;
export const Essential = styled.a`
  margin-left: 3px;
  color: #5546ff;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;
