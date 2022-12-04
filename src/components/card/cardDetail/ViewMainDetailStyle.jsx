import styled from "styled-components";

//헤더 타이틀의 의미
export const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 15px;
`;

//헤더 박스 div
export const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
`;

export const Mycard = styled.div`
  width: 375px;
  height: 248px;
  background-color: #f5f5f5;
  /* justify-content: center;
  display: flex; */
`;

//명함의 정보 body
export const St_CardInfo = styled.div`
  align-items: center;
  justify-content: center;
  padding: 17px;
`;

//명함정보 Header
export const St_MidHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* border-top: 1px solid #d6d6d6; */
  padding-top: 20px;
`;

//명함 정보의 key값 박스
export const Detail_Title_Box = styled.div`
  width: 100%;
  max-width: 350px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  float: left;
`;

export const Detail_Div = styled.div`
  display: flex;
  text-align: left;
  justify-content: left;
`;
export const HR = styled.hr`
  margin-top: 40px;
  margin-bottom: 20px;
  background: #e5e5e5;
  height: 1px;
  border: 0;
`;

//명함 정보의 key값
export const St_Detail_Title = styled.div`
  margin-top: 28px;
  color: gray;
  font-size: 14px;
  width: 60px;
`;

//명함 정보의 value값 박스
export const Detail_Body_Box = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

//명함 정보의 value값
export const St_Detail_Body = styled.div`
  margin-top: 28px;
  margin-left: 10px;
  font-size: 14px;
  width: 270px;
`;

//지도 div
export const MapBox = styled.div`
  position: relative;
  z-index: 1;
  margin: 24px auto;
  margin-bottom: 70px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

//
//
// 카드 info

export const St_Card = styled.div`
  width: 100%;
  max-width: 311px;
  height: 176px;
  margin: 32px;
  border-radius: 8px;
  padding: 0px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px #cecece;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const OutLine = styled.div`
  margin: 16px 20px 16px 20px;
`;
export const NameBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-right: 5px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #1a1f27;
`;
export const NameEng = styled.div`
  margin-top: 3px;
  margin-left: 2px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15px;
  color: #8892a0;
`;

export const Position = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #8892a0;
`;

export const Company = styled.div`
  margin-top: 20px;
  color: #1a1f27;
  letter-spacing: 0.15px;
  font-size: 12px;
`;

export const AddressBox = styled.div`
  display: flex;
`;

export const Address = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #8892a0;
  width: 200px;
  display: inline-block;
  align-items: center;
`;

export const NumBox = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

//
//bottom sheet

export const MoreButton = styled.div`
  display: flex;
  position: relative;
  bottom: 10px;
  left: 230px;
  cursor: pointer;
`;

export const CardInfoDetail = styled.div`
  margin: 26px 0px 0px 0px;
  display: flex;
`;

export const Position2 = styled.div`
  font-size: 8px;
  font-weight: 400;
  padding: 6px 16px 6px 16px;
  margin-right: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

export const Department = styled.div`
  font-size: 8px;
  font-weight: 400;
  padding: 6px 16px 6px 16px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;
