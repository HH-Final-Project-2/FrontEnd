import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const KakaoShare = () => {
  const infor = `[Kakao]\n이름 : 김승재(쫄병)\n전화번호: 010-0000-0000\n이메일 : qwer@qwer.com`;

  // '전화번호:010-0000-0000'
  // '이메일:qwer@qwer.com';

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

  //   window.Kakao.Share.createCustomButton({
  //     container: '#kakaotalk-sharing-btn',
  //     templateId: 86121,
  //     templateArgs: {
  //       title: '제목 영역입니다.',
  //       description: '설명 영역입니다.',
  //     },
  //   });
  // }
  return (
    <a id="kakaotalk-sharing-btn" onClick={KakaoShare}>
      <img
        style={{ width: '100%', maxWidth: '40px', borderRadius: '25px' }}
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼"
      />
    </a>
  );
};

export default KakaoShare;
