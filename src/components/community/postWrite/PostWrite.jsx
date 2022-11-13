import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useInput from '../../../hook/useInput';
// import { useCookies } from 'react-cookie';

import {
  ImageUpload,
  SelectJob,
  WriteBody,
  WriteBox,
  WriteBtn,
  WriteSection1,
  WriteSection1Title,
  WriteTitle,
} from './PostWriteStyle';

const PostWrite = () => {
  // const [cookie, setCookie] = useCookies();
  const [title, titleHandler] = useInput();
  const [content, contentHandler] = useInput();
  const [category, categoryHandler] = useInput();
  const [writeImage, setWriteImage] = useState();
  const [Image, setImage] = useState();

  const navigate = useNavigate();

  const formData = new FormData();

  function setFile(event) {
    console.log(event.target.files);
    formData.append('file', event.target.files[0]);
  }

  function writeHandler() {
    const temp = {
      title: title,
      content: content,
      category: category,
      Image: Image,
    };
    console.log(temp);
    // if (res.data.success) {
    //   navigate('/community');
    // }
  }

  return (
    <WriteBox>
      <WriteSection1 /> <WriteSection1Title>게시글 작성</WriteSection1Title>
      <SelectJob>
        <select onChange={categoryHandler}>
          <option value="" disabled selected hidden>
            직군을 선택해주세요.
          </option>
          <option>IT·개발</option>
          <option>공무원</option>
          <option>또 뭐가</option>
          <option>좋을까요</option>
        </select>
      </SelectJob>
      <WriteTitle>
        <input type="text" placeholder="제목" onChange={titleHandler} />
      </WriteTitle>
      <WriteBody>
        <input
          type="text"
          placeholder="내용(500자 이내)"
          maxLength={500}
          onChange={contentHandler}
        />
      </WriteBody>
      <ImageUpload>
        <label htmlFor="upload-img" style={{ display: 'block' }}>
          <input
            type="file"
            accept="image/*"
            // required
            // multiple
            aria-hidden="false"
            tabIndex="0"
            onChange={setFile.bind(this)}
          />
          {Image ? <img src={Image} /> : ''}
        </label>
      </ImageUpload>
      <WriteBtn onClick={writeHandler}>작성</WriteBtn>
    </WriteBox>
  );
};

export default PostWrite;
