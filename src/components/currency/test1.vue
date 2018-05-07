<template>
  <div class="test">
    <el-table
    :data="bidara"
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
      <el-table-column v-for="item, keys, value in wwc" :key="item" :label="item" :prop="keys" align="center" width="260"></el-table-column>
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
            @click="addFood(scope.$index, scope.row)">查看所属商品</el-button>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    bidara: [Array],
    wwc: [Object]
  },
  data () {
    return {
      tte: []
    }
  },
  methods: {
    wd: function () {
      console.log(this.wwc)
      this.tte = Object.keys(this.bidara[0])
    },
    handleCurrentChange (val) { // 分页切换页码触发的方法
      console.log(`当前页: ${val}`)
    }
  },
  mounted: function () {
    this.wd()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
