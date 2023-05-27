<template>
  <div class="NavClassificatioin">
    <div id="logo">
      <img
        src="https://img0.baidu.com/it/u=347331959,1123135288&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659632400&t=a209b1730b267f4c3853ce18bdabb665"
        alt=""
      />
    </div>
    <div id="select-meum">
      <ul>
        <li v-for="item in navdata" :key="item" ref="navname">
          <router-link to="/">{{ item }}</router-link>
        </li>
      </ul>
    </div>
    <div id="search-btn">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavClassification",
  data() {
    return {
      navdata: [
        "Boluo手机",
        "BoLuo电脑",
        "平板",
        "路由器",
        "笔记本",
        "家电",
        "服务中心",
        "社区",
      ],
      input: "",
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      const phone = this.$refs.navname;

      phone[0].addEventListener("click", () => {
        this.$router.push("/phone");
      });
      phone[1].addEventListener("click", () => {
        this.$router.push("/computer");
      });
    });
  },
};
</script>

<style scoped>
.NavClassificatioin {
  width: 75%;
  height: 80px;
  /* background-color: pink; */
  margin: 0 auto;
  display: flex;
}
#logo {
  width: 160px;
  height: 1;
}
#logo img {
  width: 80px;
  height: 60px;
  float: left;
  margin: 15px;
  margin-top: 10px;
}
#select-meum {
  width: 65%;
  height: 80px;
}

#select-meum ul {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
}
#select-meum ul li {
  font-size: 16px;
  font-weight: 400;
  color: black;
  display: block;
  flex: 1;
  height: 80px;
  line-height: 80px;
}
#select-meum ul li a {
  text-decoration: none;
}
#select-meum ul li a:hover {
  color: greenyellow;
}
#search-btn {
  margin: auto;
}
.el-input {
  display: inline-block;
  width: 40%;
  margin-right: 5px;
}
.el-button {
  display: inline-block;
  width: 30%;
}
</style>
