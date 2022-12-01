import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { signIn } from '../../redux/modules/membersSlice'
import logo from '../../images/login-logo.png'

import {
  JoinForm,
  InputJoin,
  ErrorText,
  ButtonJoin,
  InputContainer,
  SignUpBox,
  LogoBox
}
  from './UserLoginStyle'

const UserLogin = () => {
  const { register, watch, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(signIn(data))
  }
  return (

    <JoinForm onSubmit={handleSubmit(onSubmit)}>
      <LogoBox>
        <img src={logo} />
      </LogoBox>
      {/* 이메일 */}
      <InputContainer>
        <InputJoin name='email' type='text' placeholder='이메일'
          {...register('email', { required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ })}
        />
      </InputContainer>
      {
        errors.email && <ErrorText>이메일 형식이 아닙니다</ErrorText>
      }

      {/* 비밀번호 */}
      <InputContainer>
        <InputJoin name='password' type='password' placeholder='비밀번호'
          {...register('password', {
            required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/
          })}
        />
      </InputContainer>
      {
        errors.password && <ErrorText>비밀번호는 영문/숫자 6~15자</ErrorText>
      }
      <ButtonJoin>로그인</ButtonJoin>
      <ButtonJoin type='button'>카카오로 시작하기</ButtonJoin>

      {/* 회원가입 이동 */}
      <SignUpBox>
        <p onClick={() => navigate('/join')}>회원가입</p>
      </SignUpBox>

    </JoinForm>
  )
}
export default UserLogin