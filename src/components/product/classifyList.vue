<template>
<div class="classfy">
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
          <el-form-item label="创建产品时间" label-width="100px">
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
      <el-button type="primary" plain>新增产品</el-button>
    </el-col>
  </el-row>

  <!-- 分类列表表单 -->
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="分类名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="分类 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="分类产品">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="产品销量">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="分类描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="分类 ID"
      prop="id"
      align="center"
      width="260">
    </el-table-column>
    <el-table-column
      label="分类名称"
      prop="name"
      align="center"
      width="260">
    </el-table-column>
    <el-table-column
      label="分类描述"
      prop="desc"
      align="center"
      width="350">
    </el-table-column>
    <el-table-column width="100"></el-table-column>
    <el-table-column
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="dialogFormVisible = true">编辑</el-button>
        <el-button
          size="mini"
          type="Success"
          @click="check(scope.$index, scope.row)">查看所属商品</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="delet(scope.$index)">删除</el-button>
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

  <!-- 编辑分类 -->
  <el-dialog title="编辑分类" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="分类名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="分类描述" :label-width="formLabelWidth">
        <el-input v-model="form.region" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="delet(scope.$index, scope.row)">确 定</el-button>
    </div>
  </el-dialog>
  <!-- 删除确认框 -->
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="deleteEnt">确 定</el-button>
  </span>
</el-dialog>

</div>
</template>

<script>
export default {
  data () {
    return {
      tableData5: [{// 表单数据
        id: '12987122',
        name: '好滋好味11鸡蛋仔',
        category: '江浙11小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市11普陀区真北路',
        shop: '王小虎夫11妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好22味鸡蛋仔',
        category: '江浙22小吃、小吃零食',
        desc: '荷兰优质22淡奶，奶香浓而不腻',
        address: '上海22市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }],
      form: {// 表单操作--编辑数据
        name: '',
        region: ''
      },
      dialogFormVisible: false, // 控制编辑分类框是否显示
      dialogVisible: false, // 控制删除确认框是否显示
      formLabelWidth: '120px', // 弹窗label宽度
      labelPosition: 'right', // 表单label对齐方式
      formLabelAlign: {// 查询框的数据
        name: '',
        date1: '',
        date2: ''
      },
      deleIndex: '' // 用于保存点击删除时记录删除的数据索引
    }
  },
  methods: {
    check: function (val, classify) { // 表格---查看商品对应方法
      this.$router.push({name: 'productList', params: {billId: classify}})
    },
    delet: function (val) { // 点击删除触发按钮显示并记录数据索引值
      this.deleIndex = val
      this.dialogVisible = true
    },
    deleteEnt: function () { // 点击确定触发的方法
      this.tableData5.splice(this.deleIndex, 1)
      this.dialogVisible = false
    },
    handleCurrentChange (val) { // 分页切换页码触发的方法
      console.log(`当前页: ${val}`)
    },
    handleClose (done) {
      done()
    }
  }

}
</script>

<style lang='less' scoped>
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
</style>
