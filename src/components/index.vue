<template>
  <div class="index">
    <el-row>
      <el-col :span="8">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>
    </el-row>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <el-button @click="ees">00000</el-button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      bar_test: {
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
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
      this.bar_test.series[0].data = [10, 20, 40, 10, 10, 10];
      this.lineChartOrder.setOption(this.bar_test);
    }
  }
};
</script>

<style scoped>

</style>
