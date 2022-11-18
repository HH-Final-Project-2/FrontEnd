import axios from 'axios';

const instanceJSon = axios.create({
  baseURL: 'https://yusung.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instanceJSon;
