var dom = document.getElementById("container");
var myChart = echarts.init(dom);

var seriesLabel = {
    normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 2
    }
}

option = {
    title: {
        text: 'AI Analysis'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Single', 'Percentage']
    },
    grid: {
        left: 100
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'value',
        name: 'Counts',
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['- Baidu -', '-Sougou-', '- UC -'],
    },
    series: [
        {
            name: 'Single',
            type: 'bar',
            data: [165, 170, 30],
            label: seriesLabel,
        },
        {
            name: 'Percentage',
            type: 'bar',
            label: seriesLabel,
            data: [150, 105, 110]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}