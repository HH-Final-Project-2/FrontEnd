import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __viewGet } from "../../../../src/redux/modules/CardsSlice";
import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CardsFooter from "../../footer/CardsFooter";
import CardBottomSheet from "../../bottomSheet/CardBottomSheet";
import {
  St_Title,
  St_Header,
  Mycard,
  St_CardInfo,
  St_MidHeader,
  Detail_Title_Box,
  St_Detail_Title,
  Detail_Body_Box,
  St_Detail_Body,
  MapBox,
  St_Card,
  OutLine,
  NameBox,
  Name,
  NameEng,
  Position,
  Company,
  AddressBox,
  Address,
  NumBox,
  MoreButton,
} from "./ViewMainDetailStyle";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

const ViewMainDetailPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const view = useSelector((state) => state.PostReducer.viewList);

  useEffect(() => {
    dispatch(__viewGet(id));
  }, [dispatch]);

  useEffect(() => {
    SearchMap();
  }, [Map, MapMarker, view]);

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
    geocoder?.addressSearch(`${view.companyAddress}`, callback);
  };

  if (view === undefined) return;

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
            navigate("/cards");
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
        <MoreButton>
          <CardBottomSheet id={id} detail={view} />
        </MoreButton>
      </St_Header>
      <Mycard>
        <St_Card>
          <OutLine>
            <NameBox>
              <Name>{view.cardName}</Name>
              <Position>{view.position}</Position>
            </NameBox>
            <NameEng>{view.engName}</NameEng>
            <Company>{view.company}</Company>
            <AddressBox>
              <Address>{view.companyAddress}</Address>
            </AddressBox>
            <NumBox
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <Name>M.</Name>
              <Address>{view.phoneNum}</Address>
              <Name>T.</Name>
              <Address>{view.tel}</Address>
            </NumBox>
          </OutLine>
        </St_Card>
      </Mycard>

      <St_CardInfo>
        <St_MidHeader>
          <div>{view.cardName}</div>
        </St_MidHeader>

        {/* 명함정보의 각 개체에 대한 div */}
        <Detail_Title_Box>
          <St_Detail_Title>연락처</St_Detail_Title>
          <St_Detail_Title>이메일</St_Detail_Title>
          <St_Detail_Title>유선전화</St_Detail_Title>
          <St_Detail_Title>팩스</St_Detail_Title>
          <St_Detail_Title>회사</St_Detail_Title>
          <St_Detail_Title>직책</St_Detail_Title>
          <St_Detail_Title>부서</St_Detail_Title>
          <St_Detail_Title>주소</St_Detail_Title>
        </Detail_Title_Box>
        {/* 명함정보의 각 개체의 정보에 대한 div */}
        <Detail_Body_Box>
          <St_Detail_Body>{view.phoneNum}</St_Detail_Body>
          <St_Detail_Body>{view.email}</St_Detail_Body>
          <St_Detail_Body>{view.tel}</St_Detail_Body>
          <St_Detail_Body>{view.fax}</St_Detail_Body>
          <St_Detail_Body>{view.company}</St_Detail_Body>
          <St_Detail_Body>{view.position}</St_Detail_Body>
          <St_Detail_Body>{view.department}</St_Detail_Body>
          <St_Detail_Body>{view.companyAddress}</St_Detail_Body>
        </Detail_Body_Box>
        <MapBox>
          <Map
            center={map.center}
            isPanto={map.isPanto}
            style={{
              width: " 335px",
              height: "192px",
            }}
          >
            <MapMarker
              position={{ lat: map.center.lat, lng: map.center.lng }}
            ></MapMarker>
          </Map>
        </MapBox>
      </St_CardInfo>
      <CardsFooter />
    </Layout>
  );
};

export default ViewMainDetailPost;
