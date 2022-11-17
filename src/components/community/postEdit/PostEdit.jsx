import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { __putPost } from '../../../redux/modules/PostSlice';

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
  const navigate = useNavigate();

  const [memberPost, setMemberpost] = useState();
  const [image, setImage] = useState();

  const goToCommunity = () => {
    navigate('/community');
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImage(reader.result);

        resolve();
      };
    });
  };

  const onSubmitHandler = () => {
    const formData = new FormData();

    formData.append('image', memberPost.image);
    formData.append(
      'post',
      new Blob(
        [
          JSON.stringify({
            title: memberPost.title,
            content: memberPost.content,
            category: memberPost.category,
            image: memberPost.image,
          }),
        ],
        { type: 'application/json' }
      )
    );

    dispatch(__putPost(formData));
  };

  return (
    <form
      onSubmit={(e) => {
        onSubmitHandler(memberPost);
        goToCommunity(e);
      }}
    >
      <EditBox>
        <EditSection1 /> <EditSection1Title>게시글 수정</EditSection1Title>
        <SelectJob>
          <select
            onChange={(ev) => {
              const { value } = ev.target;
              setMemberpost({
                ...memberPost,
                categoryCode: value,
              });
            }}
          >
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
          <input
            type="text"
            placeholder="제목"
            onChange={(ev) => {
              const { value } = ev.target;
              setMemberpost({
                ...memberPost,
                title: value,
              });
            }}
          />
        </EditTitle>
        <EditBody>
          <input
            type="text"
            placeholder="내용(500자 이내)"
            maxLength={500}
            onChange={(ev) => {
              const { value } = ev.target;
              setMemberpost({
                ...memberPost,
                content: value,
              });
            }}
          />
        </EditBody>
        <ImageUpload>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
              setMemberpost({
                ...memberPost,
                image: e.target.files[0],
              });
            }}
          />
          {image && <img src={image} alt="preview-img" />}
        </ImageUpload>
        <EditBtn>저장</EditBtn>
      </EditBox>
    </form>
  );
};

export default PostEdit;
