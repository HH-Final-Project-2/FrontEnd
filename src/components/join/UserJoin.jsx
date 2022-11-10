import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import UserJoinStyle from './UserJoinStyle.css'


const UserJoin = () => {

  const { register, watch, handleSubmit, formState: { errors } } = useForm()
  const password = useRef()
  password.current = watch('password')

  const onSubmit = (data) => {
    console.log('data', data)
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      {/* 이메일 */}
      <div>
        <label>이메일</label>
        <input name='email' type='text' placeholder='이메일 입력'
          {...register('email', { required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ })}
        />
        {
          errors.email && <p>이메일 형식이 아닙니다</p>
        }
      </div>

      {/* 비밀번호 */}
      <div>
        <label>비밀번호</label>
        <input name='password' type='password' placeholder='영문/숫자(8~20자)'
          {...register('password', {
            required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/
          })}
        />
        {
          errors.password && <p>비밀번호는 영문/숫자 8~20자</p>
        }
      </div>


      {/* 비밀번호 확인 */}
      <div>

        <input name='passwordConfirm' type='password' placeholder='비밀번호 재입력'
          {...register('passwordConfirm', {
            required: true,
            validate: (value) =>
              value === password.current
          })}
        />
        {
          errors.passwordConfirm && errors.passwordConfirm.type === 'validate'
          && <p>비밀번호가 같지 않습니다</p>
        }
      </div>


      {/* 이름 */}
      <div>
        <label>이름</label>
        <input name='userName' type='text' placeholder='이름을 입력해주세요'
          {...register('userName', { required: true, minLength: 2, maxLength: 10 })}
        />
        {
          errors.userName && errors.userName.type === 'required'
          && <p>이름을 입력해주세요</p>
        }
        {
          errors.userName && errors.userName.type === 'minLength'
          && <p>이름은 최소2~10자 입니다</p>
        }
        {
          errors.userName && errors.userName.type === 'maxLength'
          && <p>이름은 최소2~10자 입니다</p>
        }
      </div>


      {/* 닉네임 */}
      <div>
        <label>닉네임</label>
        <input name='nickName' type='text' placeholder='닉네임을 입력해주세요'
          {...register('nickName', { required: true, minLength: 2, maxLength: 15 })}
        />
        {
          errors.nickName && errors.nickName.type === 'required'
          && <p>닉네임 입력해주세요</p>
        }
        {
          errors.nickName && errors.nickName.type === 'minLength'
          && <p>닉네임은 최소2~15자 입니다</p>
        }
        {
          errors.nickName && errors.nickName.type === 'maxLength'
          && <p>닉네임은 최소2~15자 입니다</p>
        }
      </div>


      {/* 연락처 */}
      <div>
        <label>연락처</label>
        <input name='phoneNumber' type='number' placeholder='연락처를 입력해주세요'
          {...register('phoneNumber', { required: true, maxLength: 20 })}
        />
        {
          errors.phoneNumber && errors.phoneNumber.type === 'required'
          && <p>연락처를 입력해주세요</p>
        }
        {
          errors.phoneNumber && errors.phoneNumber.type === 'maxLength'
          && <p>연락처를 확인해주세요</p>
        }
      </div>


      <button>완료</button>

    </form >

  )
};

export default UserJoin


