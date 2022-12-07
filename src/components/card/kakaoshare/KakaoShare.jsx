import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const KakaoShare = () => {
  const cardinfo = useSelector((state) => state.PostReducer.viewList);

  const infor = `[${cardinfo.company}]\n이름 : ${cardinfo.cardName}(${cardinfo.position})\n전화번호 : ${cardinfo.phoneNum}\n이메일 : ${cardinfo.email}`;

  // '전화번호:010-0000-0000'
  // '이메일:qwer@qwer.com';

  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init("efb4fb072ce40f456c75dfb6c49980e8");
      }

      window.Kakao.Share.createDefaultButton({
        container: "#kakaotalk-sharing-btn",
        objectType: "text",
        text: `${infor}`,
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      });
    }
  });

  return (
    <a id="kakaotalk-sharing-btn" onClick={KakaoShare}>
      <Kakaoshare>
        카카오톡
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1137_4413)">
              <path
                d="M12.15 2C18.308 2 23.3 5.98696 23.3 10.9065C23.3 15.8249 18.308 19.8118 12.15 19.8118C11.5368 19.8122 10.9243 19.7722 10.3161 19.6921L5.63521 22.8293C5.1032 23.1176 4.91524 23.0861 5.134 22.3799L6.08121 18.3777C3.02293 16.789 1 14.036 1 10.9065C1 5.98805 5.99201 2 12.15 2ZM18.4227 10.7704L19.9837 9.22093C20.0737 9.12507 20.124 8.99713 20.1238 8.86406C20.1237 8.73099 20.0731 8.60318 19.9828 8.50755C19.8925 8.41192 19.7695 8.35593 19.6397 8.35138C19.51 8.34683 19.3835 8.39408 19.2871 8.48317L17.2397 10.5136V8.83572C17.2397 8.69951 17.1869 8.56887 17.0929 8.47255C16.9989 8.37623 16.8714 8.32212 16.7385 8.32212C16.6056 8.32212 16.4781 8.37623 16.3841 8.47255C16.2901 8.56887 16.2373 8.69951 16.2373 8.83572V11.6181C16.2185 11.6975 16.2185 11.7803 16.2373 11.8597V13.4255C16.2373 13.5617 16.2901 13.6924 16.3841 13.7887C16.4781 13.885 16.6056 13.9391 16.7385 13.9391C16.8714 13.9391 16.9989 13.885 17.0929 13.7887C17.1869 13.6924 17.2397 13.5617 17.2397 13.4255V11.9424L17.6931 11.493L19.2095 13.7052C19.2474 13.7604 19.2955 13.8074 19.3511 13.8436C19.4067 13.8798 19.4687 13.9044 19.5336 13.916C19.5985 13.9276 19.665 13.9261 19.7293 13.9114C19.7935 13.8966 19.8544 13.8691 19.9083 13.8303C19.9622 13.7915 20.0081 13.7422 20.0434 13.6852C20.0787 13.6283 20.1027 13.5647 20.114 13.4982C20.1254 13.4317 20.1238 13.3636 20.1095 13.2977C20.0951 13.2319 20.0683 13.1695 20.0304 13.1143L18.4227 10.7694V10.7704ZM15.2816 12.864H13.7312V8.85205C13.7252 8.72006 13.6699 8.5955 13.5767 8.50425C13.4834 8.41299 13.3594 8.36208 13.2305 8.36208C13.1015 8.36208 12.9776 8.41299 12.8843 8.50425C12.7911 8.5955 12.7357 8.72006 12.7298 8.85205V13.3776C12.7298 13.6606 12.9528 13.8912 13.23 13.8912H15.2816C15.4145 13.8912 15.542 13.8371 15.636 13.7408C15.73 13.6445 15.7828 13.5139 15.7828 13.3776C15.7828 13.2414 15.73 13.1108 15.636 13.0145C15.542 12.9181 15.4145 12.864 15.2816 12.864ZM9.06198 11.6758L9.80107 9.81832L10.4786 11.6758H9.06198ZM11.7412 12.2068L11.7433 12.1894C11.743 12.06 11.6948 11.9355 11.6084 11.8412L10.4977 8.79437C10.4511 8.64918 10.3624 8.52201 10.2434 8.42984C10.1245 8.33768 9.98088 8.28491 9.83186 8.27859C9.68175 8.27792 9.535 8.32409 9.41112 8.41098C9.28725 8.49787 9.19214 8.62135 9.13844 8.76499L7.37461 13.1992C7.34972 13.2616 7.33708 13.3285 7.3374 13.3959C7.33772 13.4634 7.35101 13.5301 7.3765 13.5923C7.40199 13.6545 7.43918 13.7109 7.48596 13.7584C7.53274 13.8059 7.58818 13.8434 7.64912 13.8689C7.71006 13.8944 7.7753 13.9074 7.84113 13.9071C7.90696 13.9067 7.97208 13.8931 8.03277 13.867C8.09346 13.8409 8.14854 13.8028 8.19486 13.7548C8.24117 13.7069 8.27783 13.6501 8.30272 13.5877L8.65315 12.703H10.8513L11.1688 13.5735C11.1904 13.6386 11.2245 13.6985 11.2691 13.7499C11.3137 13.8012 11.3679 13.8428 11.4285 13.8722C11.4891 13.9017 11.5549 13.9184 11.6219 13.9213C11.6889 13.9243 11.7558 13.9134 11.8186 13.8894C11.8815 13.8653 11.939 13.8286 11.9877 13.7814C12.0364 13.7342 12.0754 13.6774 12.1024 13.6145C12.1293 13.5515 12.1436 13.4837 12.1445 13.415C12.1454 13.3463 12.1328 13.2781 12.1075 13.2144L11.7412 12.2068ZM8.21352 8.85749C8.21352 8.72146 8.16086 8.59099 8.06709 8.4947C7.97332 8.39841 7.84611 8.34417 7.71336 8.34388H4.26748C4.13455 8.34388 4.00706 8.39799 3.91307 8.49431C3.81907 8.59063 3.76626 8.72127 3.76626 8.85749C3.76626 8.9937 3.81907 9.12434 3.91307 9.22066C4.00706 9.31698 4.13455 9.37109 4.26748 9.37109H5.49929V13.4364C5.49929 13.5726 5.5521 13.7033 5.64609 13.7996C5.74009 13.8959 5.86758 13.95 6.00051 13.95C6.13344 13.95 6.26093 13.8959 6.35492 13.7996C6.44892 13.7033 6.50173 13.5726 6.50173 13.4364V9.37109H7.7123C7.84523 9.37109 7.97272 9.31698 8.06672 9.22066C8.16071 9.12434 8.21352 8.9937 8.21352 8.85749Z"
                fill="#52596B"
              />
            </g>
            <defs>
              <clipPath id="clip0_1137_4413">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Kakaoshare>
    </a>
  );
};

export default KakaoShare;

export const Kakaoshare = styled.div`
  height: 52px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  cursor: pointer;

  svg {
    margin-left: 14px;
  }
`;
