import { request } from "./api";

export function requestShow(type){
    return request({
        url:'/usergoods/goodsmsg',
        method:"get",
        params:{
            type,
        }
    })
}