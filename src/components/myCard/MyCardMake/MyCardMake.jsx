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
import Swal from 'sweetalert2';
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
            Swal.fire({
              title:
                '<div class="title-wrap"><p>이전페이지로 이동하시겠습니까?</p><p class="test">작성된 내용은 사라집니다</p></div>',
              showCancelButton: true,
              confirmButtonColor: 'white',
              cancelButtonColor: 'white',
              confirmButtonText: '<div class="confirm-text">확인</div>',
              cancelButtonText: '<div class="cancel-text">취소</div>',
              customClass: {
                popup: 'login-class',
                title: 'title-class',
              },
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.replace('/mypage');
              }
            });
          }}
        />

        <St_Title>명함 만들기</St_Title>

        <SaveButton
          onClick={() => {
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
              <CompanyIcon>
                <Iccompany />
              </CompanyIcon>
              <St_value
                placeholder="회사명을 입력하세요"
                name="company"
                style={{ paddingLeft: '38px' }}
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
                          email: imgGet.email !== null ? imgGet.email : email,
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
