import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { __putPost, __getPost } from '../../../redux/modules/PostSlice';
import { SectionLine } from '../postList/PostListStyle';
import { DeleteImage, ImgUploadButton } from '../postWrite/PostWriteStyle';
import { ReactComponent as Xbutton } from '../../../images/x-circle-fill.svg';

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
  }, [dispatch]);

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

  const deleteImage = () => {
    setImage('');
  };

  //지우기버튼 띄우기
  const display = (str) => {
    if (str) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form
      onSubmit={(e) => {
        onSubmitHandler(memberPost);
        goToCommunity(e);
      }}
    >
      <EditBox>
        <EditSection1>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg>
          <EditSection1Title>게시글 수정</EditSection1Title>
        </EditSection1>
        <SectionLine />

        <SelectJob>
          <select
            onChange={(ev) => {
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
          <textarea
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
          <textarea
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
          {/* 이미지 미리보기 제거 버튼 */}
          <DeleteImage>
            <Xbutton
              display={display(image) ? 'block' : 'none'}
              type="button"
              onClick={deleteImage}
            />
          </DeleteImage>
          {/* 이미지 미리보기 */}
          {image && <img src={image} alt="preview-img" />}

          {/* 이미지 업로드 */}
          <ImgUploadButton>
            <input
              style={{ display: 'none' }}
              id="file-input"
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
            <label htmlFor="file-input">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.71429C0 1.99441 0.289731 1.30402 0.805456 0.794996C1.32118 0.285969 2.02065 0 2.75 0H19.25C19.9793 0 20.6788 0.285969 21.1945 0.794996C21.7103 1.30402 22 1.99441 22 2.71429V16.2857C22 17.0056 21.7103 17.696 21.1945 18.205C20.6788 18.714 19.9793 19 19.25 19H2.75C2.02065 19 1.32118 18.714 0.805456 18.205C0.289731 17.696 0 17.0056 0 16.2857V2.71429ZM1.375 14.9286V16.2857C1.375 16.6457 1.51987 16.9908 1.77773 17.2454C2.03559 17.4999 2.38533 17.6429 2.75 17.6429H19.25C19.6147 17.6429 19.9644 17.4999 20.2223 17.2454C20.4801 16.9908 20.625 16.6457 20.625 16.2857V11.5357L15.4316 8.89336C15.3027 8.8296 15.1567 8.80749 15.0143 8.83014C14.8719 8.85279 14.7404 8.91906 14.6383 9.01957L9.537 14.0546L5.8795 11.6497C5.74745 11.5629 5.58905 11.5239 5.43117 11.5392C5.27328 11.5546 5.12563 11.6233 5.01325 11.7339L1.375 14.9286ZM8.25 6.10714C8.25 5.56724 8.0327 5.04945 7.64591 4.66768C7.25911 4.2859 6.73451 4.07143 6.1875 4.07143C5.64049 4.07143 5.11589 4.2859 4.72909 4.66768C4.3423 5.04945 4.125 5.56724 4.125 6.10714C4.125 6.64705 4.3423 7.16484 4.72909 7.54661C5.11589 7.92838 5.64049 8.14286 6.1875 8.14286C6.73451 8.14286 7.25911 7.92838 7.64591 7.54661C8.0327 7.16484 8.25 6.64705 8.25 6.10714Z"
                  fill="#52596B"
                />
              </svg>
              이미지변경
            </label>
          </ImgUploadButton>
        </ImageUpload>
        <EditBtn>저장</EditBtn>
      </EditBox>
    </form>
  );
};

export default PostEdit;
