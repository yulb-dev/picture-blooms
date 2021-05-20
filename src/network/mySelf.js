import { mySelf } from './index'

mySelf.interceptors.response.use(res => {
    return res.data
})

export function getUser() {
    return mySelf.get('/')
}

export function isRefresh() {
    return mySelf.get('/isRefresh')
}

export function getCard(id) {
    return mySelf.get('/getCard', { params: { id } })
}

export function delFavorite(data) {
    return mySelf.get('/delFavorite', { params: data })
}