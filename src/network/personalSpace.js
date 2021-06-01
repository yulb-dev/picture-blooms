import { PersonalSpace } from './index'

PersonalSpace.interceptors.response.use(res => {
    return res.data
})

export function getUser(id) {
    return PersonalSpace.get('/', { params: { id } })
}
