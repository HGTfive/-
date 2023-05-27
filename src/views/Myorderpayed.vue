<template>
  <div id="orderctn">
    <!-- 支付了 -->
    <div id="orderitem">
        <div>菠萝手机</div>
        <div> 五个</div>
        <!-- <div></div> -->
        <div>2000 元</div>
        <div @click="deleteit" id="del">删除</div>
    </div >
    <div v-for="item in list" :key="item.id" id="orderitem">
        <div>{{item.name}}</div>
        <div>{{item.num}}</div>
        <!-- <div>{{item.price}}</div> -->
        <div>{{item.allprice}}</div>
        <div @click="deleteit" id="del">删除</div>
    </div>
  </div>
</template>

<script>
import {getPayed} from '../internet/order'

export default {
    name:'myorderpayed',
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getpayed()
    },
    methods:{
        getpayed(){
            getPayed().then(res=>{
                this.list.push(...res.data)
            })
        },
        deleteit(){
            alert("删除你忘了写")
        }
    }
}
</script>

<style scoped>
    #orderctn{
        width: 100%;
        /* background-color: blue; */
    }
    #orderitem{
        width: 75%;
        margin: 0 auto;
        /* background-color:grey; */
        background-color: #f6f6f6;
        height: 120px;
        display: flex;
        flex-direction: row;
        cursor: pointer;
    }
    #orderitem div{
        border: 1px solid black;
        border-radius: 4px;
        height: 120px;
        line-height: 120px;
        color: black;
        flex: 1;
    }
    #del:hover{
        background-color: rgb(234, 96, 96);
    }
</style>