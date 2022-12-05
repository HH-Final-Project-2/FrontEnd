import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { __getPost, __likePost } from '../../../redux/modules/PostSlice';
import PostBottomSheet from '../../bottomSheet/PostBottomSheet';
import Comment from '../comment/Comment';

import { ReactComponent as Like } from '../../../images/noneLike.svg';
import { ReactComponent as FillLike } from '../../../images/fillLike.svg';
import {
  CommentBox,
  CommentNum,
  Date,
  DetailBox,
  DetailPostBody,
  DetailPostImg,
  DetailPostSection1,
  DetailPostSection2,
  DetailPostSection3,
  DetailPostSection4,
  DetailSectionLine,
  HitBox,
  HitNum,
  JobPosition,
  NickName,
  PostLine,
  PostTitle,
  Section1,
  Section2,
  SectionLine,
  DivHeart,
  HeartNum,
} from './PostDetailStyle';

const PostDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { detail } = useSelector((state) => state.PostSlice);

  const [isHeart, setIsHeart] = useState(false);
  const [countHeart, setCountHeart] = useState(detail.postHeartCnt);

  //스크롤 최상단으로 이동
  useEffect(() => {
    dispatch(__getPost(id));
    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    setIsHeart(detail.postHeartYn);
    setCountHeart(detail.postHeartCnt);
  }, [detail]);

  const likeHandler = () => {
    setIsHeart(!isHeart);
    dispatch(__likePost(id));
    if (isHeart) {
      setCountHeart(countHeart - 1);
    } else {
      setCountHeart(countHeart + 1);
    }
  };

  const nickname = localStorage.getItem('nickname');

  // 시간 카운팅
  function displayedAt(postCreatedAt) {
    const milliSeconds = new window.Date() - postCreatedAt;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;

    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;

    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  }

  const nowAt = displayedAt(new window.Date(detail.createdAt));

  if (detail === undefined) return;
  return (
    <DetailBox>
      <Section1>
        <Section2 onClick={() => navigate('/community')}>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg>
        </Section2>
        {/* 게시글 더보기 바텀 시트 */}
        {nickname === detail.author ? (
          <div className="moreBtn">
            <PostBottomSheet id={id} detail={detail} />
          </div>
        ) : (
          ''
        )}
      </Section1>

      {/*  */}
      <DetailPostSection1>
        <div className="nickdate">
          <NickName>{detail.author}</NickName>
          <Date>{nowAt}</Date>
        </div>
        {/* 채팅하기 버튼 svg start*/}
        <svg
          width="105"
          height="36"
          viewBox="0 0 105 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#52596B">
            <rect
              x="0.5"
              y="0.5"
              width="104"
              height="35"
              rx="7.5"
              fill="white"
              stroke="#E2E6EF"
            />
            <path d="M14 17.4663C14 13.235 17.69 10 22 10C26.31 10 30 13.235 30 17.4663C30 21.6976 26.31 24.9326 22 24.9326C21.4961 24.933 20.9931 24.8892 20.496 24.8014C19.3552 25.6761 17.962 26.0942 16.561 25.9822C16.4323 25.9723 16.3081 25.9272 16.2005 25.8512C16.0929 25.7752 16.0055 25.6708 15.9467 25.5482C15.888 25.4256 15.8599 25.2889 15.8652 25.1514C15.8705 25.0138 15.909 24.8801 15.977 24.763C16.3048 24.1997 16.4851 23.5529 16.499 22.89C14.979 21.5461 14 19.6262 14 17.4663Z" />
            <path d="M49.9763 16.8702H48.3134V12.2196H47.2982V23.4931H48.3134V17.7887H49.9763V24.1119H51.0109V11.9586H49.9763V16.8702ZM44.1269 15.1298H46.457V14.2307H44.1366V12.4033H43.1117V14.2307H40.7526V15.1298H43.1117V15.6906C43.102 17.692 42.1158 19.8094 40.4722 20.7666L41.12 21.5691C42.3285 20.8584 43.1987 19.4952 43.629 17.9434C44.0737 19.4033 44.9487 20.6554 46.1573 21.3177L46.7857 20.5055C45.1227 19.6257 44.1269 17.6243 44.1269 15.6906V15.1298ZM61.7812 11.9682V19.5H62.8544V11.9682H61.7812ZM60.3503 17.4019C58.6389 17.6968 57.1935 17.7403 54.6072 17.7307V16.1354H59.016V15.2652H54.6072V13.7279H59.3544V12.8577H53.5243V18.6202H54.5105C57.1983 18.6298 58.6873 18.5718 60.4663 18.2818L60.3503 17.4019ZM58.813 19.674C56.2411 19.6644 54.7038 20.4765 54.7038 21.8688C54.7038 23.2804 56.2411 24.0829 58.813 24.0829C61.3461 24.0829 62.9124 23.2804 62.9124 21.8688C62.9124 20.4765 61.3461 19.6644 58.813 19.674ZM58.813 23.232C56.9083 23.232 55.7674 22.7293 55.7674 21.8688C55.7674 21.0373 56.9083 20.5249 58.813 20.5249C60.679 20.5249 61.8489 21.0373 61.8489 21.8688C61.8489 22.7293 60.679 23.232 58.813 23.232ZM74.4756 16.9669V11.9586H73.412V24.1119H74.4756V17.866H76.5059V16.9669H74.4756ZM68.1233 12.1036V13.9116H65.0004V14.8011H72.2325V13.9116H69.1965V12.1036H68.1233ZM68.6744 15.8066C66.9438 15.8066 65.6869 16.9572 65.6965 18.6008C65.6869 20.2445 66.9438 21.3854 68.6744 21.3854C70.3954 21.3854 71.6427 20.2445 71.6523 18.6008C71.6427 16.9572 70.3954 15.8066 68.6744 15.8066ZM68.6744 20.4765C67.5432 20.4862 66.7117 19.703 66.7214 18.6008C66.7117 17.4986 67.5432 16.7058 68.6744 16.7058C69.796 16.7058 70.6178 17.4986 70.6275 18.6008C70.6178 19.703 69.796 20.4862 68.6744 20.4765ZM86.2901 24.1119H87.3633V11.9586H86.2901V24.1119ZM78.0332 13.2831V14.1533H82.6741C82.4372 17.0539 80.7597 19.3936 77.4724 20.9503L78.0525 21.8301C82.1326 19.8674 83.7569 16.7735 83.7666 13.2831H78.0332Z" />
          </g>
        </svg>
        {/* 채팅하기 버튼 svg end*/}
      </DetailPostSection1>
      <PostLine />
      {/*  */}
      <DetailPostSection2>
        <JobPosition>{detail.jobGroup}</JobPosition>
        <PostTitle>{detail.title}</PostTitle>
      </DetailPostSection2>
      {/*  */}
      <DetailPostSection3>
        <DetailPostBody>{detail.content}</DetailPostBody>
        <DetailPostImg>
          <img src={detail.image} alt="" />
        </DetailPostImg>
      </DetailPostSection3>
      {/*  */}
      <DetailSectionLine />
      <DetailPostSection4>
        <div>
          <DivHeart onClick={likeHandler}>
            {isHeart ? <FillLike /> : <Like />}
            <HeartNum>{countHeart}</HeartNum>
          </DivHeart>
        </div>

        <CommentBox>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.65417 12.4539V12.4039H5.60417H3.65625C3.2465 12.4039 2.85373 12.2444 2.5643 11.9607C2.27489 11.6771 2.1125 11.2927 2.1125 10.892V3.60316C2.1125 3.20251 2.27489 2.81806 2.5643 2.53445C2.85373 2.25079 3.2465 2.09127 3.65625 2.09127H15.3438C15.7535 2.09127 16.1463 2.25079 16.4357 2.53445C16.7251 2.81806 16.8875 3.20251 16.8875 3.60316V10.892C16.8875 11.2927 16.7251 11.6771 16.4357 11.9607C16.1463 12.2444 15.7535 12.4039 15.3438 12.4039H10.792H10.7761L10.7631 12.4131L5.8558 15.8826L5.85576 15.8826C5.76992 15.9434 5.65417 15.8819 5.65417 15.7832V12.4539ZM6.53544 16.8091L6.53545 16.8091L11.1514 13.5452H15.3438C16.0612 13.5452 16.7494 13.2659 17.257 12.7684C17.7646 12.271 18.05 11.596 18.05 10.892V3.60316C18.05 2.89917 17.7646 2.22422 17.257 1.72674C16.7494 1.22929 16.0612 0.95 15.3438 0.95H3.65625C2.93883 0.95 2.2506 1.22929 1.743 1.72674C1.23537 2.22422 0.95 2.89917 0.95 3.60316V10.892C0.95 11.596 1.23537 12.271 1.743 12.7684C2.2506 13.2659 2.93883 13.5452 3.65625 13.5452H4.49167V15.7825C4.49167 16.8162 5.6836 17.411 6.53544 16.8091Z"
              fill="#BCC2CC"
            />
          </svg>
          <CommentNum>{detail.commentCnt}</CommentNum>
        </CommentBox>
        <HitBox>
          조회수<HitNum>{detail.hit}</HitNum>
        </HitBox>
      </DetailPostSection4>
      <Comment detailAuthor={detail.author} />
    </DetailBox>
  );
};

export default PostDetail;
