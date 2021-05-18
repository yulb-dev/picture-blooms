import { Registered } from './index'

Registered.interceptors.response.use(res => {
    return res.data
})

export function isRegistered(data) {
    return Registered.post('/', data)
}
