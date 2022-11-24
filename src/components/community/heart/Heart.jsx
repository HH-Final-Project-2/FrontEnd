import React, { useEffect, useState } from "react";
import axios from "axios";
import { DivHeart, HeartNum } from "./HeartStyle";
import { ReactComponent as Like } from '../../../images/noneLike.svg';
import { ReactComponent as FillLike } from '../../../images/fillLike.svg';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { __getPost, __likePost } from "../../../redux/modules/PostSlice";


const Heart = ({ heart = false, numberHeart, id }) => {
  // const [isHeart, setIsHeart] = useState(heart);
  // const [countHeart, setCountHeart] = useState(numberHeart);

  // const { id } = useParams();
  const dispatch = useDispatch();

  const [isHeart, setIsHeart] = useState(false);
  const [countHeart, setCountHeart] = useState(0);

  console.log('나는 카운트 하트', countHeart)

  // console.log('detail', detail)

  const likeHandler = () => {
    setIsHeart(!isHeart)
    // let isHeartLocal = localStorage.setItem('heart', isHeart)
    // let countHeartLocal = localStorage.setItem('countheart', countHeart)
    dispatch(__likePost(id))
    if (isHeart) {
      setCountHeart((prevstate) => prevstate - 1);
      // setCountHeart(countHeart - 1);
    } else {
      setCountHeart((prevstate) => prevstate + 1);
      // setCountHeart(countHeart + 1);
    }
  }
  // localStorage.setItem('heart', isHeart)
  // localStorage.setItem('countheart', countHeart)

  // const postHeartLocal = localStorage.getItem('heart')
  // const postCountLocal = localStorage.getItem('countheart')



  // console.log(numberHeart);

  // function heartHandler() {
  //   if (isHeart) {
  //     //instanceJSon.delete(`/api/auth/post/heart/${id}`);
  //     const data = axios.post(`https://bkyungkeem.shop/api/auth/post/heart/${id}`, "", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: localStorage.getItem("authorization"),
  //         "refresh-Token": localStorage.getItem("refresh-Token"),
  //       },
  //     });
  //     //console.log('허트 펄스', data.data)
  //     setIsHeart(false);
  //     setCountHeart(countHeart - 1);
  //   } else {
  //     const data = axios.post(`https://bkyungkeem.shop/api/auth/post/heart/${id}`, "", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: localStorage.getItem("authorization"),
  //         "refresh-Token": localStorage.getItem("refresh-Token"),
  //       },
  //     });
  //     //console.log('허트 트루', data)
  //     setIsHeart(true);
  //     setCountHeart(countHeart + 1);
  //   }
  // }
  // //console.log(isHeart);

  return (


    <div>
      <DivHeart onClick={likeHandler}>
        {isHeart ? <FillLike /> : <Like />}
        {/* <Like fill="#b43737" />
        <FillLike fill="#b43737" /> */}
        <HeartNum>
          {/* {countHeart ? countHeart : ''} */}
          {countHeart}
        </HeartNum>
      </DivHeart>
    </div>
    // <div>
    //   <DivHeart heart={isHeart} onClick={heartHandler}>
    //     {isHeart === false ? <Like fill="#b43737" /> : <FillLike fill="#b43737" />}
    //     {/* <Like fill="#b43737" />
    //     <FillLike fill="#b43737" /> */}
    //     <HeartNum>
    //       {/* {countHeart ? countHeart : ''} */}
    //       {countHeart}
    //     </HeartNum>
    //   </DivHeart>
    // </div>


  );
};

export default Heart;
