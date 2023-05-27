<template>


  <div id="shopcar">
    <div id="content">
      <div id="detail1" style="height: 50px; line-height: 50px; border-right: 1px solid black;">华为菠萝手机</div>
      <div id="detail2" style="height: 50px; line-height: 50px; border-right: 1px solid black;">1998元</div>
      <div id="detail3" style="height: 50px; line-height: 50px; border-right: 1px solid black;">
        <button @click="sub(item)" style="width: 30px; height: 18; font-size: 16px;border: 0px;">-</button>
        <input type="text" v-model="amount" style="width: 15px;height: 15px;"> 
        <button @click="add(item)" style="width: 30px; height: 18; font-size: 16px;border: 0px;">+</button>
      </div>
      <div id="detail4" style="height: 50px; line-height: 50px; border-right: 1px solid black;"> 1998 元 </div>
      <div id="detail5" style="height: 50px; line-height: 50px; border-right: 1px solid black;"><button style="width: 100%;height: 100%;  color: black; font-size: 17px; border: 0px;" >删除</button></div>
      <div id="detail5" style="height: 50px; line-height: 50px; border-right: 1px solid black;"><button style="width: 100%;height: 100%;  color: black; font-size: 17px; border: 0px;" >购买</button></div>
    </div>
   <div id="content" v-for="item in shopcar" :key="item.id">
      <div id="detail1" style="height: 50px;  border-right: 1px solid black; font-size: 12px; width: 70px;" >{{ item.goodsname }}</div>
      <div id="detail2" style="height: 50px; line-height: 50px; border-right: 1px solid black;">{{ item.goodsprice }} 元</div>
      <div id="detail3" style="height: 50px; line-height: 50px; border-right: 1px solid black;">
        <button @click="sub(item)" style="width: 30px; height: 18; font-size: 16px;border: 0px;">-</button> {{ item.goodsnumber }}
        <button @click="add(item)" style="width: 30px; height: 18; font-size: 16px;border: 0px;">+</button>
      </div>
      <div id="detail4" style="height: 50px; line-height: 50px; border-right: 1px solid black;">{{ item.goodsprice * item.goodsnumber }} 元
      </div>
      <div id="detail5" style="height: 50px; line-height: 50px; border-right: 1px solid black;"><button @click="detit(item)" style="width: 100%;height: 100%;  color: black; font-size: 17px; border: 0px;">删除</button></div>
      <div id="detail5" style="height: 50px; line-height: 50px; border-right: 1px solid black;"  ><el-button  @click="buyit(item)" style="width: 100%;height: 100%;  color: black; font-size: 17px; border: 0px;">购买</el-button></div>
    </div>
  </div>
</template>

<script>
import { requestShopcar, requestShopcarP ,requestShopcarD,update} from "@/internet/shopcar";
import {delunPayed, postPayed} from '../internet/order'

export default {
  name: "Shopcar",
  components: { },
  data() {
    return {
      shopcar:[],
      amount:1,
      flag:false
    };
  },
  mounted(){
    this.getshopcarall()
  },
  methods: {
    getshopcarall() {
      requestShopcar().then((res) => {
        console.log(res)

        this.shopcar.push(...res.data.data);
      })
      .catch(err=>{
        console.log(err)
      })
    },
    add(item){
      // this.amount++
      item.goodsnumber++
      update(item.pid,item.number)
      requestShopcar().then(res=>{
        this.shopcar = []
        this.shopcar.push(...res.data.data)
      })
        // item.num +=1
        // return item.num
      // requestShopcarP(item.id,)
    },
    sub(){
      if(this.amount <=1) return 1
      else
      this.amount--
        // item.num -=1
        // return item.num
    },
    buyit(item){
      // this.$alert( `<img src="../assets/06.jpg" > <h2>请付款</h2>`,'HTML片段',{
      //   dangerouslyUseHTMLString:true
      // })
      console.log('----------');
      console.log(item.id);
      console.log('----------')
      postPayed(item.id).then(res=>{
        console.log(555)
        console.log(res)
        requestShopcar().then(res=>{
          this.shopcar = []
          this.shopcar.push(...res.data.data)
        })
      }).catch(err=>{
        console.log(err)
      })
      delunPayed(item.oid)
      requestShopcarD(item.id).then(res=>{
        console.log(666)
        this.$message("购买成功！")
        this.shopcar = this.shopcar.filter(item1=>item1.id != item.id)
      })
    },
     detit(item){
      requestShopcarD(item.id).then(res=>{
        console.log('删除成功！')
        console.log(res)
        alert("删除成功")
        console.log(this.shopcar)
        this.shopcar = this.shopcar.filter(item1=>item1.id != item.id)
      })
    },
    changed(){
      console.log(11111111111)
    }
  },
  // watch:{


  //   shopcar:{
  //     handler:'changed',
  //     deep:true
  //   }
  // }
};
</script>

<style scoped>
#shopcar {
  width: 100%;
  height: 500px;
  /* background-color: grey; */
  background-color: #f6f6f6;
  border: 1px solid black;
}


#content {

  width: 800px;
  /* height: 100%; */
  display: flex;
  /* background-color: pink; */
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 6px;
}
#content div {
  /* width: 120px; */
  height: 50px;
  background-color: #fff;
  margin: auto 0;
  margin-left: 2px;
  flex: 1;
}
#detail1 {
  height: 50px;
  line-height: 50px;
}
#detail3 button:hover{
  background-color: grey;
  cursor: pointer;
}
button:hover{
  background-color: rgb(219, 87, 87);
  color: #fff;
  cursor: pointer;
}
</style>