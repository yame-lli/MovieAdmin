import axios from 'axios'

const serve  = axios.create({
    baseURL: '/api',
    timeout: 1000,
})

export default serve