
# [Businus] 직장인을위한 명함·일정 관리

## 🎉 Businus 소개

### 명함·일정관리 한번에 어렵다면?
![배2](https://user-images.githubusercontent.com/80233565/207816259-4a163362-0aee-4403-8d6f-6a049b169c39.png)

👉 직장에서 만난 사람들의 연락처를 따로 관리하고 싶다면 ! </br>
👉 계속해서 쌓이는 명함들 어떻게 관리할지 고민 된다면 ! </br>
👉 커뮤니트를 통해 다양한 직군에 대해 궁금증을 해결하고 싶다면 ! </br>

- 이제 비지너스로 스마트하고 간편하게 관리해보세요.

### 🌎 링크 [비지너스 바로가기](https://www.businus2.com)


<br>

## ✏목차 | Contents
1. [개발기간](#-개발기간)
2. [아키텍쳐](#-아키텍쳐)
3. [주요 기능](#-주요-기능)
4. [개발환경](#-개발환경)
5. [ERD](#-erd)
6. [트러블 슈팅](#-트러블-슈팅)
7. [팀원](#-팀원)

<br>



## ⌚ 개발기간
2022.11.04 ~ 2022.12.16 (6주간)

<br>

## 🛠 아키텍쳐
![아키텍처](https://user-images.githubusercontent.com/80233565/207819747-936b4d0c-5221-4d5b-950b-7ae2095f2420.JPG)


## ⚔ 주요 기능
### FE
- 소셜 로그인 (카카오)
- 명함 관리
- 내 일정 관리
- 실시간 1:1 채팅
- 커뮤니티 게시판
- 내 명함 및 프로필 관리

### BE
-
-
-


## ⛏ 개발환경

<img  src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white">
<img  src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
<img  src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img  src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img  src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
<img  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
<img  src="https://img.shields.io/badge/KAKAO DEVELOPERS-FFCD00?style=for-the-badge&logo=KAKAO&logoColor=black">
<img  src="https://img.shields.io/badge/STOMP-blue?style=for-the-badge&logo=StompJs&logoColor=white">
<img  src="https://img.shields.io/badge/SOCKJS-navy?style=for-the-badge&logo=sockJS&logoColor=white">
<img  src="https://img.shields.io/badge/AWS Amplify-FF9900?style=for-the-badge&logo=AWS Amplify&logoColor=white">
<img  src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">
<img  src="https://img.shields.io/badge/Route53-FF9900?style=for-the-badge&logo=Route53&logoColor=white">
<img  src="https://img.shields.io/badge/SSL-006600?style=for-the-badge&logo=white">
<img  src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
<img  src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white">
<img  src="https://img.shields.io/badge/Spring Batch-6DB33F?style=for-the-badge&logo=white">
<img  src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white">
<img  src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white">
<img  src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white">
<img  src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white">
<img  src="https://img.shields.io/badge/OCR-099DFD?style=for-the-badge&logo=S&logoColor=white">
<img  src="https://img.shields.io/badge/Cloud Vision API-4285F4?style=for-the-badge&logo=S&logoColor=white">
<img  src="https://img.shields.io/badge/Google Storage-4285F4?style=for-the-badge&logo=Google&logoColor=white">
<img  src="https://img.shields.io/badge/JPA-0ABF53?style=for-the-badge&logo=S&logoColor=white">
<img  src="https://img.shields.io/badge/AWS Rds-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white">
<img  src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
<img  src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=GitHub&logoColor=white">
     

    

<br>

## 🔑 ERD 
## ![erd](https://user-images.githubusercontent.com/80233565/207846959-056e718d-f33c-4038-aec3-2146f9dc8e87.JPG)

<br>


## 🛠 트러블 슈팅
<details>
<summary>(FE) 화면 새로고침이나 전환 시 랜더링 이슈</summary>
<div markdown="1"></br>
<span style="color:Red"> <b>이슈 사항</b></span></br>
1.페이지 렌더링시 useSelector로 불러오는 값이 undefined, map함수를 사용해 화면에 보여주는 경우 에러가 발생
</br></br>
<span style="color:Red"> <b>문제 해결</b></span></br>
1.initialState 기본 값 설정</br>
2.삼항연사자 혹은 if문으로 undefined일 때의 조건을 걸어줌</br>

![트러블슈팅1](https://user-images.githubusercontent.com/80233565/207854388-39466131-68cc-40f2-90e8-179e5f8b2327.JPG)</br>
3.reducer에서 서버와 통신 후에 fulfill되는 data형태 확인 </br>
![트러블슈팅1-1](https://user-images.githubusercontent.com/80233565/207853952-322aa604-570d-42f3-af37-1186ab3d821a.JPG)

</div>
</details>

<details>
<summary>(FE) 커뮤니티 렌더링 이슈</summary>
<div markdown="2"></br>
<span style="color:Red"> <b>이슈 사항</b></span></br>
1.게시글 등록/수정/삭제시 화면에 바로 렌더링 되지 않는 이슈</br>
2.커뮤니티 상세조회 후 뒤로가기를 눌렀을 때 화면에 불필요한 내용들이 잠깐 렌더링 되는 이슈
</br></br>
<span style="color:Red"> <b>문제 해결</b></span>
</br>
1.initialState의 isLoading과 useEffect를 활용</br>
2.loading이라는 상태를 만들고 상태변경시 LoadingPage를 return </br>

![트러블슈팅2](https://user-images.githubusercontent.com/80233565/207856899-47122276-3832-49ba-a165-2a2f26425e67.JPG)


</div>
</details>

<details>
<summary>(FE) InvalidStateError: The connection has not been established yet </summary>
<div markdown="3"></br>
<span style="color:Red"> <b>이슈 사항</b></span></br>
1.게시글에서 채팅페이지로 이동 후 websocket connect보다 subscribe가 먼저 진행되는 이슈가 발생하여 TypeError도 함께 발생하였다.</br>
</br>
<span style="color:Red"> <b>문제 해결</b></span></br>
1.웹소켓 커넥션 상태를 이용해 웹소켓의 상태가 1일 경우 즉 연결이 성립되고 통신중인 상태일 때 subscribe가 실행되도 구독이 되도록 해보았지만 변함은 없었다.</br>
2.페이지 이동후 마운트 될 때 connect보다 subscirbe가 나중에 진행되도록 setTimeout을 설정하여 해결</br>
  (navigate를 먼저 할당하여 해결이 가능하지만 안정적인 작동을 위해 setTimeout 지정)</br>
![트러블3](https://user-images.githubusercontent.com/80233565/207860453-e387c826-75c7-4ac6-b19c-5d445b8ca162.JPG)


</div>

</details>





## 🤸🏻‍ 팀원

| 김석재 | 김승재  | 홍마로  | 황대연 | 김보경 | 서병범 | 정유성 | 최예빈 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| FE(리더) | FE | FE | FE | BE(부리더) | BE | BE | DESIGNER |
| [🔗](https://github.com/ssssssg-hub) |[🔗](https://github.com/andamiro98) |[🔗](https://github.com/formaro) |[🔗](https://github.com/dyhwnag) |[🔗](https://github.com/kimbokyung1220) | [🔗](https://github.com/ByeongbumSeo)| [🔗](https://github.com/yusung4612) | [🔗](https://github.com/HH-Final-Project-2) |



