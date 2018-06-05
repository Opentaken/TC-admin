<template>
  <div class="login">
    <el-form :model="form" ref="dynamicValidateForm" label-width="100px" class="login-box">
      <el-form-item
        prop="userName"
        label="账号"
        :rules="[
          { required: true, message: '请输入账号', trigger: 'blur'}
        ]"
      >
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="userPassword"
        :rules="{
          required: true, message: '密码不能为空', trigger: 'blur'
        }"
      >
        <el-input v-model="form.userPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登陆</el-button>
        <el-button @click="register()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form:{
        userName: '',
        userPassword: '',
        verificationCode: ''
      }
    };
  },
  methods: {
    login () {

    },
    register () {

    }
  }
};
</script>

<style lang='less'>
.login{
  background: #2d3035;
}
</style>