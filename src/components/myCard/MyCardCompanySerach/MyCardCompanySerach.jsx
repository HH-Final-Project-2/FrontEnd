import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { _searchGet, _companyInfo } from "../../../redux/modules/mycardSlice";
import Pagination from "react-js-pagination";
import Layout from "../../layout/Layout";
import SearchNone from "../../searchNone/SearchNone";

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
  Section3,
  PaginationBox,
} from "../MyCardCompanySerach/MyCardCompanySerachStyle";

import { ReactComponent as Icbefore } from "../../../images/ic-before.svg";
import { ReactComponent as IcSearch } from "../../../images/ic-search.svg";

const MyCardCompanySerach = () => {
  const [search, setSearch] = useState("");
  const searched = useSelector((state) => state.cardinfo.searchCompany.data);

  const dispatch = useDispatch();
  const nav = useNavigate();

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const [page, setPage] = useState(1); //현재 페이지

  const [currentPosts, setCurrentPosts] = useState(searched); // 보여줄 게시글
  const [postPerPage] = useState(20); //페이지당 게시글 개수
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setCurrentPosts(
      searched !== undefined
        ? searched.slice(indexOfFirstPost, indexOfLastPost)
        : null
    );
    window.scrollTo(0, 0);
  }, [indexOfFirstPost, indexOfLastPost, page, searched]);

  const searchClickHandler = () => {
    dispatch(_searchGet(search));
  };

  return (
    <Layout>
      <St_Header>
        <Icbefore
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(_companyInfo({ companyName: "", companyAddress: "" }));
            nav(-1);
          }}
        />
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
        <IcSearch />
      </Icon>
      <Button onClick={searchClickHandler}>검색</Button>
      <Section3>
        {currentPosts && currentPosts !== undefined ? (
          currentPosts.map((post) => {
            return (
              <ComInfor
                key={post.id}
                onClick={() => {
                  setTimeout(() => {
                    dispatch(
                      _companyInfo({
                        companyName: post.companyName,
                        companyAddress: post.companyAddress,
                      })
                    );
                  }, 100);

                  setTimeout(() => {
                    nav(-1);
                  }, 300);
                }}
              >
                <Company>{post.companyName}</Company>
                <Address>{post.companyAddress}</Address>
              </ComInfor>
            );
          })
        ) : (
          <SearchNone />
        )}
        <PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={postPerPage}
            totalItemsCount={searched !== undefined ? searched.length : null}
            pageRangeDisplayed={5}
            prevPageText={
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 1L1 5L5 9" stroke="#8892A0" />
              </svg>
            }
            nextPageText={
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 9L5 5L1 1" stroke="#8892A0" />
              </svg>
            }
            onChange={handlePageChange}
          />
        </PaginationBox>
      </Section3>
    </Layout>
  );
};
export default MyCardCompanySerach;
