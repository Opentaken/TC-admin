<template>
<div class="order">
  <!-- 订单详情 -->
  <el-row>
    <el-col :span="20" :offset="2">
      <el-row class="order-row1">
        <el-col align="left"><div class="row1">订单号：3456890</div></el-col>
      </el-row>
      <el-row class="order-row2">
        <el-col :span="3"><div class="row2">订单状态</div></el-col>
        <el-col :span="9"><div class="row2">未发货</div></el-col>
        <el-col :span="3"><div class="row2">客户名称</div></el-col>
        <el-col :span="9"><div class="row2">某先生</div></el-col>
        <el-col :span="3"><div class="row2">联系方式</div></el-col>
        <el-col :span="9"><div class="row2">13456789009</div></el-col>
        <el-col :span="3"><div class="row2">收货人</div></el-col>
        <el-col :span="9"><div class="row2">擦先生</div></el-col>
        <el-col :span="3"><div class="row2">收货人联系方式</div></el-col>
        <el-col :span="9"><div class="row2">13112332114</div></el-col>
        <el-col :span="3"><div class="row2">下单时间</div></el-col>
        <el-col :span="9"><div class="row2">2018-09-99</div></el-col>
        <el-col :span="3"><div class="row2">收货地址</div></el-col>
        <el-col :span="21"><div class="row2">银河系地月系地球中国广东省广州市某某区某某街道某某小区000</div></el-col>
        <el-col :span="3"><div class="row2">物流信息</div></el-col>
        <el-col :span="21"><div class="row2">暂无</div></el-col>
      </el-row>
    </el-col>
  </el-row>

  <!-- 按钮 -->
  <el-row class="order-button">
    <el-button @click="back">返回列表</el-button>
    <el-button type="primary" @click="deliver_goods">发货</el-button>
    <el-button type="danger" @click="cancel_order">取消订单</el-button>
  </el-row>

   <!-- 发货 -->
  <el-dialog title="发货" :visible.sync="deliverGoods">
    <el-form :model="form" align="center">
      <el-row>
        <el-col :span="12" :offset="5">
          <el-form-item label="快递公司：" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="5">
          <el-form-item label="快递单号：" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="5">
          <el-form-item label="备注：" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="deliverGoods = false">取 消</el-button>
      <el-button type="primary" @click="deliverGoods = false">确 定</el-button>
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
      tableData: [{
        qw: '../../assets/logo.png',
        qwe: '一只东东',
        qwer: '100.00',
        wq: '20',
        ewq: '2000.00'
      },
      {
        qw: 'http://fgjk.jpg',
        qwe: '一只东东',
        qwer: '100.00',
        wq: '20',
        ewq: '2000.00'
      },
      {
        qw: 'http://fgjk.jpg',
        qwe: '一只东东',
        qwer: '100.00',
        wq: '20',
        ewq: '2000.00'
      }],
      deliverGoods: false, // 控制发货弹窗是否显示
      cancelOrder: false, // 控制取消订单弹窗是否显示
      form: {// 表单操作--编辑数据
        name: '',
        region: ''
      },
      formLabelWidth: '120px' // 弹窗label宽度
    };
  },
  methods: {
    back: function () {
      this.$router.go(-1);
    },
    deliver_goods: function () {
      this.deliverGoods = true;
    },
    cancel_order: function () {
      this.cancelOrder = true;
    }
  }
};
</script>

<style lang='less'>
.order-row1{
  margin-top: 30px;
  .row1{
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    line-height: 34px;
    text-indent: 3em;
  }
}
.order-row2{
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  .row2{
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    line-height: 30px;
  }
}
.order-button{
  margin-top: 30px;
}
</style>
