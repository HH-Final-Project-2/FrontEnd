import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Layout from "../../layout/Layout";
import { __searchGet, __companyInfo } from "../../../redux/modules/CardsSlice";
import {
  ComInfor,
  Company,
  Address,
  St_Header,
  St_Title,
  SearchBox,
  Icon,
  Input,
  Button,
} from "./CompanySearchStyle";
import Pagination from "react-js-pagination";

const CompanySearch = () => {
  const [search, setSearch] = useState();
  const searched = useSelector(
    (state) => state.PostReducer.searchCompanyInfo.data
  );
  console.log(searched);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const searchClickHandler = () => {
    dispatch(__searchGet(search));
  };

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
        <St_Title>회사 검색</St_Title>
      </St_Header>

      <SearchBox>
        <Input
          type="text"
          value={search}
          onChange={searchChangeHandler}
        ></Input>
      </SearchBox>
      <Icon>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20L16.2715 16.2648M18.3734 11.1867C18.3734 13.0928 17.6163 14.9207 16.2685 16.2685C14.9207 17.6163 13.0928 18.3734 11.1867 18.3734C9.28068 18.3734 7.45271 17.6163 6.10494 16.2685C4.75717 14.9207 4 13.0928 4 11.1867C4 9.28068 4.75717 7.45271 6.10494 6.10494C7.45271 4.75717 9.28068 4 11.1867 4C13.0928 4 14.9207 4.75717 16.2685 6.10494C17.6163 7.45271 18.3734 9.28068 18.3734 11.1867Z"
            stroke="#52596B"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </Icon>
      <Button onClick={searchClickHandler}>검색</Button>
      <div style={{ overflowY: "auto" }}>
        {searched &&
          searched.map((x) => (
            <ComInfor
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
              <Company>{x.companyName}</Company>
              <Address>{x.companyAddress}</Address>
            </ComInfor>
          ))}
      </div>
    </Layout>
    // <div>
    //   <div>
    //     <input
    //       type="text"
    //       value={search}
    //       onChange={searchChangeHandler}
    //     ></input>
    //     <button onClick={searchClickHandler}>회사검색</button>
    //   </div>
    //   {searched &&
    //     searched.map((x) => (
    //       <div
    //         key={x.id}
    //         onClick={() => {
    //           dispatch(
    //             __companyInfo({
    //               companyName: x.companyName,
    //               companyAddress: x.companyAddress,
    //             })
    //           );
    //           navigate(-1);
    //         }}
    //       >
    //         <p>{x.companyName}</p>
    //         <p>{x.companyAddress}</p>
    //       </div>
    //     ))}
    // </div>
  );
};

export default CompanySearch;
