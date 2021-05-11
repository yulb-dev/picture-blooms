import axios from 'axios'

const port = 'http://localhost:6060'

const CardListReq = axios.create({
    baseURL: port + '/home',
    timeout: 1000,
});

const category = axios.create({
    baseURL: port + '/category',
    timeout: 1000,
    withCredentials: true
});

const catePage = axios.create({
    baseURL: port,
    method: 'post'
})

const detail = axios.create({
    baseURL: port,
})

const favorites = axios.create({
    baseURL: port + '/favorites',
})

const login = axios.create({
    baseURL: port + '/login',
    method: 'post',
    withCredentials: true
})

const recommend = axios.create({
    baseURL: port + '/recommend',
    timeout: 5000,
    withCredentials: true
})

const search = axios.create({
    baseURL: port + '/search'
})

const settingsPage = axios.create({
    baseURL: port + '/settingsPage',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
})

const routerReq = axios.create({
    baseURL: port + '/home',
    timeout: 1000,
    withCredentials: true
})

export { CardListReq, category, catePage, detail, favorites, login, recommend, search, settingsPage, routerReq }