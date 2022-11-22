import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "./mySchedulesItme.css";
import moment from "moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { __schedulesGet } from "../../redux/modules/SchedulesSlice";
import { useNavigate } from "react-router-dom";

const MySchedulesItem = () => {
  const [value, onChange] = useState(new Date());
  const marks = useSelector((state) => state.ScheduleSlice.date);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__schedulesGet());
  }, [dispatch]);

  const addClickHandler = (e) => {
    e.preventDefault();
    navigate("/addSchedules");
  };

  return (
    <div className="page">
      <div className="layout">
        <div>
          <p>개인일정</p>
          <button onClick={addClickHandler}>일정 추가</button>
        </div>
        <Calendar
          onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
          formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
          value={value}
          minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          navigationLabel={null}
          showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
          className="mx-auto w-full text-sm border-b"
          tileContent={({ date, view }) => {
            const ddate = moment(date).format("YYYY-MM-DD");

            let html = [];

            if (marks.find((x) => x.filteredDate.includes(ddate))) {
              html.push(<div className="dot"></div>);
            } else return null;
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  {html}
                </div>
              </>
            );
          }}
        />
        <div className="detailTodo">
          {moment(value).format("YYYY년 MM월 DD일")}
          {marks !== undefined
            ? marks.map((x) => {
                if (
                  x.filteredDate.includes(moment(value).format("YYYY-MM-DD"))
                ) {
                  return (
                    <div key={x.id}>
                      <div>키:{x.id}</div>
                      <div>시작:{x.startDate}</div>
                      <div>종료:{x.endDate}</div>
                      <div>제목:{x.title}</div>
                      <div>할일:{x.todo}</div>
                      <button
                        onClick={() => {
                          const config = {
                            headers: {
                              Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTIxMjM2NH0.4LgYwsbIz38cwRkPQcSJIrDOmaBvBEt4eqPXx5IjC1g",
                              "Refresh-Token":
                                "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk3MzA3NjR9.o8pS793rKuCaIFbtHrKbRL19U--qQpfeV9fH_8b18fA",
                            },
                          };
                          axios
                            .delete(
                              `https://bkyungkeem.shop/api/calendar/${x.id}`,
                              config
                            )
                            .then(function (response) {
                              console.log(response);
                              marks.filter((x) => x.id !== response);
                            })
                            .catch(function (error) {
                              console.log(error);
                            })
                            .then(function () {
                              // always executed
                            });
                          alert("DELETE SECCESS");
                          window.location.reload(); //쓰면 안좋음.. 이거 수정할 수 있는 방법 찾아보자
                        }}
                      >
                        일정 삭제
                      </button>
                    </div>
                  );
                } else return null;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default MySchedulesItem;
