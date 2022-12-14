import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Layout from "../../layout/Layout";
import {
  __viewGet,
  __fixPost,
  __cardInfo,
} from "../../../redux/modules/CardsSlice";
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
  AddressSearch,
  RadioBox,
  RadioDetail,
  Essential,
  AssistiveText,
  CompanyInput,
} from "./MainCardsPutStyle";

import { SectionFooter } from "../../footer/FooterStyle";
import { CheckOther, CheckOwn, FormCheckOther, FormCheckOwn, SectionHeader } from "../cardPost/cardPostStyle";
import Swal from "sweetalert2";

const MainCards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const cardFix = useSelector((state) => state.PostReducer.viewList);
  const companyGet = useSelector((state) => state.PostReducer.companyInfo);
  const companyOnly = useSelector(
    (state) => state.PostReducer.defaultCard.company
  );

  const [companyHow, setCompanyHow] = useState();
  const [company, setCompany] = useState(cardFix.company);
  const [companyName, setCompanyName] = useState(cardFix.company);
  const lastCompany =
    (companyGet.company !== undefined ? companyGet.company : companyOnly) ||
    (companyOnly !== undefined ? companyOnly : company);

  useEffect(() => {
    dispatch(__viewGet(id));
  }, [dispatch]);

  const [inputValue, setInputValue] = useState({
    cardName: cardFix.cardName,
    email: cardFix.email,
    companyAddress: cardFix.companyAddress,
    companyType: cardFix.companyType,
    phoneNum: cardFix.phoneNum,
    department: cardFix.department,
    position: cardFix.position,
    tel: cardFix.tel,
    fax: cardFix.fax,
  });

  const isValidEmail =
    inputValue.email !== undefined && inputValue.email !== null
      ? inputValue.email.includes("@") && inputValue.email.includes(".")
      : false;

  const isValidInput =
    inputValue.cardName &&
      inputValue.email &&
      lastCompany &&
      inputValue.companyAddress &&
      inputValue.companyType &&
      inputValue.phoneNum &&
      inputValue.department &&
      inputValue.position !== undefined
      ? inputValue.cardName.length >= 1 &&
      inputValue.email.length >= 1 &&
      lastCompany.length >= 1 &&
      inputValue.companyAddress.length >= 1 &&
      inputValue.companyType.length >= 1 &&
      inputValue.phoneNum.length >= 1 &&
      inputValue.department.length >= 1 &&
      inputValue.position.length >= 1
      : false;

  const valueChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => setInputValue(cardFix), [cardFix]);
  // useEffect(() => companyChangeHandler, [companyOnly, companyGet]);

  const companyChangeHandler = () => {
    if (companyGet.company && companyOnly === undefined) {
      return setCompany(companyGet.company);
    } else if (companyOnly && companyGet.company === undefined) {
      return setCompany(companyOnly);
    } else if (companyOnly === undefined && companyGet.company === undefined) {
      return setCompany(cardFix.company);
    }
  };

  const cardsSubmitHandler = () => {
    if (isValidEmail && isValidInput === true) {
      dispatch(
        __fixPost({
          id: id,
          cardName: inputValue.cardName,
          email: inputValue.email,
          phoneNum: inputValue.phoneNum,
          department: inputValue.department,
          position: inputValue.position,
          tel: inputValue.tel,
          fax: inputValue.fax,
          company: lastCompany,
          companyAddress:
            companyGet.companyAddress !== undefined
              ? companyGet.companyAddress
              : inputValue.companyAddress,
          companyType: inputValue.companyType,
        })
      );
      dispatch(
        __cardInfo({
          cardName: "",
          email: "",
          phoneNum: "",
          department: "",
          position: "",
          tel: "",
          fax: "",
          companyType: "",
          company: "",
        })
      );
    }
    Swal.fire({
      title: '????????? ?????????????????????',
      showConfirmButton: false,
      timer: 1000,
      customClass: {
        popup: 'allAlret-class',
        title: 'allTitle-class',
      },
    }).then(() => {
      navigate(`/posts/get/${id}`);
    })
  };
  return (
    <div>
      <Layout>
        <SectionHeader />
        <St_Header>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(
                __cardInfo({
                  cardName: "",
                  email: "",
                  phoneNum: "",
                  department: "",
                  position: "",
                  tel: "",
                  fax: "",
                  companyType: "",
                  company: "",
                })
              );
              Swal.fire({
                title:
                  '<div class="title-wrap"><p>?????????????????? ?????????????????????????</p><p class="test">????????? ????????? ???????????????</p></div>',
                showCancelButton: true,
                confirmButtonColor: 'white',
                cancelButtonColor: 'white',
                confirmButtonText: '<div class="confirm-text">??????</div>',
                cancelButtonText: '<div class="cancel-text">??????</div>',
                customClass: {
                  popup: "login-class",
                  title: "title-class",
                },
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.replace(`/posts/get/${id}`);
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
          <St_Title>????????????</St_Title>
          <SaveButton onClick={cardsSubmitHandler}>??????</SaveButton>
        </St_Header>
        <PatchBox>
          <Item>
            <St_Key>
              ??????<Essential>*</Essential>
            </St_Key>
            <St_value
              type="text"
              placeholder="??????"
              name="cardName"
              minLength="2"
              maxLength="5"
              value={inputValue.cardName || ""}
              onChange={valueChangeHandler}
            ></St_value>
          </Item>
          <Item>
            <St_Key>
              ?????????<Essential>*</Essential>
            </St_Key>
            <St_value
              type="text"
              placeholder="?????????"
              name="phoneNum"
              maxLength="13"
              value={inputValue.phoneNum}
              onChange={valueChangeHandler}
            ></St_value>
            {inputValue.phoneNum &&
              inputValue.phoneNum.includes("-") === false ? (
              <AssistiveText>-??? ??????????????????</AssistiveText>
            ) : null}
          </Item>
          <Item>
            <St_Key>
              ?????????<Essential>*</Essential>
            </St_Key>
            <St_value
              type="text"
              placeholder="?????????"
              name="email"
              minLength="10"
              maxLength="30"
              value={inputValue.email}
              onChange={valueChangeHandler}
            ></St_value>
            {isValidEmail === false && inputValue.email ? (
              <AssistiveText>???????????? ???????????????</AssistiveText>
            ) : null}
          </Item>
          <Item>
            <St_Key>
              ??????<Essential>*</Essential>
            </St_Key>

            <RadioBox>
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
                  <CheckOwn htmlFor="find">?????? ??????</CheckOwn>
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
                  <CheckOther htmlFor="myself">?????? ??????</CheckOther>
                </label>
              </RadioDetail>
            </RadioBox>

            {companyHow === "myself" ? (
              <div>
                <CompanyInput
                  name="company"
                  placeholder="???????????? ???????????????"
                  value={companyName || ""}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
                <AddressSearch>
                  <p
                    onClick={() => {
                      dispatch(
                        __cardInfo({
                          cardName: inputValue.cardName
                            ? inputValue.cardName
                            : "",
                          email: inputValue.email ? inputValue.email : "",
                          phoneNum: inputValue.phoneNum
                            ? inputValue.phoneNum
                            : "",
                          department: inputValue.department
                            ? inputValue.department
                            : "",
                          position: inputValue.position
                            ? inputValue.position
                            : "",
                          tel: inputValue.tel,
                          fax: inputValue.fax,
                          companyType: inputValue.companyType
                            ? inputValue.companyType
                            : "",
                          company: companyName ? companyName : company,
                        })
                      );
                      navigate("/posts/companyOtherSearch");
                    }}
                  >
                    ?????? ?????? ??????
                  </p>
                </AddressSearch>
              </div>
            ) : (
              <div>
                <St_value
                  name="company"
                  value={
                    companyGet.company
                      ? companyGet.company
                      : companyOnly
                        ? companyOnly
                        : company
                  }
                  onClick={() => {
                    dispatch(
                      __cardInfo({
                        cardName: inputValue.cardName
                          ? inputValue.cardName
                          : cardFix.cardName,
                        email: inputValue.email,
                        phoneNum: inputValue.phoneNum,
                        department: inputValue.department
                          ? inputValue.department
                          : "",
                        position: inputValue.position
                          ? inputValue.position
                          : "",
                        tel: inputValue.tel,
                        fax: inputValue.fax,
                        companyType: inputValue.companyType
                          ? inputValue.companyType
                          : "",
                      })
                    );
                    navigate("/posts/companySearch");
                  }}
                ></St_value>
                <St_Address
                  name="companyAddress"
                  value={
                    companyGet.companyAddress
                      ? companyGet.companyAddress
                      : inputValue.companyAddress
                  }
                  onChange={valueChangeHandler}
                >
                  <AddressBox>
                    <div>
                      <svg
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginRight: "8px" }}
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
                        : inputValue.companyAddress}
                    </SearchAddress>
                  </AddressBox>
                </St_Address>
              </div>
            )}
          </Item>
          <Item>
            <St_Key>
              ??????<Essential>*</Essential>
            </St_Key>
            <St_value
              type="text"
              placeholder="??????"
              name="position"
              value={inputValue.position}
              onChange={valueChangeHandler}
            ></St_value>
          </Item>
          <Item>
            <St_Key>
              ??????<Essential>*</Essential>
            </St_Key>
            <St_value
              type="text"
              placeholder="??????"
              name="department"
              value={inputValue.department}
              onChange={valueChangeHandler}
            ></St_value>
          </Item>
          <Item>
            <St_Key>????????????</St_Key>
            <St_value
              type="text"
              placeholder="????????????"
              name="tel"
              maxLength="13"
              value={inputValue.tel || ""}
              onChange={valueChangeHandler}
            ></St_value>
          </Item>
          <Item>
            <St_Key>??????</St_Key>
            <St_value
              type="text"
              placeholder="??????"
              name="fax"
              maxLength="13"
              value={inputValue.fax || ""}
              onChange={valueChangeHandler}
            ></St_value>
          </Item>
        </PatchBox>
        <SectionFooter />
      </Layout>
    </div>
  );
};

export default MainCards;
