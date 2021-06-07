import { Registered } from './index'
import { OpenrequestBox, CLoserequestBox } from '../alertbox/BeforerequestBox'

// 添加请求拦截器
Registered.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    OpenrequestBox()
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

Registered.interceptors.response.use(res => {
    CLoserequestBox()
    return res.data
})

export function isRegistered(data) {
    return Registered.post('/', data)
}

export function isSetUp(data) {
    return Registered.post('/setUp', data)
}

export function isQuit() {
    return Registered.post('/exit')
}

export function pushCard(data) {
    return Registered.post('/pushCard', data)
}

export function goEdit(data) {
    return Registered.post('/goEdit', data)
}

