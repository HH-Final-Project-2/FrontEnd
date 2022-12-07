import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Board, SheetButton } from './CommentBottomSheetStyle';
import { ReactComponent as More } from '../../images/ic-more.svg';
import { useNavigate } from 'react-router';
import axios from 'axios';

const accessToken = localStorage.getItem('authorization');
const refreshToken = localStorage.getItem('refresh-Token');

export default function PostBottomSheet({ view, id }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  //화면크기 인식
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', resizeWidth);
    return () => {
      window.removeEventListener('resize', resizeWidth);
    };
  }, []);

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
              const confirm = window.confirm('명함을 지우시겠습니까?');
              if (confirm) {
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
                    console.log(response);
                    view.filter((x) => x.id !== response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
                  .then(function () {
                    // always executed
                  });
                alert('삭제되었습니다.');
                navigate('/cards');
              } else {
                return;
              }
            }}
          >
            삭제
          </ul>
        </Board>
      </BottomSheet>
    </>
  );
}
