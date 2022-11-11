import React, { useState } from 'react';
import styled from 'styled-components';
import MyLayout from './MyLayout';
import { useNavigate } from 'react-router';
const MyCardPatch = () => {
  const nav = useNavigate();

  const [info, setInfo] = useState({
    ponenum: '',
  });

  const { ponenum } = info;

  const onChage = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
    console.log(ponenum);
  };

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
        {/*if 명함이 있다면 명함 정보 편집 아니면 명함 만들기가 보이게 하기*/}
        <SaveButton>저장</SaveButton>
      </St_Header>
      <PatchBox>
        <Item>
          <St_Key>연락처</St_Key>
          <St_value
            name="ponenum"
            value={ponenum}
            onChange={onChage}
          ></St_value>
        </Item>
        <Item>
          <St_Key>이메일</St_Key>
          <St_value></St_value>
        </Item>
        <Item>
          <St_Key>회사</St_Key>
          <St_value></St_value>
          <St_Address>서울 강남구 역삼로 123 (ABC 빌딩) 5층 ABC LAB</St_Address>
        </Item>
        <Item>
          <St_Key>직책</St_Key>
          <St_value></St_value>
        </Item>
        <Item>
          <St_Key>부서</St_Key>
          <St_value></St_value>
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

const SaveButton = styled.button`
  margin: auto;
  margin-right: 10px;
`;

const St_Key = styled.div`
  width: 100%;
  color: #6b6b6b;
  font-size: 13px;
  padding-left: 7px;
`;

const St_value = styled.input`
  width: 100%;
  max-width: 330px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  margin: auto;
  display: flex;
`;

const St_Address = styled.div`
  margin-top: 5px;
  padding-left: 25px;
`;

const Item = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #6b6b6b;
`;
