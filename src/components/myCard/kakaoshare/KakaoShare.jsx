import React, { useEffect } from 'react';

const KakaoShare = () => {
  const infor = `[Kakao]\n이름 : 김승재(쫄병)\n전화번호 : 010-0000-0000\n이메일 : qwer@qwer.com`;

  // '전화번호:010-0000-0000'
  // '이메일:qwer@qwer.com';

  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('efb4fb072ce40f456c75dfb6c49980e8');
      }

      window.Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'text',
        text: `${infor}`,
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      });
    }
  });

  return (
    <a id="kakaotalk-sharing-btn" onClick={KakaoShare}>
      <img
        style={{
          width: '100%',
          maxWidth: '30px',
          height: '30px',
          borderRadius: '0px',
        }}
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼"
      />
    </a>
  );
};

export default KakaoShare;

// useEffect(() => {
//   const script = document.createElement('script');
//   script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js';
//   script.integrity =
//     'sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/';
//   script.crossOrigin = 'anonymous';
//   script.async = true;
//   // console.log(script);
//   document.body.appendChild(script);
//   return () => document.body.removeChild(script);
// }, []);
