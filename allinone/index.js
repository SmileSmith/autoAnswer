$(function() {
  function replyResult(event) {
    console.log(new Date().getTime());
    const result = this.value * 1;
    const buttonLabels = [' A ', ' B ', ' C '];
    const answerData = {
      question: {
        text: '自己答题，来不及敲题目...',
        round: 0
      },
      result: result
    };
    this.textContent = '...'
    $.ajax({
      type:'POST',
      url:"http://localhost:8080/reply-answer-human",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "dataType": "json"
      },
      data: JSON.stringify(answerData),
      success: (response) => {
        console.log("reply success ...");
      }
    });
    setTimeout(() => {
      this.textContent = buttonLabels[result];
    }, 500);
  }
  
  $("#result-zero").click(replyResult);
  $("#result-one").click(replyResult);
  $("#result-two").click(replyResult);
  
  
  function postAISwitcher(switcher, callback) {
    $.ajax({
      type:'POST',
      url:"http://localhost:8080/toggle-ai",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "dataType": "json"
      },
      data: JSON.stringify({ switch: switcher }),
      success: callback
    });
  }
  
  function toggleAI(event) {
    const $span = $(this).find("span");
    let switcherText = $span.text() === "OFF" ? "ON" : "OFF";
    const callback = function(response,status,xhr) {
      if (switcherText === "ON") {
        $(this).addClass("on");
      } else {
        $(this).removeClass("on");
      }
      $span.text(switcherText);
    };
    postAISwitcher(switcherText, callback.bind(this));
  }
  
  $("#ai-result-toggle").click(toggleAI);
  
  postAISwitcher("OFF")

});
