import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bkyungkeem.shop',
  headers: {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('authorization'),
    'refresh-Token': localStorage.getItem('refresh-Token'),
    // 'Content-Type': 'application/json',
    // authorization: getCookie('authorization'),
    // 'refresh-Token': getCookie('refresh-Token'),

  },
});

export default instance;
