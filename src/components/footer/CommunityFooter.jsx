import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { FooterBox } from './FooterStyle';
import { __getPostAll } from '../../redux/modules/PostSlice';

const CommunityFooter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <FooterBox>
      {/* 명함첩으로 이동 */}

      <svg
        onClick={() => navigate('/cards')}
        width="72"
        height="56"
        viewBox="0 0 72 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#8892A0">
          <rect width="72" height="56" fill="white" />

          <path d="M42.625 15.5117H27.7812V14.908L40.8438 13.8455V14.908H42.625V13.0969C42.625 11.7689 41.5669 10.8368 40.2749 11.0239L28.3512 12.7553C27.0581 12.9436 26 14.1836 26 15.5117V27.5853C26 28.2257 26.2502 28.8399 26.6956 29.2927C27.141 29.7456 27.7451 30 28.375 30H42.625C43.2549 30 43.859 29.7456 44.3044 29.2927C44.7498 28.8399 45 28.2257 45 27.5853V17.9264C45 17.286 44.7498 16.6718 44.3044 16.2189C43.859 15.7661 43.2549 15.5117 42.625 15.5117ZM40.8438 23.9704C40.6098 23.9704 40.3781 23.9234 40.1619 23.8323C39.9458 23.7412 39.7494 23.6077 39.584 23.4394C39.4186 23.2711 39.2874 23.0714 39.1979 22.8515C39.1084 22.6317 39.0624 22.3961 39.0625 22.1582C39.0626 21.9203 39.1087 21.6847 39.1984 21.465C39.288 21.2452 39.4193 21.0455 39.5848 20.8773C39.7503 20.7092 39.9468 20.5758 40.163 20.4848C40.3792 20.3939 40.6109 20.3471 40.8449 20.3471C41.3175 20.3473 41.7707 20.5383 42.1047 20.8782C42.4388 21.2181 42.6263 21.6789 42.6262 22.1594C42.626 22.6399 42.4382 23.1006 42.1039 23.4402C41.7696 23.7799 41.3163 23.9706 40.8438 23.9704Z" />
          <path d="M28.4315 45.0608V46.7099H29.3514V40.5359H28.4315V42.2348H25.9867V41.3315H21.205V45.9558H25.9867V45.0608H28.4315ZM22.1166 45.2017V42.0773H25.0834V45.2017H22.1166ZM28.4315 44.2983H25.9867V42.989H28.4315V44.2983ZM25.8956 47.0083C23.7243 47.0083 22.3983 47.7293 22.4066 48.9807C22.3983 50.2238 23.7243 50.9282 25.8956 50.9282C28.0586 50.9282 29.3845 50.2238 29.3845 48.9807C29.3845 47.7293 28.0586 47.0083 25.8956 47.0083ZM25.8956 50.1989C24.2961 50.1989 23.3099 49.7348 23.3182 48.9807C23.3099 48.1934 24.2961 47.7376 25.8956 47.7293C27.4867 47.7376 28.4729 48.1934 28.4729 48.9807C28.4729 49.7348 27.4867 50.1989 25.8956 50.1989ZM34.8255 41.6464V40.453H33.9139V41.6464H31.262V42.4006H37.4691V41.6464H34.8255ZM39.3835 43.3039V40.5359H38.4636V46.8094H39.3835V44.0994H40.9498V43.3039H39.3835ZM36.8725 44.779C36.8642 43.6602 35.8614 42.9227 34.3697 42.9227C32.8531 42.9227 31.8504 43.6602 31.8587 44.779C31.8504 45.9061 32.8531 46.6354 34.3697 46.6354C35.8614 46.6354 36.8642 45.9061 36.8725 44.779ZM32.7371 44.779C32.7288 44.0912 33.3835 43.6354 34.3697 43.6354C35.3393 43.6354 35.994 44.0912 36.0023 44.779C35.994 45.4834 35.3393 45.9227 34.3697 45.9309C33.3835 45.9227 32.7288 45.4834 32.7371 44.779ZM39.3835 50.8122V47.4061H32.8034V50.8122H39.3835ZM38.4719 48.1436V50.058H33.7067V48.1436H38.4719ZM44.8742 44.0539C45.3507 45.0566 46.3245 45.8149 47.5593 46.163L47.982 45.442C46.4322 45.0193 45.3134 43.9254 45.3134 42.6409V42.4503H47.6588V41.7127H45.33V40.4862H44.4018V41.7127H42.0483V42.4503H44.4018V42.6409C44.4018 44 43.3079 45.1768 41.7582 45.6409L42.2057 46.3619C43.453 45.9807 44.4226 45.1478 44.8742 44.0539ZM49.4737 43.3287H47.3604V44.0912H49.4737V46.2956H50.3853V40.5359H49.4737V43.3287ZM44.6007 48.0359V46.7762H43.6809V50.8122H50.3853V46.7762H49.4737V48.0359H44.6007ZM44.6007 50.058V48.7652H49.4737V50.058H44.6007Z" />
        </g>
      </svg>
      {/* 일정으로 이동 */}
      <svg
        onClick={() => navigate('/mySchedules')}
        width="72"
        height="56"
        viewBox="0 0 72 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#8892A0">
          <rect width="72" height="56" fill="white" />

          <path d="M31.6531 11C32.2965 11 32.8163 11.5307 32.8163 12.1875V13.375H39.1837V12.1875C39.1837 11.5307 39.7035 11 40.3469 11C40.9904 11 41.5102 11.5307 41.5102 12.1875V13.375H43.2551C44.2184 13.375 45 14.1729 45 15.1562V16.9375H27V15.1562C27 14.1729 27.7816 13.375 28.7449 13.375H30.4898V12.1875C30.4898 11.5307 31.0096 11 31.6531 11ZM27 18.125H45V28.2188C45 29.2021 44.2184 30 43.2551 30H28.7449C27.7816 30 27 29.2021 27 28.2188V18.125ZM39.817 22.3184C40.1587 21.9695 40.1587 21.4055 39.817 21.0604C39.4753 20.7152 38.9227 20.7115 38.5846 21.0604L35.1312 24.5857L33.4226 22.8416C33.0809 22.4928 32.5284 22.4928 32.1903 22.8416C31.8522 23.1904 31.8486 23.7545 32.1903 24.0996L34.5168 26.4746C34.8585 26.8234 35.4111 26.8234 35.7492 26.4746L39.817 22.3184Z" />
          <path d="M23.4527 44.7376H22.0024V40.8177H21.1323V50.4309H22.0024V45.5H23.4527V50.953H24.3477V40.5359H23.4527V44.7376ZM15.8615 41.8867V42.6492H19.0397C18.8864 44.8039 17.8919 46.7099 15.4638 48.0608L16.0024 48.7155C19.0024 47.0414 19.9306 44.5387 19.9389 41.8867H15.8615ZM33.6589 40.5442V48.1602H34.5788V40.5442H33.6589ZM28.9517 46.3867C30.5097 46.395 31.6782 45.3425 31.6782 43.826C31.6782 42.326 30.5097 41.2735 28.9517 41.2735C27.3937 41.2735 26.2169 42.326 26.2169 43.826C26.2169 45.3425 27.3937 46.395 28.9517 46.3867ZM27.1202 43.826C27.1119 42.8066 27.8992 42.0773 28.9517 42.0773C29.9876 42.0773 30.7832 42.8066 30.7832 43.826C30.7832 44.8619 29.9876 45.5829 28.9517 45.5829C27.8992 45.5829 27.1119 44.8619 27.1202 43.826ZM28.7694 47.3812H27.8495V50.721H34.902V49.9586H28.7694V47.3812ZM44.18 40.5359V45.8812H45.0999V40.5359H44.18ZM42.1496 43.2293C42.1413 41.8702 41.0059 40.9254 39.4479 40.9171C37.8733 40.9254 36.738 41.8702 36.738 43.2293C36.738 44.5884 37.8733 45.5249 39.4479 45.5249C41.0059 45.5249 42.1413 44.5884 42.1496 43.2293ZM37.6413 43.2293C37.633 42.326 38.4037 41.6878 39.4479 41.6961C40.4838 41.6878 41.2546 42.326 41.2546 43.2293C41.2546 44.1409 40.4838 44.7707 39.4479 44.7707C38.4037 44.7707 37.633 44.1409 37.6413 43.2293ZM39.249 48.8978H45.0999V46.3867H38.3209V47.1326H44.1883V48.2017H38.354V50.8122H45.4728V50.0663H39.249V48.8978ZM52.6292 44.0166H54.7342V46.7431H55.6541V40.5359H54.7342V43.2541H52.6292V44.0166ZM50.1969 43.9834C50.6486 45.0566 51.556 45.9309 52.7287 46.3536L53.2094 45.616C51.6845 45.0939 50.6403 43.8011 50.6403 42.442V42.0608H52.969V41.2983H47.3585V42.0608H49.7121V42.4503C49.7121 43.942 48.6099 45.3508 47.0602 45.9144L47.5408 46.6436C48.7839 46.1754 49.7494 45.2017 50.1969 43.9834ZM52.1983 47.0663C50.027 47.0663 48.7011 47.779 48.7094 49.0055C48.7011 50.232 50.027 50.9365 52.1983 50.9448C54.3613 50.9365 55.6873 50.232 55.6873 49.0055C55.6873 47.779 54.3613 47.0663 52.1983 47.0663ZM52.1983 50.2072C50.5989 50.2155 49.6127 49.7597 49.621 49.0055C49.6127 48.2431 50.5989 47.7873 52.1983 47.7873C53.7895 47.7873 54.7757 48.2431 54.7757 49.0055C54.7757 49.7597 53.7895 50.2155 52.1983 50.2072Z" />
        </g>
      </svg>
      {/* 채팅으로 이동 */}
      <svg
        onClick={() => navigate('/chat')}
        width="72"
        height="56"
        viewBox="0 0 72 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#8892A0">
          <rect width="72" height="56" fill="white" />

          <path d="M27.0005 18.9983C27.0009 17.0168 27.6551 15.0909 28.8617 13.5193C30.0683 11.9476 31.7599 10.8181 33.6739 10.3059C35.5879 9.7937 37.6175 9.92749 39.4477 10.6865C41.2779 11.4455 42.8066 12.7873 43.7964 14.5038C44.7863 16.2202 45.182 18.2153 44.9223 20.1797C44.6626 22.144 43.762 23.9677 42.36 25.3679C40.9581 26.7681 39.1333 27.6666 37.1687 27.9238C35.2041 28.1811 33.2095 27.7828 31.4944 26.7908L27.9875 27.9608C27.8579 28.004 27.719 28.0111 27.5857 27.9811C27.4525 27.9512 27.3299 27.8855 27.2312 27.791C27.1326 27.6965 27.0616 27.5769 27.026 27.445C26.9903 27.3132 26.9914 27.1741 27.029 27.0427L28.097 23.3063C27.3755 21.9851 26.9984 20.5036 27.0005 18.9983Z" />
          <path d="M34.0401 44.7459H32.6147V40.7597H31.7445V50.4227H32.6147V45.5331H34.0401V50.953H34.9268V40.5359H34.0401V44.7459ZM29.0263 43.2541H31.0235V42.4834H29.0346V40.9171H28.1561V42.4834H26.134V43.2541H28.1561V43.7348C28.1478 45.4503 27.3025 47.2652 25.8937 48.0856L26.4489 48.7735C27.4848 48.1644 28.2307 46.9959 28.5995 45.6657C28.9807 46.9171 29.7307 47.9903 30.7666 48.558L31.3053 47.8619C29.8799 47.1077 29.0263 45.3923 29.0263 43.7348V43.2541ZM44.18 40.5442V47H45.0999V40.5442H44.18ZM42.9535 45.2017C41.4866 45.4544 40.2476 45.4917 38.0308 45.4834V44.116H41.8098V43.3702H38.0308V42.0525H42.0999V41.3066H37.1026V46.2459H37.9479C40.2518 46.2541 41.528 46.2044 43.0529 45.9558L42.9535 45.2017ZM41.6358 47.1492C39.4314 47.1409 38.1137 47.837 38.1137 49.0304C38.1137 50.2403 39.4314 50.9282 41.6358 50.9282C43.807 50.9282 45.1496 50.2403 45.1496 49.0304C45.1496 47.837 43.807 47.1409 41.6358 47.1492ZM41.6358 50.1989C40.0032 50.1989 39.0253 49.768 39.0253 49.0304C39.0253 48.3177 40.0032 47.8785 41.6358 47.8785C43.2352 47.8785 44.238 48.3177 44.238 49.0304C44.238 49.768 43.2352 50.1989 41.6358 50.1989Z" />
        </g>
      </svg>
      {/* 커뮤니티로 이동 */}
      <svg
        onClick={() => {
          dispatch(__getPostAll()); // 일단 dispatch로 해결
          navigate('/community');
          //navigate('/community', { replace: true });
          //window.location = '/community';
          //navigate 동일한 주소로 이동시 컴포넌트가 랜더링 되지않음
          //url은 바뀌어도 화면은 그대로..(원인은 모르겠음 찾는중)
        }}
        width="72"
        height="56"
        viewBox="0 0 72 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#5546ff">
          <rect width="72" height="56" fill="white" />

          <path d="M31.1996 20.7996C33.1878 20.7996 34.7996 19.1878 34.7996 17.1996C34.7996 15.2114 33.1878 13.5996 31.1996 13.5996C29.2114 13.5996 27.5996 15.2114 27.5996 17.1996C27.5996 19.1878 29.2114 20.7996 31.1996 20.7996Z" />
          <path d="M40.7992 20.7996C42.7874 20.7996 44.3992 19.1878 44.3992 17.1996C44.3992 15.2114 42.7874 13.5996 40.7992 13.5996C38.811 13.5996 37.1992 15.2114 37.1992 17.1996C37.1992 19.1878 38.811 20.7996 40.7992 20.7996Z" />
          <path d="M31.2 22C27.228 22 24 24.148 24 26.8V29.2H31.2V26.8C31.2 25.024 32.652 23.476 34.8 22.648C33.744 22.228 32.508 22 31.2 22ZM40.8 22C36.828 22 33.6 24.148 33.6 26.8V29.2H48V26.8C48 24.148 44.772 22 40.8 22Z" />
          <path d="M23.1709 44.721H20.7179V45.4917H23.1709V50.953H24.0825V40.5359H23.1709V44.721ZM20.751 41.6215H16.0273V42.384H19.8436C19.798 43.0262 19.6903 43.6436 19.4997 44.2279L15.4969 44.4889L15.6709 45.2928L19.2138 44.9572C18.5673 46.3619 17.3823 47.5635 15.472 48.5249L15.9941 49.2293C19.6737 47.3812 20.7428 44.6298 20.751 41.6215ZM27.1948 41.1077V45.1602H34.2639V41.1077H27.1948ZM28.0981 44.4227V41.8536H33.3522V44.4227H28.0981ZM25.96 46.5691V47.3315H28.413V51.0276H29.3329V47.3315H32.1506V51.0276H33.0705V47.3315H35.4987V46.5691H25.96ZM44.1717 50.953H45.0833V40.5359H44.1717V50.953ZM38.0805 41.5635H37.1772V48.268H38.0225C39.6883 48.268 41.3374 48.1354 43.1855 47.7541L43.0612 46.9669C41.3084 47.3356 39.6717 47.4599 38.0805 47.4641V41.5635ZM54.7094 50.953H55.6292V40.5359H54.7094V50.953ZM48.6016 45.1602H52.3889V44.4144H48.6016V42.2514H52.7618V41.4807H47.69V48.442H48.5187C50.5243 48.4337 51.9248 48.3757 53.574 48.1022L53.4745 47.3398C51.8792 47.6091 50.545 47.6796 48.6016 47.6796V45.1602Z" />
        </g>
      </svg>
      {/* 내 명함으로 이동 */}
      <svg
        onClick={() => navigate('/mypage')}
        width="72"
        height="56"
        viewBox="0 0 72 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#8892A0">
          <rect width="72" height="56" fill="white" />

          <path d="M44.8 12H27.2C25.9867 12 25 13.0091 25 14.25V27.75C25 28.9909 25.9867 30 27.2 30H44.8C46.0133 30 47 28.9909 47 27.75V14.25C47 13.0091 46.0133 12 44.8 12ZM32.3865 16.5C33.6526 16.5 34.5865 17.4551 34.5865 18.75C34.5865 20.0449 33.6526 21 32.3865 21C31.1204 21 30.1865 20.0449 30.1865 18.75C30.1865 17.4551 31.1193 16.5 32.3865 16.5ZM36.473 25.5H28.3V24.9769C28.3 23.4323 30.1436 21.8438 32.3865 21.8438C34.6294 21.8438 36.473 23.4323 36.473 24.9769V25.5ZM43.7 24.375H39.3V22.125H43.7V24.375ZM43.7 19.875H38.2V17.625H43.7V19.875Z" />
          <path d="M27.1324 44.779H25.6241V40.768H24.7539V50.4061H25.6241V45.558H27.1324V50.953H28.0274V40.5359H27.1324V44.779ZM20.5771 41.8039H19.6573V48.2514H20.3119C21.4556 48.2514 22.649 48.1768 24.0992 47.9116L23.9915 47.0994C22.7194 47.3522 21.6048 47.4268 20.5771 47.4309V41.8039ZM40.5334 45.0608V46.7099H41.4533V40.5359H40.5334V42.2348H38.0887V41.3315H33.3069V45.9558H38.0887V45.0608H40.5334ZM34.2185 45.2017V42.0773H37.1854V45.2017H34.2185ZM40.5334 44.2983H38.0887V42.989H40.5334V44.2983ZM37.9975 47.0083C35.8263 47.0083 34.5003 47.7293 34.5086 48.9807C34.5003 50.2238 35.8263 50.9282 37.9975 50.9282C40.1605 50.9282 41.4865 50.2238 41.4865 48.9807C41.4865 47.7293 40.1605 47.0083 37.9975 47.0083ZM37.9975 50.1989C36.3981 50.1989 35.4119 49.7348 35.4202 48.9807C35.4119 48.1934 36.3981 47.7376 37.9975 47.7293C39.5887 47.7376 40.5749 48.1934 40.5749 48.9807C40.5749 49.7348 39.5887 50.1989 37.9975 50.1989ZM46.9275 41.6464V40.453H46.0159V41.6464H43.3639V42.4006H49.5711V41.6464H46.9275ZM51.4855 43.3039V40.5359H50.5656V46.8094H51.4855V44.0994H53.0518V43.3039H51.4855ZM48.9744 44.779C48.9661 43.6602 47.9634 42.9227 46.4717 42.9227C44.9551 42.9227 43.9523 43.6602 43.9606 44.779C43.9523 45.9061 44.9551 46.6354 46.4717 46.6354C47.9634 46.6354 48.9661 45.9061 48.9744 44.779ZM44.8391 44.779C44.8308 44.0912 45.4855 43.6354 46.4717 43.6354C47.4413 43.6354 48.096 44.0912 48.1043 44.779C48.096 45.4834 47.4413 45.9227 46.4717 45.9309C45.4855 45.9227 44.8308 45.4834 44.8391 44.779ZM51.4855 50.8122V47.4061H44.9054V50.8122H51.4855ZM50.5739 48.1436V50.058H45.8087V48.1436H50.5739Z" />
        </g>
      </svg>
    </FooterBox>
  );
};

export default CommunityFooter;
