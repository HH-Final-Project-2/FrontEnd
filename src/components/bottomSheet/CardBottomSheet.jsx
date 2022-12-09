import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Board, SheetButton } from './CommentBottomSheetStyle';
import { ReactComponent as More } from '../../images/ic-more.svg';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const accessToken = localStorage.getItem('authorization');
const refreshToken = localStorage.getItem('refresh-Token');

export default function PostBottomSheet({ view, id }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <SheetButton>
        <More onClick={() => setOpen(true)} />
      </SheetButton>

      <BottomSheet
        open={open}
        onDismiss={() => {
          setOpen(false);
        }}
        style={{
          '--rsbs-max-w': '375px',
          '--rsbs-ml': 'auto',
          '--rsbs-mr': 'auto',
        }}
      >
        <Board>
          <ul
            onClick={() => {
              navigate(`/posts/${id}/put`);
            }}
          >
            수정
          </ul>
          <ul
            style={{ color: '#F82323' }}
            onClick={() => {
              setOpen(false);
              Swal.fire({
                text: '명함을 삭제하시겠습니까?',
                showCancelButton: true,
                confirmButtonColor: 'white',
                cancelButtonColor: 'white',
                confirmButtonText: '<div class="confirm-text">확인</div>',
                cancelButtonText: '<div class="cancel-text">취소</div>',
                customClass: {
                  popup: 'login-class',
                  title: 'title-class',
                },
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    text: '삭제되었습니다',
                    timer: 1000,
                    showConfirmButton: false,
                    customClass: {
                      popup: 'allAlret-class',
                      title: 'allTitle-class',
                    },
                  });
                  //if result.isConfirmed true면 실행됨(확인버튼)
                  const config = {
                    headers: {
                      Authorization: accessToken,
                      'Refresh-Token': refreshToken,
                    },
                  };
                  axios
                    .delete(
                      `https://bkyungkeem.shop/api/businessCards/${id}`,
                      config
                    )
                    .then(function (response) {

                      view.filter((x) => x.id !== response);
                    })
                    .catch(function (error) {

                    })
                    .then(function () {
                      // always executed
                    });
                  Swal.fire({
                    text: '삭제되었습니다',
                    showConfirmButton: false,
                    timer: 1000,
                    customClass: {
                      popup: 'allAlret-class',
                      title: 'allTitle-class',
                    },
                  });
                  navigate('/cards');
                } else {
                  return;
                }
              });
            }}
          >
            삭제
          </ul>
        </Board>
      </BottomSheet>
    </>
  );
}
