import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { ReactComponent as Xbutton } from '../../images/x-circle-fill.svg';
import {
  emailAuth,
  passwordCheck,
  passwordFind,
} from '../../redux/modules/membersSlice';
import {
  JoinForm,
  LabelText,
  InputJoin,
  InputJoin2,
  ErrorText,
  ButtonJoin,
  InputButton,
  InputContainer,
  InputButtonEmail,
  EmailBox,
  EmailCheckButton,
  JoinTitle,
  Section2,
  Section1,
} from './FindPasswordStyle';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const FindPassword = () => {
  const [auth, setAuth] = useState('');
  const email = useSelector((state) => state.memberSlice.pwCheck);
  const authEmail = useSelector((state) => state.memberSlice.auth);

  // useForm 시작
  const {
    register,
    watch,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  // 패스워드 같은지 검사
  const password = useRef();
  password.current = watch('password');

  // 디스패치
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 이메일,패스워드,이름,닉네임,연락처 버튼 초기값
  const [stateXButtonEmail, setStateXButtonEmail] = useState('none');
  const [stateXButtonPassword, setStateXButtonPassword] = useState('none');
  const [stateXButtonPasswordCheck, setStateXButtonPasswordCheck] =
    useState('none');

  // 이메일 인증버튼 비활성화
  const [disable, setDisable] = React.useState(false);

  // 이메일,패스워드,이름,닉네임,연락처 watch
  const watchForEmail = watch('email');
  const watchForPassword = watch('password');
  const watchForPasswordCheck = watch('passwordCheck');

  // 인풋 값 입력시 버튼&폰트 색상 변경
  // 이메일 인증버튼
  let setColor = '';
  let setFontColor = '';

  // 인증번호 버튼
  let setColor2 = '';
  let setFontColor2 = '';

  // 가입하기 버튼
  let setColor3 = '';
  let setFontColor3 = '';

  if (watchForEmail) {
    setColor = '#5546ff';
    setFontColor = 'white';
  } else {
    setColor = '#bbb5ff;';
    setFontColor = 'white';
  }

  if (auth) {
    setColor2 = '#5546ff';
    setFontColor2 = 'white';
  } else {
    setColor2 = '#bbb5ff;';
    setFontColor2 = 'white';
  }

  if (watchForEmail && watchForPassword && watchForPasswordCheck && auth) {
    setColor3 = '#5546ff';
    setFontColor3 = 'white';
  } else {
    setColor3 = '#bbb5ff;';
    setFontColor3 = 'white';
  }

  // 이메일 X버튼 디스플레이
  useEffect(() => {
    if (watchForEmail === undefined) {
      setStateXButtonEmail('none');
    } else if (watchForEmail.length === 0) {
      setStateXButtonEmail('none');
    } else {
      setStateXButtonEmail('block');
    }
  });

  const xButtonEmail = () => {
    resetField('email');
    setStateXButtonEmail('none');
  };

  // 패스워드 X버튼 디스플레이
  useEffect(() => {
    if (watchForPassword === undefined) {
      setStateXButtonPassword('none');
    } else if (watchForPassword.length === 0) {
      setStateXButtonPassword('none');
    } else {
      setStateXButtonPassword('block');
    }
  });

  const xButtonPassword = () => {
    resetField('password');
    setStateXButtonEmail('none');
  };

  // 패스워드 확인 X버튼 디스플레이
  useEffect(() => {
    if (watchForPasswordCheck === undefined) {
      setStateXButtonPasswordCheck('none');
    } else if (watchForPasswordCheck.length === 0) {
      setStateXButtonPasswordCheck('none');
    } else {
      setStateXButtonPasswordCheck('block');
    }
  });

  const xButtonPasswordCheck = () => {
    resetField('passwordcheck');
    setStateXButtonEmail('none');
  };

  // 인증번호 X버튼
  const display = (str) => {
    if (str.length >= 1) {
      return true;
    } else {
      return false;
    }
  };

  // 폼 데이터 전송
  const onSubmit = (data) => {
    authEmail.success === true
      ? dispatch(
        passwordFind({
          email: watchForEmail,
          code: auth,
          password: watchForPassword,
          passwordCheck: watchForPasswordCheck,
        }),
        navigate('/login')
      )
      : Swal.fire({
        title: '이메일 인증이 필요합니다',
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: 'allAlret-class',
          title: 'allTitle-class',
        },
      });
  };
  return (
    <JoinForm onSubmit={handleSubmit(onSubmit)}>
      {/* 뒤로가기 */}
      <Section1 onClick={() => navigate(-1)}>
        <Section2>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg>
        </Section2>
      </Section1>

      {/* 회원가입 제목 */}
      <JoinTitle>비밀번호 찾기</JoinTitle>

      {/* 이메일 */}
      <EmailBox>
        <InputContainer>
          <LabelText>이메일</LabelText>
          <InputJoin2
            disabled={disable}
            name="email"
            type="text"
            placeholder="이메일"
            {...register('email', {
              required: true,
              pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            })}
          />
          <InputButtonEmail>
            <Xbutton
              width="20"
              height="20"
              fill="#BCC2CC"
              display={stateXButtonEmail}
              onClick={xButtonEmail}
            />
          </InputButtonEmail>
        </InputContainer>
        <EmailCheckButton
          fontColor={setFontColor}
          color={setColor}
          disabled={disable}
          type="button"
          onClick={() => {
            dispatch(
              passwordCheck({
                email: watchForEmail,
              })
            );
          }}
        >
          인증하기
        </EmailCheckButton>
      </EmailBox>
      {errors.email && <ErrorText>이메일 형식이 아닙니다</ErrorText>}

      {email === true ? (
        <EmailBox>
          <InputContainer>
            <LabelText>이메일 인증코드</LabelText>
            <InputJoin2
              name="auth"
              type="text"
              value={auth}
              disabled={disable}
              placeholder="인증번호를 입력하세요"
              onChange={(e) => {
                setAuth(e.target.value);
              }}
            />
            <InputButtonEmail>
              <Xbutton
                width="20"
                height="20"
                fill="#BCC2CC"
                display={display(auth) ? 'block' : 'none'}
                onClick={() => setAuth('')}
              />
            </InputButtonEmail>
          </InputContainer>

          <EmailCheckButton
            fontColor={setFontColor2}
            color={setColor2}
            type="button"
            disabled={disable}
            onClick={() => {
              dispatch(
                emailAuth({
                  email: watchForEmail,
                  code: auth,
                })
              );
              setDisable(true);
            }}
          >
            인증하기
          </EmailCheckButton>
        </EmailBox>
      ) : null}

      {/* 비밀번호 */}
      <InputContainer>
        <LabelText>비밀번호</LabelText>
        <InputJoin
          name="password"
          type="password"
          placeholder="6~15자, 영문, 숫자"
          {...register('password', {
            required: true,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/,
          })}
        />
        <InputButton>
          <Xbutton
            width="20"
            height="20"
            fill="#BCC2CC"
            display={stateXButtonPassword}
            onClick={xButtonPassword}
          />
        </InputButton>
      </InputContainer>
      {errors.password && <ErrorText>비밀번호는 영문,숫자 6~15자</ErrorText>}

      {/* 비밀번호 확인 */}
      <InputContainer>
        <InputJoin
          name="passwordCheck"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          {...register('passwordCheck', {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        <InputButton>
          <Xbutton
            width="20"
            height="20"
            fill="#BCC2CC"
            display={stateXButtonPasswordCheck}
            onClick={xButtonPasswordCheck}
          />
        </InputButton>
      </InputContainer>
      {errors.passwordCheck && errors.passwordCheck.type === 'validate' && (
        <ErrorText>비밀번호가 같지 않습니다</ErrorText>
      )}

      {/* 가입하기 버튼 */}
      <ButtonJoin fontColor={setFontColor3} color={setColor3}>
        완료
      </ButtonJoin>
    </JoinForm>
  );
};

export default FindPassword;
