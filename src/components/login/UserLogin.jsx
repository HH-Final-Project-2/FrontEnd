import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { signIn } from '../../redux/modules/membersSlice'

import {
  JoinForm,
  InputJoin,
  ErrorText,
  ButtonJoin,
  InputContainer,
  SignUpBox
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

      {/* 이메일 */}
      <InputContainer>
        <InputJoin name='email' type='text' placeholder='이메일 입력'
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
            required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/
          })}
        />
      </InputContainer>
      {
        errors.password && <ErrorText>비밀번호는 영문/숫자 8~20자</ErrorText>
      }
      <ButtonJoin>로그인</ButtonJoin>

      {/* 회원가입 이동 */}
      <SignUpBox>
        <h4 onClick={() => navigate('/join')}>회원가입</h4>
      </SignUpBox>

    </JoinForm>
  )
}
export default UserLogin