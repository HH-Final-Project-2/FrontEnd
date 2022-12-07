import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Board, SheetButton } from './CommentBottomSheetStyle';
import { ReactComponent as More } from '../../images/ic-more.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteComment } from '../../redux/modules/commentSlice';

export default function CommentBottomSheet({ commentList, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

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
              navigate(`/commentedit/${id}/${commentList.id}`);
            }}
          >
            수정
          </ul>
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
                setOpen(false);
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
