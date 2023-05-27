import {request} from './api'

export function requestLogin(data){
    return request({
        url:'/user/login',
        method:'post',
        data:data,
        
    })
}