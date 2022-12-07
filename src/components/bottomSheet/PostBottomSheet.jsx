import { useState, useEffect } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Board, SheetButton } from './CommentBottomSheetStyle';
import { ReactComponent as More } from '../../images/ic-more.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { __deletePost } from '../../redux/modules/PostSlice';
import Swal from 'sweetalert2';
import { DivSheet } from './PostBottomSheetStyle';

export default function PostBottomSheet({ detail, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { isLoading } = useSelector((state) => state.PostSlice);

  useEffect(() => {
    if (isLoading) navigate('/community');
  }, [isLoading]);

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

  const onAlertHandler = () => {
    setOpen(false);
    Swal.fire({
      title: "게시글을 삭제하시겠습니까?",
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
        Swal.fire({
          title: '삭제되었습니다',
          width: '300px',
          timer: 1000,
          showConfirmButton: false,
          customClass: {
            popup: 'allAlret-class',
            title: 'allTitle-class',
          },
        }
        )
        dispatch(__deletePost(detail.id));
      }
    })
  }

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
              navigate(`/edit/${id}`);
            }}
          >
            수정
          </ul>
          <ul
            style={{ color: '#F82323' }}
            onClick={onAlertHandler}
          >
            삭제
          </ul>
        </Board>
      </BottomSheet>

    </>
  );
}
