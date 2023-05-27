<template>
  <div id="phone">
    <h3>菠萝手机</h3>
    <div class="AutoServe">
      <div id="navmenu" ref="bgcdiv">
        <!-- 导航栏 -->
        <img
          alt=""
          v-for="item in phoneautoServeList"
          :key="item.id"
          :src="item.url"
          style="width: 100%; height: 100%"
          v-show="item.id === currentindex"
        />
        <div id="navgoods">
          <a href=""
            ><div v-for="item in phonegoodsdata" :key="item">
              {{ item }}
              <span style="float: right; margin-right: 5px"> > </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div id="phonestoreage" style="margin-top: 20px">
      <!-- 每一个商品的信息 -->
    <div
        id="phonegoods"
        v-for="item in this.$store.state.phonephotoList"
        :key="item.id"
      >
        <div id="phonegoosphoto">
          <img alt="" :src="item.url" style="width: 100%; height: 100%" />
        </div>
        <div id="phonegoodsmsg">
          <a
            style="
              font-size: 14px;
              font-weight: 700;
              font-family: 'Segoe UI', Helvetica, Geneva, 'MicrosoftYahei',
                sans-serif;
              display: inline-block;
              height: 19px;
              width: 100%;
              line-height: 19px;
              text-align: center;
              margin-top: 5px;
            "
            :v-bind="goods.name"
            >{{ item.name }}</a
          >
          <p
            style="
              font-size: 13px;
              color: #808080;
              width: 100%;
              height: 18px;
              line-height: 18px;
            "
          >
            {{ item.details }}
          </p>
          <p
            style="
              color: #cf0a2c;
              font-size: 16px;
              width: 100%;
              height: 21px;
              line-height: 21px;
            "
          >
            {{ item.price }}
          </p>
          <p
            style="
              font-size: 12px;
              height: 14px;
              line-height: 14px;
              color: #808080;
            " >
            {{ item.others }}
          </p>
          <el-row>
            <el-button plain @click="buynow(item)">立即购买</el-button>
            <el-button type="danger" >加入购物车</el-button>
          </el-row>
        </div>
      </div> 


      <div id="phonegoods" v-for="item in goodsitem" :key="item.id" >
      <div id="phonegoosphoto">
        <img alt="" :src="item.goodsurl" style="width: 100%; height: 100%" />
      </div>
      <div id="phonegoodsmsg">
        <a
          style="
            font-size: 14px;
            font-weight: 700;
            font-family: 'Segoe UI', Helvetica, Geneva, 'MicrosoftYahei',
              sans-serif;
            display: inline-block;
            height: 19px;
            width: 100%;
            line-height: 19px;
            text-align: center;
            margin-top: 5px;
          "
          :v-bind="goods.name">{{ item.goodsname }}</a
        >
        <p
          style="
            font-size: 13px;
            color: #808080;
            width: 100%;
            height: 18px;
            line-height: 18px;
          ">
          {{ item.goodsdetail }}
        </p>
        <p
          style="
            color: #cf0a2c;
            font-size: 16px;
            width: 100%;
            height: 21px;
            line-height: 21px;
          " >
          {{ item.goodsprice }}￥
        </p>
        <p
          style="
            font-size: 12px;
            height: 14px;
            line-height: 14px;
            color: #808080;
          " >
          {{ item.goodscomment }}
        </p>
        <el-row>
          <el-button plain @click="enterdetail(item)">立即购买</el-button>
          <el-button type="danger" @click="enterdetail(item)">加入购物车</el-button>
        </el-row>
      </div>
    </div>


      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { requestShopcarP } from "../internet/shopcar";
import {requestShow} from '../internet/home'
import {postPayed} from '../internet/order'
import { getdetail } from '@/internet/getdetail';
export default {
  name: "Phone",
  components: {  },
  data() {
    return {
      currentindex: 0,
      timer: null,
      goods: {
        id: "",
        name: "",
        price: "",
        details: "",
        others: "",
      },
      goodsitem:[],
       amount:1,
       Pdetaildata:[]
    };
  },
  computed: {
    ...mapState(["phonegoodsdata", "phoneautoServeList"]),
  },
  created() {
    this.getphonedata()
  },
  methods: {
    autochange() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.currentindex++;
        if (this.currentindex > this.phoneautoServeList.length - 1) {
          this.currentindex = 0;
        }
      }, 2000);
    },
   
  getphonedata(){
    requestShow('phone').then(res=>{
      console.log(res)
      this.goodsitem.push(...res.data.data)
    })
  },

  // addcar(item){
  //   getdetail(item.id).then(res=>{
  //     this.Pdetaildata.push(...res.data.data)
  //   })
  // },
  // addcar(item){
  //   requestShopcarP(item.id,this.amount).then(res=>{
  //     console.log(res)
  //     console.log('加入成功')
  //   })
  // },
  // buynow(item){
  //   postPayed(item.id,this.amount).then(res=>{
  //     //成功购买弹窗购买成功
  //     this.$router.push('/shopcar')

  //     alert('success')
  //   })
  // }
  enterdetail(item){
      console.log(item.id)
      this.$router.push({name:'detail',query:{id:item.goodsid}})
  }
  },
  mounted() {
    this.$nextTick(function () {
      this.autochange();
    });
  },
};
</script>

<style scoped>
#phone {
  width: 100%;
  /* height: 700px; */
  background-color: #f2f3f5;
  margin-top: 20px;
}
#phonestoreage {
  width: 75%;
  /* height: 400px; */
  /* background-color: white; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
#phonegoods {
  /* height: 400px; */
  /* background-color: blue; */
  flex: 30%;
  margin: 5px;
  cursor: pointer;
}
#phonegoosphoto {
  width: 100%;
  height: 310px;
  /* background-color: grey; */
}
#goodsshop img {
  height: 100%;
  width: 100%;
}
#goodsmsg {
  width: 101%;
  height: 200px;
  background-color: white;
  /* background-color: pink; */
}
#phonegoodsmsg p {
  margin-top: 7px;
}
#phonegoodsmsg p:hover {
  color: red;
}
.AutoServe {
  width: 100%;
  height: 550px;
  /* background-color: pink; */
  display: flex;
  /* position: relative; */
}
a {
  text-decoration: none;
  color: rgb(102, 102, 102);
}
a div:hover {
  color: aqua;
}
#navmenu {
  position: absolute;
  width: 100%;
  flex: 1;
  /* height: auto; */
  /* left: 12.5%; */
  /* top: 40px; */
  /* background-color: blue; */
  position: relative;
  /* background-image: url(); */
}
#navgoods {
  /* position: relative; */
  width: 180px;
  position: absolute;
  background-color: #ffffff;
  height: 360px;
  display: flex;
  flex-direction: column;
  /* margin: auto 0; */
  margin-left: 12.5%;
  margin-top: 80px;
  top: 0;
}
#navgoods div {
  flex: 1;
  width: 180px;
  /* height: auto; */
  background-color: #ffffff;
  font-size: 16px;
  line-height: 60px;
  font-size: 14px;
  /* text-align: center; */
}
</style>