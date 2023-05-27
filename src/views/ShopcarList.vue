<template>
  <div id="shopcarlist">
    <div id="content" v-for="item in goods" :key="item.id">
      <div id="detail1">{{ item.name }}</div>
      <div id="detail2">{{ item.price }}</div>
      <div id="detail3">
        <button @click="sub()">-</button> {{ item.num }}
        <button @click="add()">+</button>
      </div>
      <div id="detail4">{{ item.price * item.num }}</div>
      <div id="detail5"><button @click="exithcange()">删除</button></div>
    </div>
  </div>
</template>

<script>
import { requestShopcarP } from "@/internet/shopcar";
// import { postPayed } from "@/internet/postPayed";

export default {
  name: "ShopcarList",
  data() {
    return {
      // goodsmsg:{
      //     name:'',
      //     price:'',
      //     num:'',
      //     allnum:'',
      //     others:''
    };
    // }
  },
  props: {
    goodsmsgitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getShopcar() {
      let id = item.id;
      requestShopcarP(id).then((res) => {
        console.log("商品删除成功！");
      });
    },
  },
};
</script>

<style scoped>
#shopcarlist {
  width: 100%;
  height: 100px;
  background-color: red;
}
#content {
  width: 600px;
  height: 100%;
  display: flex;
  background-color: pink;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
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
</style>