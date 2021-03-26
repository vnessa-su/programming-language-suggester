$(document).ready(function(){
  $("#startQuizButton").click(function(){
    $(this).hide();
    $("#firstQuestion").show();
  });
  $(".answer-button").click(function(){
    let answerType = $(this).val();
    console.log(answerType + " answer button pressed for");
    let cardId = $(this).closest(".card").attr("id");
    console.log(cardId);
    console.log(cardId === "lastQuestion");
    $(this).closest(".card").hide();
    if(cardId === "lastQuestion"){
      $("#suggestedLanguageDisplay").show();
    } else {
      $(this).closest(".card").next(".question-card").show();
    }
  });
});