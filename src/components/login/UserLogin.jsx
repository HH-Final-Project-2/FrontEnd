import React from 'react'
import { useForm } from 'react-hook-form'
import UserLoginStyle from './UserLoginStyle.css'
import { useNavigate } from 'react-router'

const UserLogin = () => {
  const { register, watch, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()


  const onSubmit = (data) => {
    console.log('data', data)
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      {/* 이메일 */}
      <div>
        <input name='email' type='text' placeholder='이메일 입력'
          {...register('email', { required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ })}
        />
        {
          errors.email && <p>이메일 형식이 아닙니다</p>
        }
      </div>

      {/* 비밀번호 */}
      <div>
        <input name='password' type='password' placeholder='비밀번호'
          {...register('password', {
            required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/
          })}
        />
        {
          errors.password && <p>비밀번호는 영문/숫자 8~20자</p>
        }
      </div>

      <button>로그인</button>

      <div>
        <h4 onClick={() => navigate('/join')}>회원가입</h4>
      </div>

    </form>
  )
}


export default UserLogin