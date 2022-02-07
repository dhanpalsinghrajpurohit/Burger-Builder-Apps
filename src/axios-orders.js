import axios from 'axios';

const instance = axios.create({
    baseURL:  'https://my-burger-21256-default-rtdb.firebaseio.com/'
});

export default instance;