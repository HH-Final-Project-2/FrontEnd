import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Board } from './BottomSheetStyle';

export default function Bottom() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>빠땀씨뜨</button>
      <BottomSheet open={open} onDismiss={() => { setOpen(false) }}>
        <Board>
          <ul>수정</ul>
          <ul style={{ color: '#F82323' }}>삭제</ul>
        </Board>
      </BottomSheet>
    </>
  );
}