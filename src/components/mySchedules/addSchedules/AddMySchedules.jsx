import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __writeSchedules } from "../../../redux/modules/SchedulesSlice";
import {
  Section1,
  Section1Title,
  Section2,
  SectionLine,
} from "../../community/postList/PostListStyle";
import {
  AddBtn,
  AddSchedulesBox,
  BottomSection,
  BottomSectionTitle,
  ContentTextArea,
  DateEnd,
  DateStart,
  TitleTextArea,
} from "./AddMySchedulesStyle";
import { PostLine } from "../../community/postDetail/PostDetailStyle";

const AddMySchedules = () => {
  const [todo, setTodo] = useState();
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const filterStartDate = startDate
    .toISOString()
    .replace("T", " ")
    .split(" ")[0];
  const filterStartTime = startDate.toTimeString().split(" ")[0].slice(0, 5);
  const filterEndDate = endDate.toISOString().replace("T", " ").split(" ")[0];
  const filterEndTime = endDate.toTimeString().split(" ")[0].slice(0, 5);

  const dateFilterFunction = (filterStartDate, filterEndDate) => {
    let regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
    if (!(regex.test(filterStartDate) && regex.test(filterEndDate)))
      return "Not Date Format";
    let result = [];
    let curDate = new Date(filterStartDate);
    while (curDate <= new Date(filterEndDate)) {
      result.push(curDate.toISOString().split("T")[0]);
      curDate.setDate(curDate.getDate() + 1);
    }
    return result.join();
  };
  let filteredDate = dateFilterFunction(filterStartDate, filterEndDate);
  console.log(filteredDate);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __writeSchedules({
        filteredDate: filteredDate,
        startDate: filterStartDate,
        startTime: filterStartTime,
        endDate: filterEndDate,
        endTime: filterEndTime,
        title: title,
        todo: todo,
      })
    );
    alert("일정 추가되었습니다");
    navigate("/mySchedules");
  };

  return (
    <AddSchedulesBox>
      {/* header */}
      <Section1>
        <Section2>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              navigate("/mySchedules");
            }}
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg>
          <Section1Title>새로운 일정</Section1Title>
        </Section2>
        <AddBtn onClick={submitHandler}>등록</AddBtn>
      </Section1>
      <SectionLine />

      {/* body */}
      <TitleTextArea
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해 주세요."
      />
      <ContentTextArea
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="내용을 입력해 주세요."
      />

      <BottomSection>
        <BottomSectionTitle>시간</BottomSectionTitle>
        <PostLine />
        <DateStart>
          <div className="startDate">시작</div>

          <div>
            <DatePicker
              className="datePicker"
              closeOnScroll={true}
              locale={ko}
              minDate={new Date()}
              selected={startDate}
              onChange={(dateDay) => setStartDate(dateDay)}
              showTimeSelect // 시간 나오게 하기
              // timeFormat="HH:mm" //시간 포맷
              timeIntervals={30} // 30분 단위로 선택 가능한 box가 나옴
              timeCaption="time"
              dateFormat="yyyy. MM. dd / HH시:mm분"
            />
          </div>
        </DateStart>

        <DateEnd>
          <div className="endDate">종료</div>

          <div>
            <DatePicker
              className="datePicker"
              closeOnScroll={true}
              locale={ko}
              minDate={startDate}
              selected={endDate}
              onChange={(dateDay) => setEndDate(dateDay)}
              showTimeSelect // 시간 나오게 하기
              // timeFormat="HH:mm" //시간 포맷
              timeIntervals={30} // 30분 단위로 선택 가능한 box가 나옴
              timeCaption="time"
              dateFormat="yyyy. MM. dd / HH시:mm분"
            />
          </div>
        </DateEnd>
        <PostLine />
      </BottomSection>
    </AddSchedulesBox>
  );
};

export default AddMySchedules;
