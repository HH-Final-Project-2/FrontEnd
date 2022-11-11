import React from "react"
import { useDispatch } from "react-redux/es/exports"
import { signOut } from "../redux/modules/membersSlice"


const Main = () => {
  const dispatch = useDispatch()



  return <div>
    나는 메인
    <button onClick={() => {
      dispatch(signOut({}))
    }}>로그아웃</button>
  </div>;
};

export default Main;
