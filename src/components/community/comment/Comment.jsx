import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  getCommentList,
  addComment,
} from '../../../redux/modules/commentSlice';
import CommentBottomSheet from '../../bottomSheet/CommentBottomSheet';
import { ReactComponent as Like } from '../../../images/likeHeart.svg';

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

  useEffect(() => {
    dispatch(getCommentList(id));
  }, [dispatch]);

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
                  <CommentDate>{commentList.modifiedAt}</CommentDate>
                </CommentTitle>

                {/* 댓글 더보기 바텀시트 */}
                <div>
                  <CommentBottomSheet id={id} commentList={commentList} />
                </div>
              </CommentSection1>

              {/* 댓글 좋아요 */}
              <CommentBody>{commentList.content}</CommentBody>
              <LikeButton>
                <Like />
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
