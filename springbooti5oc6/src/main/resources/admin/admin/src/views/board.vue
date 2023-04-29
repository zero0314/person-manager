<template>

</template>
<script>
import * as echarts from 'echarts'
//0
//4
import router from '@/router/router-static'
export default {
	data() {
		return {
			line: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":15,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#ccc","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(250,250,250,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(255,255,255,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"rgb(255,255,255)","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"auto","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"symbol":"emptyCircle","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"showSymbol":true,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"","shadowBlur":0,"width":2,"type":"solid","opacity":1,"shadowColor":"#000"},"symbolSize":4},"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"}},
			bar: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":12,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#ccc","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(250,250,250,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(255,255,255,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#00ff00","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"rgb(255,255,255)","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"auto","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"barWidth":"auto","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"colorBy":"data","barCategoryGap":"20%"},"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"}},
			pie: {"backgroundColor":"transparent","color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"},"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"inherit","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"auto","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"label":{"borderType":"solid","rotate":0,"padding":0,"textBorderWidth":0,"backgroundColor":"transparent","borderColor":"#fff","color":"#fff","show":true,"textShadowColor":"transparent","distanceToLabelLine":5,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"fontSize":12,"lineHeight":18,"textShadowOffsetX":0,"position":"outside","textShadowOffsetY":0,"textBorderType":"solid","textBorderColor":"#fff","textShadowBlur":0},"labelLine":{"show":true,"length":10,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"#000"},"length2":14,"smooth":false}}},
			myChart0: null,
			boardDataList: [],
			dates: '',
		};
	},
  mounted(){
    this.init();
    this.zhaopinxinxiChat4();
    this.qiuzhijianliChat3();
    this.mianshiyaoqingChat2();
    this.luyongxinxiChat1();
  },
  created() {
    this.$nextTick(()=>{
		this.times()
	})
  },
  methods:{
	myChartInterval(type, xAxisData, seriesData, myChart) {
	  this.$nextTick(() => {
	    setInterval(() => {
	      let xAxis = xAxisData.shift()
	      xAxisData.push(xAxis)
	      let series = seriesData.shift()
	      seriesData.push(series)
			
			if (type == 1) {
				myChart.setOption({
				  xAxis: [{
				    data: xAxisData
				  }],
				  series: [{
				    data: seriesData
				  }]
				});
			}
			if (type == 2) {
				myChart.setOption({
				  yAxis: [{
				    data: xAxisData
				  }],
				  series: [{
				    data: seriesData
				  }]
				});
			}
	    }, $template2.back.board.bar.base.interval);
	  })
	},
	wordclouds(wordcloudData,echartsId) {
		let wordcloud = $template2.back.board.wordcloud
		wordcloud = JSON.parse(JSON.stringify(wordcloud), (k, v) => {
		  if(typeof v == 'string' && v.indexOf('function') > -1){
		    return eval("(function(){return "+v+" })()")
		  }
		  return v;
		})
		wordcloud.option.series[0].data=wordcloudData;
		
		this.myChart0 = echarts.init(document.getElementById(echartsId));
		let myChart = this.myChart0
		let img = wordcloud.maskImage
	
		if (img) {
			var maskImage = new Image();
			maskImage.src = img
			maskImage.onload = function() {
				wordcloud.option.series[0].maskImage = maskImage
				myChart.clear()
				myChart.setOption(wordcloud.option)
			}
		} else {
			delete wordcloud.option.series[0].maskImage
			myChart.clear()
			myChart.setOption(wordcloud.option)
		}
	},
    getTimeStrToDay(game_over_timestamp) {
        if (game_over_timestamp == 0)
            return "";
        var date = new Date(parseInt(game_over_timestamp));
        var now = new Date();
        var hours = date.getHours() >= 10 ? date.getHours().toString() : "0" + date.getHours();
        var minutes = date.getMinutes() >= 10 ? date.getMinutes().toString() : "0" + date.getMinutes();
        var seconds = date.getSeconds() >= 10 ? date.getSeconds().toString() : "0" + date.getSeconds();
        let arr = ["日", "一", "二", "三", "四", "五", "六"];
        let d = arr[date.getDay()]
        return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + '日' + ' ' + ' ' + '星期' + d  + ' ' + "  " + hours + ":" + minutes + ":" + seconds
    },
	times() {
		setInterval(()=>{
            let date = new Date().getTime()
            this.dates = this.getTimeStrToDay(date)
		}, 1000)
	},
	filterTime(time) {
	  const date = new Date(time)
	  const Y = date.getFullYear()
	  const M = date.getMonth() + 1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1 
	  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	  
	  const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 小时
	  const I = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 分钟
	  const S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒
	  
	  return `${Y}-${M}-${D} ${H}:${I}:${S}`
	},
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },

























































































//统计接口1
    zhaopinxinxiChat4() {
      this.$nextTick(()=>{
        // zhaopinzhiwei zhaopinzhiwei
        //  zhaopinrenshu

        var zhaopinxinxiChart4 = echarts.init(document.getElementById("zhaopinxinxiChart4"),'macarons');
        this.$http({
            url: `zhaopinxinxi/value/zhaopinzhiwei/zhaopinrenshu`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].zhaopinzhiwei);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].zhaopinzhiwei
                    })
                }
                var option = {};
				let titleObj = this.line.title
				titleObj.text = '各职位招聘人数'
				
				const legendObj = this.line.legend
				
				let xAxisObj = this.line.xAxis
				xAxisObj.type = 'category'
				xAxisObj.boundaryGap = false
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.line.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
					data: yAxis,
					type: 'line',
				}
				seriesObj = Object.assign(seriesObj , this.line.series)
				
                option = {
					backgroundColor: this.line.backgroundColor,
					color: this.line.color,
                    title: titleObj,
					legend: legendObj,
                    tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
                    },
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                zhaopinxinxiChart4.setOption(option);
				

                  //根据窗口的大小变动图表
                window.onresize = function() {
                    zhaopinxinxiChart4.resize();
                };
            }
        });
      })
    },











//统计接口1
    qiuzhijianliChat3() {
      this.$nextTick(()=>{

        var qiuzhijianliChart3 = echarts.init(document.getElementById("qiuzhijianliChart3"),'macarons');
        this.$http({
            url: "qiuzhijianli/group/qiuzhiriqi",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].qiuzhiriqi);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].qiuzhiriqi
                    })
                }
                var option = {};
				let titleObj = this.bar.title
				titleObj.text = '每日求职人数'
				
				const legendObj = this.bar.legend
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
                        data: yAxis,
                        type: 'bar'
                    }
				seriesObj = Object.assign(seriesObj , this.bar.series)

                option = {
					backgroundColor: this.bar.backgroundColor,
					color: this.bar.color,
                    title: titleObj,
					legend: legendObj,
                    tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
                    },
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                qiuzhijianliChart3.setOption(option);
				

                  //根据窗口的大小变动图表
                window.onresize = function() {
                    qiuzhijianliChart3.resize();
                };
            }
        });
      })
    },











//统计接口1
    mianshiyaoqingChat2() {
      this.$nextTick(()=>{

        var mianshiyaoqingChart2 = echarts.init(document.getElementById("mianshiyaoqingChart2"),'macarons');
        this.$http({
            url: "mianshiyaoqing/group/yaoqingriqi",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].yaoqingriqi);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].yaoqingriqi
                    })
                }
                var option = {};
				let titleObj = this.bar.title
				titleObj.text = '每日面试人数'
				
				const legendObj = this.bar.legend
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
                        data: yAxis,
                        type: 'bar'
                    }
				seriesObj = Object.assign(seriesObj , this.bar.series)

                option = {
					backgroundColor: this.bar.backgroundColor,
					color: this.bar.color,
                    title: titleObj,
					legend: legendObj,
                    tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
                    },
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                mianshiyaoqingChart2.setOption(option);
				

                  //根据窗口的大小变动图表
                window.onresize = function() {
                    mianshiyaoqingChart2.resize();
                };
            }
        });
      })
    },











//统计接口1
    luyongxinxiChat1() {
      this.$nextTick(()=>{

        var luyongxinxiChart1 = echarts.init(document.getElementById("luyongxinxiChart1"),'macarons');
        this.$http({
            url: "luyongxinxi/group/tongzhiriqi",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].tongzhiriqi);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].tongzhiriqi
                    })
                }
                var option = {};
				let titleObj = this.bar.title
				titleObj.text = '每月录用人数'
				
				const legendObj = this.bar.legend
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
                        data: yAxis,
                        type: 'bar'
                    }
				seriesObj = Object.assign(seriesObj , this.bar.series)

                option = {
					backgroundColor: this.bar.backgroundColor,
					color: this.bar.color,
                    title: titleObj,
					legend: legendObj,
                    tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
                    },
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                luyongxinxiChart1.setOption(option);
				

                  //根据窗口的大小变动图表
                window.onresize = function() {
                    luyongxinxiChart1.resize();
                };
            }
        });
      })
    },





















  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
	





</style>
