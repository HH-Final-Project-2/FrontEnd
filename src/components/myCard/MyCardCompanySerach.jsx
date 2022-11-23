import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  _searchGet,
  _companyInfo,
  _PutCard,
} from "../../redux/modules/mycardSlice";
import styled from "styled-components";

const MyCardCompanySerach = () => {
  const [search, setSearch] = useState("");
  const searched = useSelector((state) => state.cardinfo.searchCompany.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchClickHandler = () => {
    dispatch(
      _searchGet({
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
          <ComInfor
            key={x.id}
            onClick={() => {
              dispatch(
                _companyInfo({
                  companyName: x.companyName,
                  companyAddress: x.companyAddress,
                })
              );
              navigate(-1);
            }}
          >
            <p>{x.companyName}</p>
            <p>{x.companyAddress}</p>
          </ComInfor>
        ))}
    </div>
  );
};
export default MyCardCompanySerach;
const ComInfor = styled.div`
  border: 1px solid;
  cursor: pointer;
`;
