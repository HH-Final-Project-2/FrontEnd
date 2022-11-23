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

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
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
      {mainpost &&
        mainpost.map((main) => {
          if (main.companyType === "other") {
            return (
              <div
                key={main.id}
                onClick={() => {
                  navigate(`/posts/get/${main.id}`);
                }}
              >
                <div>{main.name}</div>
                <div>{main.email}</div>
                <div>{main.company}</div>
                <div>{main.phoneNum}</div>
                <div>{main.companyType}</div>
              </div>
            );
          }
        })}
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