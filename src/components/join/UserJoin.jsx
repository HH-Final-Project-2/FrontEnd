import React, { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { ReactComponent as Xbutton } from '../../images/x-circle-fill.svg'
import { emailCheck, signUp } from '../../redux/modules/membersSlice'
import {
  JoinForm,
  LabelText,
  InputJoin,
  ErrorText,
  ButtonJoin,
  InputButton,
  InputContainer,
  InputButtonEmail,
  EmailBox,
  EmailCheckButton
}
  from './UserJoinStyle'

const UserJoin = () => {

  // useForm 시작
  const { register, watch, handleSubmit, resetField, formState: { errors } } = useForm()

  // 패스워드 같은지 검사
  const password = useRef()
  password.current = watch('password')

  // 디스패치
  const dispatch = useDispatch()

  // 이메일,패스워드,이름,닉네임,연락처 버튼 초기값
  const [stateXButtonEmail, setStateXButtonEmail] = useState('none')
  const [stateXButtonPassword, setStateXButtonPassword] = useState('none')
  const [stateXButtonPasswordCheck, setStateXButtonPasswordCheck] = useState('none')
  const [stateXButtonUserName, setStateXButtonUserName] = useState('none')
  const [stateXButtonNickName, setStateXButtonNickName] = useState('none')
  const [stateXButtonPhoneNumber, setStateXButtonPhoneNumber] = useState('none')

  // 이메일,패스워드,이름,닉네임,연락처 watch
  const watchForEmail = watch('email')
  const watchForPassword = watch('password')
  const watchForPasswordCheck = watch('passwordCheck')
  const watchForUserName = watch('username')
  const watchForNickName = watch('nickname')
  const watchForPhoneNumber = watch('phonenumber')

  // 이메일 X버튼 디스플레이
  useEffect(() => {
    if (watchForEmail === undefined) {
      setStateXButtonEmail('none')
    } else if (watchForEmail.length === 0) {
      setStateXButtonEmail('none')
    } else {
      setStateXButtonEmail('block')
    }
  })

  const xButtonEmail = () => {
    resetField('email')
    setStateXButtonEmail('none');
  }

  // 패스워드 X버튼 디스플레이
  useEffect(() => {
    if (watchForPassword === undefined) {
      setStateXButtonPassword('none')
    } else if (watchForPassword.length === 0) {
      setStateXButtonPassword('none')
    } else {
      setStateXButtonPassword('block')
    }
  })

  const xButtonPassword = () => {
    resetField('password')
    setStateXButtonEmail('none');
  }

  // 패스워드 확인 X버튼 디스플레이
  useEffect(() => {
    if (watchForPasswordCheck === undefined) {
      setStateXButtonPasswordCheck('none')
    } else if (watchForPasswordCheck.length === 0) {
      setStateXButtonPasswordCheck('none')
    } else {
      setStateXButtonPasswordCheck('block')
    }
  })

  const xButtonPasswordCheck = () => {
    resetField('passwordcheck')
    setStateXButtonEmail('none');
  }

  // 이름 확인 X버튼 디스플레이
  useEffect(() => {
    if (watchForUserName === undefined) {
      setStateXButtonUserName('none')
    } else if (watchForUserName.length === 0) {
      setStateXButtonUserName('none')
    } else {
      setStateXButtonUserName('block')
    }
  })

  const xButtonUserName = () => {
    resetField('username')
    setStateXButtonUserName('none');
  }

  // 닉네임 확인 X버튼 디스플레이
  useEffect(() => {
    if (watchForNickName === undefined) {
      setStateXButtonNickName('none')
    } else if (watchForNickName.length === 0) {
      setStateXButtonNickName('none')
    } else {
      setStateXButtonNickName('block')
    }
  })

  const xButtonNickName = () => {
    resetField('nickname')
    setStateXButtonNickName('none');
  }

  // 연락처 확인 X버튼 디스플레이
  useEffect(() => {
    if (watchForPhoneNumber === undefined) {
      setStateXButtonPhoneNumber('none')
    } else if (watchForPhoneNumber.length === 0) {
      setStateXButtonPhoneNumber('none')
    } else {
      setStateXButtonPhoneNumber('block')
    }
  })

  const xButtonPhoneNumber = () => {
    resetField('phonenumber')
    setStateXButtonPhoneNumber('none');
  }

  // 폼 데이터 전송
  const onSubmit = (data) => {
    dispatch(signUp(data))
  }
  return (

    <JoinForm onSubmit={handleSubmit(onSubmit)}>
      {/* 이메일 */}
      <EmailBox>
        <InputContainer>
          <LabelText>이메일</LabelText>
          <InputJoin name='email' type='text' placeholder='이메일 입력'
            {...register('email',
              {
                required: true,
                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
              }
            )}
          />
          <InputButtonEmail>
            <Xbutton
              width="20"
              height="20"
              fill="#e2e2e2"
              display={stateXButtonEmail}
              onClick={xButtonEmail}
            />
          </InputButtonEmail>
        </InputContainer>
        <EmailCheckButton type='button' onClick={() => {
          dispatch(emailCheck(
            {
              email: watchForEmail
            }
          ))
        }}>중복확인</EmailCheckButton>
      </EmailBox>
      {
        errors.email && <ErrorText>이메일 형식이 아닙니다</ErrorText>
      }

      {/* 비밀번호 */}
      <InputContainer>
        <LabelText>비밀번호</LabelText>
        <InputJoin name='password' type='password' placeholder='영문/숫자(8~20자)'
          {...register('password',
            {
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/
            })}
        />
        <InputButton>
          <Xbutton
            width="20"
            height="20"
            fill="#e2e2e2"
            display={stateXButtonPassword}
            onClick={xButtonPassword}
          />
        </InputButton>
      </InputContainer>
      {
        errors.password && <ErrorText>비밀번호는 영문/숫자 6~15자</ErrorText>
      }

      {/* 비밀번호 확인 */}
      <InputContainer>
        <InputJoin name='passwordCheck' type='password' placeholder='비밀번호 재입력'
          {...register('passwordCheck',
            {
              required: true,
              validate: (value) =>
                value === password.current
            })}
        />
        <InputButton>
          <Xbutton
            width="20"
            height="20"
            fill="#e2e2e2"
            display={stateXButtonPasswordCheck}
            onClick={xButtonPasswordCheck}
          />
        </InputButton>
      </InputContainer>
      {
        errors.passwordcheck
        && errors.passwordcheck.type === 'validate'
        && <ErrorText>비밀번호가 같지 않습니다</ErrorText>
      }

      {/* 이름 */}
      <InputContainer>
        <LabelText>이름</LabelText>
        <InputJoin name='username' type='text' placeholder='이름을 입력해주세요'
          {...register('username',
            {
              required: true,
              minLength: 2,
              maxLength: 5
            })}
        />
        <InputButton>
          <Xbutton
            width="20"
            height="20"
            fill="#e2e2e2"
            display={stateXButtonUserName}
            onClick={xButtonUserName}
          />
        </InputButton>
      </InputContainer>
      {
        errors.username && errors.username.type === 'required'
        && <ErrorText>이름을 입력해주세요</ErrorText>
      }
      {
        errors.username && errors.username.type === 'minLength'
        && <ErrorText>이름은 최소2~5자 입니다</ErrorText>
      }
      {
        errors.username && errors.username.type === 'maxLength'
        && <ErrorText>이름은 최소2~5자 입니다</ErrorText>
      }

      {/* 닉네임 */}
      <InputContainer>
        <LabelText>닉네임</LabelText>
        <InputJoin name='nickname' type='text' placeholder='닉네임을 입력해주세요'
          {...register('nickname',
            {
              required: true,
              minLength: 2,
              maxLength: 15
            })}
        />
        <InputButton>
          <Xbutton
            width="20"
            height="20"
            fill="#e2e2e2"
            display={stateXButtonNickName}
            onClick={xButtonNickName}
          />
        </InputButton>
      </InputContainer>
      {
        errors.nickname && errors.nickname.type === 'required'
        && <ErrorText>닉네임 입력해주세요</ErrorText>
      }
      {
        errors.nickname && errors.nickname.type === 'minLength'
        && <ErrorText>닉네임은 최소2~15자 입니다</ErrorText>
      }
      {
        errors.nickname && errors.nickname.type === 'maxLength'
        && <ErrorText>닉네임은 최소2~15자 입니다</ErrorText>
      }

      {/* 연락처 */}
      {/* <InputContainer>
        <LabelText>연락처</LabelText>
        <InputJoin name='phonenumber' type='text' placeholder='연락처를 입력해주세요'
          {...register('phonenumber',
            {
              required: true,
              maxLength: 20
            })}
        />
        <InputButton>
          <Xbutton
            width="20"
            height="20"
            fill="#e2e2e2"
            display={stateXButtonPhoneNumber}
            onClick={xButtonPhoneNumber}
          />
        </InputButton>
      </InputContainer>
      {
        errors.phonenumber && errors.phonenumber.type === 'required'
        && <ErrorText>연락처를 입력해주세요</ErrorText>
      }
      {
        errors.phonenumber && errors.phonenumber.type === 'maxLength'
        && <ErrorText>연락처를 확인해주세요</ErrorText>
      } */}

      {/* 가입하기 버튼 */}
      <ButtonJoin>완료</ButtonJoin>
    </JoinForm >
  )
};
export default UserJoin