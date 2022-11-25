import styled from 'styled-components';

//헤더 박스 div
export const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid;
  padding-left: 12px;
`;
//명함 정보 편집 박스
export const PatchBox = styled.div`
  padding: 17px;
`;
//헤더 타이틀의 의미
export const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 4px;
`;
//저장버튼
export const SaveButton = styled.a`
  margin: auto;
  margin-right: 20px;
  color: #277dff;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
`;
//input key 제목
export const St_Key = styled.div`
  width: 100%;
  color: #6b6b6b;
  font-size: 13px;
  padding-left: 7px;
  margin-bottom: 8px;
`;
//input value 값
export const St_value = styled.input`
  letter-spacing: 0.15px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  max-width: 330px;
  height: 42px;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  margin: auto;
  display: flex;
  color: #1a1f27;
`;
//회사 주소 div
export const St_Address = styled.div`
  margin-top: 5px;
`;
export const AddressBox = styled.div`
  margin-left: 8px;
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
  margin-top: 10px;
  font-size: 12px;
  color: #6b6b6b;
`;
export const CompanyIcon = styled.div`
  height: 0px;
  position: relative;
  display: flex;
  top: 10px;
  left: 18px;
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
