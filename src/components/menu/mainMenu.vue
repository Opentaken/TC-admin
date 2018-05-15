<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router='true'
      @select="active_index">
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
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1" route="roleList">角色管理</el-menu-item>
          <el-menu-item index="4-2" route="memberList">成员管理</el-menu-item>
          <el-menu-item index="4-2" route="memberList">会员管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index='5' route="/wenz">
        <i class="el-icon-menu"></i>
        <span slot="title">文章</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    active_index: function (index) {
      this.activeIndex = index;
    }
  },
  mounted () {
    console.log(this.activeIndex);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-menu-vertical-demo{
  border-right:0;
}.el-submenu .el-menu-item{
  min-width:0;
}
</style>
