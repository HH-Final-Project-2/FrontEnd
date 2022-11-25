import axios from "axios";
import styled from "styled-components";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __viewGet } from "../../../../src/redux/modules/CardsSlice";
import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

const ViewMainDetailPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const view = useSelector((state) => state.PostReducer.viewList);
  console.log(view);
  const viewArr = [view];

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

  const deleteClickHandler = () => {
    const config = {
      headers: {
        Authorization: accessToken,
        "Refresh-Token": refreshToken,
      },
    };
    axios
      .delete(`https://bkyungkeem.shop/api/businessCards/${id}`, config)
      .then(function (response) {
        console.log(response);
        viewArr.filter((x) => x.id !== response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    alert("DELETE SECCESS");
    navigate("/cards");
  };
  const fixClickHandler = () => {
    navigate(`/posts/${view.id}/put`);
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
      </St_Header>
      <Mycard>{/* <MycardItem /> */}</Mycard>

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
    </Layout>
    // <div key={id}>
    //   <div>{view.cardName}</div>
    //   <div>{view.email}</div>
    //   <div>{view.company}</div>
    //   <div>{view.phoneNum}</div>
    //   <div>{view.companyType}</div>
    //   <button onClick={deleteClickHandler}>삭제</button>
    //   <button onClick={fixClickHandler}>수정</button>
    //   {view !== undefined ? (
    //     <div>
    //       <Map
    //         center={map.center}
    //         isPanto={map.isPanto}
    //         style={{
    //           width: " 335px",
    //           height: "192px",
    //         }}
    //       >
    //         <MapMarker
    //           position={{ lat: map.center.lat, lng: map.center.lng }}
    //         ></MapMarker>
    //       </Map>
    //     </div>
    //   ) : null}
    // </div>
  );
};

export default ViewMainDetailPost;

//헤더 타이틀의 의미
const St_Title = styled.div`
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
const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
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
  width: 50px;
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
  margin: 24px auto;
  /* margin-left: 20px;
  margin-right: 20px; */
  align-items: center;
  display: flex;
  justify-content: center;
`;
