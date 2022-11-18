import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { __putPost, __getPost } from '../../../redux/modules/PostSlice';

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
  const { id } = useParams(); //동작 원리 알아보기
  const { detail } = useSelector((state) => state.PostSlice);

  const [title, setTitle] = useState(detail.title);
  const [content, setContent] = useState(detail.content);
  const [jobGroup, setJobGroup] = useState(detail.jobGroup);

  useEffect(() => {
    setTitle(detail.title);
    setContent(detail.content);
    setJobGroup(detail.jobGroup);
  }, [detail]);

  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch, id]);

  const [memberPost, setMemberpost] = useState('');
  const [image, setImage] = useState('');

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
      'postDto',
      new Blob(
        [
          JSON.stringify({
            title: memberPost.title,
            content: memberPost.content,
            jobGroup: memberPost.jobGroup,
            image: memberPost.image,
          }),
        ],
        { type: 'application/json' }
      )
    );

    dispatch(
      __putPost({
        id: detail.id,
        formData,
      })
    );
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
              //value = { testjobGroup }
              const { value } = ev.target;
              setJobGroup(ev.target.value);
              setMemberpost({
                ...memberPost,
                jobGroup: value,
              });
            }}
          >
            <option hidden>직군을 선택해주세요.</option>
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
        <EditTitle>
          <input
            value={title}
            type="text"
            placeholder="제목"
            onChange={(ev) => {
              setTitle(ev.target.value);
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
            value={content}
            type="text"
            placeholder="내용(500자 이내)"
            maxLength={500}
            onChange={(ev) => {
              const { value } = ev.target;
              setContent(ev.target.value);
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
