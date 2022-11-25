import styled from 'styled-components';

//헤더 타이틀의 의미
export const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 85px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 4px;
`;

//헤더 박스 div
export const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 12px;
  border-bottom: 1px solid #d6d6d6;
`;

export const Mycard = styled.div`
  width: 375px;
  height: 248px;
  background-color: #f5f5f5;
  display: flex;
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
  width: 45px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  float: left;
`;

//명함 정보의 key값
export const St_Detail_Title = styled.div`
  margin-top: 28px;
  color: gray;
  font-size: 14px;
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
  margin-left: 15px;
  margin-top: 28px;
  font-size: 14px;
  align-items: center;
`;

//지도 div
export const MapBox = styled.div`
  width: 100%;
  margin: 24px auto;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
