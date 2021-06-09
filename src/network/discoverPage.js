import { DiscoverPage } from './index'
import { OpenrequestBox, CLoserequestBox } from '../alertbox/BeforerequestBox'

DiscoverPage.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    OpenrequestBox()
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

DiscoverPage.interceptors.response.use(res => {
    CLoserequestBox()
    return res.data
})

// /discoverPage
export function getDiscoverPage(page) {
    return DiscoverPage.get('/')
}

export function getUser(name) {
    return DiscoverPage.get('/getUser', { params: { name } })
}
