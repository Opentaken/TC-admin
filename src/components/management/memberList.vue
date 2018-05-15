<template>
<div class="memberList">
  <!-- 查询模块 -->
  <el-row>
    <el-col :span="15">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-col :span="7">
          <el-form-item label="产品名称">
          <el-input prefix-icon="el-icon-search" v-model="formLabelAlign.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="14">
          <el-form-item label="创建产品时间" label-width="110px">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date2" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" plain>查询</el-button>
        </el-col>
      </el-form>
    </el-col>
    <el-col :span="2" :offset="7" style="padding-right:20px;">
      <el-button type="primary" @click="addPro" plain>新增成员</el-button>
    </el-col>
  </el-row>

  <!-- tabel标签 -->
  <el-tabs @tab-click="test11" v-model="activeName">
    <el-tab-pane label="全部" name="all"></el-tab-pane>
    <el-tab-pane label="正常" name="second"></el-tab-pane>
    <el-tab-pane label="未审核" name="third"></el-tab-pane>
    <el-tab-pane label="资料错误" name="fourth"></el-tab-pane>
    <el-tab-pane label="不允许通过" name="third"></el-tab-pane>
  </el-tabs>

  <!-- 分类列表表单 -->
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50"
      align="center">
    </el-table-column>
    <el-table-column
      label="账号"
      prop="id"
      align="center">
    </el-table-column>
    <el-table-column
      label="账号名"
      prop="name"
      align="center">
    </el-table-column>
    <el-table-column
      label="员工编号"
      prop="qw"
      align="center">
    </el-table-column>
    <el-table-column
      label="员工名称"
      prop="wq"
      align="center">
    </el-table-column>
    <el-table-column
      label="所属角色"
      prop="qwe"
      align="center">
    </el-table-column>
    <el-table-column
      label="账号状态"
      prop="ewq"
      align="center">
    </el-table-column>
    <el-table-column
      label="创建时间"
      prop="qew"
      align="center">
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      width="290">
      <template slot-scope="scope">
        <el-button
        size="mini"
        @click="details">详情</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="details">禁用</el-button>
          <el-button
          size="mini"
          type="primary"
          @click="details">启用</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="delete_member(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 分页 -->
  <div class="block">
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="10"
      :page-count="10"
      layout="total, prev, pager, next"
      :total="100">
    </el-pagination>
  </div>

  <!-- 添加/修改成员信息 -->
  <el-dialog title="成员信息" :visible.sync="memberDialog">
    <el-form ref="member" :model="form" label-width="100px">
      <el-form-item label="账号名称：">
        <el-input v-model="member.userNama"></el-input>
      </el-form-item>
      <el-form-item label="账号：">
        <el-input v-model="member.userId"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="member.password"></el-input>
      </el-form-item>
      <el-form-item label="性别：" align="left">
        <el-radio v-model="member.sex" label="1">备选项</el-radio>
        <el-radio v-model="member.sex" label="2">备选项</el-radio>
      </el-form-item>
      <el-form-item label="员工工号：">
        <el-input v-model="member.memberId"></el-input>
      </el-form-item>
      <el-form-item label="员工名称：">
        <el-input v-model="member.memberName"></el-input>
      </el-form-item>
      <el-form-item label="用户权限：">
        <el-checkbox-group v-model="member.role" align="left">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="memberDialog = false">取 消</el-button>
      <el-button type="primary" @click="memberDialog = false">确 定</el-button>
    </div>
  </el-dialog>


  <!-- 取消订单 -->
  <el-dialog title="取消订单" :visible.sync="cancelOrder">
    <el-form :model="form">
      <el-col :span="22">
        <el-form-item label="取消原因：" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-col>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelOrder = false">取 消</el-button>
      <el-button type="primary" @click="cancelOrder = false">确 定</el-button>
    </div>
  </el-dialog>

</div>
</template>

<script>
export default {
  data () {
    return {
      tableData5: [{// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      }, {// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      },
      {// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      },
      {// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      },
      {// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      },
      {// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      },
      {// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      },
      {// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      },
      {// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      },
      {// 表单数据
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        qw: '300.00',
        wq: '某先生',
        qwe: '13456789012',
        ewq: '尼玛，赶紧发货哇',
        qew: '2018-05-09',
        eqw: '未发货'
      }],
      form: {// 表单操作--编辑数据
        name: '',
        region: ''
      },
      memberDialog: false, // 控制添加/修改成员信息弹窗是否显示
      cancelOrder: false, // 控制取消订单弹窗是否显示
      formLabelWidth: '120px', // 弹窗label宽度
      labelPosition: 'right', // 表单label对齐方式
      formLabelAlign: {// 查询框的数据
        name: '',
        date1: '',
        date2: ''
      },
      activeName: 'all',
      isshow: false,
      checked: false,
      member: { // 添加/修改成员信息弹窗数据
        userNama: '',
        userId: '',
        password: '',
        sex: '',
        memberId: '',
        memberName: '',
        role: ''
      }
    };
  },
  methods: {
    addFood: function (a, b) { // 表格---查看商品对应方法
      console.log(a);
      console.log(b);
    },
    handleCurrentChange (val) { // 分页切换页码触发的方法
      console.log(`当前页: ${val}`);
    },
    test11 (targetName) {
      console.log(targetName);
    },
    addPro: function () { // 新增产品的方法--->跳转产品详情页面
      console.log('----');
      this.$router.push({name: 'product'});
    },
    delete_member: function () { // 删除成员
      this.cancelOrder = true;
    },
    detauks: function () {
      this.$router.push({name: 'member'});
    } 
  }
};
</script>

<style lang='less'>
.demo-table-expand{
  width: 75%;
  padding-left: 20%;
  text-align: left;
  .el-form-item{
      width: 49%;
      margin: 0;
  }
}
.classfy{
  padding-top: 20px;
}
.block{
  float: right;
  margin: 10px;
}
.el-tabs{
  margin-top: 20px;
}
.el-tabs__nav-scroll{
  padding-left: 20px;
}
.check_center{
  vertical-align: -webkit-baseline-middle;
}
</style>
