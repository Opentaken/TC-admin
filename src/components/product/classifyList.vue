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
    :data="tabdata"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="分类名称">
            <span>{{ props.row.categoryName }}</span>
          </el-form-item>
          <el-form-item label="分类 ID">
            <span>{{ props.row.categoryId }}</span>
          </el-form-item>
          <el-form-item label="分类产品">
            <span>{{ props.row.product_name }}</span>
          </el-form-item>
          <el-form-item label="产品销量">
            <span>{{ props.row.sales_volume }}</span>
          </el-form-item>
          <el-form-item label="分类描述">
            <span>{{ props.row.synopsis }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="分类 ID"
      prop="categoryId"
      align="center"
      width="260">
    </el-table-column>
    <el-table-column
      label="分类名称"
      prop="categoryName"
      align="center"
      width="260">
    </el-table-column>
    <el-table-column
      label="分类描述"
      prop="synopsis"
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
          @click="bianji(scope.$index, scope.row)">编辑</el-button>
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
    <el-form :model="dialogForm" align="left">
      <el-form-item label="分类名称" :label-width="formLabelWidth">
        <el-input v-model="dialogForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="分类描述" :label-width="formLabelWidth">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="分类描述" :label-width="formLabelWidth">
        <el-input v-model="dialogForm.synopsis" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="updata()">确 定</el-button>
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
      tabdata: [],
      dialogFormVisible: false, // 控制编辑分类框是否显示
      dialogVisible: false, // 控制删除确认框是否显示
      formLabelWidth: '120px', // 弹窗label宽度
      labelPosition: 'right', // 表单label对齐方式
      formLabelAlign: {// 查询框的数据
        name: '',
        date1: '',
        date2: ''
      },
      deleIndex: '', // 用于保存点击删除时记录删除的数据索引
      dialogForm: { // 编辑分类数据框
        id: '',
        name: '',
        synopsis: ''
      },
      dataIndex: '',
      imageUrl: '' //上传的图片链接
    };
  },
  methods: {
    check: function (val, classify) { // 表格---查看商品对应方法
      this.$router.push({name: 'productList', params: {billId: classify}});
    },
    delet: function (val) { // 点击删除触发按钮显示并记录数据索引值
      this.deleIndex = val;
      this.dialogVisible = true;
    },
    deleteEnt: function () { // 点击确定触发的方法
      this.tableData5.splice(this.deleIndex, 1);
      this.dialogVisible = false;
    },
    handleCurrentChange (val) { // 分页切换页码触发的方法
      console.log(`当前页: ${val}`);
    },
    handleClose (done) {
      done();
    },
    bianji (index, data) {
      this.dataIndex = index;
      this.dialogForm.id = data.categoryId;
      this.dialogForm.name = data.categoryName;
      this.dialogForm.synopsis = data.synopsis;
      this.dialogFormVisible = true;
    },
    updata () {
      this.tabdata[this.dataIndex].categoryName = this.dialogForm.name;
      this.tabdata[this.dataIndex].synopsis = this.dialogForm.synopsis;
      this.dialogFormVisible = false;
    },
    handleAvatarSuccess(res, file) { //上传的方法
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
  mounted: function () {
    this.$axios.post('http://118.89.40.213/eolinker/server/index.php?g=Web&c=Mock&o=simple&projectID=6&uri=Asudden/currency/goods/categoryList').then(
      (response) => {
        this.tabdata = response.data;
        console.log(this.tabdata);
      }
    );
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
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
</style>
