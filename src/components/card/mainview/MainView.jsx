import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { __mainGet } from "../../../redux/modules/CardsSlice";
import Layout from "../../layout/Layout";
import Header from "../../header/Header";

import {
  CategoryBtnBox,
  CategoryBtn1,
  CategoryBtn2,
  SearchSvg,
  CardSearchInput,
  CardList,
  Card,
  CardName,
  CardInfo,
  Position,
  Department,
  CardInCard,
  CardInfoDetail,
  WriteButton,
  CardInCardDetail1,
  CardInCardDetail2,
  CardInCardDetail1Name,
  CardInCardDetail1Position,
  CardInCardDetail2Email,
  CardInCardDetail2Phone,
} from "./MainViewStyle";

const MainView = () => {
  const mainpost = useSelector((state) => state.PostReducer.list.data);
  console.log(mainpost);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__mainGet());
  }, [dispatch]);

  if (mainpost === undefined) return null;

  return (
    <Layout>
      <Header />
      <div>
        <div>
          <SearchSvg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              navigate("/cardSearch");
            }}
          >
            <path
              d="M20 20L16.2715 16.2648M18.3734 11.1867C18.3734 13.0928 17.6163 14.9207 16.2685 16.2685C14.9207 17.6163 13.0928 18.3734 11.1867 18.3734C9.28068 18.3734 7.45271 17.6163 6.10494 16.2685C4.75717 14.9207 4 13.0928 4 11.1867C4 9.28068 4.75717 7.45271 6.10494 6.10494C7.45271 4.75717 9.28068 4 11.1867 4C13.0928 4 14.9207 4.75717 16.2685 6.10494C17.6163 7.45271 18.3734 9.28068 18.3734 11.1867Z"
              stroke="#52596B"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </SearchSvg>
          <CardSearchInput
            type="text"
            onClick={() => {
              navigate("/cardSearch");
            }}
          ></CardSearchInput>
        </div>
        <CategoryBtnBox>
          <CategoryBtn1
            onClick={() => {
              navigate("/cards");
            }}
          >
            자사
          </CategoryBtn1>
          <CategoryBtn2
            onClick={() => {
              navigate("/otherCategory");
            }}
          >
            타사
          </CategoryBtn2>
        </CategoryBtnBox>
      </div>
      <CardList>
        {mainpost !== "명함을 등록해주세요" || mainpost !== null
          ? mainpost.map((main) => {
              if (main.companyType === "own") {
                return (
                  <div>
                    <Card
                      key={main.id}
                      onClick={() => {
                        navigate(`/posts/get/${main.id}`);
                      }}
                    >
                      <CardInfo>
                        <CardName>{main.cardName}</CardName>
                        <CardInfoDetail>
                          <Position>
                            {main.position.length > 5
                              ? main.position.slice(0, 5) + "..."
                              : main.position}
                          </Position>
                          <Department>
                            {main.department.length > 5
                              ? main.department.slice(0, 5) + "..."
                              : main.department}
                          </Department>
                        </CardInfoDetail>
                      </CardInfo>
                      <CardInCard>
                        <CardInCardDetail1>
                          <CardInCardDetail1Name>
                            {main.cardName}
                          </CardInCardDetail1Name>
                          <CardInCardDetail1Position>
                            {main.position.length > 5
                              ? main.position.slice(0, 5) + "..."
                              : main.position}
                          </CardInCardDetail1Position>
                        </CardInCardDetail1>

                        <CardInCardDetail2>
                          <CardInCardDetail2Email>
                            {main.email.length > 20
                              ? main.email.slice(0, 20) + "..."
                              : main.email}
                          </CardInCardDetail2Email>
                          <CardInCardDetail2Phone>
                            {main.phoneNum}
                          </CardInCardDetail2Phone>
                        </CardInCardDetail2>
                      </CardInCard>
                    </Card>
                  </div>
                );
              }
            })
          : null}
      </CardList>
      <WriteButton onClick={() => navigate("/posts")}>
        <img src="images/작성.png" alt="" />
      </WriteButton>
    </Layout>
  );
};

export default MainView;
