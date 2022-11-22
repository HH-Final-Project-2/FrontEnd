import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __writeSchedules } from "../../redux/modules/SchedulesSlice";
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
    <div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="일정"
      />
      <DatePicker
        closeOnScroll={true}
        locale={ko}
        minDate={new Date()}
        selected={startDate}
        onChange={(dateDay) => setStartDate(dateDay)}
        showTimeSelect // 시간 나오게 하기
        // timeFormat="HH:mm" //시간 포맷
        timeIntervals={30} // 30분 단위로 선택 가능한 box가 나옴
        timeCaption="time"
        dateFormat="yyyy년-MM월-dd일 / HH시:mm분"
      />
      <DatePicker
        closeOnScroll={true}
        locale={ko}
        minDate={startDate}
        selected={endDate}
        onChange={(dateDay) => setEndDate(dateDay)}
        showTimeSelect // 시간 나오게 하기
        // timeFormat="HH:mm" //시간 포맷
        timeIntervals={30} // 30분 단위로 선택 가능한 box가 나옴
        timeCaption="time"
        dateFormat="yyyy년-MM월-dd일 / HH시:mm분"
      />

      <button onClick={submitHandler}>등록하기</button>
    </div>
  );
};

export default AddMySchedules;
