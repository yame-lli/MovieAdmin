<template>
    <el-card shadow="hover" class="w-49% mb-4 h-40%" id="hot-play"> <span>正在热映</span></el-card>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts/core';
import {
    DatasetComponent,
    GridComponent,
    TransformComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { onMounted } from 'vue'

echarts.use([
    DatasetComponent,
    GridComponent,
    TransformComponent,
    BarChart,
    CanvasRenderer
]);

onMounted(() => {
    var chartDom = document.getElementById('hot-play') as HTMLElement;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: '正在热播',
            left: 'center',
            top: '5%'
        },


        xAxis: {
            type: 'category',
            data: ['无名', '无名', '无名', '无名', '无名', '无名', '无名']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]

    }
    option && myChart.setOption(option);

})





</script>

<style scoped>

</style>