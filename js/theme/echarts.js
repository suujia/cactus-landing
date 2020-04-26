'use strict';

import utils from './Utils';

/*-----------------------------------------------
|  Flex slider
-----------------------------------------------*/

utils.$document.ready(() => {
  const $echarts = document.querySelectorAll('.echart');
  const { echarts } = window;

  if ($echarts.length) {
    $.each($echarts, (item, value) => {
      const $chart = window.echarts.init(value);
      const option = {
        tooltip: {
          trigger: 'axis',
          padding: [5, 10],
          formatter: '{b0}: {c0}'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false,
          axisPointer: { type: 'none' }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        grid: {
          right: 8,
          left: 6,
          top: 0,
          bottom: 0
        },
        series: [
          {
            data: [300, 900, 870, 1234, 910, 1300, 1350],
            type: 'line',
            smooth: true,
            markPoint: {
              // markLine is in the same way.
              data: [
                {
                  coord: [6, 1340], // The number 5 represents xAxis.data[5], that is, '33'.
                  symbol: 'circle',
                  symbolSize: 17,
                  itemStyle: {
                    color: '#FDA0A0'
                  }
                }
              ]
            },
            symbol: 'circle',
            symbolSize: 10,
            showSymbol: false,
            lineStyle: { color: utils.colorCodes.danger, width: 4 },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: utils.colorCodes.danger },
                  { offset: 1, color: 'white' }
                ]
              }
            }
          }
        ]
      };
      $chart.setOption(option);
    });
  }

  utils.$window.on('resize', () => {
    if ($echarts.length) {
      $.each($echarts, (item, value) => {
        const $chart = echarts.init(value);
        $chart.resize();
      });
    }
  });
});
