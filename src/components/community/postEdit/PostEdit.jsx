import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { __putPost, __getPost } from '../../../redux/modules/PostSlice';
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
import Swal from 'sweetalert2';

const PostEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { detail } = useSelector((state) => state.PostSlice);

  // textarea 세로길이 자동 조정
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    if (textRef === null || textRef.current === null) {
      return;
    }
    textRef.current.style.height = '46px';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const [memberPost, setMemberpost] = useState({
    title: detail.title,
    content: detail.content,
    jobGroup: detail.jobGroup,
    imageDelete: false,
    image: null,
  });

  //이미지 미리보기 스테이트 url
  const [image, setImage] = useState(detail.image);

  //지우기버튼 띄우기
  const onDeleteImage = () => {
    setImage('');
    setMemberpost({
      ...memberPost,
      imageDelete: true,
      image: null,
    });
  };

  //기존값 불러오기
  useEffect(() => {
    setMemberpost({
      title: detail.title,
      content: detail.content,
      jobGroup: detail.jobGroup,
      imageDelete: false,
      image: null,
    });
  }, [detail]);

  // 디테일 api 호출
  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch]);

  // 랜더 이슈 해결(isLoading)
  const { isLoading } = useSelector((state) => state.PostSlice);

  useEffect(() => {
    if (isLoading) navigate('/community');
  }, [isLoading]);

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

  // 데이터 전송
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
            imageDelete: memberPost.imageDelete,
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
    Swal.fire({
      title: '게시글이 수정되었습니다',
      timer: 1500,
      showConfirmButton: false,
      customClass: {
        popup: 'allAlret-class',
        title: 'allTitle-class',
      },
    });
  };

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
        e.preventDefault();
        onSubmitHandler(memberPost);
      }}
    >
      <EditBox>
        <EditSection1>
          <div
            className="backBtn"
            type="button"
            onClick={() => navigate(`/detail/${id}`)}
          >
            <svg
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
            </svg>
          </div>
          <EditSection1Title>게시글 수정</EditSection1Title>
        </EditSection1>
        <SelectJob>
          <select
            value={memberPost.jobGroup}
            onChange={(ev) => {
              const { value } = ev.target;
              setMemberpost({
                ...memberPost,
                jobGroup: value,
              });
            }}
          >
            <option hidden>관심 직군을 선택해주세요.</option>
            <option>전체</option>
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
            value={memberPost.title}
            type="text"
            placeholder="제목"
            maxLength={50}
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
          <textarea
            value={memberPost.content}
            ref={textRef}
            onInput={handleResizeHeight}
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
          {/* 이미지 미리보기 제거 버튼 */}
          <DeleteImage>
            <Xbutton
              display={display(image) ? 'block' : 'none'}
              type="button"
              onClick={onDeleteImage}
            />
          </DeleteImage>
          {/* 이미지 미리보기 */}
          {image && <img src={image} alt="preview-img" />}
          {/* 이미지 업로드 */}
          {display(image) ? (
            ''
          ) : (
            <ImgUploadButton>
              {/* 
              input file은 value가 읽기전용(readonly) onChange로 처리한다. 
              기본값을 설정할 수 없는 문제가 있어 imageDelete 변수를 
              활용해 첨부 이미지를 유지하거나, 삭제 하거나 한다.  
              */}
              <input
                style={{ display: 'none' }}
                id="file-input"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                  setMemberpost({
                    ...memberPost,
                    imageDelete: false,
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
          )}
        </ImageUpload>
        <EditBtn>저장</EditBtn>
      </EditBox>
    </form>
  );
};
export default PostEdit;
