<template>
  <div class="detail">
    <!-- 我是详情页 -->
    <!-- <div id="detail">
      <div id="img">
        <img
          src="https://res.vmallres.com/uomcdn/CN/cms/202208/68D0D716D1475F8CF11DCDB2B40AE5A2.png.webp"
          alt=""
        />
      </div>
      <div id="other">
        <div id="name">HUAWEI MateBook 13</div>
        <div id="intr">12代晓龙处理器</div>
        <div id="price">￥6999</div>
        <div id="num">
          <button>+</button>
          <input type="text" v-model="number" />
          <button>-</button>
        </div>
        <div id="btn">
            <el-row>
          <el-button>默认按钮</el-button>
          </el-row>
          <el-row>
          <el-button type="danger">危险按钮</el-button>
          </el-row>
        </div>
      </div>
    </div> -->



    <div id="detail">
      <div id="img" >
        <img
          :src="goodsmsg.goodsurl"
          alt=""
        />
      </div>
      <div id="other">
        <div id="name">{{goodsmsg.goodsname}}</div>
        <div id="intr">{{goodsmsg.goodsdetail}}</div>
        <div id="price">￥{{goodsmsg.goodsprice}}</div>
        <div id="num">
          <button @click="add()">+</button>
          <input type="text" v-model="number" />
          <button @click="sub()">-</button>
        </div>
        <div id="btn">
            <el-row>
          <el-button @click="buyit(goodsmsg)">立即购买</el-button>
          </el-row>
          <el-row>
          <el-button type="danger" @click="pushcar">加入购物车</el-button>
          </el-row>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

import { getdetail } from '@/internet/getdetail';
import { requestShopcarP} from '../internet/shopcar'
import {postunPayed,postPayed } from '../internet/order'

export default {
  name: "Detail",
  data() {
    return {
      id:'',
      goodsmsg: [],
      number:1
    };
  },
  mounted(){
    this.id = this.$route.query.id
    console.log(this.id)
    this.getgoodsmsg()
  },
  // created(){
  //   this.getgoodsmsg()
  // },
  methods: {
    getgoodsmsg() {
      //调用拿到商品的接口 拿到数据
    //   requestShopcarP()
    getdetail(this.id).then(res=>{
        //把数据传给 goodsmsg 
        console.log(res)
        this.goodsmsg = res.data.data;
        // this.goodsmsg.number = 1

    })
    },
    add(){
        this.number++
        // this.goodsmsg.number = this.number
        // this.number = 1
    },
    sub(){
      if(this.number <=1 )
      {
        this.$message("已经是最小购买数量了！");
      }  
      else {
        this.number--;
      }
      
     },
     pushcar(){
      // console.log(this.goodsmsg.id)
      // console.log(this.goodsmsg.number)
      // let pid = 
      
      requestShopcarP(this.goodsmsg.goodsid,this.number).then(res=>{
        this.$message("加入购物车成功！")
      }).catch(err=>{
        console.log(err)
      })
      postunPayed(this.goodsmsg.id,this.goodsmsg.number).then(res=>{
        console.log(777777)
      })
     },
     buyit(goodsmsg){
      this.$router.push('/myorder');

      postunPayed(goodsmsg.goodsid).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })




      // alert('确认购买吗？')
      // console.log(goodsmsg)
      // postPayed(goodsmsg.goodsid).then(res=>{
      //   console.log(111)
      //   console.log(res)
      // })
     }
  },

};
</script>

<style scoped>
.detail {
  width: 100%;
  height: 600px;
  background-color: #f6f6f6;
}
#detail {
  width: 75%;
  /* height: ; */
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content:space-around ;
  /* flex: 0.6 0.4; */
}
#img {
  width: 500px;
  height: 500px;
}
#img img {
  width: 100%;
  height: 100%;
}
#other {
  width: 600px;
  margin-top: 100px;
  /* flex: 1; */
  /* background-color: pink; */
  margin-right: 70px;
  display: flex;
  flex-direction: column;
}
#name{
    height: 44px;
    line-height: 44px;
    font-size: 48px;

}
#intr{
    /* width: 350px; */
    /* margin-top: 15px; */
    height: 80px;
    /* background-color: pink; */
    line-height: 80px;
    font-size: 16px;
    /* flex: 1; */
}
#price{
    height: 80px;
    line-height: 80px;
    font-size: 40px;
    color: rgb(233, 48, 48);
}
#num{
    /* font-size: 20px; */
    height: 80px;
    margin-top: 20px;


}
#num input{
    width: 28px;
    height: 20px;
    /* margin-bottom: 10px; */
}
#num button{
    height: 20px;
    width: 28px;
    margin: 5px;
    /* background-color: grey; */
    border: transparent;
    border-radius: 4px;
    font-size: 20px;
    line-height: 20px;
}
#num input{
    /* border: transparent; */
    border-radius: 4px;

}
#num button:hover{
    background-color: bule;
    cursor: pointer;
}
#btn{
    width: 75%;
    margin: 0 auto;
    height: 80px;
    line-height: 80px;
    display: flex;
    /* margin-top: 80px; */
}
.el-row{
    flex:1
}
</style>