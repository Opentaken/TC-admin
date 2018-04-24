<template>
  <div class="heads">
    <el-row>
      <el-col :span='5' :offset="19">
        <i class="el-icon-bell" v-popover:popover4><sup>1</sup></i>
        <span class="user_bn">recall</span>
      </el-col>
    </el-row>

    <el-popover
      ref="popover4"
      placement="bottom"
      width="400"
      trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
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
      }]
    }
  }
}
</script>

<style lang='less' scoped>
.heads{
  background:#fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  box-sizing:border-box;
  padding: 6px 0;
  line-height: 28px;
}
.test{
  font-size: 24px;
  padding: 5px;
}
i{
  cursor: pointer;
  font-size: 16px;
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

.user_bn{
  display: inline-block;
  width: 120px;
  &:before{
    content: "";
    display: inline-block;
    width:30px;
    height: 30px;
    background: url('../../assets/img/icon_1.jpg') center no-repeat;
    background-size: 100%;
    vertical-align: middle;
    border-radius: 50%;
  }
}
</style>
