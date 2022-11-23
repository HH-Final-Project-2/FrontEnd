import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { deleteComment, getCommentList, addComment } from '../../../redux/modules/commentSlice';
import CommentBottomSheet from '../../bottomSheet/CommentBottomSheet';
import { ReactComponent as Like } from '../../../images/likeHeart.svg'

import {
  CommentBody,
  CommentDate,
  CommentListLayout,
  CommentNickName,
  CommentSection1,
  CommentTitle,
  ComentPlus,
  CommentTextarea,
  CommentWriteBox,
  CommentWirteButton,
  LikeButton,
  LikeButtonText
} from './CommentStyle';


const Comment = ({ postid }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

                <div>
                  <CommentBottomSheet />
                </div>
                {/* <ComentPlus onClick={() => {
                  const confirm = window.confirm('정말 삭제하시겠습니까?')
                  if (confirm) {
                    dispatch(deleteComment({
                      postId: id,
                      commentId: commentList.id
                    }
                    ))
                  } else {
                    return
                  }
                }}>···</ComentPlus>
                <button type='button' onClick={() => {
                  navigate(`/commentedit/${id}/${commentList.id}`)
                }}>수정</button> */}
              </CommentSection1>
              {/*  */}
              <CommentBody>{commentList.content}</CommentBody>
              <LikeButton>
                <Like />
                <LikeButtonText>100</LikeButtonText>
              </LikeButton>
            </div>

          )
        })}

      </CommentListLayout>
    </div>
  );
};

export default Comment;
