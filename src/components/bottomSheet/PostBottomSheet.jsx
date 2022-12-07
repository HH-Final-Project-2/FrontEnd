import { useState, useEffect } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Board, SheetButton } from './CommentBottomSheetStyle';
import { ReactComponent as More } from '../../images/ic-more.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { __deletePost } from '../../redux/modules/PostSlice';
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

  return (
    <>
      <SheetButton>
        <More onClick={() => setOpen(true)} />
      </SheetButton>

      {windowWidth < 1200 ? (
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
              onClick={() => {
                const confirm = window.confirm('게시글을 지우시겠습니까?');
                if (confirm) {
                  dispatch(__deletePost(detail.id));
                } else {
                  return;
                }
              }}
            >
              삭제
            </ul>
          </Board>
        </BottomSheet>
      ) : (
        <BottomSheet
          open={open}
          onDismiss={() => {
            setOpen(false);
          }}
          style={{
            '--rsbs-max-w': '375px',
            '--rsbs-ml': 'auto',
            '--rsbs-mr': '537px',
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
              onClick={() => {
                const confirm = window.confirm('게시글을 지우시겠습니까?');
                if (confirm) {
                  dispatch(__deletePost(detail.id));
                } else {
                  return;
                }
              }}
            >
              삭제
            </ul>
          </Board>
        </BottomSheet>
      )}
    </>
  );
}
