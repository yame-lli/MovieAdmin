<template>
     <el-card shadow="hover" class="w-100% mb-4 h-56%" id="order">  </el-card>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts/core';
import { onMounted } from 'vue';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
onMounted(() => {
    var chartDom = document.getElementById('order') as HTMLElement;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: '订单数量',
            left: 'center',
            top:'5%'
        },
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
                smooth: true
            }
        ]
    };

    option && myChart.setOption(option);
})

</script>

<style scoped>

</style>