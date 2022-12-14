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
import { Section1, Section1Title, Section2 } from '../postList/PostListStyle';
import Swal from 'sweetalert2';

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

  const { isLoading } = useSelector((state) => state.comments);

  useEffect(() => {
    // 아랫줄 주석하고 submit 하자마자 이동하는 로직으로 테스트하면
    // Walterfall 부분이 겹친다.
    if (isLoading) navigate(`/detail/${id}`);
  }, [isLoading]);

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
            onClick={() => {
              navigate(`/detail/${id}`);
            }}
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg>
          <Section1Title>댓글 수정</Section1Title>
        </Section2>
      </Section1>
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
              Swal.fire({
                title: '댓글이 수정되었습니다',
                timer: 1500,
                showConfirmButton: false,
                customClass: {
                  popup: 'allAlret-class',
                  title: 'allTitle-class',
                },
              });
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
