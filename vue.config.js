const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer:{
  //   proxy:{
  //     'api':{
  //       target:'http://127.0.0.1:8088',
  //       logLevel: "debug"
  //       // pathRewrite:{
  //       //   '^/ems':''
  //       // }
  //     }
  //   }
  // }
})


// module.exports = {
 
// }
// devServer: {
  // prvite: '47.103.198.84'
  // port: '8090',
  // index: 'homework.html',
//   proxy: {
//     "/api": {
//       target: "http://192.1.2.74:8081/edu/",
//       pathRewrite: {
//         "^/api": ""
//       },
//       ws: true,
//       changeOrigin: true
//     }
//   }
// }
