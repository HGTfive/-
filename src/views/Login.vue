<template>
  <div class="login-container">
    <el-form
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      onsubmit="return false"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">登录平台</h3>
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
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 15%"
          :loading="logining"
          @click="login"
          >登录</el-button
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
import QueryString from "qs";
import { requestLogin } from "../internet/login";

export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        username: "",
        password: "",
      },
      rules2: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      checked: true,
    };
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    
    login() {
      let form = new FormData();
      form.append('username',this.ruleForm2.username);
      form.append('password',this.ruleForm2.password);
      requestLogin(this.ruleForm2)
        .then((res) => {
          console.log(res)
          if(res.data.status == 0)
          {
            localStorage.setItem("token",res.data.token);
            this.$message("登陆成功！");
            this.$router.replace('appson')

          }
          else{
            this.$message("登陆失败！");
          }
        // // if(res.data.status == 0) {
        //   localStorage.setItem('token',res.data.data)
        //   this.$router.replace('/appson')
        //   console.log('登录成功')
        // }
        // else {
        //   alert('登陆失败')
        // }
        })
        .catch((err) => {
          console.log(err);
          alert("登陆失败");
          // this.$router.push("/login");
        });
    },
    forgetpassword() {
      this.$alert("请联系管理员找回密码，管理员电话：131xxxxxxxx", "提示", {
        confirmButtonText: "确定",
        type: "warning",
      });
    },
  },
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
