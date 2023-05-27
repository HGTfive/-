<template>
  <div id="navcontainer">
    <!-- <h1>这个是头不对的导航栏</h1> -->
    <div id="navitems">
      <div id="navitems-left">
        <ul>
          <li v-for="item in navdata1" :key="item">
            <a href="#">{{ item }} </a>
          </li>
        </ul>
      </div>
      <div id="navitems-right">
        <span v-for="item in navdata2" :key="item" ref="aa">
          <router-link to="/">{{ item }} </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "NavData",

  data() {
    return {
      navdata1: [
        "菠萝官网",
        "菠萝商城",
        "BoLuo",
        "关于菠萝",
        "企业微信",
        "菠萝开放平台",
        "相关协议",
        "法律法规",
        "联系我们",
      ],
      navdata2: ["购物车", "注册", "我的信息", "我的订单"],
    };
  },
  methods: {
    ...mapMutations(["change"]),
  },
  mounted() {
    this.$nextTick(function () {
      let aList = this.$refs.aa;
      console.log(aList);
      let _this = this;
      aList[2].onclick = function () {
        console.log(1);
        if (_this.$store.state.flag === true) {
          _this.$store.state.flag = !_this.$store.state.flag;
          _this.$router.push("/login");
        } else {
          _this.$router.push("/mymsg");
        }
      };
      aList[1].onclick = () => {
        this.$router.push("/register");
      };
      aList[0].onclick = () => {
        console.log(2);
        if (_this.$store.state.flag === true) {
          _this.$store.state.flag = !_this.$store.state.flag;
          _this.$router.push("/login");
        } else {
          this.$router.push("/shopcar");
        }
      };
      aList[3].onclick = () => {
        console.log(2);
        if (_this.$store.state.flag === true) {
          _this.$store.state.flag = !_this.$store.state.flag;
          _this.$router.push("/login");
        } else {
          this.$router.push("/myorder");
        }
      };
    });
  },
  watch: {
    function() {
      if (this.$store.state.flag === false) {
        let aList = this.$refs.aa;
        console.log(aList);
        aList[2].style;
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  /* color: black; */
  color: rgb(176, 176, 176);
}
a:hover {
  /* color: rgb(130, 98, 38); */
  color: white;
}
#navcontainer {
  width: 100%;
  height: 30px;
  background-color: #333333;
  /* display: flex; */
}
#navitems {
  width: 75%;
  /* background-color: pink; */
  height: 100%;
  margin: 0 auto;
  display: flex;
  /* flex: 40% ; */
  /* flex: 60% 0; */
}

#navitems-left {
  width: 60%;
}
#navitems-right {
  width: 20%;
}
#navitems span {
  float: right;
  margin-left: 10px;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
}
#navcontainer #navitems #navitems-left ul {
  width: 100%;
  display: flex;
  flex-direction: row;
}
#navcontainer #navitems ul li {
  display: block;
  height: 30px;
  line-height: 30px;
  flex: 1;
  font-size: 12px;
  color: black;
}
</style>
