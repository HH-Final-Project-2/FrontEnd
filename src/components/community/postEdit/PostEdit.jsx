import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import useInput from '../../../hook/useInput';
import { __deletePost, __putPost } from '../../../redux/modules/PostSlice';
// import { useCookies } from 'react-cookie';
import {
  EditBody,
  EditBox,
  EditBtn,
  EditSection1,
  EditSection1Title,
  EditTitle,
  ImageUpload,
  SelectJob,
} from './PostEditStyle';

const PostEdit = () => {
  const dispatch = useDispatch();
  const [title, titleHandler] = useInput();
  const [content, contentHandler] = useInput();
  const [category, categoryHandler] = useInput();
  // const [writeImage, setWriteImage] = useState();
  const [Image, setImage] = useState();
  const { post } = useSelector((state) => state.PostSlice);

  const navigate = useNavigate();

  const formData = new FormData();

  function setFile(event) {
    console.log(event.target.files);
    formData.append('file', event.target.files[0]);
  }

  function saveHandler() {
    dispatch(
      __putPost({
        title: title,
        content: content,
        image: '',
      })
    );
    // if (res.data.success) {
    //   navigate('/community');
    // }
  }

  const deleteHandler = () => {
    dispatch(__deletePost({ id: post.id }));
    alert('삭제되었습니다.');
    navigate('/community');
  };

  return (
    <EditBox>
      <EditSection1 /> <EditSection1Title>게시글 수정</EditSection1Title>
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
      <EditTitle>
        <input type="text" placeholder="제목" onChange={titleHandler} />
      </EditTitle>
      <EditBody>
        <input
          type="text"
          placeholder="내용(500자 이내)"
          maxLength={500}
          onChange={contentHandler}
        />
      </EditBody>
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
      <EditBtn onClick={saveHandler}>저장</EditBtn>
      <button>수정</button>
      <button onClick={deleteHandler}>삭제</button>
    </EditBox>
  );
};

export default PostEdit;
