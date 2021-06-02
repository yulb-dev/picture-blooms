import { Login } from './index'
import { OpenrequestBox, CLoserequestBox } from '../alertbox/BeforerequestBox'

Login.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    OpenrequestBox()
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


Login.interceptors.response.use(res => {
    CLoserequestBox()
    return res.data
})

export function isLogin(data) {
    return Login.post('/', data)
}

