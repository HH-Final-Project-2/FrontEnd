import styled from "styled-components";
import LogoSrc from "../../../images/Frame 2317.svg";

//헤더 박스 div
export const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid;
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
  font-weight: 600;
  width: 100%;
  max-width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 15px;
`;
//저장버튼
export const SaveButton = styled.a`
  margin: auto;
  margin-right: 10px;
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
  color: #52596b;
  font-size: 13px;
  margin-left: 22px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;
//input value 값
export const St_value = styled.input`
  width: 100%;
  max-width: 320px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  padding-left: 10px;
  margin: auto;
  display: flex;
  color: #1a1f27;
  letter-spacing: 0.15px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* background-image: '/images/ic-company.png'; */
`;

//회사 주소 div
export const St_Address = styled.div`
  margin-top: 5px;
  padding-left: 25px;
`;

export const AddressBox = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: row;
`;

export const SearchAddress = styled.div`
  display: flex;
  width: 250px;
`;

//각 수정 목록의 div
export const Item = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #6b6b6b;
`;

export const St_Card = styled.label`
  width: 100%;
  max-width: 311px;
  height: 176px;
  margin: 32px auto;
  border-radius: 8px;
  padding: 0px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px #cecece;
  display: flex;
  flex-direction: column;
`;
//플러스 표시
export const St_Plus = styled.label`
  width: 100%;
  max-width: 50px;
  height: 50px;
  color: #d6d6d6;
  /* border: 2px solid; */
  /* border-radius: 50px; */
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
  justify-content: left;
`;
export const RadioDetail = styled.div`
  display: flex;
  justify-content: left;
  margin: 10px 15px 30px 25px;
  input[type="radio"]:checked:after {
    background: $white no-repeat center center;
    background-image: url("/src/images/Property 1=deselected.png");
    cursor: pointer;
    outline: none;
    appearance: none;
  }
  label {
    margin-left: 6px;
    font-size: 14px;
  }
`;
