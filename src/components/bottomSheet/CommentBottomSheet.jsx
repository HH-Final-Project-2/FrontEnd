import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Board, SheetButton } from './CommentBottomSheetStyle';
import { ReactComponent as More } from '../../images/ic-more.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteComment } from '../../redux/modules/commentSlice';
import Swal from 'sweetalert2';

export default function CommentBottomSheet({ commentList, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const onAlertHandler = () => {
    setOpen(false);
    Swal.fire({
      title: '<div class="title-wrap">댓글을 삭제하시겠습니까?</div>',
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
          title: '댓글이 삭제되었습니다',
          timer: 1000,
          showConfirmButton: false,
          customClass: {
            popup: 'allAlret-class',
            title: 'allTitle-class',
          },
        });
        dispatch(
          deleteComment({
            postId: id,
            commentId: commentList.id,
          })
        );
      }
    });
  };

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
              navigate(`/commentedit/${id}/${commentList.id}`);
            }}
          >
            수정
          </ul>
          <ul style={{ color: '#F82323' }} onClick={onAlertHandler}>
            삭제
          </ul>
        </Board>
      </BottomSheet>
    </>
  );
}
