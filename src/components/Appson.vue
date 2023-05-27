<template>
  <div id="appson">
    <AutoServe></AutoServe>
    <!-- <store-club ></store-club> -->
    <!-- <router-view></router-view> -->
    <!-- <StoreClub></StoreClub> -->
    <Storeclub   ></Storeclub>
  </div>
</template>


<script> 
// import NavClassification from './NavClassification.vue'
import AutoServe from './AutoServe'
// import Detail from '../views/Detail.vue'
// import NavData from './NavData.vue'

// import Storeclub from '../views/Storeclub.vue'
// import Storeclub from '../views/Storeclub.vue'

// import Storeclub from '../views/Storeclub.vue'
// import Storeclub from '../views/Storeclub.vue'
// import StoreClub from '.././views/Storeclub'
// import Storeclub from '../views/Storeclub.vue'


export default {
    name:'Appson',
    components:{
    // NavData,
    // NavClassification,
    AutoServe,
    // Detail
    // NavData,
    // Storeclub
},
  data(){
    return {
      banners:[],
      goods:{
        'home':{list:[]},
        'phone':{list:[]},
        'computer':{list:[]}
      },
      detaildata:[],
      flag : false
    }
  },
  created(){
    // this.getShowdata('home')
    // this.getShowdata('phone')
    // this.getShowdata('computer')
  },
  methods:{
    // getShowdata(type){
      // requestShow(type).then(res=>{
          // this.goods[type].list.push(...res.data.list)       
      // })
    // }

   
  }
}
</script>

<style>

</style>