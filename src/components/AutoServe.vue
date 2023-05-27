<template>
  <div class="AutoServe">
    <div id="navmenu" ref="bgcdiv">
      <!-- 导航栏 -->
      <img
        alt=""
        v-for="item in autoServeList"
        :key="item.id"
        :src="item.url"
        style="width: 100%; height: 100%"
        v-show="item.id === currentindex"
      />
      <div id="navgoods">
        <a href=""
          ><div v-for="item in goodsdata" :key="item">
            {{ item }}
            <span style="float: right; margin-right: 5px"> > </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'AutoServe',
  data () {
    return {
      currentindex: 0,
      timer: null
    }
  },
  methods: {
    autochange () {
      clearInterval(this.timer)
      // let _this = this
      this.timer = setInterval(() => {
        this.currentindex++
        if (this.currentindex > this.autoServeList.length - 1) {
          this.currentindex = 0
        }
      }, 2000)
    }
  },
  computed:{
    ...mapState(['goodsdata','autoServeList'])
  },
  mounted () {
    this.$nextTick(function () {
      this.autochange()
    })
  }
}
</script>

<style scoped>
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
    background-color: #FFFFFF;
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
    background-color: #FFFFFF;
    font-size: 16px;
    line-height: 60px;
    font-size: 14px;
    /* text-align: center; */
}
</style>
