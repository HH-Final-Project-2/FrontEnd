import styled from 'styled-components';

//헤더 타이틀의 의미
export const St_Title = styled.div`
  width: 100%;
  max-width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 8px;

  font-weight: 500;
  font-size: 16px;
`;

//헤더 박스 div
export const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 16px;
`;

export const Mycard = styled.div`
  width: 100%;
  height: 248px;
  background-color: #f5f5f5;
`;

//명함의 정보 body
export const St_CardInfo = styled.div`
  align-items: center;
  justify-content: center;
  padding: 17px;
`;

export const SectionLine = styled.div`
  height: 1px;
  background: #e2e6ef;
`;

//명함정보 Header
export const St_MidHeader = styled.div`
  margin-top: 6px;

  font-weight: 600;
  font-size: 18px;
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
  margin-top: 20px;
  margin-bottom: 10px;
  background: #f5f6fa;
  height: 1px;
  border: 0;
`;

//명함 정보의 key값
export const St_Detail_Title = styled.div`
  margin-top: 28px;
  color: #8892a0;
  font-weight: 500;
  font-size: 14px;
  width: 60px;
`;

export const St_Detail_Mobile = styled.div`
  margin-top: 28px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 14px;

  width: 250px;

  color: #1a1f27;

  text-decoration: underline;
`;

//명함 정보의 value값 박스
export const Detail_Body_Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

//명함 정보의 value값
export const St_Detail_Body = styled.div`
  margin-top: 28px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 14px;

  width: 250px;

  color: #1a1f27;
`;

//지도 div
export const MapBox = styled.div`
  margin: 24px auto;
`;

// 카드 info
export const St_Card = styled.div`
  width: 311px;
  height: 176px;
  margin: 32px auto;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

export const OutLine = styled.div`
  padding: 16px 0px 0px 20px;
  display: flex;
  flex-direction: column;
`;
export const NameBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  margin-right: 5px;
  font-weight: 500;
  font-size: 14px;

  color: #1a1f27;
`;

export const Name2 = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 600;
  margin-top: 6px;
  margin-right: auto;
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
  margin-top: 1px;
  font-size: 12px;
  font-weight: 500;
  color: #8892a0;
`;

export const Company = styled.div`
  max-width: 250px;
  margin-top: 60px;
  margin-bottom: 3px;

  color: #8892a0;
  font-weight: 500;
  font-size: 12px;
`;

export const AddressBox = styled.div`
  display: flex;
`;

export const Address = styled.div`
  max-width: 270px;
  height: 22px;

  font-weight: 500;
  font-size: 12px;
  color: #1a1f27;

  display: inline-block;
  align-items: center;
`;

export const Address2 = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #1a1f27;

  margin-right: 10px;

  display: inline-block;
  align-items: center;
`;

export const NumBox = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

//
//bottom sheet

export const MoreButton = styled.div`
  width: 65px;
  margin-bottom: 12px;
  margin-left: auto;
  cursor: pointer;
`;

export const CardInfoDetail = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const Position2 = styled.div`
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;

  color: #52596b;

  padding: 3px 8px 3px 8px;
  margin-right: 8px;
  background: #f5f6fa;
  border-radius: 4px;
`;

export const Department = styled.div`
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;

  color: #52596b;

  padding: 3px 8px 3px 8px;
  background: #f5f6fa;
  border-radius: 4px;
`;
