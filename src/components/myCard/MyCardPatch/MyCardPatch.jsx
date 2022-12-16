import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import MyCardFooter from '../../footer/MyCardFooter';
import { useNavigate } from 'react-router';
import {
  addresSsearchSave,
  saveInfo,
  _getMakeCard,
  _PutCard,
} from '../../../redux/modules/mycardSlice';
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
import {
  RadioBox,
  RadioDetail,
  ImgBox,
  AddressSearch,
  SectionLine,
  AssistiveText,
  CompanyInput,
  FormCheckOther,
  FormCheckOwn,
  CheckOwn,
  CheckOther,
} from '../../card/cardPost/cardPostStyle';

import Swal from 'sweetalert2';
import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';
import { SectionFooter } from '../../footer/FooterStyle';

const MyCardPatch = () => {
  //내 명함 수정 페이지 컴포넌트

  const nav = useNavigate();
  const dispatch = useDispatch();

  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);
  const searchinfo = useSelector((state) => state.cardinfo.companyInfo);


  const savemake = useSelector((state) => state.cardinfo.makesave);

  const searchsave = useSelector((state) => state.cardinfo.searchsave);
  const [companyHow, setCompanyHow] = useState('');
  const [pop, setPop] = useState(false);

  const [makeinfo, setMakeinfo] = useState({
    cardName: savemake.cardName ? savemake.cardName : cardinfo.cardName,
    email: savemake.email ? savemake.email : cardinfo.email,
    phoneNum: savemake.phoneNum ? savemake.phoneNum : cardinfo.phoneNum,
    company: savemake.company ? savemake.company : cardinfo.company,
    companyAddress: savemake.companyAddress
      ? savemake.companyAddress
      : cardinfo.companyAddress,
    department: savemake.department ? savemake.department : cardinfo.department,
    position: savemake.position ? savemake.position : cardinfo.position,
    tel: savemake.tel ? savemake.tel : cardinfo.tel,
    fax: savemake.fax ? savemake.fax : cardinfo.fax,
    id: cardinfo.id,
  });

  const {
    cardName,
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

  // useEffect(() => {
  //   dispatch(saveInfo({ companyAddress: '' }));
  // }, []);

  const updateHandler = () => {
    dispatch(
      _PutCard({
        cardName,
        email,
        phoneNum,
        company:
          searchinfo.company !== undefined ? searchinfo.company : company,
        department,
        companyAddress:
          searchinfo.companyAddress !== undefined
            ? searchinfo.companyAddress
            : companyAddress,
        position,
        tel,
        fax,
        id,
      })
    );

    Swal.fire({
      title: '수정이 완료되었습니다.',
      showConfirmButton: false,
      timer: 1000,
      customClass: {
        popup: 'allAlret-class',
        title: 'allTitle-class',
      },
    });
    nav('/mypage/cardinfo');
  };

  // useEffect(() => {
  //   dispatch(_getMakeCard());
  // }, []);

  useEffect(() => {
    setMakeinfo(cardinfo);
  }, [cardinfo]);

  const isValidEmail =
    email !== undefined && email !== null
      ? email.includes('@') && email.includes('.')
      : false;

  const isValidPhone =
    phoneNum !== undefined && phoneNum !== null
      ? phoneNum.includes('-')
      : false;

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

        <SaveButton
          onClick={() => {
            if (
              cardName.trim() === '' ||
              company.trim() === '' ||
              department.trim() === '' ||
              email.trim() === '' ||
              phoneNum.trim() === '' ||
              position.trim() === ''
            ) {
              alert('필수 작성란을 작성해 주세요.');
              return;
            }
            if (isValidEmail === false) {
              alert('이메일 형식이 맞지 않습니다.');
              return;
            }
            if (isValidPhone === false) {
              alert('연락처 형식이 맞지 않습니다.');
              return;
            }
            updateHandler();
          }}
        >
          저장
        </SaveButton>
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
            placeholder="이름"
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
            placeholder="Ex) 010-0000-0000"
            onChange={onChage}
          ></St_value>
          {phoneNum && phoneNum.includes('-') === false ? (
            <AssistiveText>- 을 포함해주세요</AssistiveText>
          ) : null}
        </Item>

        <Item>
          <St_Key>
            이메일<Essential>*</Essential>
          </St_Key>
          <St_value
            name="email"
            value={email || ''}
            placeholder="Ex) abc@gmail.com"
            onChange={onChage}
          ></St_value>
          {isValidEmail === false && email ? (
            <AssistiveText>이메일을 확인하세요</AssistiveText>
          ) : null}
        </Item>

        <Item>
          <St_Key>
            회사<Essential>*</Essential>
          </St_Key>

          {/* 라디오 버튼 start*/}
          {/* <RadioBox>
            <RadioDetail>
              <label>
                <FormCheckOwn
                  type="radio"
                  id="find"
                  name="companyType"
                  value={'find'}
                  checked={companyHow === 'find'}
                  onChange={(e) => {
                    setCompanyHow(e.target.value);
                  }}
                />
                <CheckOwn htmlFor="find">회사 검색</CheckOwn>
              </label>
            </RadioDetail>

            <RadioDetail>
              <label>
                <FormCheckOther
                  type="radio"
                  id="myself"
                  name="companyHow"
                  value={'myself'}
                  checked={companyHow === 'myself'}
                  onChange={(e) => {
                    setCompanyHow(e.target.value);
                  }}
                />
                <CheckOther htmlFor="myself">직접 입력</CheckOther>
              </label>
            </RadioDetail>
          </RadioBox>

          {companyHow === 'myself' ? (
            <div>
              <CompanyIcon>
                <Iccompany />
              </CompanyIcon>
              <CompanyInput
                placeholder="회사명을 입력하세요"
                name="company"
                style={{ paddingLeft: '38px' }}
                value={company}
                onChange={onChage}
              />

              {pop === true ? (
                <AddressSearch style={{ color: 'red' }}>
                  <p
                    onClick={() => {
                      dispatch(
                        saveInfo({
                          cardName,
                          email,
                          phoneNum,
                          company,
                          department,
                          companyAddress,
                          position,
                          tel,
                          fax,
                        })
                      );
                      nav('/mypage/MyCardCompanyWrite');
                    }}
                  >
                    회사 주소 검색
                  </p>
                </AddressSearch>
              ) : (
                <AddressSearch>
                  <p
                    onClick={() => {
                      dispatch(
                        saveInfo({
                          cardName,
                          email,
                          phoneNum,
                          company,
                          department,
                          companyAddress,
                          position,
                          tel,
                          fax,
                        })
                      );
                      nav('/mypage/MyCardCompanyWrite');
                    }}
                  >
                    회사 주소 검색
                  </p>
                </AddressSearch>
              )}
            </div>
          ) : (
            <div>
              <CompanyIcon>
                <Iccompany />
              </CompanyIcon>
              <CompanyInput
                readOnly
                type="text"
                name="company"
                style={{ paddingLeft: '38px' }}
                placeholder="회사 검색"
                value={searchinfo.company ? searchinfo.company : company}
                onChange={onChage}
                onClick={() => {
                  dispatch(
                    saveInfo({
                      cardName,
                      email,
                      phoneNum,
                      company,
                      department,
                      companyAddress,
                      position,
                      tel,
                      fax,
                    })
                  );
                  nav('/mypage/MyCardCompanySerach');
                }}
              />
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
            </div>
          )} */}
          {/* 라디오 버튼 end*/}

          <CompanyIcon>
            <Iccompany />
          </CompanyIcon>
          <div>
            <St_value
              name="company"
              value={searchinfo.company ? searchinfo.company : company}
              onChange={onChage}
              style={{ paddingLeft: '42px' }}
              onClick={() => nav('/mypage/MyCardCompanySerach')}
            ></St_value>
          </div>

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
