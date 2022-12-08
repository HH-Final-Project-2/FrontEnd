import React from 'react';
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { signOut, withDraw } from '../redux/modules/membersSlice';
import Swal from 'sweetalert2';

const Mypage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <Layout>
      <St_Header>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            nav(-1);
          }}
        >
          <path
            d="M15 4L8 11.5L15 19"
            stroke="#1A1F27"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <St_Title>계정</St_Title>
      </St_Header>
      <OutLine>
        <Logout
          onClick={() => {
            Swal.fire({
              title: `로그아웃 되었습니다.`,
              showConfirmButton: false,
              timer: 1000,
              width: '300px',
              customClass: {
                popup: 'allAlret-class',
                title: 'allTitle-class',
              },
            });
            dispatch(signOut({}));
          }}
        >
          로그아웃
        </Logout>
        <Joinout
          type="button"
          onClick={() => {
            Swal.fire({
              title: '정말로 탈퇴하시겠습니까?',
              showCancelButton: true,
              confirmButtonColor: '#5546FF',
              cancelButtonColor: '#BBB5FF',
              confirmButtonText: '확인',
              cancelButtonText: '취소',
              width: '300px',
              customClass: {
                popup: 'login-class',
                title: 'title-class',
              },
            }).then((result) => {
              if (result.isConfirmed) {
                // 확인 버튼 누를시 동작
                Swal.fire({
                  title: '탈퇴되었습니다',
                  width: '300px',
                  timer: 1000,
                  showConfirmButton: false,
                  customClass: {
                    popup: 'allAlret-class',
                    title: 'allTitle-class',
                  },
                });
                dispatch(withDraw());
              }
            });
          }}
        >
          회원탈퇴
        </Joinout>
      </OutLine>
    </Layout>
  );
};
export default Mypage;
const St_Header = styled.div`
  width: 373px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: left;

  padding-left: 16px;

  color: #1a1f27;

  border-bottom: 1px solid #e2e6ef;
`;
const St_Title = styled.div`
  font-weight: 500;
  font-size: 16px;

  margin-left: 8px;
`;

const OutLine = styled.div``;

const Logout = styled.div`
  width: 100%;
  height: 56px;
  padding-left: 24px;

  display: flex;
  align-items: center;

  color: #222222;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background: #f5f5f6;
  }
`;

const Joinout = styled.div`
  width: 100%;
  height: 56px;
  padding-left: 24px;

  display: flex;
  align-items: center;

  color: #222222;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background: #f5f5f6;
  }
`;
