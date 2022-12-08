import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import {
  DeleteImage,
  ImageUpload,
  ImgUploadButton,
  SelectJob,
  WriteBody,
  WriteBox,
  WriteBtn,
  WriteSection1,
  WriteSection1Title,
  WriteTitle,
} from './PostWriteStyle';
import { useDispatch, useSelector } from 'react-redux';
import { __writePost } from '../../../redux/modules/PostSlice';
import { ReactComponent as Xbutton } from '../../../images/x-circle-fill.svg';
import Swal from 'sweetalert2';

const PostWrite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [memberPost, setMemberpost] = useState();
  const [image, setImage] = useState('');

  const [titleTest, setTitleTest] = useState('');
  const [joupGroupTest, setJoupGroup] = useState('');
  const [contentTest, setContentTest] = useState('');

  // textarea 세로길이 자동 조정
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    if (textRef === null || textRef.current === null) {
      return;
    }
    textRef.current.style.height = '46px';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const { isLoading } = useSelector((state) => state.PostSlice);

  useEffect(() => {
    // 아랫줄 주석하고 submit 하자마자 이동하는 로직으로 테스트하면
    // Walterfall 부분이 겹친다.
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

  //지우기버튼 띄우기
  const deleteImage = () => {
    memberPost.image = null;
    setImage('');
  };

  const display = (str) => {
    if (str) {
      return true;
    } else {
      return false;
    }
  };

  //유효성 통과시 버튼&폰트 색상 변경
  const checkJobGroup = joupGroupTest.length >= 1;
  const checkTitle = titleTest.length >= 1;
  const checkContent = contentTest.length >= 1;

  let setColor = '';
  let setFontColor = '';

  if (checkJobGroup && checkTitle && checkContent) {
    setColor = '#5546ff';
    setFontColor = 'white';
  } else {
    setColor = '#bbb5ff;';
    setFontColor = 'white';
  }

  //작성한 데이터 전송
  const writeHandler = (memberPost) => {
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
  };

  return (
    <form
      onSubmit={(e) => {
        // form을 submit 하면, <form action="제출주소"> 제출주소로 이동하게된다.
        // 현재 form에는 action이 없다 = 자기 자신() 이기 때문에
        // /write 주소가 다시 호출되어, 새로고침 되는 것처럼 보인다.
        // 이런 현상을 막으려면, 반드시 이벤트(e) 파라메터의 preventDefault() 함수를
        // 호출해준다.
        e.preventDefault();
        //import Swal from 'sweetalert2';
        if (
          joupGroupTest.trim() === '' &&
          titleTest.trim() === '' &&
          contentTest.trim() === ''
        ) {
          Swal.fire({
            title: '게시글을 확인 해주세요',
            showConfirmButton: false,
            timer: 1000,
            width: '300px',
            customClass: {
              popup: 'allAlret-class',
              title: 'allTitle-class',
            },
          });
          return;
        }

        if (joupGroupTest.trim() === '') {
          Swal.fire({
            title: '직군을 선택해 주세요',
            showConfirmButton: false,
            timer: 1000,
            width: '300px',
            customClass: {
              popup: 'allAlret-class',
              title: 'allTitle-class',
            },
          });
          return;
        }
        if (titleTest.trim() === '') {
          Swal.fire({
            title: '제목을 입력해 주세요',
            showConfirmButton: false,
            timer: 1000,
            width: '300px',
            customClass: {
              popup: 'allAlret-class',
              title: 'allTitle-class',
            },
          });
          return;
        }
        if (contentTest.trim() === '') {
          Swal.fire({
            title: '내용을 입력해 주세요',
            showConfirmButton: false,
            timer: 1000,
            width: '300px',
            customClass: {
              popup: 'allAlret-class',
              title: 'allTitle-class',
            },
          });
          return;
        }

        writeHandler(memberPost);
        // onSubmit에서 navigate('/community')를 호출하면,
        // 글 등록 전에 게시글 목록으로 이동한다.
        // 게시글 목록으로 이동하면 게시글 목록 API를 호출할 테고
        // 방금 쓴 글이 없는 상태의 게시글 목록이 응답으로 온다.
      }}
    >
      <WriteBox>
        <WriteSection1>
          <div
            className="backBtn"
            type="button"
            onClick={() => navigate('/community')}
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
          <WriteSection1Title>게시글 작성</WriteSection1Title>
        </WriteSection1>

        <SelectJob>
          <select
            value={joupGroupTest}
            onChange={(ev) => {
              setJoupGroup(ev.target.value);
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
        <WriteTitle>
          <textarea
            value={titleTest}
            type="text"
            placeholder="제목"
            maxLength={50}
            onChange={(ev) => {
              setTitleTest(ev.target.value);
              const { value } = ev.target;
              setMemberpost({
                ...memberPost,
                title: value,
              });
            }}
          />
        </WriteTitle>
        <WriteBody>
          <textarea
            value={contentTest}
            ref={textRef}
            onInput={handleResizeHeight}
            type="text"
            placeholder="내용(500자 이내)"
            maxLength={500}
            onChange={(ev) => {
              setContentTest(ev.target.value);
              const { value } = ev.target;
              setMemberpost({
                ...memberPost,
                content: value,
              });
            }}
          />
        </WriteBody>
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
          {display(image) ? (
            ''
          ) : (
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
                이미지첨부
              </label>
            </ImgUploadButton>
          )}
        </ImageUpload>
        <WriteBtn fontColor={setFontColor} color={setColor}>
          작성
        </WriteBtn>
      </WriteBox>
    </form>
  );
};

export default PostWrite;
