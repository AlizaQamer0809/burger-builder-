import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-80d75-default-rtdb.firebaseio.com/'
});

export default instance;