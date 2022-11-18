import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import {
  deleteComment,
  getCommentList,
  addComment,
} from '../../../redux/modules/commentSlice';

import {
  CommentBody,
  CommentDate,
  CommentListLayout,
  CommentNickName,
  CommentSection1,
  CommentTitle,
  ComentPlus,
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
      <input
        type="text"
        value={commentForm}
        onChange={(e) => {
          setCommentForm(e.target.value);
        }}
        placeholder="댓글작성"
      />
      <button
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
      </button>

      <CommentListLayout>
        {comments.map((commentList) => {
          return (
            <div key={commentList.id}>
              <CommentSection1>
                <CommentTitle>
                  <CommentNickName>{commentList.author}</CommentNickName>
                  <CommentDate>{commentList.modifiedAt}</CommentDate>
                </CommentTitle>
                <ComentPlus
                onClick={() => {
                  const confirm = window.confirm('정말 삭제하시겠습니까?');
                  if (confirm) {
                    dispatch(
                      deleteComment({
                        postId: id,
                        commentId: commentList.id,
                      })
                    );
                  } else {
                    return;
                  }
                }}
                >
                  <img src="../images/more.png" alt="" />
                  <button>수정</button>
                </ComentPlus>
              </CommentSection1>
              {/*  */}
              <CommentBody>{commentList.content}</CommentBody>
            </div>
          );
        })}
      </CommentListLayout>
    </div>
  );
};

export default Comment;
