import { request } from "./api";

export function getdetail(id){
    return request({
        url:'/shop/getDetail',
        method:"get",
        params:{
            id
        }
    })
}