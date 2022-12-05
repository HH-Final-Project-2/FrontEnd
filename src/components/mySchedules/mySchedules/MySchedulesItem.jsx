import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "./mySchedulesItme.css";
import moment from "moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { __schedulesGet } from "../../../redux/modules/SchedulesSlice";
import { useNavigate } from "react-router-dom";
import addimg from "../../../images/Property 1=default.svg";
import Footer from "../../footer/Footer";
import Delete from "../../../images/ic-close-fill-wh-32px.svg";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

const MySchedulesItem = () => {
  const [value, onChange] = useState(new Date());
  const marks = useSelector((state) => state.ScheduleSlice.date);
  console.log(marks);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__schedulesGet());
  }, [dispatch]);

  if (marks === null) return;

  return (
    <div className="page">
      <div className="layout">
        <div className="head">
          <p className="todos">개인일정</p>
          <img
            src={addimg}
            className="addBtn"
            onClick={() => {
              navigate("/addSchedules");
            }}
            alt=""
          />
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
              html.push(<div className="dot" />);
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
          {moment(value).format("MM월 DD일 일정")}
          {marks !== null
            ? marks.map((x) => {
                if (
                  x.filteredDate !== undefined &&
                  x.filteredDate.includes(moment(value).format("YYYY-MM-DD"))
                ) {
                  return (
                    <div className="todoBox">
                      <div key={x.id} className="todoOneBox">
                        <div className="todoBoxSection">
                          <div className="titleBox">
                            <div className="titleSection">
                              <div className="todoDot" />
                              <div className="title">{x.title}</div>
                            </div>

                            <div className="todo">{x.todo}</div>
                          </div>

                          <div className="dateTime">
                            <div className="startDate">
                              {x.startDate} {x.startTime}
                            </div>
                            <div className="endDate">
                              {x.endDate} {x.endTime}
                            </div>
                          </div>
                        </div>

                        <img
                          className="deleteBtn"
                          src={Delete}
                          onClick={() => {
                            const config = {
                              headers: {
                                Authorization: accessToken,
                                "Refresh-Token": refreshToken,
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
                        />
                      </div>
                    </div>
                  );
                } else return null;
              })
            : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MySchedulesItem;
