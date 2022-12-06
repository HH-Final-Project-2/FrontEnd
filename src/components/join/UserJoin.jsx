import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { ReactComponent as Xbutton } from "../../images/x-circle-fill.svg";
import {
  emailCheck,
  signUp,
  emailAuth,
} from "../../redux/modules/membersSlice";
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
} from "./UserJoinStyle";
import { useSelector } from "react-redux";

const UserJoin = () => {
  const [auth, setAuth] = useState("");
  const email = useSelector((state) => state.memberSlice.check);
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
  password.current = watch("password");

  // 디스패치
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 이메일,패스워드,이름,닉네임,연락처 버튼 초기값
  const [stateXButtonEmail, setStateXButtonEmail] = useState("none");
  const [stateXButtonPassword, setStateXButtonPassword] = useState("none");
  const [stateXButtonPasswordCheck, setStateXButtonPasswordCheck] =
    useState("none");
  const [stateXButtonUserName, setStateXButtonUserName] = useState("none");
  const [stateXButtonNickName, setStateXButtonNickName] = useState("none");

  // 이메일 인증버튼 비활성화
  const [disable, setDisable] = React.useState(false);

  // 이메일,패스워드,이름,닉네임,연락처 watch
  const watchForEmail = watch("email");
  const watchForPassword = watch("password");
  const watchForPasswordCheck = watch("passwordCheck");
  const watchForUserName = watch("username");
  const watchForNickName = watch("nickname");

  //인풋 값 입력시 버튼&폰트 색상 변경
  //const checkEmail = watchForEmail.length >= 1;

  let setColor = "";
  let setFontColor = "";

  // 이메일 X버튼 디스플레이
  useEffect(() => {
    if (watchForEmail === undefined) {
      setStateXButtonEmail("none");
    } else if (watchForEmail.length === 0) {
      setStateXButtonEmail("none");
    } else {
      setStateXButtonEmail("block");
    }
  });

  const xButtonEmail = () => {
    resetField("email");
    setStateXButtonEmail("none");
  };

  // 패스워드 X버튼 디스플레이
  useEffect(() => {
    if (watchForPassword === undefined) {
      setStateXButtonPassword("none");
    } else if (watchForPassword.length === 0) {
      setStateXButtonPassword("none");
    } else {
      setStateXButtonPassword("block");
    }
  });

  const xButtonPassword = () => {
    resetField("password");
    setStateXButtonEmail("none");
  };

  // 패스워드 확인 X버튼 디스플레이
  useEffect(() => {
    if (watchForPasswordCheck === undefined) {
      setStateXButtonPasswordCheck("none");
    } else if (watchForPasswordCheck.length === 0) {
      setStateXButtonPasswordCheck("none");
    } else {
      setStateXButtonPasswordCheck("block");
    }
  });

  const xButtonPasswordCheck = () => {
    resetField("passwordcheck");
    setStateXButtonEmail("none");
  };

  // 이름 확인 X버튼 디스플레이
  useEffect(() => {
    if (watchForUserName === undefined) {
      setStateXButtonUserName("none");
    } else if (watchForUserName.length === 0) {
      setStateXButtonUserName("none");
    } else {
      setStateXButtonUserName("block");
    }
  });

  const xButtonUserName = () => {
    resetField("username");
    setStateXButtonUserName("none");
  };

  // 닉네임 확인 X버튼 디스플레이
  useEffect(() => {
    if (watchForNickName === undefined) {
      setStateXButtonNickName("none");
    } else if (watchForNickName.length === 0) {
      setStateXButtonNickName("none");
    } else {
      setStateXButtonNickName("block");
    }
  });

  const xButtonNickName = () => {
    resetField("nickname");
    setStateXButtonNickName("none");
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
      ? dispatch(signUp(data))
      : alert("이메일 인증이 필요합니다");
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
      <JoinTitle>회원정보를 입력해주세요</JoinTitle>

      {/* 이메일 */}
      <EmailBox>
        <InputContainer>
          <LabelText>이메일</LabelText>
          <InputJoin2
            name="email"
            type="text"
            placeholder="이메일"
            {...register("email", {
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
          disabled={disable}
          type="button"
          onClick={() => {
            dispatch(
              emailCheck({
                email: watchForEmail,
              })
            );
          }}
        >
          인증하기
        </EmailCheckButton>
      </EmailBox>
      {errors.email && <ErrorText>이메일 형식이 아닙니다</ErrorText>}

      {/* 작업중 */}
      {email === true ? (
        <EmailBox>
          <InputContainer>
            <LabelText>이메일 인증코드</LabelText>
            <InputJoin2
              name="auth"
              type="text"
              value={auth}
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
                display={display(auth) ? "block" : "none"}
                onClick={() => setAuth("")}
              />
            </InputButtonEmail>
          </InputContainer>

          <EmailCheckButton
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
          {...register("password", {
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
          {...register("passwordCheck", {
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
      {errors.passwordCheck && errors.passwordCheck.type === "validate" && (
        <ErrorText>비밀번호가 같지 않습니다</ErrorText>
      )}

      {/* 이름 */}
      <InputContainer>
        <LabelText>이름</LabelText>
        <InputJoin
          name="username"
          type="text"
          placeholder="이름"
          {...register("username", {
            required: true,
            pattern: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
            minLength: 2,
            maxLength: 5,
          })}
        />
        <InputButton>
          <Xbutton
            width="20"
            height="20"
            fill="#BCC2CC"
            display={stateXButtonUserName}
            onClick={xButtonUserName}
          />
        </InputButton>
      </InputContainer>
      {errors.username && errors.username.type === "required" && (
        <ErrorText>이름을 입력해주세요</ErrorText>
      )}
      {errors.username && errors.username.type === "pattern" && (
        <ErrorText>이름은(한글) 최소2~5자 입니다</ErrorText>
      )}
      {errors.username && errors.username.type === "minLength" && (
        <ErrorText>이름은(한글) 최소2~5자 입니다</ErrorText>
      )}
      {errors.username && errors.username.type === "maxLength" && (
        <ErrorText>이름은(한글) 최소2~5자 입니다</ErrorText>
      )}

      {/* 닉네임 */}
      <InputContainer>
        <LabelText>닉네임</LabelText>
        <InputJoin
          name="nickname"
          type="text"
          placeholder="2~10자 이내"
          {...register("nickname", {
            required: true,
            minLength: 2,
            maxLength: 10,
          })}
        />
        <InputButton>
          <Xbutton
            width="20"
            height="20"
            fill="#BCC2CC"
            display={stateXButtonNickName}
            onClick={xButtonNickName}
          />
        </InputButton>
      </InputContainer>
      {errors.nickname && errors.nickname.type === "required" && (
        <ErrorText>닉네임 입력해주세요</ErrorText>
      )}
      {errors.nickname && errors.nickname.type === "minLength" && (
        <ErrorText>닉네임은 최소2~10자 입니다</ErrorText>
      )}
      {errors.nickname && errors.nickname.type === "maxLength" && (
        <ErrorText>닉네임은 최소2~10자 입니다</ErrorText>
      )}

      {/* 가입하기 버튼 */}
      <ButtonJoin>완료</ButtonJoin>
    </JoinForm>
  );
};
export default UserJoin;
