import request from '@/util/request.js'

export function get_err(obj) {
    return request ({
        url: '/app1/err'+obj,
        method: 'get',
        params: ''
    })
}

export function patch_err(obj) {
    return request({
        url: '/app1/err',
        method: 'patch',
        data: obj
    })
}





export function get_merchants() {
    return request({  //利用我们封装好的request发送请求
        url: '/home/merchants',//请求地址 已经去除前面request中baseUrl相同的内容
        method: 'get',//请求方法
        data: ''//向后端传递数据
    })
}