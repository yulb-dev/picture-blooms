import { Registered } from './index'

Registered.interceptors.response.use(res => {
    return res.data
})

export function isRegistered(data) {
    return Registered.post('/', data)
}

export function isSetUp(data) {
    return Registered.post('/setUp', data)
}

export function isQuit() {
    return Registered.post('/exit')
}

export function pushCard(data) {
    return Registered.post('/pushCard', data)
}

