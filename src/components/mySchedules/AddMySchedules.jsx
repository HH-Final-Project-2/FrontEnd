import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __writeSchedules } from "../../redux/modules/SchedulesSlice";
const AddMySchedules = () => {
  const [todo, setTodo] = useState();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const filterDate = date.toISOString().replace("T", " ").split(" ")[0];
  const filterTime = time.toTimeString().split(" ")[0].slice(0, 5);
  console.log(filterDate);
  console.log(filterTime);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __writeSchedules({ dateTime: filterDate, todo: todo, time: filterTime })
    );
    alert("일정 추가되었습니다");
    navigate("/mySchedules");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="일정"
      />
      <DatePicker
        closeOnScroll={true}
        selected={date}
        onChange={(dateDay) => setDate(dateDay)}
        //   showTimeSelect // 시간 나오게 하기
        //   timeFormat="HH:mm" //시간 포맷
        //   timeIntervals={30} // 30분 단위로 선택 가능한 box가 나옴
        //   timeCaption="time"
        dateFormat="yyyy-MM-d"
      />
      <DatePicker
        selected={time}
        onChange={(dateTime) => setTime(dateTime)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        dateFormat="aa h:mm"
      />

      <button onClick={submitHandler}>등록하기</button>
    </div>
  );
};

export default AddMySchedules;
