$(function() {
  function replyResult(event) {
    console.log(new Date().getTime());
    const result = this.value * 1;
    const buttonLabels = [' A ', ' B ', ' C '];
    const answerData = {
      question: {
        text: '自己答题，来不及敲题目...',
        questionId: 0
      },
      result: result
    };
    this.textContent = '...'
    $.post(
      "http://localhost:8080/reply-answer-human",
      answerData,
      (response) => {
        console.log("reply success ...");
      }
    );
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
      success:function(response,status,xhr){
        // console.log("toggle success ..." );
      }
    });
  }
  
  function toggleAI(event) {
    const $span = $(this).find("span");
    let switcherText = $span.text() === "OFF" ? "ON" : "OFF";
    const callback = function() {
      if (switcherText === "ON") {
        $(this).addClass("on");
      } else {
        $(this).removeClass("on");
      }
      $span.text(switcherText);
    };
    postAISwitcher(switcherText, callback);
  }
  
  $("#ai-result-toggle").click(toggleAI);
  
  postAISwitcher("ON")

});
