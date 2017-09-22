let Option = {

}

let BW = {

}

function (data) {
  let option = {
    title: {
      text: data.name,
      subtext: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['入带宽', '出带宽']
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: {readOnly: false},
        magicType: {type: ['line', 'bar']},
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.bws.map((it, index, arr) => {return it.time})
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} Gbps'
      }
    },
    series: [
      {
        name: '入带宽',
        type: 'line',
        data: data.bws.map((it, index, arr) => {return it.bandwidth_in}),
        markPoint: {
          data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
          ]
        },
        markLine: {
          data: [
              {type: 'average', name: '平均值'}
          ]
        }
      },
      {
        name: '出带宽',
        type: 'line',
        data: data.bws.map((it, index, arr) => {return it.bandwidth_out}),
        markPoint: {
          data: [
            {type: 'average', name: '平均值'}
          ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
      }
    ]
  }
}
