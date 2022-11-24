import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Board, St_share, Share, Textshare } from './ShareBottomSheetStyle';
import { useSelector } from 'react-redux';
import KakaoShare from '../kakaoshare/KakaoShare';
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
      <BottomSheet
        open={open}
        onDismiss={() => {
          setOpen(false);
        }}
      >
        <Board>
          <div>
            <Textshare
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
                setOpen(false);
              }}
            >
              텍스트복사
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 19H8C7.45 19 6.97933 18.8043 6.588 18.413C6.196 18.021 6 17.55 6 17V3C6 2.45 6.196 1.979 6.588 1.587C6.97933 1.19567 7.45 1 8 1H14.175C14.4417 1 14.696 1.05 14.938 1.15C15.1793 1.25 15.3917 1.39167 15.575 1.575L20.425 6.425C20.6083 6.60833 20.75 6.82067 20.85 7.062C20.95 7.304 21 7.55833 21 7.825V17C21 17.55 20.8043 18.021 20.413 18.413C20.021 18.8043 19.55 19 19 19ZM14 3H8V17H19V8H15C14.7167 8 14.4793 7.90433 14.288 7.713C14.096 7.521 14 7.28333 14 7V3ZM4 23C3.45 23 2.97933 22.8043 2.588 22.413C2.196 22.021 2 21.55 2 21V8C2 7.71667 2.096 7.479 2.288 7.287C2.47933 7.09567 2.71667 7 3 7C3.28333 7 3.521 7.09567 3.713 7.287C3.90433 7.479 4 7.71667 4 8V21H14C14.2833 21 14.521 21.096 14.713 21.288C14.9043 21.4793 15 21.7167 15 22C15 22.2833 14.9043 22.5207 14.713 22.712C14.521 22.904 14.2833 23 14 23H4ZM8 3V8V3V17V3Z"
                    fill="#52596B"
                  />
                </svg>
              </div>
            </Textshare>
            <div>
              <KakaoShare />
            </div>
          </div>
        </Board>
      </BottomSheet>
    </>
  );
}
