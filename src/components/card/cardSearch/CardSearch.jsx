import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Layout from "../../layout/Layout";
import SearchNone from "../../searchNone/SearchNone";
import { __CardSearchGet } from "../../../redux/modules/CardsSlice";
import {
  St_Header,
  St_Title,
  SearchBox,
  Icon,
  Input,
  Button,
  Card,
  CardInfo,
  CardName,
  CardInfoDetail,
  Position,
  Department,
  CardInCard,
  CardInCardDetail1,
  CardInCardDetail1Name,
  CardInCardDetail1Position,
  CardInCardDetail2,
  CardInCardDetail2Email,
  CardInCardDetail2Phone,
} from "./CardSearchStyle";
import CardsFooter from "../../footer/CardsFooter";
import { SectionFooter } from "../../footer/FooterStyle";

const CardSearch = () => {
  const [search, setSearch] = useState("");
  const searched = useSelector((state) => state.PostReducer.searchCard);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchClickHandler = () => {
    dispatch(__CardSearchGet(search));
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
            dispatch(__CardSearchGet(null));
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
        <St_Title>명함 검색</St_Title>
      </St_Header>

      <SearchBox>
        <Input
          type="text"
          value={search}
          onChange={searchChangeHandler}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              dispatch(__CardSearchGet(search));
            }
          }}
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
      {searched !== undefined && searched.length >= 1 ? (
        searched.map((main) => {
          return (
            <Card
              key={main.id}
              onClick={() => {
                dispatch(__CardSearchGet(null));
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
                    {main.company.length > 6
                      ? main.company.slice(0, 6) + "..."
                      : main.company}
                  </Department>
                </CardInfoDetail>
              </CardInfo>
              <CardInCard>
                <CardInCardDetail1>
                  <CardInCardDetail1Name>{main.cardName}</CardInCardDetail1Name>
                  <CardInCardDetail1Position>
                    {main.position.length > 10
                      ? main.position.slice(0, 10) + "..."
                      : main.position}
                  </CardInCardDetail1Position>
                </CardInCardDetail1>
                <CardInCardDetail2>
                  <CardInCardDetail2Email>
                    {main.email.length > 30
                      ? main.email.slice(0, 30) + "..."
                      : main.email}
                  </CardInCardDetail2Email>
                  <CardInCardDetail2Phone>
                    {main.phoneNum}
                  </CardInCardDetail2Phone>
                </CardInCardDetail2>
              </CardInCard>
            </Card>
          );
        })
      ) : (
        <SearchNone />
      )}
      <CardsFooter />
      <SectionFooter />
    </Layout>
  );
};

export default CardSearch;
