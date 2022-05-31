import axios from 'axios'
import { getAccessToken } from '../helpers/token'

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-type': 'application/json'
    }
})


// toda a requisição chamada ele vai setar o token de autentica
api.interceptors.request.use(async config => {
    const token = getAccessToken()

    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    return config
})

export default api



