import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';

import { useNavigate } from 'react-router';

import {
  _getMakeCard,
  _MakeCard,
  _PutCard,
} from '../../redux/modules/mycardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { __imgPost } from '../../redux/modules/CardsSlice';
const MyCardMake = () => {
  //명함 만들기 페이지 컴포넌트
  const nav = useNavigate();
  const dispatch = useDispatch();
  const searchinfo = useSelector((state) => state.cardinfo.companyInfo);
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);
  const imgGet = useSelector((state) => state.PostReducer.img);

  console.log(cardinfo);
  console.log(imgGet);

  const [makeinfo, setMakeinfo] = useState({
    // cardName: '',
    // engName: '',
    // email: '',
    // phoneNum: '',
    cardName: localStorage.getItem('cardName'),
    engName: localStorage.getItem('engName'),
    email: localStorage.getItem('email'),
    phoneNum: localStorage.getItem('phoneNum'),
    company: '',
    companyAddress: '',
    department: '',
    position: '',
    tel: '',
    fax: '',
  });

  const {
    cardName,
    engName,
    email,
    phoneNum,
    company,
    companyAddress,
    department,
    position,
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

  const mediaChangeHandler = (e) => {
    e.preventDefault();
    const file = new FormData();
    file.append('cardImg', e.target.files[0]);
    dispatch(__imgPost(file));
  };

  const PostHandler = () => {
    dispatch(
      _MakeCard({
        cardName,
        engName,
        email,
        phoneNum,
        company:
          searchinfo.companyName !== undefined
            ? searchinfo.companyName
            : company,
        department,
        companyAddress:
          searchinfo.companyAddress !== undefined
            ? searchinfo.companyAddress
            : companyAddress,
        position,
        tel,
        fax,
      })
    );
    nav('/mypage');
  };

  localStorage.setItem('cardName', cardName);
  localStorage.setItem('engName', engName);
  localStorage.setItem('email', email);
  localStorage.setItem('phoneNum', phoneNum);

  console.log(cardName);
  return (
    <Layout>
      <St_Header>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            localStorage.removeItem('cardName');
            localStorage.removeItem('engName');
            localStorage.removeItem('email');
            localStorage.removeItem('phoneNum');
            nav(-1);
          }}
        >
          <path
            d="M15 4L8 11.5L15 19"
            stroke="#1A1F27"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <St_Title>명함 만들기</St_Title>

        <SaveButton
          onClick={() => {
            PostHandler();
            localStorage.removeItem('cardName');
            localStorage.removeItem('engName');
            localStorage.removeItem('email');
            localStorage.removeItem('phoneNum');
          }}
        >
          저장
        </SaveButton>
      </St_Header>

      <PatchBox>
        <St_Card>
          <St_Plus htmlFor="card">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9997 0.333496C6.89967 0.333496 0.333008 6.90016 0.333008 15.0002C0.333008 23.1002 6.89967 29.6668 14.9997 29.6668C23.0997 29.6668 29.6663 23.1002 29.6663 15.0002C29.6663 6.90016 23.0997 0.333496 14.9997 0.333496ZM16.333 20.3335C16.333 20.6871 16.1925 21.0263 15.9425 21.2763C15.6924 21.5264 15.3533 21.6668 14.9997 21.6668C14.6461 21.6668 14.3069 21.5264 14.0569 21.2763C13.8068 21.0263 13.6663 20.6871 13.6663 20.3335V16.3335H9.66634C9.31272 16.3335 8.97358 16.193 8.72353 15.943C8.47348 15.6929 8.33301 15.3538 8.33301 15.0002C8.33301 14.6465 8.47348 14.3074 8.72353 14.0574C8.97358 13.8073 9.31272 13.6668 9.66634 13.6668H13.6663V9.66683C13.6663 9.31321 13.8068 8.97407 14.0569 8.72402C14.3069 8.47397 14.6461 8.3335 14.9997 8.3335C15.3533 8.3335 15.6924 8.47397 15.9425 8.72402C16.1925 8.97407 16.333 9.31321 16.333 9.66683V13.6668H20.333C20.6866 13.6668 21.0258 13.8073 21.2758 14.0574C21.5259 14.3074 21.6663 14.6465 21.6663 15.0002C21.6663 15.3538 21.5259 15.6929 21.2758 15.943C21.0258 16.193 20.6866 16.3335 20.333 16.3335H16.333V20.3335Z"
                fill="#8892A0"
              />
            </svg>
          </St_Plus>
          <Input type="file" id="card" onChange={mediaChangeHandler}></Input>
        </St_Card>

        <Item>
          <St_Key>
            이름<Essential>*</Essential>
          </St_Key>

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
          <St_Key>
            이메일<Essential>*</Essential>
          </St_Key>
          <St_value name="email" value={email} onChange={onChage}></St_value>
        </Item>
        <Item>
          <St_Key>
            연락처<Essential>*</Essential>
          </St_Key>
          <St_value
            name="phoneNum"
            value={phoneNum}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>
            회사<Essential>*</Essential>
          </St_Key>
          <CompanyIcon>
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1433_140)">
                <path
                  d="M2 0C0.895833 0 0 0.881836 0 1.96875V19.0312C0 20.1182 0.895833 21 2 21H6V17.7188C6 16.6318 6.89583 15.75 8 15.75C9.10417 15.75 10 16.6318 10 17.7188V21H14C15.1042 21 16 20.1182 16 19.0312V1.96875C16 0.881836 15.1042 0 14 0H2ZM3.56863 9.1875H12.4314C12.798 9.1875 13.098 9.48281 13.098 9.84375V11.1562C13.098 11.5172 12.798 11.8125 12.4314 11.8125H3.56863C3.20196 11.8125 2.90196 11.5172 2.90196 11.1562V9.84375C2.90196 9.48281 3.20196 9.1875 3.56863 9.1875ZM2.90196 4.59375C2.90196 4.23281 3.20196 3.9375 3.56863 3.9375H12.4314C12.798 3.9375 13.098 4.23281 13.098 4.59375V5.90625C13.098 6.26719 12.798 6.5625 12.4314 6.5625H3.56863C3.20196 6.5625 2.90196 6.26719 2.90196 5.90625V4.59375Z"
                  fill="#8892A0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1433_140">
                  <rect width="16" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </CompanyIcon>
          <St_value
            name="company"
            value={searchinfo.companyName ? searchinfo.companyName : company}
            onChange={onChage}
            style={{ paddingLeft: '35px' }}
            onClick={() => nav('/mypage/cardpatch/MyCardCompanySerach')}
          ></St_value>

          <St_Address
            name="companyAddress"
            value={
              searchinfo.companyAddress
                ? searchinfo.companyAddress
                : companyAddress
            }
            onChange={onChage}
          ></St_Address>

          <AddressBox>
            <AddressIcon>
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: '8px' }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.66545 14.8907L5.71636 14.9204L5.73673 14.9322C5.81748 14.9767 5.90784 15 5.99964 15C6.09144 15 6.18179 14.9767 6.26255 14.9322L6.28291 14.9211L6.33455 14.8907C6.61899 14.7189 6.89655 14.5356 7.16655 14.3411C7.86551 13.8384 8.51857 13.2726 9.11782 12.6506C10.5316 11.1764 12 8.96141 12 6.11157C12 4.49068 11.3679 2.93618 10.2426 1.79004C9.11742 0.643896 7.5913 0 6 0C4.4087 0 2.88258 0.643896 1.75736 1.79004C0.632141 2.93618 0 4.49068 0 6.11157C0 8.96067 1.46909 11.1764 2.88218 12.6506C3.4812 13.2726 4.13402 13.8384 4.83273 14.3411C5.10296 14.5356 5.38076 14.719 5.66545 14.8907ZM6 8.33396C6.57865 8.33396 7.13361 8.09981 7.54278 7.68304C7.95195 7.26626 8.18182 6.70098 8.18182 6.11157C8.18182 5.52216 7.95195 4.95688 7.54278 4.5401C7.13361 4.12332 6.57865 3.88918 6 3.88918C5.42135 3.88918 4.86639 4.12332 4.45722 4.5401C4.04805 4.95688 3.81818 5.52216 3.81818 6.11157C3.81818 6.70098 4.04805 7.26626 4.45722 7.68304C4.86639 8.09981 5.42135 8.33396 6 8.33396Z"
                  fill="#BCC2CC"
                />
              </svg>
            </AddressIcon>
            <SearchAddress>
              {searchinfo.companyAddress
                ? searchinfo.companyAddress
                : companyAddress}
            </SearchAddress>
          </AddressBox>
        </Item>
        <Item>
          <St_Key>
            직책<Essential>*</Essential>
          </St_Key>
          <St_value
            name="position"
            value={position}
            onChange={onChage}
          ></St_value>
        </Item>
        <Item>
          <St_Key>
            부서<Essential>*</Essential>
          </St_Key>
          <St_value
            name="department"
            value={department}
            onChange={onChage}
          ></St_value>
        </Item>
        <Item>
          <St_Key>
            Tel<Essential>*</Essential>
          </St_Key>
          <St_value name="tel" value={tel} onChange={onChage}></St_value>
        </Item>
        <Item>
          <St_Key>Fax</St_Key>
          <St_value name="fax" value={fax} onChange={onChage}></St_value>
        </Item>
      </PatchBox>
    </Layout>
  );
};
export default MyCardMake;

//헤더 박스 div
const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid;
  padding-left: 12px;
`;

const PatchBox = styled.div`
  padding: 17px;
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
  padding-left: 4px;
`;
//저장버튼
const SaveButton = styled.a`
  margin: auto;
  margin-right: 20px;
  color: #277dff;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
`;
//input key 제목
const St_Key = styled.div`
  width: 100%;
  color: #6b6b6b;
  font-size: 13px;
  padding-left: 7px;
  margin-bottom: 8px;
`;
//input value 값
const St_value = styled.input`
  width: 100%;
  max-width: 330px;
  height: 42px;
  padding: 14px;
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

const AddressBox = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: row;
`;

const SearchAddress = styled.div`
  display: flex;
  width: 250px;
  margin-bottom: 20px;
`;
const St_Card = styled.label`
  width: 100%;
  max-width: 311px;
  height: 176px;
  margin: 32px auto;
  border-radius: 8px;
  padding: 0px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px #cecece;
  display: flex;
  flex-direction: column;
`;
//플러스 표시
const St_Plus = styled.label`
  width: 100%;
  max-width: 50px;
  height: 50px;
  color: #d6d6d6;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const CompanyIcon = styled.div`
  height: 0px;
  position: relative;
  display: flex;
  top: 10px;
  left: 18px;
`;

const AddressIcon = styled.div`
  height: 0px;
  position: relative;
  display: flex;
  left: 12px;
`;

const Essential = styled.a`
  margin-left: 3px;
  color: #5546ff;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;
