import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

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
import { useDispatch } from 'react-redux';
import { __writePost } from '../../../redux/modules/PostSlice';
import useInput from '../../../hook/useInput';

const PostWrite = () => {
  // const [title, titleHandler] = useInput();
  // const [content, contentHandler] = useInput();
  // const [jobGroup, jobGroupHandler] = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [memberPost, setMemberpost] = useState();
  const [image, setImage] = useState('');

  const goToCommunity = () => {
    navigate('/community');
  };

  //이미지 미리보기
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

  //작성한 데이터 전송
  const writeHandler = () => {
    const formData = new FormData();

    formData.append('image', memberPost.image);
    formData.append(
      'postDto',
      new Blob(
        [
          JSON.stringify({
            title: memberPost.title,
            content: memberPost.content,
            jobGroup: memberPost.jobGroup,
          }),
        ],
        { type: 'application/json' }
      )
    );
    dispatch(__writePost(formData));
    console.log(memberPost);

    // function writeHandler(event) {
    //   const formData = new FormData();

    //   formData.append('image', event.target.image[0]);

    //   const temp = {
    //     title: title,
    //     content: content,
    //     category: category,
    //     image: image,
    //   };
    //   console.log(temp);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
  };

  return (
    <form
      onSubmit={(e) => {
        writeHandler(memberPost);
        goToCommunity(e);
      }}
    >
      <WriteBox>
        <WriteSection1 /> <WriteSection1Title>게시글 작성</WriteSection1Title>
        <SelectJob>
          <select
            onChange={(ev) => {
              const { value } = ev.target;
              setMemberpost({
                ...memberPost,
                jobGroup: value,
              });
            }}
          >
            <option disabled selected hidden>
              직군을 선택해주세요.
            </option>
            <option>기획·전략</option>
            <option>마케팅·홍보·조사</option>
            <option>회계·세무·재무</option>
            <option>인사·노무·HRD</option>
            <option>총무·법무·사무</option>
            <option>IT개발·데이터</option>
            <option>디자인</option>
            <option>영업·판매·무역</option>
            <option>고객상담·TM</option>
            <option>구매·자재·물류</option>
            <option>상품기획·MD</option>
            <option>운전·운송·배송</option>
            <option>서비스</option>
            <option>생산</option>
            <option>건설·건축</option>
            <option>의료</option>
            <option>연구·R&D</option>
            <option>교육</option>
            <option>미디어·문화·스포츠</option>
            <option>금융·보험</option>
            <option>공공·복지</option>
          </select>
        </SelectJob>
        <WriteTitle>
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
        </WriteTitle>
        <WriteBody>
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
        </WriteBody>
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
        <WriteBtn onClick={writeHandler}>작성</WriteBtn>
      </WriteBox>
    </form>
  );
};

export default PostWrite;
