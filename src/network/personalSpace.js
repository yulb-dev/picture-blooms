import { PersonalSpace } from './index'
import { OpenrequestBox, CLoserequestBox } from '../alertbox/BeforerequestBox'

PersonalSpace.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    OpenrequestBox()
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

PersonalSpace.interceptors.response.use(res => {
    CLoserequestBox()
    return res.data
})

export function getUser(id) {
    return PersonalSpace.get('/', { params: { id } })
}

export function getLabelsInfo(labels) {
    return PersonalSpace.get('/getLabelsInfo', { params: { labels } })
}
