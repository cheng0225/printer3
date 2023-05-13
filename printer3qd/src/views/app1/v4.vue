<!-- <template>
<templage>
	<div>
        <ve-line ref='inGoodLine'
                 :data="chartData"
                 :grid="grid"
                 height='100%'
                 :legend="legend"
                 :x-axis="xAxis"
                 :y-axis="yAxis"
                 :colors='colors'
                 width='100%'></ve-line>
  	</div>
</templage>

</template>

<script>
import VeLine from 'v-charts/lib/line'
export default {
  components: {
    VeLine
  },
}
</script> -->


<!-- <template>
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                columns: ['横轴', 'PV', 'Order'],
                rows: [
                    { '横轴': '2018-05-22', 'PV': 32371, 'Order': 19810 },
                    { '横轴': '2018-05-23', 'PV': 12328, 'Order': 4398 },
                    { '横轴': '2018-05-24', 'PV': 92381, 'Order': 52910 }
                ]
            },
            chartSettings: {
                labelMap: {
                    PV: '访问用户',
                    Order: '下单用户'
                }
            }
        }
  
      }
}

</script> -->

<template>
    <div class="echart" id="mychart" :style="myChartStyle"></div>
  </template>
  
  <script>
  import * as echarts from "echarts";
  
  export default {
    data() {
      return {
        xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //横坐标
        yData: [23, 24, 18, 25, 27, 28, 25], //数据
        myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
      };
    },
    mounted() {
      this.initEcharts();
    },
    methods: {
      initEcharts() {
        // 基本柱状图
        const option = {
          xAxis: {
            data: this.xData
          },
          yAxis: {},
          series: [
            {
              type: "bar", //形状为柱状图
              data: this.yData
            }
          ]
        };
        const myChart = echarts.init(document.getElementById("mychart"));
        myChart.setOption(option);
        //随着屏幕大小调节图表
        window.addEventListener("resize", () => {
          myChart.resize();
        });
      }
    }
  };
  </script>
  
  