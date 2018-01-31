$(function() {
  var interval = 500;
  var flagJson = {
    xigua: true,
    huajiao: false,
    cddh: false,
    zscr: false
  };

  function getText(txt) {
    if (txt.length > 60) {
      return txt.substring(0, 60) + "...";
    }

    return txt;
  }

  function getHtml(result) {
    var html = [];
    var tempItem = {};
    for (var i = 0, len = result.length; i < len; i++) {
      tempItem = JSON.parse(result[i]);
      if (!tempItem.title) {
        continue;
      }
      if (!$("#" + tempItem.cd_id).length) {
        html.push('<div class="box-answer" id="' + tempItem.cd_id + '">');
        html.push("<h4>" + tempItem.title + "</h4>");
        html.push(
          '<p>汪仔答案：<span class="think">' +
            (tempItem.result ? tempItem.result : "哎呀，这题汪仔还在想") +
            "</span></p>"
        );
        if (
          tempItem.search_infos &&
          tempItem.search_infos.length > 0 &&
          tempItem.search_infos[0].summary
        ) {
          html.push("<cite>");
          html.push(getText(tempItem.search_infos[0].summary));
          html.push(
            '<a href="https://www.sogou.com/web?query=' +
              encodeURIComponent(tempItem.title) +
              '">快速查看&gt;</a>'
          );

          html.push("</cite>");
        }
        html.push("</div>");
      }
    }
    return html.join("");
  }

  var pre_round = "0";
  /**
   *   xigua  huajiao
   * @param name
   */
  function getAnswers(name) {
    $.ajax({
      url: "sogou/api/ans?key=" + name,
      dataType: "jsonp",
      jsonp: "wdcallback",
      type: "get",
      timeout: 1000,
      cache: false
    })
      .done(function(data) {
        try {
          if (data.code == 0 && data.result && data.result.length) {
            var answerData = JSON.parse(data.result[data.result.length - 1]);
            var choices = answerData.choices.split(":-1|");
            // hacker code
            var resultIndex = 0;
            choices.forEach((element, index) => {
              if (element.indexOf(answerData.result) === 0) {
                resultIndex = index;
              }
            });
            answerData.result = resultIndex;

            var round = answerData.title.split(".")[0] || "0";
            var questionText = answerData.title.split(".")[1] || "no";
            answerData.question = {
              text: questionText,
              round: round
            };
            answerData.options = answerData.answers
            if (round !== pre_round && round != "0") {
              $.ajax({
                type:'POST',
                url:'http://localhost:8080/reply-answer-sogou',
                headers: {
                  "Content-Type": "application/json;charset=utf-8",
                  "dataType": "json"
                },
                data: JSON.stringify(answerData),
                success:function(response,status,xhr){
                  console.log("reply success ..." + JSON.stringify(answerData));
                }
              });
              pre_round = round;
            } else {
              pre_round = round;
            }
            // hacker code end
            var tempHtml = getHtml(data.result);
            if (tempHtml.length) {
              if (name == "xigua") {
                $("#startTextXiGua").remove();
                if ($('.box-answer').length >= 3) {
                  $('#listAnswerXiGua').children().first().remove();
                }
                $("#listAnswerXiGua").append(tempHtml);
              } 
              window.scrollTo(0, 100000);
            }
          }
        } catch (e) {}
        if (flagJson[name]) {
          setTimeout(function() {
            getAnswers(name);
          }, interval);
        }
      })
      .fail(function() {
        if (flagJson[name]) {
          setTimeout(function() {
            getAnswers(name);
          }, interval);
        }
      });
  }

  //默认初始化轮询西瓜答题
  getAnswers("xigua");
});
