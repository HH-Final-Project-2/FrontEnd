import React from 'react';
import {
  CommentBody,
  CommentDate,
  CommentListLayout,
  CommentNickName,
  CommentSection1,
} from './CommentStyle';

const Comment = () => {
  return (
    <CommentListLayout>
      <CommentSection1>
        <CommentNickName>닉네임</CommentNickName>
        <CommentDate>방금 전</CommentDate>
      </CommentSection1>
      {/*  */}
      <CommentBody>댓글 내용</CommentBody>
    </CommentListLayout>
  );
};

export default Comment;
