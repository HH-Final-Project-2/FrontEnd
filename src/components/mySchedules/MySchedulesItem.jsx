import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "./mySchedulesItme.css";
import moment from "moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { __schedulesGet } from "../../redux/modules/SchedulesSlice";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const MySchedulesItem = () => {
  const [value, onChange] = useState(new Date());
  const marks = useSelector((state) => state.ScheduleSlice.date);
  // const count = Object.keys(marks).length;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__schedulesGet());
  }, [dispatch]);

  const addClickHandler = (e) => {
    e.preventDefault();
    navigate("/addSchedules");
  };
  const onClickHandler = () => {};

  return (
    <div>
      <button onClick={addClickHandler}>일정 추가</button>
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
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];

          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          if (marks.find((x) => x.dateTime === ddate)) {
            html.push(<div className="dot"></div>);
          }

          // for (let i = 0; i < count; i++) {
          //   if (marks[i].dateTime === ddate) {
          //     html.push(<div className="dot"></div>);
          //   }
          // }
          // for (let i = 0; i < count; i++) {
          //   if (marks[i].dateTime === ddate) {
          //     html.push(<div className="dot"></div>);
          //   }
          // }

          // if (marks[0].dateTime === ddate) {
          //   html.push(<div className="dot"></div>);
          // }

          // mark.filter((x) =>
          //   x.dateTime === ddate ? html.push(<div className="dot"></div>) : null
          // );
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">
                {html}
              </div>
            </>
          );
        }}
      />
      <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
        {marks !== undefined
          ? marks.map((x) => {
              if (x.dateTime === moment(value).format("YYYY-MM-DD")) {
                return (
                  <div key={x.id}>
                    <div>날짜:{x.dateTime}</div>
                    <div>시간:{x.time}</div>
                    <div>할일:{x.todo}</div>
                    <button onClick={onClickHandler}>일정 삭제</button>
                    <button>일정 수정</button>
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );
};

export default MySchedulesItem;
