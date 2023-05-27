<template>
  <div class="myorder">
    <!-- <div id="btncontent">
        <span>
           <router-link to="/myorder/payed">已支付</router-link>
        </span>
        <span>
            <router-link to="/myorder/unpayed">没支付</router-link>
        </span>
    </div>
    <router-view></router-view> -->
   
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="已经支付" name="first">
        <div id="cont1"
          style="width: 1000px; display: flex "
          v-for="(item,index) in list"
          :key="index">
          <div ><img :src="item.pimg" alt="" /></div>
          <div>
            {{ item.goodsname }}
          </div>

          <div>
            {{ item.goodsnumber }}个/件
          </div>
          <div>
            {{ item.goodsprice }}元
          </div>
          <div>
            {{item.goodsnumber * item.goodsprice}}元
          </div>
          <div>
            <button style="width: 80px;height: 40px; border: 0px; border-radius: 5px;" @click="det(item)">删除</button>
          </div>
        </div>
        
      </el-tab-pane>
      <el-tab-pane label="等待支付" name="second">
        <div id="cont1"
          style="width: 1000px; display: flex "
          v-for="(item,index) in list1"
          :key="index">
          <div ><img :src="item.pimg" alt="" /></div>
          <div>
            {{ item.goodsname }}
          </div>

          <div>
            {{ item.goodsnumber }}个/件
          </div>
          <div>
            {{ item.goodsprice }}元
          </div>
          <div>
            {{item.goodsprice}}元
          </div>
          <div>
            <button style="width: 75px;height: 40px; border: 0px; border-radius: 5px;" @click="det1(item)">删除</button>
            <button style="width: 75px;height: 40px; border: 0px; border-radius: 5px;margin-left: 3px;" @click="buy1(item)">付款</button>
          </div>
        </div>
        
        
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getPayed, getunPayed ,delPayed ,delunPayed,postPayed1} from "../internet/order";

export default {
  name: "Myorder",
  data() {
    return {
      activeName: "first",
      list: [],
      list1:[]
    };
  },
  created() {
    this.getpayed();
    this.getunPayed()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getpayed() {
      getPayed().then((res) => {
        console.log(res)
        this.list.push(...res.data.data)
      });
     },
    getunPayed(){
        getunPayed().then(res=>{
        console.log(res)
        this.list1.push(...res.data.data)
      }).catch(err=>{
        console.log(err)
      })
    },
    det(item){
      delPayed(item.id).then(res=>{
        console.log(res)
        this.list = this.list.filter(item1=>item1.id != item.id)
      }).catch(err=>{
        console.log(err)
      })
      
    },
    det1(item){
      delunPayed(item.id).then(res=>{
        console.log(res)
        this.list1 = this.list1.filter(item1=>item1.id != item.id)
      }).catch(err=>{
        console.log(err)
      })
    },
    buy1(item){
      alert('确定支付吗？')
      postPayed1(item.pid,item.number).then(res=>{
        delunPayed(item.oid).then(res=>{
       getunPayed().then(res=>{
        console.log(res)
         this.list = []
        this.list.push(...res.data.data)
      })
      })
      })
    }
  },
};
</script>

<style scoped>
.myorder {
  width: 60%;
  margin: 0 auto;
}

span {
  text-align: center;
  flex: 1;
  line-height: 80px;
}
span:hover {
  background-color: rgb(167, 162, 162);
}
a {
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 400;
}
.el-tabs #orderitem {
  width: 100%;
  margin: 0 auto;
  background-color: #f6f6f6;
  height: 120px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.el-tabs #orderitem div {
  border: 1px solid black;
  border-radius: 4px;
  height: 120px;
  line-height: 120px;
  color: black;
  flex: 1;
}
.el-tabs #del:hover {
  background-color: rgb(234, 96, 96);
}
#cont1 div{
  width: 100%;
  height: 130px;
  background-color: #a9a0a078;
  line-height: 130px;
  font-weight: 600;
  /* font-size: 5px; */
  border: 1px black solid;
}
#cont1 div img{
  width: 100%;
  height: 130px;
}
#cont1 button:hover{
  background-color: rgba(58, 135, 145, 0.845);
}
</style>