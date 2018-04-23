<template>
  <div id="app">
    <el-row style="height: 100%;">
        <el-col :span="3"  class="menuBox">
          <mainMenu></mainMenu>
        </el-col>
      <el-col :span="21" style="height: 100%;overflow: auto;">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mainMenu from '@/components/menu/mainMenu'
export default {
  name: 'App',
  components: {
    mainMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.menuBox{
  min-height: 100%;
  background-color: #545c64;
  border-right: solid 1px #e6e6e6;
}
</style>
