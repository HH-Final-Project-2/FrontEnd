import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
  CommentEditBox,
  CommentEditInputBox,
  CommentEditBtn,
  CommentBtns,
  EditCancelBtn,
} from './CommentEditStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCommentList,
  putComment,
} from '../../../redux/modules/commentSlice';
import {
  Section1,
  Section1Title,
  Section2,
  SectionLine,
} from '../postList/PostListStyle';

const CommentEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 게시글 id
  const { id } = useParams();

  // 댓글 id
  const { cid } = useParams();

  // 댓글 조회
  const { comments } = useSelector((state) => state.comments);

  let commentArr = [];
  commentArr = comments.filter((comment) => {
    return comment.id === +cid;
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
      <Section1>
        <Section2>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg>
          <Section1Title>댓글 수정</Section1Title>
        </Section2>
      </Section1>
      <SectionLine />
      <CommentEditInputBox>
        <textarea
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <CommentBtns>
          <CommentEditBtn
            onClick={() => {
              dispatch(
                putComment({
                  postId: id,
                  commentId: cid,
                  content: content,
                })
              );
              navigate(`/detail/${id}`);
            }}
          >
            등록
          </CommentEditBtn>
          <EditCancelBtn
            onClick={() => {
              navigate(`/detail/${id}`);
            }}
          >
            취소
          </EditCancelBtn>
        </CommentBtns>
      </CommentEditInputBox>
    </CommentEditBox>
  );
};

export default CommentEdit;
