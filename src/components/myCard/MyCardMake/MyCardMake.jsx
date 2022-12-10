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

import {
  RadioBox,
  RadioDetail,
  ImgBox,
  AddressSearch,
  SectionLine,
  AssistiveText,
  CompanyInput,
  SectionHeader,
  FormCheckOther,
  FormCheckOwn,
  CheckOwn,
  CheckOther,
} from '../../card/cardPost/cardPostStyle';

import { ReactComponent as Icplus } from '../../../images/ic-plus.svg';
import { ReactComponent as Iccompany } from '../../../images/ic-company.svg';
import { ReactComponent as Icaddress } from '../../../images/ic-address.svg';
import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';
// import { ReactComponent as Xbutton } from '../../../images/x-circle-fill.svg';

import { SectionFooter } from '../../footer/FooterStyle';
import Modal from '../../card/cardPost/CardImgModal/Modal';
import cardImg from '../../../images/KakaoTalk_Photo_2022-12-07-20-17-26.png';
import information from '../../../images/스크린샷 2022-12-07 오후 11.49.22.png';
import { useEffect } from 'react';

const MyCardMake = () => {
  //명함 만들기 페이지 컴포넌트
  const nav = useNavigate();
  const dispatch = useDispatch();
  const searchinfo = useSelector((state) => state.cardinfo.companyInfo);
  const savemake = useSelector((state) => state.cardinfo.makesave);
  const imgGet = useSelector((state) => state.PostReducer.img);

  const [companyHow, setCompanyHow] = useState('');
  const [pop, setPop] = useState(false);

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

  const [imggetmake, setImggetmake] = useState({
    imggetemail: imgGet.email ? imgGet.email : '',
    imggetphoneNum: imgGet.phoneNum ? imgGet.phoneNum : '',
    imggettel: imgGet.tel ? imgGet.tel : '',
    imggetfax: imgGet.fax ? imgGet.fax : '',
  });

  const { imggetemail, imggetphoneNum, imggettel, imggetfax } = imggetmake;

  useEffect(() => {
    setImggetmake({
      imggetemail: imgGet.email,
      imggetphoneNum: imgGet.phoneNum,
      imggettel: imgGet.tel,
      imggetfax: imgGet.fax,
    });
  }, [imgGet]);

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
    setImggetmake({
      ...imggetmake,
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

  const isValidEmail2 =
    imgGet.imgUrl !== undefined && imgGet.imgUrl !== null
      ? imgGet.imgUrl.includes('@') && imgGet.imgUrl.includes('.')
      : false;




  // console.log(
  //   '이미지OOOO',
  //   (cardName.trim() === '') === false &&
  //     (imgGet.email.trim() === '') === false &&
  //     (imgGet.phoneNum.trim() === '') === false &&
  //     company.length === 0 &&
  //     (department.trim() === '') === false &&
  //     (position.trim() === '') === false
  // );

  const isValidPhone =
    phoneNum !== undefined && phoneNum !== null
      ? phoneNum.includes('-')
      : false;

  const isValidPhone2 =
    imgGet.phoneNum !== undefined && imgGet.phoneNum !== null
      ? imgGet.phoneNum.includes('-')
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

  useEffect(() => { });

  // 모달 사용하기위한 state
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
            // (cardName.trim() === '') === false &&
            // { email: imgGet.email !== undefined ? imgGet.email : email } ===
            //   false &&
            // (phoneNum.trim() === '' || imgGet.phoneNum.trim() === '') ===
            //   false &&
            // (company.trim() === '') === false &&
            // (department.trim() === '') === false &&
            // (position.trim() === '') === false

            // imgGet.email,
            // imgGet.phoneNum,
            // imggettel: imgGet.tel,
            // imggetfax: imgGet.fax

            // // cardName.trim() === '' ||
            // cardName.length === 0 ||
            // // email.trim() === '' ||
            // email.length === 0 ||
            // // phoneNum.trim() === '' ||
            // phoneNum.length === 0 ||
            // // company.trim() === '' ||
            // // department.trim() === '' ||
            // department.length === 0 ||
            // // position.trim() === '' ||
            // position.length === 0
            if (imgGet.imgUrl === undefined) {
              if (
                cardName.trim() === '' ||
                email.trim() === '' ||
                phoneNum.trim() === '' ||
                searchinfo.company.length === 0 ||
                department.trim() === '' ||
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
            }
            if (imgGet.imgUrl !== undefined) {
              if (
                cardName.trim() === '' ||
                imgGet.email.trim() === '' ||
                imgGet.phoneNum.trim() === '' ||
                searchinfo.company.length === 0 ||
                department.trim() === '' ||
                position.trim() === ''
              ) {
                alert('필수란을 작성해주세요.');
                return;
              }
              if (isValidEmail2 === false) {
                alert('이메일 형식이 맞지 않습니다.');
                return;
              }
              if (isValidPhone2 === false) {
                alert('연락처 형식이 맞지 않습니다.');
                return;
              }
            }

            PostHandler();
          }}
        >
          저장
        </SaveButton>
      </St_Header>

      <PatchBox>
        <St_Key>
          명함사진<Essential>*</Essential>
        </St_Key>
        <ImgBox>
          {/* <img src={ExImg} alt="" /> */}
          <svg
            width="71"
            height="39"
            viewBox="0 0 71 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={openModal}
            style={{ cursor: 'pointer' }}
          >
            <rect width="71" height="39" rx="2" fill="white" />
            <rect x="4" y="21" width="16" height="4" rx="2" fill="#BCC2CC" />
            <rect x="4" y="29" width="28" height="2" rx="1" fill="#E2E6EF" />
            <rect x="4" y="33" width="28" height="2" rx="1" fill="#E2E6EF" />
          </svg>

          <div onClick={openModal} style={{ cursor: 'pointer' }}>
            <span style={{ color: 'red' }}>여기</span>를 눌러{' '}
            <span style={{ color: 'red' }}>등록 가이드</span>를 확인해주세요{' '}
            <p />
            형식에 맞지 않는 명함은 등록되지 않습니다.
          </div>
          <Modal open={modalOpen} close={closeModal} header="명함 이미지 예시">
            <main>
              <img src={cardImg} alt="" />
              <img src={information} alt="" />
            </main>
          </Modal>
        </ImgBox>

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
            value={cardName || ''}
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
            //value={email}
            value={email || imggetemail}
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
            // value={phoneNum}
            value={phoneNum || imggetphoneNum}
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
              <CompanyInput
                placeholder="회사명을 입력하세요"
                name="company"
                value={searchinfo.company ? searchinfo.company : company}
                onChange={onChage}
              />

              {pop === true ? (
                <AddressSearch style={{ color: 'red' }}>
                  <p
                    onClick={() => {
                      dispatch(
                        saveInfo({
                          cardName,
                          email:
                            imgGet.email !== undefined ? imgGet.email : email,
                          phoneNum:
                            imgGet.phoneNum !== undefined
                              ? imgGet.phoneNum
                              : phoneNum,
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
                      nav('/posts/companyOtherSearch');
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
                          email:
                            imgGet.email !== null ? imgGet.email : email,
                          phoneNum:
                            imgGet.phoneNum !== null
                              ? imgGet.phoneNum
                              : phoneNum,
                          company:
                            searchinfo.company !== null
                              ? searchinfo.company
                              : company,
                          department,
                          companyAddress:
                            searchinfo.companyAddress !== null
                              ? searchinfo.companyAddress
                              : companyAddress,
                          position,
                          tel: imgGet.tel !== null ? imgGet.tel : tel,
                          fax: imgGet.fax !== null ? imgGet.fax : fax,
                        })
                      );
                      nav('/posts/companyOtherSearch');
                    }}
                  >
                    회사 주소 검색
                  </p>
                </AddressSearch>
              )}
            </div>
          ) : (
            <div>
              <CompanyInput
                readOnly
                type="text"
                name="company"
                placeholder="회사 검색"
                value={searchinfo.company ? searchinfo.company : company}
                onChange={onChage}
                onClick={() => {
                  dispatch(
                    saveInfo({
                      cardName,
                      email: imgGet.email !== undefined ? imgGet.email : email,
                      phoneNum:
                        imgGet.phoneNum !== undefined
                          ? imgGet.phoneNum
                          : phoneNum,
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
              />
              <St_Address
                name="company"
                value={
                  searchinfo.companyAddress
                    ? searchinfo.companyAddress
                    : companyAddress
                }
                onChange={onChage}
              >
                <AddressBox>
                  <div>
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
                  </div>
                  <SearchAddress>
                    {searchinfo.companyAddress
                      ? searchinfo.companyAddress
                      : companyAddress}
                  </SearchAddress>
                </AddressBox>
              </St_Address>
            </div>
          )} */}
          {/* 라디오 버튼 end*/}


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
          <St_value
            name="tel"
            // value={tel}
            value={tel || imggettel}
            onChange={onChage}
          ></St_value>
        </Item>

        <Item>
          <St_Key>팩스</St_Key>
          <St_value
            name="fax"
            // value={fax}
            value={fax || imggetfax}
            onChange={onChage}
          ></St_value>
        </Item>
      </PatchBox>
      <SectionFooter />
    </Layout>
  );
};
export default MyCardMake;
