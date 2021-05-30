import axios from 'axios'

const port = 'http://localhost:6060'

const CardListReq = axios.create({
    baseURL: port + '/home',
    timeout: 1000,
    withCredentials: true
});

const mySelf = axios.create({
    baseURL: port + '/mySelf',
    timeout: 1000,
    withCredentials: true,
});

//注册页面
const Registered = axios.create({
    baseURL: port + '/registered',
    timeout: 1000,
    withCredentials: true,
    headers: { 'Content-Type': 'multipart/form-data' },
});

//登录页面
const Login = axios.create({
    baseURL: port + '/login',
    timeout: 1000,
    withCredentials: true,
});

const Details = axios.create({
    baseURL: port + '/details',
    timeout: 1000,
    withCredentials: true,
});

export { CardListReq, mySelf, Registered, Login, Details }