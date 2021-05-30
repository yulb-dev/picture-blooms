import { Details } from './index'

Details.interceptors.response.use(res => {
    return res.data
})

export function addComment(data) {
    return Details.post('/addcomment', data)
}

export function getcomment(id) {
    return Details.get('/getcomment', { params: { id } })
}


