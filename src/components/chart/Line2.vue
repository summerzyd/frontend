<template>
    <div>
       <div id="myChart2" :style="{width: '300px', height: '300px'}"></div>
    </div>  
</template>

<script>
let echarts = require('echarts/lib/echarts')

//引入折线图
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
    name: 'Line2',
    data() {
        return {
            msg: 'Welcome to Your Vue.js Appp'
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine: function() {
            let myChart = echarts.init(document.getElementById('myChart2'))
            myChart.setOption({
                title: {
                    left: 'center',
                    text: '大数据量面积图',
                },
                tooltip : {
                    trigger: 'axis',
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                 xAxis: {
                    type: 'category',
                    boundaryGap: false, //显示在边界（点的位置）
                    // data: [0,1,2,3,4,5,6,7,8,9,10,11,12],
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    // {
                    //     data: [820, 932, 901, 934, 1290, 1330, 1320],
                    //     type: 'line',
                    //     stack: 'A',
                    //     areaStyle: {},//增加面积区域
                    //     smooth: true,//是否圆滑的曲线
                    // },
                    {
                        data: [120, 932, 401, 934, 1090, 1330, 1320],
                        type: 'line',
                        stack: 'B',
                        itemStyle: {color: '#2290FC'},//折线颜色
                        areaStyle: {
                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#71B9FD'
                            }, {
                                offset: 1,
                                color: '#EAF5FF'
                            }])
                        },//增加面积区域
                        smooth: false,//是否圆滑的曲线
                    },
                ]
            })
        }
    }
}
</script>

<style>

</style>
