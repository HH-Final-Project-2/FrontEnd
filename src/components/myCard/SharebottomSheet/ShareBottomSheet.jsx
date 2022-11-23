import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Board, St_share, Share } from './ShareBottomSheetStyle';
import { useSelector } from 'react-redux';

export default function Bottom() {
  const [open, setOpen] = useState(false);
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);

  const copyHandler = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드 복사');
    } catch (error) {
      alert('error 명함을 확인 해주세요');
    }
  };

  return (
    <>
      <St_share onClick={() => setOpen(true)}>
        <Share>명함내보내기</Share>
      </St_share>
      <BottomSheet open={open}>
        <Board>
          <ul
            onClick={() => {
              copyHandler(
                '[' +
                  cardinfo.company +
                  ']' +
                  '\n이름 : ' +
                  cardinfo.cardName +
                  ' (' +
                  cardinfo.position +
                  ')' +
                  '\n전화번호 : ' +
                  cardinfo.phoneNum +
                  '\n이메일 : ' +
                  cardinfo.email
              );
            }}
          >
            텍스트복사
          </ul>
          <ul>카카오톡</ul>
        </Board>
      </BottomSheet>
    </>
  );
}
