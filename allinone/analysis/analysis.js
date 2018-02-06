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

      var correct_count_array = [all_count, 0, 0, 0,0]

      for (ai_type in percentage_obj) {
        for (question_id in percentage_obj[ai_type]) {
          if (ai_type === 'baidu') {
            if (percentage_obj[ai_type][question_id]){
              correct_count_array[1] += 1;
            }
          }
        }
      }

      for (ai_type in single_obj) {
        for (question_id in single_obj[ai_type]) {
          if (single_obj[ai_type][question_id]){
            if (ai_type === 'baidu') {
              correct_count_array[2] += 1;
            } else if (ai_type === 'sogou') {
              correct_count_array[3] += 1;
            } else if (ai_type === 'uc') {
              correct_count_array[4] += 1;
            }
          }
        }
      }


      var correct_prop_array = correct_count_array.map((item)=> {
        return parseFloat((item/all_count).toFixed(2))
      });

      option.series[0].data = correct_count_array;
      option.series[1].data = correct_prop_array;

      myChart.setOption(option, true);

      console.log({correct_count_array, correct_prop_array});
    }
  });

  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
});
