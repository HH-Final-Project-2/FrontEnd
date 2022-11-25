import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  _searchGet,
  _companyInfo,
  _PutCard,
} from '../../redux/modules/mycardSlice';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import MyCardFooter from '../footer/MyCardFooter';

const MyCardCompanySerach = () => {
  const [search, setSearch] = useState('');
  const searched = useSelector((state) => state.cardinfo.searchCompany.data);

  const dispatch = useDispatch();
  const nav = useNavigate();

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
    <Layout>
      <St_Header>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            nav(-1);
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
      <div style={{ overflowY: 'auto' }}>
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
                nav(-1);
              }}
            >
              <Company>{x.companyName}</Company>
              <Address>{x.companyAddress}</Address>
            </ComInfor>
          ))}
      </div>
      <MyCardFooter />
    </Layout>
  );
};
export default MyCardCompanySerach;
const ComInfor = styled.div`
  cursor: pointer;
`;

const Company = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #222222;
  padding-left: 14px;
`;

const Address = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #8892a0;
  padding-left: 14px;
  width: 300px;
  margin-bottom: 10px;
`;

const St_Header = styled.div`
  font-weight: 600;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 12px;
  color: #1a1f27;
  margin-bottom: 20px;
`;

const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 85px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 4px;
`;

const SearchBox = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #d6d6d6;
  position: relative;
  bottom: 5px;
`;

const Icon = styled.div`
  height: 15px;
  width: 25px;
  display: flex;
  position: relative;
  bottom: 48px;
  left: 30px;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  max-width: 335px;
  height: 40px;
  border: 0px solid;
  border-radius: 8px;
  outline: none;
  background: #f5f5f5;
  margin: auto;
  padding-left: 40px;
`;

const Button = styled.a`
  width: 35px;
  height: 0px;
  display: flex;
  position: relative;
  bottom: 61px;
  left: 310px;
  cursor: pointer;
  font-size: 14px;
`;
