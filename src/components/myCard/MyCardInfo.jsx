import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import MyCardFooter from "../footer/MyCardFooter";
import MycardItem from "../myCard/MycardItem";
import { useDispatch, useSelector } from "react-redux";
import { _getMakeCard } from "../../redux/modules/mycardSlice";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MyCardInfo = () => {
  //명함 상세보기 페이지 컴포넌트
  const nav = useNavigate();
  const dispatch = useDispatch();

  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);

  useEffect(() => {
    dispatch(_getMakeCard());
  }, [dispatch]);

  useEffect(() => {
    SearchMap();
  }, [Map, MapMarker, cardinfo]);

  const { kakao } = window;

  const [map, setMap] = useState({
    center: { lat: 37.503680684679125, lng: 126.95701252583554 },
    isPanto: true,
    level: 3,
  });

  const SearchMap = () => {
    const geocoder = new kakao.maps.services.Geocoder();

    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setMap({
          center: { lat: newSearch.y, lng: newSearch.x },
        });
      }
    };
    geocoder.addressSearch(`${cardinfo.companyAddress}`, callback);
  };

  if (cardinfo === undefined) return;

  return (
    <Layout>
      <St_Header>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
          onClick={() => {
            nav("/mypage");
          }}
        >
          <path
            d="M15 4L8 11.5L15 19"
            stroke="#1A1F27"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <St_Title>명함 상세</St_Title>
      </St_Header>
      <Mycard>
        <MycardItem />
      </Mycard>

      <St_CardInfo>
        <St_MidHeader>
          <div>명함정보</div>
          <svg
            width="23"
            height="14"
            viewBox="0 0 23 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
            onClick={() => {
              nav(`/mypage/cardpatch`);
            }}
          >
            <path
              d="M10.3151 9.99862V0.910221H9.01957V3.18715H7.10037V4.24586H9.01957V5.54144H7.10037V6.62431H9.01957V9.99862H10.3151ZM7.29374 6.88536C6.81515 6.93854 6.30755 6.98204 5.79512 7.02072V2.91644H6.96017V1.86257H0.453268V2.91644H1.60382V7.16575C1.07689 7.17058 0.578958 7.17541 0.119704 7.17541L0.2744 8.26796C2.24194 8.25829 5.0023 8.21478 7.35175 7.84254L7.29374 6.88536ZM4.54788 2.91644V7.0884C3.98227 7.1174 3.41667 7.13191 2.86556 7.14641V2.91644H4.54788ZM3.64388 9.26865H2.33379V12.9088H10.6342V11.8453H3.64388V9.26865ZM21.216 7.54282H22.5164V0.910221H21.216V7.54282ZM16.2416 4.79696C16.7975 5.99586 17.8804 6.92887 19.3113 7.36878L19.9639 6.35359C18.0786 5.80249 16.8893 4.39088 16.8893 2.86809V2.73273H19.5869V1.6837H12.8237V2.73273H15.5793V2.86809C15.5696 4.4779 14.3804 5.97652 12.466 6.56146L13.1283 7.58149C14.5979 7.09807 15.6953 6.08287 16.2416 4.79696ZM15.7678 9.48619V8.11809H14.4964V13.0055H22.5164V8.11809H21.2257V9.48619H15.7678ZM15.7678 11.9517V10.5062H21.2257V11.9517H15.7678Z"
              fill="#277DFF"
            />
          </svg>
        </St_MidHeader>

        {/* 명함정보의 각 개체에 대한 div */}
        <Detail_Title_Box>
          <St_Detail_Title>연락처</St_Detail_Title>
          <St_Detail_Title>이메일</St_Detail_Title>
          <St_Detail_Title>회사</St_Detail_Title>
          <St_Detail_Title>직책</St_Detail_Title>
          <St_Detail_Title>부서</St_Detail_Title>
          <St_Detail_Title>주소</St_Detail_Title>
        </Detail_Title_Box>

        {/* 명함정보의 각 개체의 정보에 대한 div */}
        <Detail_Body_Box>
          <St_Detail_Body>{cardinfo.phoneNum}</St_Detail_Body>
          <St_Detail_Body>{cardinfo.email}</St_Detail_Body>
          <St_Detail_Body>{cardinfo.company}</St_Detail_Body>
          <St_Detail_Body>{cardinfo.position}</St_Detail_Body>
          <St_Detail_Body>{cardinfo.department}</St_Detail_Body>
          <St_Detail_Body>{cardinfo.companyAddress}</St_Detail_Body>
        </Detail_Body_Box>
        <MapBox>
          <Map
            center={map.center}
            isPanto={map.isPanto}
            style={{
              display: 'flex',
              width: '100%',
              maxWidth: ' 325px',
              height: '192px',
            }}
          >
            <MapMarker
              position={{ lat: map.center.lat, lng: map.center.lng }}
            ></MapMarker>
          </Map>
        </MapBox>
      </St_CardInfo>
      <MyCardFooter />
    </Layout>
  );
};
export default MyCardInfo;

//헤더 타이틀의 의미
const St_Title = styled.div`
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
const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 12px;
  border-bottom: 1px solid #d6d6d6;
`;

const Mycard = styled.div`
  width: 375px;
  height: 248px;
  background-color: #f5f5f5;
  /* justify-content: center;
  display: flex; */
`;

//명함의 정보 body
const St_CardInfo = styled.div`
  align-items: center;
  justify-content: center;
  padding: 17px;
`;

//명함정보 Header
const St_MidHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* border-top: 1px solid #d6d6d6; */
  padding-top: 20px;
`;

//명함 정보의 key값 박스
const Detail_Title_Box = styled.div`
  width: 45px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  float: left;
`;

//명함 정보의 key값
const St_Detail_Title = styled.div`
  margin-top: 28px;
  color: gray;
  font-size: 14px;
`;

//명함 정보의 value값 박스
const Detail_Body_Box = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

//명함 정보의 value값
const St_Detail_Body = styled.div`
  margin-left: 15px;
  margin-top: 28px;
  font-size: 14px;
  align-items: center;
`;

//지도 div
const MapBox = styled.div`
  width: 100%;
  margin: 24px auto;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
