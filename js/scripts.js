$(document).ready(function(){
  $("#startQuizButton").click(function(){
    $(this).hide();
    $("#questionOne").show();
  });
  $(".answer-button").click(function(){
    let answerType = $(this).val();
    console.log(answerType + " answer button pressed for");
    $(this).closest(".card").hide();
    $(this).closest(".card").next(".question-card").show();
  });
});