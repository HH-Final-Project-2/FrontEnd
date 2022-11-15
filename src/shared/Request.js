import axios from 'axios';

const instanceJSon = axios.create({
  baseURL: 'http://43.201.105.12 ',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instanceJSon;
