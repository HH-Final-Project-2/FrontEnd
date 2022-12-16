import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveInfo } from '../../../redux/modules/mycardSlice';
import Layout from '../../layout/Layout';

const MyCardCompanyWrite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    dispatch(
      saveInfo({ companyAddress: fullAddress }),
      navigate('/mypage/cardmake')
    );
    console.log(fullAddress);

  };

  const handleSearch = (data) => {};

  return (
    <Layout>
      <DaumPostcode onComplete={handleComplete} onSearch={handleSearch} />
    </Layout>
  );
};

export default MyCardCompanyWrite;
