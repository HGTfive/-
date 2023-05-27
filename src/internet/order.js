import { request } from "./api";
//get 已支付订单
export function getPayed(){
    return request({
        url:'/order/getpayed',
        method:'get',
        
    })
}
// get 未支付订单
export function getunPayed(){
    return request({
        url:'/order/getunpayed',
        method:'get',
    })
}
// post已经支付订单
export function postPayed(id){
    return request({
        url:'order/payed',
        method:'post',
        params:{
            id
        }
    })
}
//删除已支付
export function delPayed(id){
    return request({
        url:'/order/delpayed',
        method:'post',
        data:{
            id
        }
    })
}
//删除未支付
export function delunPayed(id){
    return request({
        url:'/order/delunpayed',
        method:'post',
        data:{
            id
        }
    })
}
//post 未支付
export function postunPayed(id){
    return request({
        url:'/order/postunpayed',
        method:'post',
        data:{
            id
        }
    })
}


