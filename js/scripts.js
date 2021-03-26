$(document).ready(function(){
  let csharpCount = 0;
  let rubyCount = 0;
  let javascriptCount = 0;
  $("#startQuizButton").click(function(){
    $(this).hide();
    $("#firstQuestion").show();
  });
  $(".answer-button").click(function(){
    const answerType = $(this).val();
    console.log(answerType + " answer button pressed");
    const cardId = $(this).closest(".card").attr("id");

    if(answerType === "csharp-answer") {
      csharpCount++;
    } else if(answerType === "ruby-answer") {
      rubyCount++;
    } else if(answerType === "javascript-answer") {
      javascriptCount++;
    } else {
      throw new Error("Invalid answer-button value");
    }

    console.log('csharp count: ' + csharpCount);
    console.log("ruby count: " + rubyCount);
    console.log("javascript count: " + javascriptCount);

    $(this).closest(".card").hide();
    if(cardId === "lastQuestion"){
      $("#suggestedLanguageDisplay").show();
    } else {
      $(this).closest(".card").next(".question-card").show();
    }
  });
});