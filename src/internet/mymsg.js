import { request } from "./api";
//post 我的信息
export function postmymsg(data){
    return request({
        url:'/userinfo/postmsg',
        method:'post',
        headers:{"Content-Type":"multipart/form-data"},
        data:data
        
    })
}
//拿到我的信息
export function getmymsg(){
    return request({
        url:'/userinfo/getmsg',
        method:'get'
    })
}

export function photoI(){
    return request({
        url:'user/changeAvatar',
        // method:'get'
    })
}