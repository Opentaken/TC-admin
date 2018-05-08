<template>
  <div class="heads">
    <el-row>
      <el-col class="header_title" :span='3'>
        商品详情
      </el-col>
      <el-col :span='5' :offset="16">
        <el-col class="user_top" :span='4' :offset="8" v-popover:notice><i class="el-icon-bell"><sup>1</sup></i></el-col>
        <el-col class="user_top" :span='11' v-popover:user_handle><span class="user_bn">recall</span></el-col>
      </el-col>
    </el-row>

    <el-popover
      ref="notice"
      placement="bottom"
      width="400"
      trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
    </el-popover>

    <el-popover
      ref="user_handle"
      placement="bottom"
      width="80"
      trigger="click">
      <ul class="user_handle">
        <li>个人中心</li>
        <li>退出登陆</li>
      </ul>
    </el-popover>

  </div>
</template>

<script>
export default {
  name: 'heads',
  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      gridData2: [{
        date: '2016-05-3333302',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05333-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-333301',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-0533-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    };
  }
};
</script>

<style lang='less' scoped>
.heads{
  background:#fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  box-sizing:border-box;
  line-height: 28px;
}
.header_title{
  line-height: 50px;
  font-weight: 600;
  font-size: 20px;
}
.user_top{
  height: 50px;
  padding-top: 5px;
  cursor: pointer;
  &:hover{
    background:#e7f2fb85;
  }
  i{
    font-size: 16px;
    vertical-align: bottom;
    sup{
      display: inline-block;
      border-radius: 50%;
      background: red;
      color: #fff;
      padding: 1px;
      font-size: 12px;
      line-height: 14px;
      height: 14px;
      min-width: 14px;
      margin-left: -5px;
    }
  }
}
.user_bn{
  display: inline-block;
  width: 120px;
  padding: 5px 0;
  // background:#333;
  &:before{
    content: "";
    display: inline-block;
    width:30px;
    height: 30px;
    background: url('../../assets/img/icon_1.jpg') center no-repeat;
    background-size: 100%;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 5px;
  }
}
.user_handle{
  li{
    line-height: 30px;
    border-bottom: 1px solid #999;
    cursor: pointer;
  }
}
</style>
