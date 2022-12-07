import React from 'react';
import {
  Comment,
  Date,
  Heart,
  Hits,
  JobPosition,
  NickName,
  PostBody,
  PostBox,
  PostImg,
  PostLine,
  PostSection1,
  PostSection2,
  PostSection3,
  PostSection4,
  PostTitle,
} from './PostStyle';
import { ReactComponent as Like } from '../../../images/noneLike.svg';
import { ReactComponent as FillLike } from '../../../images/fillLike.svg';

const Post = ({ post }) => {
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

  const nowAt = displayedAt(new window.Date(post.createdAt));

  return (
    <PostBox>
      <PostSection1>
        <NickName>{post.author}</NickName>
        <Date>{nowAt}</Date>
      </PostSection1>

      <PostSection2>
        <JobPosition>{post.jobGroup}</JobPosition>
        <PostTitle>{post.title}</PostTitle>
      </PostSection2>

      <PostSection3>
        <PostBody>{post.content}</PostBody>
        <PostImg>
          <img
            src={
              post.image !== ''
                ? post.image
                : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            }
            alt=""
          />
        </PostImg>
      </PostSection3>

      <PostSection4>
        <Heart>
          {post.postHeartYn ? <FillLike /> : <Like />}
          <div className="heart">{post.postHeartCnt}</div>
        </Heart>
        <Comment>
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

          <div className="comment">{post.commentCnt}</div>
        </Comment>
      </PostSection4>
      <Hits>조회수 {post.hit}</Hits>
      <PostLine />
    </PostBox>
  );
};

export default Post;
