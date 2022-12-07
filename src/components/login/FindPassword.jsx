// import React from "react";

// const FindPassword = () => {
//   return (
//     <JoinForm onSubmit={handleSubmit(onSubmit)}>
//       {/* 뒤로가기 */}
//       <Section1 onClick={() => navigate(-1)}>
//         <Section2>
//           <svg
//             width="10"
//             height="17"
//             viewBox="0 0 10 17"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
//           </svg>
//         </Section2>
//       </Section1>

//       {/* 회원가입 제목 */}
//       <JoinTitle>회원정보를 입력해주세요</JoinTitle>

//       {/* 이메일 */}
//       <EmailBox>
//         <InputContainer>
//           <LabelText>이메일</LabelText>
//           <InputJoin2
//             name="email"
//             type="text"
//             placeholder="이메일"
//             {...register("email", {
//               required: true,
//               pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//             })}
//           />
//           <InputButtonEmail>
//             <Xbutton
//               width="20"
//               height="20"
//               fill="#BCC2CC"
//               display={stateXButtonEmail}
//               onClick={xButtonEmail}
//             />
//           </InputButtonEmail>
//         </InputContainer>
//         <EmailCheckButton
//           fontColor={setFontColor} color={setColor}
//           disabled={disable}
//           type="button"
//           onClick={() => {
//             dispatch(
//               emailCheck({
//                 email: watchForEmail,
//               })
//             );
//           }}
//         >
//           인증하기
//         </EmailCheckButton>
//       </EmailBox>
//       {errors.email && <ErrorText>이메일 형식이 아닙니다</ErrorText>}

//       {email === true ? (
//         <EmailBox>
//           <InputContainer>
//             <LabelText>이메일 인증코드</LabelText>
//             <InputJoin2
//               name="auth"
//               type="text"
//               value={auth}
//               placeholder="인증번호를 입력하세요"
//               onChange={(e) => {
//                 setAuth(e.target.value);
//               }}
//             />
//             <InputButtonEmail>
//               <Xbutton
//                 width="20"
//                 height="20"
//                 fill="#BCC2CC"
//                 display={display(auth) ? "block" : "none"}
//                 onClick={() => setAuth("")}
//               />
//             </InputButtonEmail>
//           </InputContainer>

//           <EmailCheckButton
//             fontColor={setFontColor2} color={setColor2}
//             type="button"
//             disabled={disable}
//             onClick={() => {
//               dispatch(
//                 emailAuth({
//                   email: watchForEmail,
//                   code: auth,
//                 })
//               );
//               setDisable(true);
//             }}
//           >
//             인증하기
//           </EmailCheckButton>
//         </EmailBox>
//       ) : null}

//       {/* 비밀번호 */}
//       <InputContainer>
//         <LabelText>비밀번호</LabelText>
//         <InputJoin
//           name="password"
//           type="password"
//           placeholder="6~15자, 영문, 숫자"
//           {...register("password", {
//             required: true,
//             pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/,
//           })}
//         />
//         <InputButton>
//           <Xbutton
//             width="20"
//             height="20"
//             fill="#BCC2CC"
//             display={stateXButtonPassword}
//             onClick={xButtonPassword}
//           />
//         </InputButton>
//       </InputContainer>
//       {errors.password && <ErrorText>비밀번호는 영문,숫자 6~15자</ErrorText>}

//       {/* 비밀번호 확인 */}
//       <InputContainer>
//         <InputJoin
//           name="passwordCheck"
//           type="password"
//           placeholder="비밀번호를 한번 더 입력해주세요"
//           {...register("passwordCheck", {
//             required: true,
//             validate: (value) => value === password.current,
//           })}
//         />
//         <InputButton>
//           <Xbutton
//             width="20"
//             height="20"
//             fill="#BCC2CC"
//             display={stateXButtonPasswordCheck}
//             onClick={xButtonPasswordCheck}
//           />
//         </InputButton>
//       </InputContainer>
//       {errors.passwordCheck && errors.passwordCheck.type === "validate" && (
//         <ErrorText>비밀번호가 같지 않습니다</ErrorText>
//       )}

//       {/* 이름 */}
//       <InputContainer>
//         <LabelText>이름</LabelText>
//         <InputJoin
//           name="username"
//           type="text"
//           placeholder="이름"
//           {...register("username", {
//             required: true,
//             pattern: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
//             minLength: 2,
//             maxLength: 5,
//           })}
//         />
//         <InputButton>
//           <Xbutton
//             width="20"
//             height="20"
//             fill="#BCC2CC"
//             display={stateXButtonUserName}
//             onClick={xButtonUserName}
//           />
//         </InputButton>
//       </InputContainer>
//       {errors.username && errors.username.type === "required" && (
//         <ErrorText>이름을 입력해주세요</ErrorText>
//       )}
//       {errors.username && errors.username.type === "pattern" && (
//         <ErrorText>이름은(한글) 최소2~5자 입니다</ErrorText>
//       )}
//       {errors.username && errors.username.type === "minLength" && (
//         <ErrorText>이름은(한글) 최소2~5자 입니다</ErrorText>
//       )}
//       {errors.username && errors.username.type === "maxLength" && (
//         <ErrorText>이름은(한글) 최소2~5자 입니다</ErrorText>
//       )}

//       {/* 닉네임 */}
//       <InputContainer>
//         <LabelText>닉네임</LabelText>
//         <InputJoin
//           name="nickname"
//           type="text"
//           placeholder="2~10자 이내"
//           {...register("nickname", {
//             required: true,
//             minLength: 2,
//             maxLength: 10,
//           })}
//         />
//         <InputButton>
//           <Xbutton
//             width="20"
//             height="20"
//             fill="#BCC2CC"
//             display={stateXButtonNickName}
//             onClick={xButtonNickName}
//           />
//         </InputButton>
//       </InputContainer>
//       {errors.nickname && errors.nickname.type === "required" && (
//         <ErrorText>닉네임 입력해주세요</ErrorText>
//       )}
//       {errors.nickname && errors.nickname.type === "minLength" && (
//         <ErrorText>닉네임은 최소2~10자 입니다</ErrorText>
//       )}
//       {errors.nickname && errors.nickname.type === "maxLength" && (
//         <ErrorText>닉네임은 최소2~10자 입니다</ErrorText>
//       )}

//       {/* 가입하기 버튼 */}
//       <ButtonJoin fontColor={setFontColor3} color={setColor3}>완료</ButtonJoin>
//     </JoinForm>
//   )
// };

// export default FindPassword;
