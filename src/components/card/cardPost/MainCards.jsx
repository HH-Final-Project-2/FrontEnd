import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Layout from "../../layout/Layout";
import { __writePost, __imgPost } from "../../../redux/modules/CardsSlice";
import { __searchPost } from "../../../redux/modules/PostSlice";
import ExImg from "../../../images/KakaoTalk_Photo_2022-11-17-03-38-44 001.png";
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
} from "./cardPostStyle";

const MainCards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imgGet = useSelector((state) => state.PostReducer.img);
  const companyGet = useSelector((state) => state.PostReducer.companyInfo);
  console.log(imgGet);
  console.log(companyGet);
  const [inputValue, setInputValue] = useState({
    cardName: "",
    email: imgGet.email,
    company: companyGet.companyName,
    companyAddress: companyGet.companyAddress,
    companyType: "",
    phoneNum: imgGet.phoneNum,
    department: "",
    position: "",
    tel: imgGet.tel,
    fax: imgGet.fax,
  });

  const mediaChangeHandler = (e) => {
    e.preventDefault();
    const file = new FormData();
    file.append("cardImg", e.target.files[0]);
    dispatch(__imgPost(file));
  };

  const valueChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  const cardsSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __writePost({
        cardName:
          imgGet.cardName !== undefined ? imgGet.cardName : inputValue.cardName,
        email: imgGet.email !== undefined ? imgGet.email : inputValue.email,
        phoneNum: inputValue.phoneNum,
        department: inputValue.department,
        position: inputValue.position,
        tel: imgGet.tel !== undefined ? imgGet.tel : inputValue.tel,
        fax: imgGet.fax !== undefined ? imgGet.fax : inputValue.fax,
        company:
          companyGet.companyName !== undefined
            ? companyGet.companyName
            : inputValue.company,
        companyAddress:
          companyGet.companyAddress !== undefined
            ? companyGet.companyAddress
            : inputValue.companyAddress,
        companyType: inputValue.companyType,
      })
    );
    alert("명함 작성 완료!");
    inputValue.companyType === "own"
      ? navigate("/cards")
      : navigate("/otherCategory");
  };

  useEffect(() => {
    dispatch(__imgPost);
  }, [dispatch]);

  useEffect(() => {
    dispatch(__searchPost);
  }, [dispatch]);
  // useEffect(() => setInputValue(imgGet), [imgGet]);
  // useEffect(() => setInputValue(companyGet), [companyGet]);
  return (
    <Layout>
      <St_Header>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
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

        <SaveButton onClick={cardsSubmitHandler}>저장</SaveButton>
      </St_Header>
      <PatchBox>
        <Item>
          <RadioBox>
            <RadioDetail>
              <input
                type="radio"
                id="own"
                name="companyType"
                value="own"
                checked={inputValue === "own"}
                onChange={valueChangeHandler}
              ></input>
              <label htmlFor="own">자사</label>
            </RadioDetail>
            <RadioDetail>
              <input
                type="radio"
                id="other"
                name="companyType"
                value="other"
                checked={inputValue === "other"}
                onChange={valueChangeHandler}
              ></input>
              <label htmlFor="other">타사</label>
            </RadioDetail>
          </RadioBox>
        </Item>
        <Item>
          <St_Key>명함사진</St_Key>
          <ImgBox>
            <img src={ExImg} alt="" />
            <div>명함 사진 등록은 예시 이미지와 유사한 형태만 가능합니다.</div>
          </ImgBox>
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
              {imgGet !== undefined
                ? imgGet.imgUrl && (
                    <PrevImg
                      src={imgGet.imgUrl}
                      alt="preview-img"
                      style={{ margin: "auto" }}
                    />
                  )
                : null}
            </St_Plus>
            <Input type="file" id="card" onChange={mediaChangeHandler}></Input>
          </St_Card>
        </Item>
        <Item>
          <St_Key>이름</St_Key>
          <St_value
            type="text"
            placeholder="이름"
            name="cardName"
            value={inputValue.cardName || ""}
            onChange={valueChangeHandler}
          ></St_value>
        </Item>
        <Item>
          <St_Key>이메일</St_Key>
          <St_value
            type="text"
            placeholder="이메일"
            name="email"
            value={imgGet.email ? imgGet.email : inputValue.email}
            onChange={valueChangeHandler}
          ></St_value>
        </Item>
        <Item>
          <St_Key>연락처</St_Key>
          <St_value
            type="text"
            placeholder="연락처"
            name="phoneNum"
            value={imgGet.phoneNum ? imgGet.phoneNum : inputValue.phoneNum}
            onChange={valueChangeHandler}
          ></St_value>
        </Item>
        <Item>
          <St_Key>회사</St_Key>
          <div>
            <St_value
              name="company"
              value={
                companyGet.companyName
                  ? companyGet.companyName
                  : inputValue.company
              }
              onChange={valueChangeHandler}
              onClick={() => navigate("/posts/companySearch")}
            ></St_value>
          </div>
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
        </Item>
        <Item>
          <St_Key>직책</St_Key>
          <St_value
            type="text"
            placeholder="직책"
            name="position"
            value={inputValue.position}
            onChange={valueChangeHandler}
          ></St_value>
        </Item>
        <Item>
          <St_Key>부서</St_Key>
          <St_value
            type="text"
            placeholder="부서"
            name="department"
            value={inputValue.department}
            onChange={valueChangeHandler}
          ></St_value>
        </Item>
        <Item>
          <St_Key>회사번호</St_Key>
          <St_value
            type="text"
            placeholder="회사번호"
            name="tel"
            value={imgGet.tel ? imgGet.tel : inputValue.tel}
            onChange={valueChangeHandler}
          ></St_value>
        </Item>
        <Item>
          <St_Key>팩스</St_Key>
          <St_value
            type="text"
            placeholder="팩스"
            name="fax"
            value={imgGet.fax ? imgGet.fax : inputValue.fax}
            onChange={valueChangeHandler}
          ></St_value>
        </Item>
      </PatchBox>
    </Layout>
  );
};

export default MainCards;
