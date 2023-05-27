import { request } from "./api";

export function postregister(data){
    return request({
        url:'user/register',
        method:'post',
        data:data
    })
}