import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { useNavigate } from 'react-router';
import MyCardFooter from '../../footer/MyCardFooter';
import MycardItem from '../MycardItem';
import { useDispatch, useSelector } from 'react-redux';
import { _getMakeCard } from '../../../redux/modules/mycardSlice';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { ReactComponent as Icput } from '../../../images/ic-put.svg';
import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';
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
  SectionLine,
  St_Detail_Phone,
  MidLine,
  St_Detail_Tel,
  St_Detail_Fax,
} from '../MyCardInfo/MyCardInfoStyle';
import { SectionFooter } from '../../footer/FooterStyle';

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
        <Icbefore
          style={{ cursor: 'pointer' }}
          onClick={() => {
            nav('/mypage');
          }}
        />

        <St_Title>명함 상세</St_Title>
      </St_Header>
      <Mycard>
        <MycardItem />
      </Mycard>
      <SectionLine />
      <St_CardInfo>
        <St_MidHeader>
          <div>명함정보</div>
          <Icput
            style={{ cursor: 'pointer' }}
            onClick={() => {
              nav(`/mypage/cardpatch`);
            }}
          />
        </St_MidHeader>

        {/* 명함정보의 각 개체에 대한 div */}
        <Detail_Title_Box>
          <St_Detail_Title>연락처</St_Detail_Title>
          <St_Detail_Title>이메일</St_Detail_Title>
          <St_Detail_Title>유선전화</St_Detail_Title>
          <St_Detail_Title>팩스</St_Detail_Title>
          <MidLine />
          <St_Detail_Title>회사</St_Detail_Title>
          <St_Detail_Title>직책</St_Detail_Title>
          <St_Detail_Title>부서</St_Detail_Title>
          <St_Detail_Title>주소</St_Detail_Title>
        </Detail_Title_Box>
        {/* 명함정보의 각 개체의 정보에 대한 div */}
        <Detail_Body_Box>
          <St_Detail_Phone>{cardinfo.phoneNum}</St_Detail_Phone>
          <St_Detail_Body>{cardinfo.email}</St_Detail_Body>
          <St_Detail_Tel>{cardinfo.tel}</St_Detail_Tel>
          <St_Detail_Fax>{cardinfo.fax}</St_Detail_Fax>
          <MidLine />
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
      <SectionFooter />
    </Layout>
  );
};
export default MyCardInfo;
