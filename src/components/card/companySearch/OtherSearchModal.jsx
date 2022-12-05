import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __companyInfo } from "../../../redux/modules/CardsSlice";
import Layout from "../../layout/Layout";

const OtherSearchModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleComplete = (data, companyName) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(fullAddress);
    console.log(companyName);
    dispatch(__companyInfo({ companyAddress: fullAddress }), navigate(-2));
  };

  const handleSearch = (data) => {};

  return (
    <Layout>
      <DaumPostcode onComplete={handleComplete} onSearch={handleSearch} />
    </Layout>
  );
};

export default OtherSearchModal;
