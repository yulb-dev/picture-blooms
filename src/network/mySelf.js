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
    return mySelf.post('/delFavorite', data)
}

export function getDynamic(id) {
    return mySelf.get('/dynamic', { params: { id } })
}

export function getIdol(id) {
    return mySelf.get('/idol', { params: { id } })
}

export function delIdol(data) {
    return mySelf.get('/delIdol', { params: data })
}

export function pushIdol(data) {
    return mySelf.get('/pushIdol', { params: data })
}

export function pullDynamic(id) {
    return mySelf.get('/pullDynamic', { params: { id } })
}