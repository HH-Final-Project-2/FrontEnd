import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  _searchGet,
  _companyInfo,
  _PutCard,
} from '../../../redux/modules/mycardSlice';

import Layout from '../../layout/Layout';
import MyCardFooter from '../../footer/MyCardFooter';
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
} from '../MyCardCompanySerach/MyCardCompanySerachStyle';

import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';
import { ReactComponent as IcSearch } from '../../../images/ic-search.svg';

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
        <Icbefore
          style={{ cursor: 'pointer' }}
          onClick={() => {
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
