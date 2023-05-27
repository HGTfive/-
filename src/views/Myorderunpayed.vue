<template>
  <div id="unpayed">
    <div id="unpayeditem">
        <div id="items">华为手机</div>
        <div id="items">2个</div>
        <div id="items">6000元</div>
        <div id="items" class="item">
            <!-- sass -->
            <div>去支付</div>
            <div>删除</div>
        </div>
    </div>
  </div>
</template>

<script>

import {getunPayed} from '../internet/order'

export default {
    data(){
        return {

        }
    },
    methods:{
        
    }
}
</script>

<style scoped> 
#unpayed{
    width: 100%;
}
#unpayeditem {
    width: 75%;
    height: 120px;
    margin: 0 auto;
    background-color: #f6f6f6;
    display: flex;
    flex-direction: row;
}
#items{
    height: 120px;
    line-height: 120px;
    flex: 1;
    border-radius: 4px;
   cursor: pointer;
   border: 1px solid black;
}
.item {
     display: flex;
    flex-direction: column;
}
.item div{
    height: 60px;
    line-height: 60px;
    flex: 1;
}
.item div:hover{
    background-color: grey;
}



</style>