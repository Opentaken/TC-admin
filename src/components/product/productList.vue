<template>
<div class="classfy">
  <!-- tabel标签 -->
  <el-tabs @tab-click="test11" v-model="activeName">
    <el-tab-pane label="全部" name="all"></el-tab-pane>
    <el-tab-pane label="出售中" name="second"></el-tab-pane>
    <el-tab-pane label="已售完" name="third"></el-tab-pane>
    <el-tab-pane label="未上架" name="fourth"></el-tab-pane>
  </el-tabs>
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
      <el-button type="primary" @click="addPro" plain>新增产品</el-button>
    </el-col>
  </el-row>
  <!-- 分类列表表单 -->
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="产品编号">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="产品名称">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="产品状态">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="产品价格">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="产品销量">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="产品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="创建时间">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="修改时间">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="产品编号"
      prop="id"
      align="center">
    </el-table-column>
    <el-table-column
      label="产品名称"
      prop="name"
      align="center">
    </el-table-column>
    <el-table-column
      label="产品价格"
      prop="shopId"
      align="center">
    </el-table-column>
    <el-table-column
      label="产品描述"
      prop="desc"
      align="center">
    </el-table-column>
    <el-table-column
      label="创建时间"
      prop="desc"
      align="center">
    </el-table-column>
    <el-table-column
      label="所属分类"
      prop="desc"
      align="center">
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      width="290">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="dialogFormVisible = true">详情</el-button>
        <el-button
          size="mini"
          type="Success"
          @click="addFood(scope.$index, scope.row)" v-if="isshow">上架</el-button>
          <el-button
          size="mini"
          type="Success"
          @click="addFood(scope.$index, scope.row)">下架</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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

  <el-dialog title="编辑产品" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="产品名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="产品价格" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="产品存量" :label-width="formLabelWidth">
            <el-input v-model="form.region" auto-complete="off"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="checked" class="check_center" label="产品存量丰富随时有货保持一直有货，一直显示9999"></el-checkbox>
        </el-col>
      </el-row>
      <el-form-item label="所属分类" :label-width="formLabelWidth">
        <el-input v-model="form.region" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="产品描述" :label-width="formLabelWidth">
        <el-input :rows="3" v-model="form.region" type="textarea" auto-complete="off"></el-input>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
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
      dialogFormVisible: false, // 控制弹窗是否显示
      formLabelWidth: '120px', // 弹窗label宽度
      labelPosition: 'right', // 表单label对齐方式
      formLabelAlign: {// 查询框的数据
        name: '',
        date1: '',
        date2: ''
      },
      activeName: 'all',
      isshow: false,
      checked: false
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
    addPro: function () {
      console.log('----');
      this.$router.push({name: 'product'});
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
  margin-bottom: 20px;
}
.el-tabs__nav-scroll{
  padding-left: 20px;
}
.check_center{
  vertical-align: -webkit-baseline-middle;
}
</style>
