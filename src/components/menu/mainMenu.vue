<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router='true'>
      <el-menu-item index="1" route='/'>
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" route='/classifyList'>商品分类</el-menu-item>
          <el-menu-item index="1-2" route='/productList'>商品列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" route='/orderList'>
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span slot="title">成员管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">客户管理</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-menu-vertical-demo{
  border-right:0;
}.el-submenu .el-menu-item{
  min-width:0;
}
</style>
