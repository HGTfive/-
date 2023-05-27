<template>
  <div id="iphone">
    <h3>菠萝电脑</h3>
    <div class="AutoServe">
      <div id="navmenu" ref="bgcdiv">
        <!-- 导航栏 -->
        <img
          alt=""
          v-for="item in cptautoServeList"
          :key="item.id"
          :src="item.url"
          style="width: 100%; height: 100%"
          v-show="item.id === currentindex"
        />
        <div id="navgoods">
          <a href=""
            ><div v-for="item in cptgoodsdata" :key="item">
              {{ item }}
              <span style="float: right; margin-right: 5px"> > </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div id="computerstoreage" style="margin-top: 30px">
      <!-- 每一个商品的信息 -->
      <div id="computergoods" 
        v-for="item in this.$store.state.computerphotoList"  
        :key="item.id"
        >
            <div id="computergoosphoto">
                <img  
                alt=""
                :src="item.url"
                style="width: 100%;
                height: 100%;
                "
                >
            </div>
            <div id="computergoodsmsg">
                <a style="font-size: 14px; font-weight: 700; font-family: 'Segoe UI', Helvetica, Geneva, 'MicrosoftYahei', sans-serif;
                display: inline-block; height: 19px;width: 100%;
                line-height: 19px;
                text-align: center;
                margin-top: 5px; 
                ">{{item.name}}</a>
                <p style="font-size: 13px; color: #808080; width: 100%; height: 18px; line-height: 18px;"
                >{{item.details}}</p>
                <p style="color: #Cf0A2C; font-size: 16px; width: 100%; height: 21px; line-height: 21px;">{{item.price}}</p>
                <p style="font-size: 12px; height: 14px; line-height: 14px; color: #808080;">{{item.others}}</p>
                <el-row>
            <el-button plain @click="addcar(item)">立即购买</el-button>
            <el-button type="danger" @click="addcar(item)">加入购物车</el-button>
          </el-row>
            </div>
        </div>

        <div id="computergoods" v-for="item in computergoods" :key="item.id">
      <div id="computergoosphoto">
        <img alt="" :src="item.goodsurl" style="width: 100%; height: 100%" />
      </div>
      <div id="computergoodsmsg">
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
            line-height: 18px; " >
          {{ item.goodsdetail }}
        </p>
        <p
          style="
            color: #cf0a2c;
            font-size: 16px;
            width: 100%;
            height: 21px;
            line-height: 21px;
          ">
          {{ item.goodsprice }}
        </p>
        <!-- <p
          style="
            font-size: 12px;
            height: 14px;
            line-height: 14px;
            color: #808080;
          "
        >
          {{ item.others }}
        </p> -->
        <el-row>
          <el-button plain @click="addcar(item)">立即购买</el-button>
          <el-button type="danger" @click="addcar(item)">加入购物车</el-button>
        </el-row>
      </div>
    </div>

      
    </div>
  </div>
</template>

<script>
import { requestShopcarP } from "@/internet/shopcar";
import { mapState } from "vuex";
// import ComputerList from "../views/ComputerList.vue";
import { requestShow } from '../internet/home';
import { getdetail } from '@/internet/getdetail';
export default {
  name: "Computer",
  data() {
    return {
      currentindex: 0,
      timer: null,
      // id: "",
      computergoods:[],
      amount:1,
      Cdetaildata:[]
    };
  },
  computed: {
    ...mapState(["cptgoodsdata", "cptautoServeList"]),
  },
  created(){
    this.getcomputer()
  },
  methods: {
    autochange() {
      clearInterval(this.timer);
      // let _this = this
      this.timer = setInterval(() => {
        this.currentindex++;
        if (this.currentindex > this.cptautoServeList.length - 1) {
          this.currentindex = 0;
        }
      }, 2000);
    },
    addcar(item) {
      //  console.log(item.id)
      this.$router.push({name:'detail',query:{id:item.goodsid}})
      


      // requestShopcarP(item.id,this.amount).then((res) => {
      //   // alert("加入成功！");
      //   this.$router.push('/detail')
      // });
    },
    buynow(item){
    postPayed(item.id,this.amount).then(res=>{
      //成功购买弹窗购买成功
      alert('success')
    })
  },
    getcomputer(){
      requestShow("computer").then(res=>{
        console.log(res);
        this.computergoods.push(...res.data.data);
      })
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.autochange();
    });
  },
  components: {  },
};
</script>

<style scoped>
#phone {
  width: 100%;
  /* height: 700px; */
  background-color: #f2f3f5;
  margin-top: 20px;
}
#computerstoreage {
  width: 75%;
  /* height: 400px; */
  /* background-color: white; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
#computergoods {
  /* height: 400px; */
  /* background-color: blue; */
  flex: 30%;
  margin: 5px;
  cursor: pointer;
}
#computergoosphoto {
  width: 100%;
  height: 310px;
  border: 1px solid black;
  /* border-bottom: 0px; */
  /* background-color: grey; */
}
#computergoodsshop img {
  height: 100%;
  width: 100%;
}
#computergoodsmsg {
  width: 101%;
  height: 200px;
  background-color: white;
  /* background-color: pink; */
}
#computergoodsmsg p {
  margin-top: 7px;
}
#computergoodsmsg p:hover {
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