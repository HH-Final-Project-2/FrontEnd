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
  width: 373px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 6px;

  font-weight: 500;
  font-size: 16px;
`;

//명함 정보의 key값 박스
export const Detail_Title_Box = styled.div`
  width: 60px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  float: left;
`;

//명함 정보의 key값
export const St_Detail_Title = styled.div`
  margin-top: 28px;
  color: #8892a0;
  font-weight: 500;
  font-size: 14px;
`;

export const St_Detail_Phone = styled.div`
  margin-left: 10px;
  margin-top: 28px;
  font-weight: 500;
  font-size: 14px;
  text-decoration-line: underline;

  color: #1a1f27;
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
  margin-left: 10px;
  margin-top: 28px;
  font-weight: 500;
  font-size: 14px;

  color: #1a1f27;
`;

//지도 div
export const MapBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
  margin-bottom: 130px;
`;

export const MidLine = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 1px;
  background: #f5f6fa;
`;
