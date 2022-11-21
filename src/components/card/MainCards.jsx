import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { __writePost, __imgPost } from "../../redux/modules/CardsSlice";

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
        cardName: inputValue.cardName,
        email: inputValue.email,
        phoneNum: inputValue.phoneNum,
        department: inputValue.department,
        position: inputValue.position,
        tel: inputValue.tel,
        fax: inputValue.fax,
        company: inputValue.company,
        companyAddress: inputValue.companyAddress,
        companyType: inputValue.companyType,
      })
    );
    alert("done!");
    navigate("/cards");
  };

  useEffect(() => setInputValue(imgGet), [imgGet]);
  useEffect(() => setInputValue(companyGet), [companyGet]);
  return (
    <HoleBox>
      <div>
        <form onSubmit={cardsSubmitHandler}>
          <input type="file" onChange={mediaChangeHandler}></input>
          <input
            type="radio"
            name="companyType"
            value="own"
            checked={inputValue === "own"}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="radio"
            name="companyType"
            value="other"
            checked={inputValue === "other"}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="이름"
            name="cardName"
            value={inputValue.cardName || ""}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="연락처"
            name="phoneNum"
            value={inputValue.phoneNum || ""}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="이메일"
            name="email"
            value={inputValue.email || ""}
            onChange={valueChangeHandler}
          ></input>
          <Link to="/posts/companySearch">회사검색</Link>
          <input
            type="text"
            placeholder="회사"
            name="company"
            value={inputValue.company || ""}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="회사주소"
            name="companyAddress"
            value={inputValue.companyAddress || ""}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="직책"
            name="position"
            value={inputValue.position}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="부서"
            name="department"
            value={inputValue.department}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="회사번호"
            name="tel"
            value={inputValue.tel || ""}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="팩스"
            name="fax"
            value={inputValue.fax || ""}
            onChange={valueChangeHandler}
          ></input>
          <button type="submit">등록하기</button>
        </form>
      </div>
    </HoleBox>
  );
};

export default MainCards;

const HoleBox = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
`;
