<template>
    <div>
        <div>
            <el-upload class="upload-demo" drag action="http://127.0.0.1:8000/app1/err" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">请上传标准 json 格式文件</div>
            </el-upload>
        </div>
        <div>
            <!-- <ve-line :data="countData" :legend-visible="false" :settings="chartSettings"></ve-line> -->

            <div class="echart" id="mychart" :style="myChartStyle"></div>
        </div>
    </div>
</template>


<script>
import { get_err } from '@/api/app1.js';
import * as echarts from "echarts";
//   import Bar from 'echarts'

export default {
    data() {
        return {
            xData: [], //横坐标
            yData: [], //数据
            myChartStyle: { float: "left", width: "100%", height: "400px" }, //图表样式
            err_data: [],
        };
    },
    mounted() {
        this.show_err();
        // this.initEcharts();  放在这里是会同步执行？
    },
    methods: {
        initEcharts() {
            // 基本柱状图
            // console.log(this.err_data.length, this.err_data)
            var _this = this
            for (var i=1; i<=this.err_data.length; i++){
                console.log(i, this.err_data[i]);
                this.xData.push(i);
                this.yData.push(this.err_data[i-1].num);
            }
            console.log(this.xData, this.yData)

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
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            // 处理点击事件并且弹出数据名称
            myChart.on('click', function (params) {
                // var x = Number(params.name)
                // console.log(typeof x, x)
                var data = _this.err_data[params.name];
                console.log(data, data.err, data.num, data.txt)
                alert('错误信息:   '+ data.err+'\n\n次数:  '+ data.num+'\n\n备注:   '+data.txt);
                // console.log(_this.err_data[params.name].data)
                // console.log(params.seriesName,typeof params.name)
            });
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        },

        show_err() {
            get_err('?ordering=-num').then(
                // console.log('正在获取数据'),  这里不可以输出，原因未知
                response => {
                    // console.log(response)
                    this.err_data = response.data
                    this.initEcharts();
                    // console.log(typeof this.err_data, this.err_data[0])
                    // console.log(this.err_data[1].num, this.err_data[1]['num'])
                },
                error => {
                    console.log(error)
                },
            )
        }
    }
};
</script>
  
  