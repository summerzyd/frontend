<template>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>
<script>
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
    data () {
        name : "View1"
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    mounted(){
        this.drawLine();
    } ,
    methods: {
         drawLine: function(){
            let myChart =  echarts.init(document.getElementById('myChart'))
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }

}
</script>
