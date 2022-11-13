import React from "react"
import { useDispatch } from "react-redux/es/exports"
import { signOut, withDraw } from "../redux/modules/membersSlice"


const Main = () => {
  const dispatch = useDispatch()

  return <div>
    나는 메인
    <button onClick={() => {
      dispatch(signOut({}))
    }}>로그아웃</button>

    <button type='button' onClick={() => {
      const confirm = window.confirm('정말로 탈퇴하시겠습니까?')
      if (confirm) {
        dispatch(withDraw())
      } else {
        return
      }
    }}>회원탈퇴</button>
  </div>
};

export default Main;
