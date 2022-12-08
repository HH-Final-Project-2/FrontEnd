import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../../layout/Layout';
import Modal from './CardImgModal/Modal';
import {
  __writePost,
  __imgPost,
  __cardInfo,
} from '../../../redux/modules/CardsSlice';
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
  St_Plus,
  Input,
  St_Card,
  RadioBox,
  RadioDetail,
  ImgBox,
  PrevImg,
  Essential,
  AddressSearch,
  SectionLine,
  AssistiveText,
  CompanyInput,
  SectionHeader,
} from './cardPostStyle';
import { SectionFooter } from '../../footer/FooterStyle';
import Swal from 'sweetalert2';
import cardImg from '../../../images/KakaoTalk_Photo_2022-12-07-20-17-26.png';
import information from '../../../images/스크린샷 2022-12-07 오후 11.49.22.png';
const MainCards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imgGet = useSelector((state) => state.PostReducer.img);
  const companyGet = useSelector((state) => state.PostReducer.companyInfo);
  console.log(companyGet.cardName);
  const companyOnly = useSelector(
    (state) => state.PostReducer.defaultCard.company
  );

  //state생성
  const [cardName, setCardName] = useState(
    companyGet.cardName ? companyGet.cardName : ''
  );
  const [companyType, setCompanyType] = useState(
    companyGet.companyType ? companyGet.companyType : ''
  );
  const [department, setDepartment] = useState(
    companyGet.department ? companyGet.department : ''
  );
  const [position, setPosition] = useState(
    companyGet.position ? companyGet.position : ''
  );
  const [email, setEmail] = useState(
    imgGet.email ? imgGet.email : companyGet.email
  );
  const [phoneNum, setPhoneNum] = useState(
    imgGet.phoneNum ? imgGet.phoneNum : companyGet.phoneNum
  );
  const [tel, setTel] = useState(imgGet.tel ? imgGet.tel : companyGet.tel);
  const [fax, setFax] = useState(imgGet.fax ? imgGet.fax : companyGet.fax);
  const [company, setCompany] = useState(
    companyGet.company ? companyGet.company : companyOnly
  );
  const [companyAddress, setCompanyAddress] = useState(
    companyGet.companyAddress ? companyGet.companyAddress : null
  );
  const [companyHow, setCompanyHow] = useState('');

  const [pop, setPop] = useState(false);
  const [companyPop, setCompanyPop] = useState(false);
  //
  //state에 불러온 값 넣어주는 useEffect

  useEffect(() => setCardName(companyGet.cardName), [companyGet]);
  useEffect(() => setCompanyType(companyGet.companyType), [companyGet]);
  useEffect(() => setDepartment(companyGet.department), [companyGet]);
  useEffect(() => setPosition(companyGet.position), [companyGet]);
  useEffect(
    () => setEmail(imgGet.email ? imgGet.email : companyGet.email),
    [imgGet, companyGet]
  );
  useEffect(
    () => setPhoneNum(imgGet.phoneNum ? imgGet.phoneNum : companyGet.phoneNum),
    [imgGet, companyGet]
  );
  useEffect(
    () => setTel(imgGet.tel ? imgGet.tel : companyGet.tel),
    [imgGet, companyGet]
  );
  useEffect(
    () => setFax(imgGet.fax ? imgGet.fax : companyGet.fax),
    [imgGet, companyGet]
  );
  useEffect(
    () => setCompany(companyGet.company ? companyGet.company : companyOnly),
    [companyGet, companyOnly]
  );
  useEffect(() => setCompanyAddress(companyGet.companyAddress), [companyGet]);

  const isValidEmail =
    email !== undefined && email !== null
      ? email.includes('@') && email.includes('.')
      : false;
  const isValidPhone =
    phoneNum !== undefined && phoneNum !== null
      ? phoneNum.includes('-')
      : false;

  const isValidInput =
    cardName &&
      email &&
      company &&
      companyAddress &&
      companyType &&
      phoneNum &&
      department &&
      position !== undefined
      ? cardName.length >= 1 &&
      email.length >= 1 &&
      company.length >= 1 &&
      companyAddress.length >= 1 &&
      companyType.length >= 1 &&
      phoneNum.length >= 1 &&
      department.length >= 1 &&
      position.length >= 1
      : false;
  //

  //onchange함수
  const mediaChangeHandler = (e) => {
    e.preventDefault();
    const file = new FormData();
    file.append('cardImg', e.target.files[0]);
    dispatch(__imgPost(file));
  };

  //모달 사용하기위한 state
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //작성버튼 클릭시 발동되는 함수
  const cardsSubmitHandler = (e) => {
    e.preventDefault();
    if (isValidEmail && isValidInput && isValidPhone === true) {
      dispatch(
        __writePost({
          cardName: cardName,
          email: email,
          phoneNum: phoneNum,
          department: department,
          position: position,
          tel: tel,
          fax: fax,
          company: company,
          companyAddress: companyAddress,
          companyType: companyType,
        })
      );

      Swal.fire({
        text: '명함이 등록되었습니다',
        showConfirmButton: false,
        timer: 1000,
        width: '300px',
        customClass: {
          popup: 'allAlret-class',
          title: 'allTitle-class',
        },
      });
      companyType === 'own' ? navigate('/cards') : navigate('/otherCategory');
      window.location.reload();
    } else {
      Swal.fire({
        text: '입력한 내용을 확인해주세요',
        showConfirmButton: false,
        timer: 1000,
        width: '300px',
      });
      setPop(true);
    }
  };
  //
  return (
    <Layout>
      <SectionHeader />
      <St_Header>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            Swal.fire({
              title: '뒤로가기를 하시겠습니까?',
              showCancelButton: true,
              confirmButtonColor: '#5546FF',
              cancelButtonColor: '#BBB5FF',
              confirmButtonText: '확인',
              cancelButtonText: '취소',
              width: '300px',
              customClass: {
                popup: 'login-class',
                title: 'title-class',
              },
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.replace('/cards');
              }
            });
          }}
        >
          <path
            d="M15 4L8 11.5L15 19"
            stroke="#1A1F27"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <St_Title>명함작성</St_Title>

        <SaveButton onClick={cardsSubmitHandler}>등록</SaveButton>
      </St_Header>
      <PatchBox>
        <Item>
          <RadioBox>
            <RadioDetail>
              <input
                type="radio"
                id="own"
                name="companyType"
                value={'own'}
                checked={companyType === 'own'}
                onChange={(e) => {
                  setCompanyType(e.target.value);
                }}
              />
              <label htmlFor="own">자사</label>
            </RadioDetail>
            <RadioDetail>
              <input
                type="radio"
                id="other"
                name="companyType"
                value={'other'}
                checked={companyType === 'other'}
                onChange={(e) => {
                  setCompanyType(e.target.value);
                }}
              />
              <label htmlFor="other">타사</label>
            </RadioDetail>
          </RadioBox>
        </Item>
        <Item>
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
              여기를 눌러{' '}
              <span style={{ color: 'red' }}>등록 가이드를 확인</span>해주세요{' '}
              <p />
              형식에 맞지 않는 명함은 등록되지 않습니다.
            </div>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="명함 이미지 예시"
            >
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

            <Input
              type="file"
              id="card"
              accept="image/*"
              onChange={mediaChangeHandler}
            />
          </St_Card>
        </Item>
        <Item>
          <St_Key>
            이름<Essential>*</Essential>
          </St_Key>
          <St_value
            type="text"
            placeholder="이름"
            name="cardName"
            value={cardName || ''}
            minLength="1"
            maxLength="6"
            onChange={(e) => {
              setCardName(e.target.value);
            }}
          />
        </Item>

        <Item>
          <St_Key>
            연락처<Essential>*</Essential>
          </St_Key>
          <St_value
            type="text"
            placeholder="Ex) 010-0000-0000"
            name="phoneNum"
            value={phoneNum || ''}
            maxLength="13"
            onChange={(e) => {
              setPhoneNum(e.target.value);
            }}
          />

          {phoneNum && phoneNum.includes('-') === false ? (
            <AssistiveText>- 을 포함해주세요</AssistiveText>
          ) : null}
        </Item>

        <Item>
          <St_Key>
            이메일<Essential>*</Essential>
          </St_Key>
          <St_value
            type="text"
            placeholder="Ex) abc@gmail.com"
            name="email"
            value={email || ''}
            minLength="10"
            maxLength="30"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {isValidEmail === false && email ? (
            <AssistiveText>이메일을 확인하세요</AssistiveText>
          ) : null}
        </Item>
        <SectionLine />

        <Item>
          <St_Key>
            회사<Essential>*</Essential>
          </St_Key>

          <RadioBox>
            <RadioDetail>
              <input
                type="radio"
                id="find"
                name="companyType"
                value={'find'}
                checked={companyHow === 'find'}
                onChange={(e) => {
                  setCompanyHow(e.target.value);
                }}
              />
              <label htmlFor="find">회사 검색</label>
            </RadioDetail>

            <RadioDetail>
              <input
                type="radio"
                id="myself"
                name="companyHow"
                value={'myself'}
                checked={companyHow === 'myself'}
                onChange={(e) => {
                  setCompanyHow(e.target.value);
                }}
              />
              <label htmlFor="myself">직접 입력</label>
            </RadioDetail>
          </RadioBox>

          {/* {radioState ?
( */}
          {companyHow === 'myself' ? (
            <div>
              <CompanyInput
                placeholder="회사명을 입력하세요"
                value={company || ''}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
              <AddressSearch>
                <p
                  onClick={() => {
                    dispatch(
                      __cardInfo({
                        cardName: cardName ? cardName : '',
                        email: email,
                        phoneNum: phoneNum,
                        department: department ? department : '',
                        position: position ? position : '',
                        tel: tel,
                        fax: fax,
                        companyType: companyType ? companyType : '',
                        company: company ? company : '',
                      })
                    );
                    navigate('/posts/companyOtherSearch');
                  }}
                >
                  회사 주소 검색
                </p>
              </AddressSearch>
            </div>
          ) : (
            <div>
              <CompanyInput
                readOnly
                type="text"
                name="company"
                placeholder="회사 검색"
                value={company || ''}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                onClick={() => {
                  dispatch(
                    __cardInfo({
                      cardName: cardName ? cardName : '',
                      email: email,
                      phoneNum: phoneNum,
                      department: department ? department : '',
                      position: position ? position : '',
                      tel: tel,
                      fax: fax,
                      companyType: companyType ? companyType : '',
                    })
                  );
                  navigate('/posts/companySearch');
                }}
              />
              <St_Address
                name="companyAddress"
                value={companyAddress || ''}
                onChange={(e) => {
                  setCompanyAddress(e.target.value);
                }}
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
                    {companyGet.companyAddress
                      ? companyGet.companyAddress
                      : companyAddress}
                  </SearchAddress>
                </AddressBox>
              </St_Address>
            </div>
          )}
          {/* ) :
''
} */}
        </Item>

        <Item>
          <St_Key>
            직책<Essential>*</Essential>
          </St_Key>
          <St_value
            type="text"
            placeholder="Ex) 팀장"
            name="position"
            value={position || ''}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
        </Item>
        <Item>
          <St_Key>
            부서<Essential>*</Essential>
          </St_Key>
          <St_value
            type="text"
            placeholder="Ex) 영업"
            name="department"
            value={department || ''}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          />
        </Item>
        <Item>
          <St_Key>유선전화</St_Key>
          <St_value
            type="text"
            placeholder="Ex) 02-000-0000"
            name="tel"
            maxLength="13"
            value={tel || ''}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          ></St_value>
          {tel && tel.includes('-') === false ? (
            <AssistiveText>- 을 포함해주세요</AssistiveText>
          ) : null}
        </Item>
        <Item>
          <St_Key>팩스</St_Key>
          <St_value
            type="text"
            placeholder="Ex) 02-000-0000"
            name="fax"
            maxLength="13"
            value={fax || ''}
            onChange={(e) => {
              setFax(e.target.value);
            }}
          />
          {fax && fax.includes('-') === false ? (
            <AssistiveText>- 을 포함해주세요</AssistiveText>
          ) : null}
        </Item>
      </PatchBox>
      <SectionFooter />
    </Layout>
  );
};

export default MainCards;
