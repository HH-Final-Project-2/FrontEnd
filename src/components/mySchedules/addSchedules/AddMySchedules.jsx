import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "./react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __writeSchedules } from "../../../redux/modules/SchedulesSlice";
import {
  Section1,
  Section1Title,
  Section2,
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
import Swal from "sweetalert2";

const AddMySchedules = () => {
  const [todo, setTodo] = useState();
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { isLoading } = useSelector((state) => state.ScheduleSlice);

  useEffect(() => {
    if (isLoading) navigate("/mySchedules");
  }, [isLoading]);

  const startPlusNine = Number(startDate.toISOString().slice(11, 13));
  const endPlusNine = Number(endDate.toISOString().slice(11, 13));

  const dayday = new Date(+startDate + 3240 * 10000)
    .toISOString()
    .replace("T", " ")
    .replace(/\..*/, "")
    .slice(0, 10);
  const dayday2 = new Date(+endDate + 3240 * 10000)
    .toISOString()
    .replace("T", " ")
    .replace(/\..*/, "")
    .slice(0, 10);

  const filterStartDate =
    startPlusNine <= 9
      ? startDate.toISOString().replace("T", " ").split(" ")[0]
      : dayday;
  const filterStartTime = startDate.toTimeString().split(" ")[0].slice(0, 5);
  const filterEndDate =
    endPlusNine <= 9
      ? endDate.toISOString().replace("T", " ").split(" ")[0]
      : dayday2;
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

  const access =
    filterStartDate !== undefined &&
    filterStartTime !== undefined &&
    filterEndTime !== undefined &&
    filterEndDate !== undefined &&
    title !== undefined;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = () => {
    if (access === true) {
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

      Swal.fire({
        title: "일정이 추가 되었습니다",
        showConfirmButton: false,
        timer: 1000,
        width: "300px",
        customClass: {
          popup: "allAlret-class",
          title: "allTitle-class",
        },
      });
    } else {
      Swal.fire({
        title: "작성한 내용을 확인해주세요",
        showConfirmButton: false,
        timer: 1000,
        width: "300px",
        customClass: {
          popup: "allAlret-class",
          title: "allTitle-class",
        },
      });
    }
  };
  // 요일 반환
  const getDayName = (date) => {
    return date
      .toLocaleDateString("ko-KR", {
        weekday: "long",
      })
      .substr(0, 1);
  };
  // 날짜 비교시 년 월 일까지만 비교하게끔
  const createDate = (date) => {
    return new Date(
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
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

      {/* body */}
      <TitleTextArea
        type="text"
        maxLength="30"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해 주세요."
      />
      <ContentTextArea
        type="text"
        maxLength="80"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="내용을 입력해 주세요."
      />

      <BottomSection>
        <BottomSectionTitle>시간</BottomSectionTitle>
        <PostLine />
        <DateStart>
          <div className="startDate">시작</div>

          <div className="datePickerBox">
            <DatePicker
              // initial={{ opacity: 0, y: 0 }}
              // animate={{ opacity: 1 }}
              className="datePicker"
              // closeOnScroll={true}
              locale={ko}
              minDate={new Date()}
              selected={startDate}
              onChange={(dateDay) => setStartDate(dateDay)}
              showTimeSelect // 시간 나오게 하기
              popperModifiers={{
                // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
                preventOverflow: {
                  enabled: true,
                },
              }}
              popperPlacement="auto" // 화면 중앙에 팝업이 뜨도록
              // timeFormat="HH:mm" //시간 포맷
              timeIntervals={30} // 30분 단위로 선택 가능한 box가 나옴
              timeCaption="time"
              dateFormat="yyyy. MM. dd / HH시:mm분"
              dayClassName={(date) =>
                getDayName(createDate(date)) === "토"
                  ? "saturday"
                  : getDayName(createDate(date)) === "일"
                  ? "sunday"
                  : undefined
              }
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
              popperModifiers={{
                // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
                preventOverflow: {
                  enabled: true,
                },
              }}
              popperPlacement="auto" // 화면 중앙에 팝업이 뜨도록
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
