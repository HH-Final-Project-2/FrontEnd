import React, { useState } from 'react';
import instanceJSon from '../../../shared/Request';
import { DivHeart, HeartNum } from './HeartStyle';

const Heart = ({ id, heart = false, numberHeart }) => {
  const [isHeart, setIsHeart] = useState(heart);
  const [countHeart, setCountHeart] = useState(numberHeart);

  function heartHandler() {
    if (isHeart) {
      instanceJSon.delete(`/post/${id}`);
      setIsHeart(false);
      setCountHeart(countHeart - 1);
    } else {
      instanceJSon.post(`/post/${id}`);
      setIsHeart(true);
      setCountHeart(countHeart + 1);
    }
  }
  return (
    <div>
      <DivHeart heart={isHeart} onClick={heartHandler}>
        <img src="../images/heartBig.png" alt="" />
      </DivHeart>
      <HeartNum>{countHeart ? countHeart : ''}</HeartNum>
    </div>
  );
};

export default Heart;
