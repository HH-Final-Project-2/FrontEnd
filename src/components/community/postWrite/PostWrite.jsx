import React, { useState } from 'react';
import {
  WriteBody,
  WriteBox,
  WriteBtn,
  WriteSection1,
  WriteTitle,
} from './PostWriteStyle';

const PostWrite = () => {
  const [post, setPost] = useState();

  const onChangeHandler = (event) => {
    setPost(event.target.value);
  };
  
  return (
    <WriteBox>
      <WriteSection1>게시글 작성</WriteSection1>
      <WriteTitle>
        <input type="text" placeholder="제목" onChange={onChangeHandler} />
      </WriteTitle>
      <WriteBody>
        <input
          type="text"
          placeholder="내용(500자 이내)"
          maxLength={500}
          onChange={onChangeHandler}
        />
      </WriteBody>
      <WriteBtn>작성</WriteBtn>
    </WriteBox>
  );
};

export default PostWrite;
