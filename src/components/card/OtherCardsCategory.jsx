import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { __mainGet } from "../../redux/modules/CardsSlice";

const OtherCardsCategory = () => {
  const mainpost = useSelector((state) => state.PostReducer.list.data);
  console.log(mainpost);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__mainGet());
  }, [dispatch]);

  if (mainpost === undefined) return null;

  return (
    <div>
      <button
        onClick={() => {
          navigate("/cards");
        }}
      >
        자사
      </button>
      <button
        onClick={() => {
          navigate("/otherCategory");
        }}
      >
        타사
      </button>
      {mainpost !== "명함을 등록해주세요"
        ? mainpost.map((main) => {
            if (main.companyType === "other") {
              return (
                <div
                  key={main.id}
                  onClick={() => {
                    navigate(`/posts/get/${main.id}`);
                  }}
                >
                  <div>{main.cardName}</div>
                  <div>{main.email}</div>
                  <div>{main.company}</div>
                  <div>{main.phoneNum}</div>
                  <div>{main.companyType}</div>
                </div>
              );
            }
          })
        : null}
      <button
        onClick={() => {
          navigate("/posts");
        }}
      >
        명함 작성
      </button>
    </div>
  );
};

export default OtherCardsCategory;
