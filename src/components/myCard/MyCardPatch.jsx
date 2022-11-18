import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyLayout from './MyLayout';
import { useNavigate } from 'react-router';
import { _getMakeCard, _PutCard } from '../../redux/modules/mycardSlice';
import { useDispatch, useSelector } from 'react-redux';

const MyCardPatch = () => {
  //내 명함 수정 페이지 컴포넌트
  const nav = useNavigate();
  const dispatch = useDispatch();

  const cardinfo = useSelector((state) => state.cardinfo.cardinfo.data);
  console.log(cardinfo === undefined);
  console.log(cardinfo);

  const [makeinfo, setMakeinfo] = useState({
    cardName: cardinfo.cardName,
    engName: cardinfo.engName,
    email: cardinfo.email,
    phoneNum: cardinfo.phoneNum,
    company: cardinfo.company,
    // companyAddress:'',
    department: cardinfo.department,
    position: cardinfo.position,
    tel: cardinfo.tel,
    fax: cardinfo.fax,
    id: cardinfo.id,
  });

  const {
    cardName,
    engName,
    email,
    phoneNum,
    company,
    department,
    position,
    tel,
    fax,
    id,
  } = makeinfo;

  const onChage = (e) => {
    const { value, name } = e.target;
    setMakeinfo({
      ...makeinfo,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(_getMakeCard());
    console.log('마운트');
  }, []);

  useEffect(() => {
    if (cardinfo === undefined) {
      return dispatch(_getMakeCard());
    }
  }, []);

  useEffect(() => {
    setMakeinfo(cardinfo);
  }, [cardinfo]);

  const updateHandler = () => {
    dispatch(_PutCard(makeinfo));
    nav('/mypage/cardinfo');
  };

  if (cardinfo === undefined) return;

  return (
    <MyLayout>
      <St_Header>
        <button
          onClick={() => {
            nav(-1);
          }}
        >
          이전
        </button>
        <St_Title>명함 정보 편집</St_Title>

        <SaveButton onClick={updateHandler}>저장</SaveButton>
      </St_Header>
      <PatchBox>
        <Item>
          <St_Key>이름</St_Key>
          <St_value
            name="cardName"
            value={cardName}
            onChange={onChage}
          ></St_value>
        </Item>
        <Item>
          <St_Key>영문이름</St_Key>
          <St_value
            name="engName"
            value={engName}
            onChange={onChage}
          ></St_value>
        </Item>
        <Item>
          <St_Key>이메일</St_Key>
          <St_value name="email" value={email} onChange={onChage}></St_value>
        </Item>
        <Item>
          <St_Key>연락처</St_Key>
          <St_value
            name="phoneNum"
            value={phoneNum}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>회사</St_Key>
          <St_value
            name="company"
            value={company}
            onChange={onChage}
          ></St_value>
          <St_Address>서울 강남구 역삼로 123 (ABC 빌딩) 5층 ABC LAB</St_Address>
        </Item>
        <Item>
          <St_Key>직책</St_Key>
          <St_value
            name="position"
            value={position}
            onChange={onChage}
          ></St_value>
        </Item>
        <Item>
          <St_Key>부서</St_Key>
          <St_value
            name="department"
            value={department}
            onChange={onChage}
          ></St_value>
        </Item>
        <Item>
          <St_Key>Tel</St_Key>
          <St_value name="tel" value={tel} onChange={onChage}></St_value>
        </Item>
        <Item>
          <St_Key>Fax</St_Key>
          <St_value name="fax" value={fax} onChange={onChage}></St_value>
        </Item>
      </PatchBox>
    </MyLayout>
  );
};
export default MyCardPatch;

//헤더 박스 div
const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid;
`;
//명함 정보 편집 박스
const PatchBox = styled.div`
  padding: 17px;
  margin: auto;
`;

//헤더 타이틀의 의미
const St_Title = styled.div`
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
const SaveButton = styled.button`
  margin: auto;
  margin-right: 10px;
`;
//input key 제목
const St_Key = styled.div`
  width: 100%;
  color: #6b6b6b;
  font-size: 13px;
  padding-left: 7px;
`;
//input value 값
const St_value = styled.input`
  width: 100%;
  max-width: 330px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  margin: auto;
  display: flex;
`;
//회사 주소 div
const St_Address = styled.div`
  margin-top: 5px;
  padding-left: 25px;
`;
//각 수정 목록의 div
const Item = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #6b6b6b;
`;
