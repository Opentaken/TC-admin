<template>
  <div class="index">
    <div id="echartContainer" style="width:500px; height:500px"></div>
    <el-button @click="tqww">tttt</el-button>
  </div>
</template>

<script>
let echarts = require('echarts');
export default {
  name: 'index',
  data () {
    return {
      tcaa: [100, 20, 11, 33, 12, 222]
    };
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('echartContainer'));
    // 绘制图表
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: this.tcaa
      }]
    });
  }
};
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
