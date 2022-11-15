import axios from "axios";
// import { Cookies } from "react-cookie";

// //요청에 credential 정보 담아서 보낼지
// //쿠키를 첨부해 보내거나 헤더에 authorization 요청 있을 때

// const access_token = new Cookies().get("access_token");
// const refresh_token = new Cookies().get("refresh_token");

// axios.defaults.headers.common['Authorization'] = `${access_token}`
// axios.defaults.headers.common['refresh_token'] = `${refresh_token}`

const instanceJSon = axios.create({
baseURL: "http://localhost:3001",
headers: {
'Content-Type': 'application/json',
}
});

// const instanceForm = axios.create({
//   baseURL: "http://week3-board.herokuapp.com/",
//   headers: {
//   'Content-Type': 'multipart/form-data',
//   }
//   });
  

export default instanceJSon;