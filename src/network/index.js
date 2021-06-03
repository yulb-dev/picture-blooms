import axios from 'axios'

const port = 'http://localhost:6060'

const CardListReq = axios.create({
    baseURL: port + '/home',
    withCredentials: true
});

const mySelf = axios.create({
    baseURL: port + '/mySelf',
    withCredentials: true,
});

//注册页面
const Registered = axios.create({
    baseURL: port + '/registered',
    withCredentials: true,
    headers: { 'Content-Type': 'multipart/form-data' },
});

//登录页面
const Login = axios.create({
    baseURL: port + '/login',
    withCredentials: true,
});

const Details = axios.create({
    baseURL: port + '/details',
    withCredentials: true,
});

const PersonalSpace = axios.create({
    baseURL: port + '/personalSpace',
    withCredentials: true,
});

export { CardListReq, mySelf, Registered, Login, Details, PersonalSpace }