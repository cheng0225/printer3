webpackJsonp([4],{Uu9O:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("Hjzi"),s=e("XLwt"),n={data:function(){return{xData:[],yData:[],myChartStyle:{float:"left",width:"100%",height:"400px"},err_data:[]}},mounted:function(){this.show_err()},methods:{initEcharts:function(){for(var t=this,a=1;a<=this.err_data.length;a++)console.log(a,this.err_data[a]),this.xData.push(a),this.yData.push(this.err_data[a-1].num);console.log(this.xData,this.yData);var e={xAxis:{data:this.xData},yAxis:{},series:[{type:"bar",data:this.yData}]},i=s.init(document.getElementById("mychart"));i.setOption(e),i.on("click",function(a){var e=t.err_data[a.name];console.log(e,e.err,e.num,e.txt),alert("错误信息:   "+e.err+"\n\n次数:  "+e.num+"\n\n备注:   "+e.txt)}),window.addEventListener("resize",function(){i.resize()})},show_err:function(){var t=this;Object(i.a)("?ordering=-num").then(function(a){t.err_data=a.data,t.initEcharts()},function(t){console.log(t)})}}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"http://127.0.0.1:8000/app1/err",multiple:""}},[a("i",{staticClass:"el-icon-upload"}),this._v(" "),a("div",{staticClass:"el-upload__text"},[this._v("将文件拖到此处，或"),a("em",[this._v("点击上传")])]),this._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[this._v("请上传标准 json 格式文件")])])],1),this._v(" "),a("div",[a("div",{staticClass:"echart",style:this.myChartStyle,attrs:{id:"mychart"}})])])},staticRenderFns:[]},o=e("VU/8")(n,r,!1,null,null,null);a.default=o.exports}});
//# sourceMappingURL=4.77d0dbeac51506af4ca5.js.map