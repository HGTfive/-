<template>
  <div style="width: 100%">
    <div style="width:800px;
           height:500px; 
           margin:0 auto;
           margin-top:100px;
           border:1px solid black;
           display:flex;
           flex-direction:column; flex:70% 30% ;">
  <div  style=" background-color: #fff; display: flex; justify-content: space-between; height: 400px;">
  <div style="width: 178px;height: 178px; background-color: #f6f6f6;margin: 80px;">
    <!-- <input type="file" name="logo"> -->
          <!-- <el-upload
            class="avatar-uploader"
            action=""
            :auto-upload="false"
            ref="upload"
            :file-list="fileList"
            :http-request="postmy"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-preview="handpreview"
            :before-upload="beforeAvatarUpload">
            <img v-if="!iShow" :src="imageUrl" class="avatar">
            <i v-if="iShow" class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
          <el-upload
  action=""
  list-type="picture-card"
  ref="upload"
  :file-list="imgList"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  :before-upload="beforeupload"
  :on-change="uploadFile"
  :auto-upload="false"
>
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="ImageUrl" alt="" />
</el-dialog>

        <span id="spann" >点击上传头像</span>
      </div>
      <div style=" width: 260px;height: 200px; background-color: #fff;margin: 20px;margin-right: 80px;"  >
        昵称：<el-input v-model="name" placeholder="请输入内容"  ></el-input
        ><br />
        性别：<el-input v-model="sex" placeholder="请输入内容" ></el-input
        ><br />
        年龄：<el-input v-model="age" placeholder="请输入内容" ></el-input><br />
        电话：<el-input v-model="date" placeholder="请输入内容" ></el-input
        ><br />
      </div>
  </div>
      <div style="height: 80px;display: flex; align-items: center; justify-content:space-between;">
        <el-row style="flex: 1;">
          <el-button type="primary" @click="postmy">保存信息</el-button>
        </el-row>
        <el-row style="flex: 1;">
          <el-button type="danger" @click="layout">退出登录</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>

import {postmymsg,getmymsg,photoI} from '../internet/mymsg'
import {request} from '../internet/api'
import axios from 'axios';
export default {
  data() {
    return {
      
      ImageUrl: "",
      name: "",
      sex: "",
      age: "",
      date: "",
      myheaders:{authorization:localStorage.getItem('token')},
      dialogVisible:false,
      imgList:[],
      formdata:null

    };
  },
  mounted(){
    this.getmy()
  },
  methods: {
    // handpreview(file) {
    //   console.log(file)
    //   this.ImageUrl = file.url;
    //   // this.addKeyPersonForm.file = file.url;
    //   // this.doUpload = true; 
    //   // this.fileStore = file;
    //   // this.$refs["addKeyPersonForm"].validateField("file");
    // },
    // //文件成功的钩子
    // //两个参数，第一个是后台返回的数据，如果说请求成功的话 后台将文件的地址给我反回过来 我直接放到 imageUrl 里面就可以了
    // handleAvatarSuccess(res, file) {
    //   console.log(res)
    //   console.log(file)
    //   //得到的是一个文件的内存url可以理解为就是：
    //   //通过这个url你可以拿到这个图片的地址
    //   this.imageUrl = URL.createObjectURL(file.raw);
    // },
    // // 文件状态改变时的钩子
    // onChange(file,filelist){
    //   console.log(file)
    //   console.log(filelist)

    // },
    // //文件上传前的钩子
    // beforeAvatarUpload(file) {
    //   console.log(file)
    //   const isJPG = file.type === "image/jpeg";
    //   const isLt2M = file.size / 1024 / 1024 < 2;
    //   this.ifVisible = true
    //   return false;
    //   //
    //   // let form  = new FormData();
    //   // form.append("photo",file)
    //   // console.log(form)

    //   if (!isJPG) {
    //     this.$message.error("上传头像图片只能是 JPG 格式!");
    //   }
    //   if (!isLt2M) {
    //     this.$message.error("上传头像图片大小不能超过 2MB!");
    //   }
    //   return isJPG && isLt2M;
    // },
    // 1.文件清除函数
handleRemove(file, fileList) {
      debugger;
      this.fileStore = null;
      console.log(file, fileList);
  },
// 2.文件预览函数
handlePictureCardPreview(file) {
  console.log(file)
      this.ImageUrl = file.url;
      // this.addKeyPersonForm.file = file.url;
      // this.doUpload = true;
      // this.fileStore = file;
      // this.$refs["addKeyPersonForm"].validateField("file");
    },

// 3.上传前动作函数
// 阻止upload的自己上传，进行再操作
    beforeupload(file) {
      this.formData.append("file", file);
      this.fileStore = file;
      return false;
 },
// 4.文件变换函数
uploadFile(file, fileList) {
      console.log(file.raw);
      this.formdata = file.raw
      this.fileStore = file.raw;
 },
    // postImg(){
    //   axios.post("http://127.0.0.1:8088/api/userinfo/postimg",)
    // },
    // postphoto(){
    //   // this.axios()
    //   let myfile = data.file
    //   let fd = new FormData()
    //   fd.append('file',myfile)
    //   // photoI()
    // },
    postmy(){
      console.log(111);
      const form = new FormData();
      // const file = this.$refs.upload.uploadFiles;
      // form.append("photo",file);
      // const oo = {
      //   user:this.name,
      //   gender:this.sex,
      //   age:this.age,
      //   telenumber:this.date
      // }
      form.append("user",this.name);
      form.append("gender",this.sex);
      form.append("age",this.age);
      form.append("telenumber",this.date)
      form.append("photo",this.formdata)
      postmymsg(form).then(res=>{
        console.log(res)
        this.$message("保存成功");
        // this.getmy();
        // location.reload();
      }).catch(err=>{
        console.log(err)
      })
    },
    getmy(){
      getmymsg().then(res=>{
        console.log(res)
        //在这个地方 把我们在后台拉过来的数据给填上去
        this.name = res.data.data.user
        this.sex = res.data.data.gender
        this.age = res.data.data.age
        this.date = res.data.data.telenumber
        // this.imageUrl = res.data.data.uimg
      })

      // photoI().then(res=>{
      //   console.log(88888)
      // })
    },
    layout(){
      localStorage.clear()
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped>
.el-input {
  width: 200px;
  margin-top: 30px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
#spann{
  text-decoration: underline;
}
#spann:hover{
  cursor: pointer;
  color: yellowgreen;
}
</style>