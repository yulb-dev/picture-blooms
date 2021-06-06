import { Details } from './index'
import { OpenrequestBox, CLoserequestBox } from '../alertbox/BeforerequestBox'

Details.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    OpenrequestBox()
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

Details.interceptors.response.use(res => {
    CLoserequestBox()
    return res.data
})

export function getMessage(id) {
    return Details.get('/getMessage', { params: { id } })
}

export function addComment(data) {
    return Details.post('/addcomment', data)
}

export function addFavorite(data) {
    return Details.post('/addfavorite', data)
}


