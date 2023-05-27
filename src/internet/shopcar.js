import { request } from "./api";
//拿到购物车里面的数据
export function requestShopcar(){
    return request({
        method:"get",
        url:'/shop/getCart'
    })
}

//添加到购物车
export function requestShopcarP(id,number){
    return request({
        url:'/shop/putCart',
        method:'post',
        params:{
            id,
            number
        }
    })
}

export function requestShopcarD(id){
    return request({
        url:'/shop/delgoods',
        method:'post',
        data:{
            id
            
        }
    })
}

export function update(pid,number){
    return request({
        url:'/cart/updateNumber',
        method:'post'
    })
}