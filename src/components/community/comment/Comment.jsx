import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  getCommentList,
  addComment,
} from '../../../redux/modules/commentSlice';
import CommentBottomSheet from '../../bottomSheet/CommentBottomSheet';
import { ReactComponent as Like } from '../../../images/noneLike.svg';
import { ReactComponent as FillLike } from '../../../images/fillLike.svg';

import {
  CommentBody,
  CommentDate,
  CommentListLayout,
  CommentNickName,
  CommentSection1,
  CommentTitle,
  CommentWriteBox,
  CommentTextarea,
  CommentWirteButton,
  LikeButton,
  LikeButtonText,
} from './CommentStyle';

const Comment = () => {
  const dispatch = useDispatch();
  const [commentForm, setCommentForm] = useState('');

  const nickname = localStorage.getItem('nickname');

  const { id } = useParams();
  const { comments } = useSelector((state) => state.comments);

  // 댓글 좋아요
  const [isHeart, setIsHeart] = useState(false);
  const [countHeart, setCountHeart] = useState(0);

  const likeHandler = () => {
    setIsHeart(!isHeart);
    // let isHeartLocal = localStorage.setItem('heart', isHeart)
    // let countHeartLocal = localStorage.setItem('countheart', countHeart)
    //dispatch(__likePost(id))
    if (isHeart) {
      setCountHeart((prevstate) => prevstate - 1);
      // setCountHeart(countHeart - 1);
    } else {
      setCountHeart((prevstate) => prevstate + 1);
      // setCountHeart(countHeart + 1);
    }
  };

  useEffect(() => {
    dispatch(getCommentList(id));
  }, [dispatch]);

  // 시간 카운팅
  function displayedAt(commentCreatedAt) {
    const milliSeconds = new window.Date() - commentCreatedAt;
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

  // const nowAt = displayedAt(new window.Date(comments.nowAt));
  // 댓글 전체 조회가 필요할 것 같음.

  //   for (let i = 0; i <= comments.length; i++) {
  //     let comment = comments[i];
  //     comment.nowAt = displayAt(new window.Date(comment.createAt));
  // }
  // const timeIsGold = comments.map((comment) => {
  //   comment.nowAt = displayedAt(new window.Date(comment.createAt));
  // })

  return (
    <div>
      {/* 댓글 작성 */}
      <CommentWriteBox>
        <CommentTextarea
          type="text"
          value={commentForm}
          onChange={(e) => {
            setCommentForm(e.target.value);
          }}
          placeholder="댓글을 입력해주세요"
        ></CommentTextarea>
        <CommentWirteButton
          onClick={() => {
            dispatch(
              addComment({
                postId: id,
                content: commentForm,
                nickname: nickname,
              })
            );
            setCommentForm('');
          }}
        >
          등록
        </CommentWirteButton>
      </CommentWriteBox>

      <CommentListLayout>
        {comments.map((commentList) => {
          return (
            <div key={commentList.id}>
              <CommentSection1>
                <CommentTitle>
                  <CommentNickName>{commentList.author}</CommentNickName>
                  <CommentDate>
                    {displayedAt(new window.Date(commentList.createAt))}
                  </CommentDate>
                </CommentTitle>

                {/* 댓글 더보기 바텀시트 */}
                {nickname === commentList.author ? (
                  <div>
                    <CommentBottomSheet id={id} commentList={commentList} />
                  </div>
                ) : (
                  ''
                )}
              </CommentSection1>
              <CommentBody>{commentList.content}</CommentBody>

              {/* 댓글 좋아요 */}
              <LikeButton onClick={likeHandler}>
                {isHeart ? <FillLike /> : <Like />}
                <LikeButtonText>100</LikeButtonText>
              </LikeButton>
            </div>
          );
        })}
      </CommentListLayout>
    </div>
  );
};

export default Comment;
