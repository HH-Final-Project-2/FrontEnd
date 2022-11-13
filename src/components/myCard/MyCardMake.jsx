import React, { useState } from 'react';
import styled from 'styled-components';
import MyLayout from './MyLayout';
import { useNavigate } from 'react-router';

import { _MakeCard } from '../../redux/modules/mycardSlice';
import { useDispatch } from 'react-redux';

const MyCardMake = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [makeinfo, setMakeinfo] = useState({
    cardname: '',
    engName: '',
    email: '',
    phoneNum: '',
    company: '',
    // companyAddress:'',
    department: '',
    postion: '',
    tel: '',
    fax: '',
  });

  const {
    cardname,
    engName,
    email,
    phoneNum,
    company,
    department,
    postion,
    tel,
    fax,
  } = makeinfo;

  const onChage = (e) => {
    const { value, name } = e.target;
    setMakeinfo({
      ...makeinfo,
      [name]: value,
    });
  };

  const PostHandler = () => {
    dispatch(_MakeCard(makeinfo));
    nav('/mypage');
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
        <St_Title>명함 만들기</St_Title>

        <SaveButton onClick={PostHandler}>저장</SaveButton>
      </St_Header>
      <PatchBox>
        <Item>
          <St_Key>이름</St_Key>
          <St_value
            name="cardname"
            value={cardname}
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
            name="postion"
            value={postion}
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
export default MyCardMake;

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
