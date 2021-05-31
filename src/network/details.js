import { Details } from './index'

Details.interceptors.response.use(res => {
    return res.data
})

export function getMessage(id) {
    return Details.get('/getMessage', { params: { id } })
}

export function addComment(data) {
    return Details.post('/addcomment', data)
}

export function getcomment(id) {
    return Details.get('/getcomment', { params: { id } })
}

export function addFavorite(data) {
    return Details.post('/addfavorite', data)
}


