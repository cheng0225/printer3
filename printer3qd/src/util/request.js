import axios from 'axios'


//  axios配置  拦截配置  请求拦截和响应拦截

const server = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 6000,
    headers:{}
})

server.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

server.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)

export default server
