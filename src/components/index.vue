<template>
  <div class="index">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-row :gutter="100">
          <el-col :span="8">
            <el-card shadow="hover" class="card">
              <el-row :gutter="10">
                <el-col align="right" :span="12">
                  <i>图标</i>
                </el-col>
                <el-col align="left" :span="12">
                  <span>订单数</span><br/>
                  <b>123</b>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" class="card">
              <el-row :gutter="10">
                <el-col align="right" :span="12">
                  <i>图标</i>
                </el-col>
                <el-col align="left" :span="12">
                  <span>订单数</span><br/>
                  <b>123</b>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" class="card">
              <el-row :gutter="10">
                <el-col align="right" :span="12">
                  <i>图标</i>
                </el-col>
                <el-col align="left" :span="12">
                  <span>订单数</span><br/>
                  <b>123</b>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="index-bottom">
      <el-col :span="22" :offset="1">
        <el-row>
          <el-col :span="12">
            <div id="myChart" :style="{width:'100%', height: '500px'}"></div>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-button @click="ees">00000</el-button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      bar_test: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [{
          name: '订单情况',
          type: 'pie',
          radius: '70%',
          center: ['50%', '60%'],
          label: {
            normal: {
              formatter: '{a} \n{b} : {c} ({d}%)'
            }
          },
          data: [{
            value: 335, name: '直接访问'
          },
          {
            value: 310, name: '邮件营销'
          },
          {
            value: 234, name: '联盟广告'
          },
          {
            value: 135, name: '视频广告'
          },
          {
            value: 1548, name: '搜索引擎'
          }],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      }
    };
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      this.lineChartOrder = this.$echarts.init(document.getElementById('myChart'));
      this.lineChartOrder.setOption(this.bar_test); 
    },
    ees () {
      this.bar_test.series[0].data = [{
        value: 500, name: '直接访问'
      },
      {
        value: 100, name: '邮件营销'
      },
      {
        value: 300, name: '联盟广告'
      },
      {
        value: 500, name: '视频广告'
      },
      {
        value: 10, name: '搜索引擎'
      }];
      this.lineChartOrder.setOption(this.bar_test);
    }
  }
};
</script>

<style lang="less">
.index{
  padding-top: 50px;
}
.card{
  i{
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: red;
  text-align: center;
  line-height: 48px;
  color:#fff;
  }
  span{
    font-size: 12px;
  }
  b{
    font-size: 28px;
  }
}
.index-bottom{
  padding-top: 30px;
}
</style>
