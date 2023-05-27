<template>
  <div id="storeclub">
    <h3>新品上市</h3>
    <div id="storeage">
      <!-- 每一个商品的信息 -->
       <div
        id="goods"
        v-for="item in this.$store.state.photoList"
        :key="item.id"
      >
        <div id="goosphoto">
          <img alt="" :src="item.url" style="width: 100%; height: 100%" />
        </div>
        <div id="goodsmsg">
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
            {{ item.price  }}
          </p>
          <p
            style="
              font-size: 12px;
              height: 14px;
              line-height: 14px;
              color: #808080;
            "
          >
            {{ item.others }}
          </p>
          <el-row>
            <el-button plain @click="buynow(item)">立即购买</el-button>
            <el-button type="danger" @click="addcart">加入购物车</el-button>
          </el-row>
        </div>
      </div> 

      <div id="goods" v-for="item in goodsitem" :key="item.id">
        <div id="goosphoto">
          <img alt="" :src="item.goodsurl" style="width: 100%; height: 100%" />
        </div>
        <div id="goodsmsg">
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
            ">{{ item.goodsname }}</a
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
            style="color: #cf0a2c;
              font-size: 16px;
              width: 100%;
              height: 21px;
              line-height: 21px;
            ">
            {{ item.goodsprice }} ￥
          </p>
          <p
            style="font-size: 12px;
              height: 14px;
              line-height: 14px;
              color: #808080;
            " >
            {{ item.goodscomment }}
          </p>
          <el-row>
            <el-button plain @click="addcart(item)">立即购买</el-button>
            <el-button type="danger" @click="addcart(item)" >加入购物车</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestShopcarP } from "../internet/shopcar";
import { getdetail } from '@/internet/getdetail';
import { requestShow } from "@/internet/home";
// import path from "path";

export default {
  name: "Storeclub",
  components: {},
  data() {
    return {
      goodsitem: [],
      id:'',
      amount:1,
      detaildata:[]
    };
  },
  created() {
    this.getstore();
  },
  methods: {
    addcart(item) {
      console.log(item.goodsid)
      this.$router.push({name:'detail',query:{id:item.goodsid}})
    },
    getstore() {
      requestShow("home").then((res) => {
        console.log(res)
        this.goodsitem.push(...res.data.data);
      });
    },

  //   buynow(item){
  //   postPayed(item.id,this.amount).then(res=>{
  //     //成功购买弹窗购买成功
  //     this.$router.push('/shopcar')
  //     alert('success')
  //   })
  // }
    
  },
  mounted() {
    this.$nextTick(function () {
      let img1 = document.getElementsByName("img");
      // console.log(img1);
    });
  },
};
</script>

<style scoped>
#storeclub {
  width: 100%;
  /* height: 1000px; */
  background-color: #f2f3f5;
  margin-top: 20px;
}
#storeage {
  width: 75%;
  /* height: 1000px; */
  /* background-color: white; */
  margin: 0 auto;
  display: flex;
  /* flexw */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
#goods {
/* width: 25%; */
  /* width: 200px; */
  /* height: 400px; */
  /* background-color: blue; */
  flex: 30%;
  /* flex-wrap: wrap; */
  margin: 5px;
  margin-top: 20px;
  cursor: pointer;
}
#goosphoto {
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
#goodsmsg p {
  margin-top: 7px;
}
#goodsmsg p:hover {
  color: red;
}
</style>
