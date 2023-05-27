<template>
  <div id="app">
    <!-- <Appson ></Appson> -->
    <NavData></NavData>
    <NavClassification></NavClassification>
    <!-- <Appson></Appson> -->
    <router-view></router-view>
  </div>
</template>

<script>

// import Appson from './components/Appson.vue'
import NavData from './components/NavData.vue'
import NavClassification from './components/NavClassification.vue'
// import AutoServe from './components/AutoServe.vue'
import Storeclub from './views/Storeclub'
// import Appson from './components/Appson.vue'
import Appson from './components/Appson.vue'

export default {
  name:'App',
  components:{
    NavData,
    NavClassification,
    // AutoServe,
    Storeclub,
    Appson,
    // Appson
},
  data(){
    return {
      // isComp:'Appson'
    }
  },
  // watch:{
  //   function(){
  //     if(this.$store.state.flag1 === false)
  //     {
  //       ++this.flag
  //     }
  //   }
  // }


}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* #app {
  width: 100%;
  height: 1000px;
  overflow: hidden;
} */
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
