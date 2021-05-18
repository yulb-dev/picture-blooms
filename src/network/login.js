import { Login } from './index'

Login.interceptors.response.use(res => {
    return res.data
})

export function isLogin(data) {
    return Login.post('/', data)
}

