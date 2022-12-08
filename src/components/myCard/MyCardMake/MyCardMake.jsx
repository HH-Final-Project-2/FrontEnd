import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import { useNavigate } from 'react-router';
import {
  saveInfo,
  _companyInfo,
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
  PrevImg,
} from '../MyCardMake/MyCardMakeStyle';
import { ReactComponent as Icplus } from '../../../images/ic-plus.svg';
import { ReactComponent as Iccompany } from '../../../images/ic-company.svg';
import { ReactComponent as Icaddress } from '../../../images/ic-address.svg';
import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';
import { ReactComponent as Xbutton } from '../../../images/x-circle-fill.svg';
import {
  AssistiveText,
  SectionHeader,
} from '../../card/cardPost/cardPostStyle';
import { SectionFooter } from '../../footer/FooterStyle';
import { useEffect } from 'react';

const MyCardMake = () => {
  //명함 만들기 페이지 컴포넌트
  const nav = useNavigate();
  const dispatch = useDispatch();
  const searchinfo = useSelector((state) => state.cardinfo.companyInfo);
  console.log(searchinfo);
  const savemake = useSelector((state) => state.cardinfo.makesave);
  const imgGet = useSelector((state) => state.PostReducer.img);
  console.log(savemake);
  const [makeinfo, setMakeinfo] = useState({
    cardName: savemake.cardName ? savemake.cardName : '',
    email: savemake.email ? savemake.email : '',
    phoneNum: savemake.phoneNum ? savemake.phoneNum : '',
    company: '',
    companyAddress: '',
    department: savemake.department ? savemake.department : '',
    position: savemake.position ? savemake.position : '',
    tel: savemake.tel ? savemake.tel : '',
    fax: savemake.fax ? savemake.fax : '',
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
        email: imgGet.email !== undefined ? imgGet.email : email,
        phoneNum: imgGet.phoneNum !== undefined ? imgGet.phoneNum : phoneNum,
        company:
          searchinfo.company !== undefined ? searchinfo.company : company,
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

  const isValidEmail =
    email !== undefined && email !== null
      ? email.includes('@') && email.includes('.')
      : false;

  const isValidPhone =
    phoneNum !== undefined && phoneNum !== null
      ? phoneNum.includes('-')
      : false;

  useEffect(() => {
    dispatch(
      saveInfo({
        cardName: '',
        email: '',
        phoneNum: '',
        company: '',
        department: '',
        companyAddress: '',
        position: '',
        tel: '',
        fax: '',
      })
    );
  }, []);

  console.log(cardName.trim() === '');

  return (
    <Layout>
      <SectionHeader />
      <St_Header>
        <Icbefore
          style={{ cursor: 'pointer' }}
          onClick={() => {
            dispatch(
              _companyInfo({
                companyName: '',
                companyAddress: '',
              })
            );

            nav(-1);
          }}
        />

        <St_Title>명함 만들기</St_Title>

        <SaveButton
          onClick={() => {
            if (
              cardName.trim() === '' &&
              email.trim() === '' &&
              phoneNum.trim() === '' &&
              company.trim() === '' &&
              department.trim() === '' &&
              position.trim() === ''
            ) {
              alert('필수란을 작성해주세요.');
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
            PostHandler();
          }}
        >
          저장
        </SaveButton>
      </St_Header>

      <PatchBox>
        <St_Card>
          {imgGet.imgUrl === undefined ? (
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
          ) : (
            imgGet.imgUrl && (
              <PrevImg
                src={imgGet.imgUrl}
                alt="preview-img"
                id="card"
                style={{ margin: 'auto' }}
              />
            )
          )}
          <Input type="file" id="card" onChange={mediaChangeHandler}></Input>
        </St_Card>

        <Item>
          <St_Key>
            이름<Essential>*</Essential>
          </St_Key>
          <St_value
            name="cardName"
            value={cardName}
            placeholder="이름"
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
            placeholder="Ex) abc@gmail.com"
            onChange={onChage}
          ></St_value>
          {isValidEmail === false && email ? (
            <AssistiveText>이메일을 확인하세요</AssistiveText>
          ) : null}
        </Item>

        <Item>
          <St_Key>
            연락처<Essential>*</Essential>
          </St_Key>
          <St_value
            name="phoneNum"
            value={imgGet.phoneNum !== undefined ? imgGet.phoneNum : phoneNum}
            placeholder="Ex) 010-0000-0000"
            onChange={onChage}
          ></St_value>
          {phoneNum && phoneNum.includes('-') === false ? (
            <AssistiveText>- 을 포함해주세요</AssistiveText>
          ) : null}
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
            value={searchinfo.company ? searchinfo.company : company}
            onChange={onChage}
            style={{ paddingLeft: '35px' }}
            onClick={() => {
              dispatch(
                saveInfo({
                  cardName,
                  email: imgGet.email !== undefined ? imgGet.email : email,
                  phoneNum:
                    imgGet.phoneNum !== undefined ? imgGet.phoneNum : phoneNum,
                  company:
                    searchinfo.company !== undefined
                      ? searchinfo.company
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
              nav('/mypage/cardpatch/MyCardCompanySerach');
            }}
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
          <St_Key>Tel</St_Key>
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
      <SectionFooter />
    </Layout>
  );
};
export default MyCardMake;
