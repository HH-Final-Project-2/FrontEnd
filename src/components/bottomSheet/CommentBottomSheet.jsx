import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import {
  Board,
  SheetButton
} from './CommentBottomSheetStyle';
import { ReactComponent as More } from '../../images/ic-more.svg'

export default function CommentBottomSheet() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SheetButton>
        <More onClick={() => setOpen(true)} />
      </SheetButton>

      <BottomSheet open={open} onDismiss={() => { setOpen(false) }}>
        <Board>
          <ul>수정</ul>
          <ul style={{ color: '#F82323' }}>삭제</ul>
        </Board>
      </BottomSheet>
    </>
  );
}