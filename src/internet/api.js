// import router from '@/router'
import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'

export function request(config){

    const instance = axios.create({
        // baseURL:'http://47.103.198.84:8090/ems',
        baseURL:'http://127.0.0.1:8088/api',  
        timeout:5000,
        headers:{
            token:'',
            
        }
    })

    instance.interceptors.request.use(config=>{
        // 请求之前 我们统一就为这个config 设置一个token 
        // console.log(config.headers.Authrization)
        // const headers = config.headers;
        let token = localStorage.getItem('token');
        console.log(token);
        // console.log(headers)
        // config.headers.common['Authorization'] = token;
        config.headers.Authorization=token;
        console.log('请求成功')
        console.log(config)
        return config
    },
    err=>{
        console.log(err + '请求失败')
    })


    instance.interceptors.response.use(res=>{
        console.log('成功响应拦截 ')
        console.log(res)
        if(res.data.status==-1)
        {
            // $message("登录失效！")
            // console.log(this)
            alert('登录失效')
            // token = " ";
            router.push('/login')
            // this.$router.push('/login')
        }
        return res
    },err=>{
        console.log(err)
        console.log('lanjieshibai')
    })


    return instance(config)
}
