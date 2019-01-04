<template>
    <div>
       <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    </div>  
</template>

<script>
let echarts = require('echarts/lib/echarts')

//引入折线图
require('echarts/lib/chart/line')

export default {
    name: 'LineChart',
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
            let myChart = echarts.init(document.getElementById('myChart'))
            myChart.setOption({
                 xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        stack: 'A',
                        areaStyle: {},//增加面积区域
                        smooth: true,//是否圆滑的曲线
                    },
                    {
                        data: [120, 932, 401, 934, 1090, 1330, 1320],
                        type: 'line',
                        stack: 'B',
                        areaStyle: {},//增加面积区域
                        smooth: true,//是否圆滑的曲线
                    },
                ]
            })
        }
    }
}
</script>

<style>

</style>
