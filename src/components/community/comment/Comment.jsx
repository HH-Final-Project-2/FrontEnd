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
  LikeButtonText

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
    setIsHeart(!isHeart)
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
  }

  useEffect(() => {
    dispatch(getCommentList(id));
  }, [dispatch]);

  return (
    <div>
      {/* 댓글 작성 */}
      <CommentWriteBox>

        <CommentTextarea type="text" value={commentForm} onChange={(e) => {
          setCommentForm(e.target.value)
        }} placeholder="댓글을 입력해주세요" />
        <CommentWirteButton onClick={() => {
          dispatch(addComment({
            postId: id,
            content: commentForm,
            nickname: nickname
          }))
          setCommentForm('')
        }}>등록</CommentWirteButton>

      </CommentWriteBox>

      <CommentListLayout>
        {comments.map((commentList) => {
          return (
            <div key={commentList.id}>
              <CommentSection1>
                <CommentTitle>
                  <CommentNickName>{commentList.author}</CommentNickName>
                  <CommentDate>{commentList.modifiedAt}</CommentDate>
                </CommentTitle>

                {/* 댓글 더보기 바텀시트 */}
                <div>
                  <CommentBottomSheet id={id} commentList={commentList} />
                </div>
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
