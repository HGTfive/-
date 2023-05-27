<template>
  <div class="register-container">
    <el-form
      :model="ruleForm2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">注册平台</h3>
      <!-- <el-form-item prop="password">
                <el-input type="text" 
                    v-model="ruleForm2.phone" 
                    auto-complete="off" 
                    placeholder="手机号" style="width:15%"></el-input>
            </el-form-item> -->
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="ruleForm2.username"
          auto-complete="off"
          placeholder="用户名"
          style="width: 15%"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ruleForm2.password"
          auto-complete="off"
          placeholder="密码"
          style="width: 15%"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password2">
        <el-input
          type="password"
          v-model="password2"
          auto-complete="off"
          placeholder="密码"
          style="width: 15%"
        ></el-input>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 15%" @click="register()"
          >注册</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
        <el-button type="text">忘记密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { resolve } from 'path';
// import {requestRegister} from '../internet/api';
// import { rejects } from 'assert';
import { postregister } from "../internet/register";
export default {
  data() {
    return {
      registing: false,
      ruleForm2: {
        phone: "",
        username: "",
        password: "",
      },
      password2:"",
      // rules2: {
      //   account: [
      //     { required: true, message: '请输入账号', trigger: 'blur' },
      //   ],
      //   checkPass: [
      //     { required: true, message: '请输入密码', trigger: 'blur' },
      //   ]
      // },
      checked: true,
    };
  },
  methods: {
    register() {
      // this.$refs.ruleForm2
      // requestRegister({
      //   url:'/user/register',
      //   // methods:'post',
      //   params:{
      //     usernamea:this.ruleForm2.username,
      //     password:this.ruleForm2.password
      //   }
      // }).then(res=>{
      //   console.log(resolve(res))
      //   this.$router.push('/login')
      // })
      // .catch(err=>{
      //   console.log(err)
      //   alert("请求数据失败")
      // })
      if(this.ruleForm2.password == this.password2)
      {
        postregister(this.ruleForm2)
        .then((res) => {
          console.log(res);
          if(res.data.status == 0)
          {
            this.$message("注册成功！")
            this.$router.push('/login')

          }
          else{
            this.$message("用户名已存在")
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message("服务器繁忙！")
          console.log('注册shibai')
        });
      }
      else{
        this.$message("前后输入密码不一致")
      }
      

      // this.axios.post({
      //   url:'http://47.103.198.84:8090/ems/user/register',
      //   params:{
      //     username:this.ruleForm2.username,
      //     password:this.ruleForm2.password,
      //     // phone:this.ruleForm2.phone
      //   }
      // }).then(res=>{
      //   console.log(res)
      // })
      // .catch(req=>{
      //   console.log(req)
      // })

      // this.$router.push('/appson')
      // request({
      //   url:'',
      //   methods:'post'
      // }).then(req=>{

      // })
      // request({
      //   url:'/product/findAll1',
      //   methods:'post'
      // }).then(req=>{
      //   console.log(req)
      // }).catch(err=>{
      //   console.log(err)
      // })
      // let username = this.ruleForm2.username
      // let password = this.ruleForm2.password

      //定义请求路劲
      //   let url = '/login'
      //   let params = {
      //     username : username,
      //     password : password
      //   }
      //   console.log(params)
    },
  },
  //     handleReset2() {
  //       this.$refs.ruleForm2.resetFields();
  //     },
  //     handleSubmit(ev) {
  //       this.$refs.ruleForm2.validate((valid) => {
  //         if (valid) {
  //           this.logining = true;
  //           var loginParams = { username: this.ruleForm2.username, password: this.ruleForm2.password, identifycode: this.ruleForm2.identifycode };
  //           request(loginParams).then(data => {
  //             // this.logining = false;
  //             console.log('11')
  // let { msg, code, user } = data;
  // if (code !== 200) {
  //   this.$message({
  //     message: msg,
  //     type: 'error'
  //   });
  // } else {
  //   if (user.type === "admin"){
  //       sessionStorage.setItem('user', JSON.stringify(user));
  //       this.$router.push({ path: '/homepage' });
  //   } else if (user.type === "advert") {
  //       sessionStorage.setItem('user', JSON.stringify(user));
  //       this.$router.push({ path: '/table' });
  //   }
  // }
  //           });
  //         } else {
  //           console.log('error submit!!');
  //           return false;
  //         }
  //       });
  //     },
  //     forgetpassword(){
  //         this.$alert('请联系管理员找回密码，管理员电话：131xxxxxxxx', '提示', {
  //         confirmButtonText: '确定',
  //         type: 'warning'
  //       })
  //     }
  // }
};
</script>

<style scoped>
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
label.el-button.forget {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
}
</style>
