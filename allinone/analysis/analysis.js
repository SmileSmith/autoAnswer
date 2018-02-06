$(function() {
  var dom = document.getElementById("container");
  var myChart = echarts.init(dom);

  var seriesLabel = {
    normal: {
      show: true,
      textBorderColor: "#333",
      textBorderWidth: 2
    }
  };

  var option = {
    title: {
      text: "AI Analysis"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["Correct Count", "Correct Prop"]
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
      type: "value",
      name: "Count/Prop",
      axisLabel: {
        formatter: "{value}"
      }
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: ["All", "- Baidu -", "- Baidu Per-", "-Sougou-", "- UC -"]
    },
    series: [
      {
        name: "Correct Count",
        type: "bar",
        data: [0, 0, 0, 0, 0],
        label: seriesLabel
      },
      {
        name: "Correct Prop",
        type: "bar",
        label: seriesLabel,
        data: [0, 0, 0, 0, 0]
      }
    ]
  };

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/review-answer",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      dataType: "json"
    },
    data: JSON.stringify({ date: "all" }),
    success: function(response, status, xhr) {
      data = JSON.parse(response);
      ai_results = data.ai_results;
      correct_results = data.correct_results
      console.log("reply success ..." + JSON.stringify(data));
    }
  });

  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
});
