import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  getCommentList,
  addComment,
  likeComment,
} from '../../../redux/modules/commentSlice';
import CommentBottomSheet from '../../bottomSheet/CommentBottomSheet';
import { ReactComponent as Like } from '../../../images/noneLike.svg';
import { ReactComponent as FillLike } from '../../../images/fillLike.svg';

import {
  CommentBody,
  CommentDate,
  CommentListLayout,
  CommentNickName,
  CommentNickName2,
  CommentSection1,
  CommentTitle,
  CommentWriteBox,
  CommentTextarea,
  CommentWirteButton,
  LikeButton,
  LikeButtonText,
  CommentWirteButtonFill,
  LikeBox
} from './CommentStyle';
import Swal from 'sweetalert2';

const Comment = ({ detailAuthorId }) => {
  const dispatch = useDispatch();
  const [commentForm, setCommentForm] = useState('');

  const userid = localStorage.getItem('userid');
  const nickname = localStorage.getItem('nickname');

  const { id } = useParams();
  const { comments } = useSelector((state) => state.comments);

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

  if (comments === undefined) return null;

  return (
    <div>

      {/* 댓글 작성 */}
      <CommentWriteBox>
        <CommentTextarea
          Rows={10}
          type="text"
          value={commentForm}
          onChange={(e) => {
            setCommentForm(e.target.value);
          }}
          placeholder="댓글을 입력해주세요"
        />
        {commentForm.length > 0 ? (
          <CommentWirteButtonFill
            onClick={() => {
              if (commentForm.trim() === '')
                return Swal.fire({
                  title: '댓글을 입력해 주세요', showConfirmButton: false,
                  timer: 1000,
                  customClass: {
                    popup: 'allAlret-class',
                    title: 'allTitle-class',
                  },
                });
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
          </CommentWirteButtonFill>
        ) : (
          <CommentWirteButton
            onClick={() => {
              if (commentForm.trim() === '')
                return Swal.fire({
                  title: '댓글을 입력해 주세요', showConfirmButton: false,
                  timer: 1000,
                  customClass: {
                    popup: 'allAlret-class',
                    title: 'allTitle-class',
                  },
                });
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
        )}
      </CommentWriteBox>

      <CommentListLayout>
        {comments.map((commentList) => {
          return (
            <div key={commentList.id}>
              <CommentSection1>
                <CommentTitle>
                  {commentList.authorId === detailAuthorId ? (
                    <CommentNickName2>{commentList.author}</CommentNickName2>
                  ) : (
                    <CommentNickName>{commentList.author}</CommentNickName>
                  )}

                  <CommentDate>
                    {displayedAt(new window.Date(commentList.createdAt))}
                  </CommentDate>
                </CommentTitle>

                {/* 댓글 더보기 바텀시트 */}
                {+userid === commentList.authorId ? (
                  <div>
                    <CommentBottomSheet id={id} commentList={commentList} />
                  </div>
                ) : (
                  ''
                )}
              </CommentSection1>
              <CommentBody>{commentList.content}</CommentBody>

              {/* 댓글 좋아요 */}
              <LikeButton>

                <LikeBox>
                  {commentList.commentHeartYn ? <FillLike onClick={() => {
                    dispatch(likeComment(commentList.id));
                  }} /> : <Like onClick={() => {
                    dispatch(likeComment(commentList.id));
                  }} />}
                </LikeBox>

                <LikeButtonText>{commentList.commentHeartCnt}</LikeButtonText>

              </LikeButton>
            </div>
          );
        })}
      </CommentListLayout>
    </div>
  );
};

export default Comment;
