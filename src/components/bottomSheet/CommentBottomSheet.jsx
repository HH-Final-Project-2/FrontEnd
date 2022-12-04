import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import {
  Board,
  SheetButton
} from './CommentBottomSheetStyle';
import { ReactComponent as More } from '../../images/ic-more.svg'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteComment } from '../../redux/modules/commentSlice';

export default function CommentBottomSheet({ commentList, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <>
      <SheetButton>
        <More onClick={() => setOpen(true)} />
      </SheetButton>

      <BottomSheet open={open} onDismiss={() => { setOpen(false) }}>
        <Board>
          <ul
            onClick={() => {
              navigate(`/commentedit/${id}/${commentList.id}`)
            }}
          >수정</ul>
          <ul
            style={{ color: '#F82323' }}
            onClick={() => {
              const confirm = window.confirm('정말 삭제하시겠습니까?');
              if (confirm) {
                dispatch(
                  deleteComment({
                    postId: id,
                    commentId: commentList.id,
                  })
                );
                setOpen(false)
              } else {
                return;
              }
            }}
          >삭제</ul>
        </Board>
      </BottomSheet>
    </>
  );
}