import React from 'react';
import styled from 'styled-components';

const MyProfile = () => {
  return (
    <St_profile>
      <div>
        <div>이름</div>
        <button>수정</button>
      </div>
      <div>직책/부서</div>
    </St_profile>
  );
};

export default MyProfile;

const St_profile = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
`;
