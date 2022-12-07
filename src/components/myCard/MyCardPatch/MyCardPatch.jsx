import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../layout/Layout';
import MyCardFooter from '../../footer/MyCardFooter';
import { useNavigate } from 'react-router';
import { _getMakeCard, _PutCard } from '../../../redux/modules/mycardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Iccompany } from '../../../images/ic-company.svg';
import { ReactComponent as Icaddress } from '../../../images/ic-address.svg';
import {
  St_Header,
  PatchBox,
  St_Title,
  SaveButton,
  St_Key,
  St_value,
  St_Address,
  AddressBox,
  SearchAddress,
  Item,
  CompanyIcon,
  AddressIcon,
  Essential,
  SectionHeader,
} from '../MyCardPatch/MyCardPatchStyle';
import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';
import { SectionFooter } from '../../footer/FooterStyle';

const MyCardPatch = () => {
  //내 명함 수정 페이지 컴포넌트

  const nav = useNavigate();
  const dispatch = useDispatch();

  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);
  const searchinfo = useSelector((state) => state.cardinfo.companyInfo);

  const [makeinfo, setMakeinfo] = useState({
    cardName: cardinfo.cardName,
    engName: cardinfo.engName,
    email: cardinfo.email,
    phoneNum: cardinfo.phoneNum,
    company: cardinfo.company,
    companyAddress: cardinfo.companyAddress,
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
    companyAddress,
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

  const updateHandler = () => {
    dispatch(
      _PutCard({
        cardName,
        engName,
        email,
        phoneNum,
        company:
          searchinfo.companyName !== undefined
            ? searchinfo.companyName
            : cardinfo.company,
        department,
        companyAddress:
          searchinfo.companyAddress !== undefined
            ? searchinfo.companyAddress
            : cardinfo.companyAddress,
        position,
        tel,
        fax,
        id,
      })
    );
    nav('/mypage/cardinfo');
  };

  useEffect(() => {
    dispatch(_getMakeCard());
  }, []);

  useEffect(() => {
    setMakeinfo(cardinfo);
  }, [cardinfo]);

  if (cardinfo === undefined) return;

  return (
    <Layout>
      <St_Header>
        <Icbefore
          style={{ cursor: 'pointer' }}
          onClick={() => {
            nav(-1);
          }}
        />

        <St_Title>명함 정보 편집</St_Title>

        <SaveButton onClick={updateHandler}>저장</SaveButton>
      </St_Header>
      <SectionHeader />
      <PatchBox>
        <Item>
          <St_Key>
            이름<Essential>*</Essential>
          </St_Key>
          <St_value
            name="cardName"
            value={cardName || ''}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>영문이름</St_Key>
          <St_value
            name="engName"
            value={engName || ''}
            onChange={onChage}
          ></St_value>
        </Item>
        <Item>
          <St_Key>
            연락처<Essential>*</Essential>
          </St_Key>
          <St_value
            name="phoneNum"
            value={phoneNum || ''}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>
            이메일<Essential>*</Essential>
          </St_Key>
          <St_value
            name="email"
            value={email || ''}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>회사</St_Key>
          <CompanyIcon>
            <Iccompany />
          </CompanyIcon>

          <div>
            <St_value
              name="company"
              value={searchinfo.companyName ? searchinfo.companyName : company}
              onChange={onChage}
              style={{ paddingLeft: '42px' }}
              onClick={() => nav('/mypage/cardpatch/MyCardCompanySerach')}
            ></St_value>
          </div>

          {/* <img src="/images/ic-company.png"></img> */}
          <St_Address
            name="companyAddress"
            value={
              searchinfo.companyAddress
                ? searchinfo.companyAddress
                : companyAddress
            }
            onChange={onChage}
          >
            <AddressBox>
              <AddressIcon>
                <Icaddress style={{ marginRight: '8px' }} />
              </AddressIcon>
              <SearchAddress>
                {searchinfo.companyAddress
                  ? searchinfo.companyAddress
                  : cardinfo.companyAddress}
              </SearchAddress>
            </AddressBox>
          </St_Address>
        </Item>

        <Item>
          <St_Key>
            직책<Essential>*</Essential>
          </St_Key>
          <St_value
            name="position"
            value={position || ''}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>
            부서<Essential>*</Essential>
          </St_Key>
          <St_value
            name="department"
            value={department || ''}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>유선전화</St_Key>
          <St_value name="tel" value={tel || ''} onChange={onChage}></St_value>
        </Item>

        <Item>
          <St_Key>팩스</St_Key>
          <St_value name="fax" value={fax || ''} onChange={onChage}></St_value>
        </Item>
      </PatchBox>
      <MyCardFooter />
      <SectionFooter />
    </Layout>
  );
};
export default MyCardPatch;
