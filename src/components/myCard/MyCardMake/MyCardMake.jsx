import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { useNavigate } from 'react-router';
import {
  _getMakeCard,
  _MakeCard,
  _PutCard,
} from '../../../redux/modules/mycardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { __imgPost } from '../../../redux/modules/CardsSlice';
import {
  St_Header,
  PatchBox,
  St_Title,
  SaveButton,
  St_Key,
  St_value,
  St_Address,
  Item,
  AddressBox,
  SearchAddress,
  St_Card,
  St_Plus,
  Input,
  CompanyIcon,
  AddressIcon,
  Essential,
} from '../MyCardMake/MyCardMakeStyle';
import { ReactComponent as Icplus } from '../../../images/ic-plus.svg';
import { ReactComponent as Iccompany } from '../../../images/ic-company.svg';
import { ReactComponent as Icaddress } from '../../../images/ic-address.svg';
import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';

const MyCardMake = () => {
  //명함 만들기 페이지 컴포넌트
  const nav = useNavigate();
  const dispatch = useDispatch();
  const searchinfo = useSelector((state) => state.cardinfo.companyInfo);
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);
  const imgGet = useSelector((state) => state.PostReducer.img);

  console.log('이미지', imgGet);

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
        email: imgGet.email !== undefined ? imgGet.email : email,
        phoneNum: imgGet.phoneNum !== undefined ? imgGet.phoneNum : phoneNum,
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
        tel: imgGet.tel !== undefined ? imgGet.tel : tel,
        fax: imgGet.fax !== undefined ? imgGet.fax : fax,
      })
    );
    nav('/mypage');
  };

  useEffect(() => {}, []);

  localStorage.setItem('cardName', cardName);
  localStorage.setItem('engName', engName);
  localStorage.setItem('email', email);
  localStorage.setItem('phoneNum', phoneNum);

  return (
    <Layout>
      <St_Header>
        <Icbefore
          style={{ cursor: 'pointer' }}
          onClick={() => {
            localStorage.removeItem('cardName');
            localStorage.removeItem('engName');
            localStorage.removeItem('email');
            localStorage.removeItem('phoneNum');
            nav(-1);
          }}
        />

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
            {imgGet.imgUrl !== undefined ? (
              <img src={imgGet.imgUrl} alt="preview-img" />
            ) : (
              <Icplus />
            )}
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
          <St_value
            name="email"
            value={imgGet.email !== undefined ? imgGet.email : email}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>
            연락처<Essential>*</Essential>
          </St_Key>
          <St_value
            name="phoneNum"
            value={imgGet.phoneNum !== undefined ? imgGet.phoneNum : phoneNum}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>
            회사<Essential>*</Essential>
          </St_Key>
          <CompanyIcon>
            <Iccompany />
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
              <Icaddress />
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
          <St_value
            name="tel"
            value={imgGet.tel !== undefined ? imgGet.tel : tel}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>Fax</St_Key>
          <St_value
            name="fax"
            value={imgGet.fax !== undefined ? imgGet.fax : fax}
            onChange={onChage}
          ></St_value>
        </Item>
      </PatchBox>
    </Layout>
  );
};
export default MyCardMake;
