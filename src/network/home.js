import { CardListReq } from './index'

CardListReq.interceptors.response.use(res => {
    return res.data
})

export function getCardList(page) {
    return CardListReq.get('/cardList', { params: { page } })
}