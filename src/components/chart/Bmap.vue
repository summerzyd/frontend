<template>
    
</template>

<script>
 import echarts from "echarts";
export default {
    name: 'bmap',
    data() {
        return {

        }
    },
    mounted() {
        this.chinaConfigure();
    },
    methods: {
        chinaConfigure() {
            let myChart = echarts.init(this.$refs.myEchart); 
            option = {
                title: {
                    text: '全国主要城市空气质量',
                    subtext: 'data from PM25.in',
                    left: 'center',
                },
                bmp: {
                    center: [104.114129, 37.550339],
                    zoom:5,
                }
            }
            myChart.setOption(
              option
            );
        }
    }

}
</script>

<style>

</style>
