import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
  CommentEditBox,
  CommentEditSection,
  CommentEditInputBox,
  CommentEditSectionTitle,
  CommentEditBtn
} from './CommentEditStyle';
import { useDispatch, useSelector } from 'react-redux';
import { __getPost } from '../../../redux/modules/PostSlice';
import { getCommentList, putComment } from '../../../redux/modules/commentSlice';

const CommentEdit = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 게시글 id
  const { id } = useParams();

  // 댓글 id
  const { cid } = useParams();

  // 댓글 조회
  const { comments } = useSelector((state) => state.comments);

  let commentArr = []
  commentArr = comments.filter((comment) => {
    return comment.id === +cid
  });


  const [content, setContent] = useState(commentArr[0]?.content);

  useEffect(() => {
    dispatch(getCommentList(id));
  }, [dispatch]);

  useEffect(() => {
    setContent(commentArr[0]?.content);
  }, [comments]);

  return (
    <CommentEditBox>
      <CommentEditSection /> <CommentEditSectionTitle>댓글 수정</CommentEditSectionTitle>
      <CommentEditInputBox>
        <textarea type='text' value={content} onChange={(e) => setContent(e.target.value)} />
        <CommentEditBtn onClick={() => {
          dispatch(putComment({
            postId: id,
            commentId: cid,
            content: content
          }))
          navigate(`/detail/${id}`)

        }}>완료</CommentEditBtn>
        <CommentEditBtn onClick={() => { navigate(`/detail/${id}`) }}>취소</CommentEditBtn>
      </CommentEditInputBox>

    </CommentEditBox>

  );
};

export default CommentEdit;
