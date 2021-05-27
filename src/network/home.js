import { CardListReq } from './index'

CardListReq.interceptors.response.use(res => {
    return res.data
})

export function getCardList(page) {
    return CardListReq.get('/cardList', { params: { page } })
}

export function isRefresh() {
    return CardListReq.get('/isRefresh')
}

export function getUserMessage(id) {
    return CardListReq.get('/userMessage', { params: { id } })
}