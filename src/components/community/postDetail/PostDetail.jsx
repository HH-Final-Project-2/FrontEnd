import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { __getPost, __likePost } from '../../../redux/modules/PostSlice';
import PostBottomSheet from '../../bottomSheet/PostBottomSheet';
import Comment from '../comment/Comment';

import { ReactComponent as Like } from '../../../images/noneLike.svg';
import { ReactComponent as FillLike } from '../../../images/fillLike.svg';
import { ReactComponent as Chat } from '../../../images/ic-chat.svg';
import { _postId } from '../../../redux/modules/chatSlice';

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
  DivHeart,
  HeartNum,
} from './PostDetailStyle';
import LoadingPage from '../../../pages/LoadingPage';

const PostDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { detail } = useSelector((state) => state.PostSlice);
  const userid = localStorage.getItem('userid');

  const [isHeart, setIsHeart] = useState(false);
  const [countHeart, setCountHeart] = useState(detail.postHeartCnt);

  const [postid, setPostId] = useState({
    postId: id,
  });

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

  if (detail === undefined) return null;

  // 게시글 상세조회시 이전에 봤던 게시글이 잠깐 나타났다가 사라지는 이슈
  // 스토어에 이전 데이터(방금전/좀전에 조회했던)가 남아있어
  // 이전 데이터의 아이디값과 현재 아이디값이 같지 않을때
  // 로딩페이지컴포넌트를 리턴하여 해결
  if (parseInt(id) !== detail.id) return <LoadingPage />;

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
        {+userid === detail.authorId ? (
          <div className="moreBtn">
            <PostBottomSheet id={id} detail={detail} />
          </div>
        ) : (
          ''
        )}
      </Section1>

      <DetailPostSection1>
        <div className="nickdate">
          <NickName>{detail.author}</NickName>
          <Date>{nowAt}</Date>
        </div>

        {+userid === detail.authorId ? (
          ''
        ) : (
          <Chat
            onClick={() => {
              setTimeout(() => {
                dispatch(_postId(postid));
              }, 100);

              setTimeout(() => {
                navigate('/chat/chatroom/');
              }, 200);
            }}
          />
        )}
      </DetailPostSection1>
      <PostLine />

      <DetailPostSection2>
        <JobPosition>{detail.jobGroup}</JobPosition>
        <PostTitle>{detail.title}</PostTitle>
      </DetailPostSection2>

      <DetailPostSection3>
        <DetailPostBody>{detail.content}</DetailPostBody>
        <DetailPostImg>
          <img src={detail.image} alt="" />
        </DetailPostImg>
      </DetailPostSection3>

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
      <Comment detailAuthorId={detail.authorId} />
    </DetailBox>
  );
};

export default PostDetail;
