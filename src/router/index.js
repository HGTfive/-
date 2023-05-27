import Vue from 'vue'
import VueRouter from 'vue-router'
import NavClassification from '../components/NavClassification'
import Phone from '../views/Phone'
import Computer from '../views/Computer'
import Storeclub from '../views/Storeclub'
import Login from '../views/Login'
import Register from '../views/Register'
import NavData from '../components/NavData'
import Shopcar from '../views/Shopcar'
import Appson from '../components/Appson'
import Mymsg from '../views/Mymsg'
import Myorder from '../views/Myorder'
import Myorderpayed from '../views/Myorderpayed'
import Myorderunpayed from '../views/Myorderunpayed'
import Detail from '../views/Detail'



Vue.use(VueRouter)




const router = new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/appson'
    },
    {
      path:'/appson',
      name:'appson',
      component:Appson
    },
    {
      path: '/nav',
      component: NavClassification,

    },
    {
      path: '/phone',
      component: Phone,
    },
    {
      path: '/computer',
      component: Computer
    },
    {
      path:'/login',
      name:'Login',
      component:()=>
      import("../views/Login")
    },
    {
      path: '/register',
      component: Register
    },
    {
      path:'/navdata',
      component:NavData
    },
    {
      path:'/shopcar',
      component:Shopcar
    },
    {
      path:'/mymsg',
      component:Mymsg
    },
    {
      path:'/myorder',
      component:Myorder,
      children:[
        {
          path:'payed',
          component:Myorderpayed
        },
        {
          path:'unpayed',
          component:Myorderunpayed
        }
      ]
    },
    {
      path:'/detail',
      component:Detail,
      name:'detail'
    
    }
    
  ],
  
})


router.beforeEach((to,from,next)=>{
  //如果有token 或者是跳转到登陆页面 我们就放行
  // 如果是没有token 我们就把他给拦下来 到登录页面

  const token = localStorage.getItem('token')
  console.log(token)
  if(to.path === '/login' || token != null || to.path === '/register' )
  {
    next()
  }
  else {
    next('/login')
}
})
 

export default router
