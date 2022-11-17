import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { __viewGet, __fixPost } from "../../redux/modules/CardsSlice";

const MainCards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const cardFix = useSelector((state) => state.PostReducer.viewList.data);
  console.log(cardFix);

  const preventClose = (e = BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  useEffect(() => {
    dispatch(__viewGet(id));
  }, [dispatch]);

  const [inputValue, setInputValue] = useState({
    cardName: cardFix.cardName,
    email: cardFix.email,
    company: cardFix.company,
    companyAddress: cardFix.companyAddress,
    companyType: cardFix.companyType,
    phoneNum: cardFix.phoneNum,
    department: cardFix.department,
    position: cardFix.position,
    tel: cardFix.tel,
    fax: cardFix.fax,
  });

  const valueChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };
  //   const radioChangeHandler = (e) => {
  //     setCompanyType(e.target.value);
  //     console.log(companyType);
  //   };

  const cardsSubmitHandler = () => {
    dispatch(
      __fixPost({
        id: cardFix.id,
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
    alert("FixDone!");
    navigate("/");
  };

  return (
    <HoleBox>
      <div>
        <form onSubmit={cardsSubmitHandler}>
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
            value={inputValue.cardName}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="연락처"
            name="phoneNum"
            value={inputValue.phoneNum}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="이메일"
            name="email"
            value={inputValue.email}
            onChange={valueChangeHandler}
          ></input>
          <button onClick={() => navigate("/posts/companySearch")}>
            회사검색
          </button>
          <input
            type="text"
            placeholder="회사"
            name="company"
            value={inputValue.company}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="회사주소"
            name="companyAddress"
            value={inputValue.companyAddress}
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
            value={inputValue.tel}
            onChange={valueChangeHandler}
          ></input>
          <input
            type="text"
            placeholder="팩스"
            name="fax"
            value={inputValue.fax}
            onChange={valueChangeHandler}
          ></input>
          <button>수정하기</button>
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
