import React, { useState } from 'react';
import instanceJSon from '../../../shared/Request';
import axios from 'axios';
import { DivHeart, HeartNum } from './HeartStyle';

const Heart = ({ id, heart = false, numberHeart }) => {
  const [isHeart, setIsHeart] = useState(heart);
  const [countHeart, setCountHeart] = useState(numberHeart);

  console.log(numberHeart)

  function heartHandler() {
    if (isHeart) {
      //instanceJSon.delete(`/api/auth/post/heart/${id}`);
      axios.post(`https://yusung.shop/api/auth/post/heart/${id}`, '',
        {
          headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('authorization'),
            'refresh-Token': localStorage.getItem('refresh-Token')
          },
        }
      );
      setIsHeart(false);
      //setCountHeart(countHeart - 1);
    } else {
      axios.post(`https://yusung.shop/api/auth/post/heart/${id}`, '',
        {
          headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('authorization'),
            'refresh-Token': localStorage.getItem('refresh-Token')
          },
        });
      setIsHeart(true);
      //setCountHeart(countHeart + 1);
    }
  }
  //console.log(isHeart);

  return (
    <div>
      <DivHeart heart={isHeart} onClick={heartHandler}>
        <img src="../images/heartBig.png" alt="" />
      </DivHeart>
      {/* <HeartNum>{countHeart ? countHeart : ''}</HeartNum> */}
    </div>
  );
};

export default Heart;
