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
    color: ['#2f4554', '#c23531', '#dd6b66', ],
    title: {
      text: "AI Analysis",
      textStyle: {
        fontSize: 40
      },
      left: 'center',
      top: '3%'
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["All", "Correct", "Correct Prop"],
      left: 100,
      top: '5%'
    },
    grid: {
      left: 100,
      height: '80%',
      top: '10%'
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
      data: ["- Baidu -", "- Baidu Per-", "-Sougou-", "- UC -"]
    },
    series: [
      {
        name: "All",
        type: "bar",
        data: [0, 0, 0, 0],
        label: seriesLabel
      },
      {
        name: "Correct",
        type: "bar",
        data: [ 0, 0, 0, 0],
        label: seriesLabel
      },
      {
        name: "Correct Prop",
        type: "bar",
        label: seriesLabel,
        data: [0, 0, 0, 0]
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
      var data = JSON.parse(response);
      var ai_results = data.ai_results;
      var correct_results = data.correct_results;
      var correct_obj = {};
      var all_count = 0;

      correct_results.forEach((correct) => {
        question_id = correct[3];
        correct_text = correct[2];
        if (!correct_obj[question_id]) {
          all_count += 1;
          correct_obj[question_id] = correct_text;
        } else {
          if (typeof(correct_obj[question_id]) === "string") {
            correct_obj[question_id] = [correct_obj[question_id], correct_text];
          }
          correct_obj[question_id].push(correct_text);
        }
      });

      // 过滤无效结果
      ai_results = ai_results.filter((item) => {
        return correct_obj[item[6]];
      });

      ai_results = ai_results.map((item) => {
        ai_type = item[1]
        result_text = item[3];
        result_type = item[4];
        result_prop = item[5];
        question_id = item[6];
        correct_text = correct_obj[question_id];
        return {
          question_id,
          ai_type,
          result_type,
          result_text,
          result_prop,
          correct: correct_text.indexOf(result_text) >= 0
        };
      });
      
      // 单个答案的正确计数对象
      var single_obj = {
        baidu: {},
        sogou: {},
        uc: {},
      };

      var percentage_temp_obj = {
        baidu: {},
      };

      ai_results.forEach((item) => {
        var question_id = item.question_id;
        var ai_type = item.ai_type;
        var result_type = item.result_type;

        if (result_type === 'percentage') {
          if (!percentage_temp_obj[ai_type][question_id]) {
            percentage_temp_obj[ai_type][question_id] = {
              text: item.result_text,
              prop: item.result_prop
            };
          } else if (item.result_prop > percentage_temp_obj[ai_type][question_id].prop) {
            percentage_temp_obj[ai_type][question_id] = {
              text: item.result_text,
              prop: item.result_prop
            };
          }
          return;
        }

        if (single_obj[ai_type][question_id] === undefined) {
          single_obj[ai_type][question_id] = true;
        }
        // 个性题错一个即为答案错误
        if (!item.correct) {
          single_obj[ai_type][question_id] = false;
        }
      });

      // 百分比答案的正确计数对象
      var percentage_obj = {
        baidu: {},
      };

      for (ai_type in percentage_temp_obj) {
        for (question_id in percentage_temp_obj[ai_type]) {
          text = percentage_temp_obj[ai_type][question_id].text;
          percentage_obj[ai_type][question_id] =  correct_obj[question_id].indexOf(text) >= 0
        }
      }

      // ==========开始计数==========

      var correct_count_array = [0, 0, 0, 0]
      var all_count_array = [0, 0, 0, 0]

      for (ai_type in percentage_obj) {
        for (question_id in percentage_obj[ai_type]) {
          if (ai_type === 'baidu') {
            all_count_array[1] += 1;
            if (percentage_obj[ai_type][question_id]){
              correct_count_array[1] += 1;
            }
          }
        }
      }

      for (ai_type in single_obj) {
        for (question_id in single_obj[ai_type]) {
          let index = -1;
          if (ai_type === 'baidu') {
            index = 0
          } else if (ai_type === 'sogou') {
            index = 2
          } else if (ai_type === 'uc') {
            index = 3
          }
          all_count_array[index] += 1;
          if (single_obj[ai_type][question_id]){
            correct_count_array[index] += 1;
          }
        }
      }


      var correct_prop_array = correct_count_array.map((item, index)=> {
        return parseFloat((item/all_count_array[index]).toFixed(2))
      });

      option.series[0].data = all_count_array;
      option.series[1].data = correct_count_array;
      option.series[2].data = correct_prop_array;

      myChart.setOption(option, true);

      console.log({correct_count_array, correct_prop_array});
    }
  });

  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
});
