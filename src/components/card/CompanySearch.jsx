import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { __searchGet, __companyInfo } from "../../redux/modules/CardsSlice";

const CompanySearch = () => {
  const [search, setSearch] = useState();
  const searched = useSelector((state) => state.PostReducer.searchCompany.data);
  console.log(searched);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const searchClickHandler = () => {
    dispatch(
      __searchGet({
        pageNo: 1,
        companyName: search,
      })
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={searchChangeHandler}
        ></input>
        <button onClick={searchClickHandler}>회사검색</button>
      </div>
      {searched &&
        searched.map((x) => (
          <div
            key={x.id}
            onClick={() => {
              dispatch(
                __companyInfo({
                  companyName: x.companyName,
                  companyAddress: x.companyAddress,
                })
              );
              navigate(-1);
            }}
          >
            <p>{x.companyName}</p>
            <p>{x.companyAddress}</p>
          </div>
        ))}
    </div>
  );
};

export default CompanySearch;
