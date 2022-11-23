import axios from "axios";

// const authorization = localStorage.getItem('authorization')
// const refreshToken = localStorage.getItem('refresh-Token')

// axios.defaults.headers.common["authorization"] = `${authorization}`;
// axios.defaults.headers.common["refresh-Token"] = `${refreshToken}`;

const instance = axios.create({
  baseURL: "https://bkyungkeem.shop",
  headers: {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("authorization"),
    "refresh-Token": localStorage.getItem("refresh-Token"),
  },
});

export default instance;
